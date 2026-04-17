import { useState } from "react";
import { InlineMath } from "react-katex";

export default function Question({ data, onAnswer }) {
  const [inputValue, setInputValue] = useState("");

  // 🔥 Convert "1/2" → "\frac{1}{2}"
  const convertToLatexFraction = (input) => {
    const trimmed = input.trim();

    // Match simple fractions like 3/4, 10/5, etc.
    const fractionMatch = trimmed.match(/^(\d+)\s*\/\s*(\d+)$/);

    if (fractionMatch) {
      const numerator = fractionMatch[1];
      const denominator = fractionMatch[2];
      return `\\frac{${numerator}}{${denominator}}`;
    }

    return trimmed;
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) return;

    const formattedAnswer = convertToLatexFraction(inputValue);

    onAnswer(formattedAnswer);
    setInputValue("");
  };

  const renderMath = (text) => {
    if (!text) return "";
    return text.includes("\\frac") ? (
      <InlineMath math={text} />
    ) : (
      text
    );
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 20, borderRadius: 8 }}>
      <h3>Question {data.id}</h3>

      <div style={{ marginBottom: 15 }}>
        {renderMath(data.question)}
      </div>

      {data.image && (
        <div style={{ marginBottom: 15 }}>
          <img src={data.image} alt="diagram" style={{ maxWidth: "100%" }} />
        </div>
      )}

      {/* MULTIPLE CHOICE */}
      {data.type === "mc" && (
        <div style={{ display: "grid", gap: 10 }}>
          {data.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => onAnswer(opt)}
              style={{
                padding: 10,
                textAlign: "left",
                borderRadius: 6,
                border: "1px solid #ccc",
                cursor: "pointer"
              }}
            >
              {renderMath(opt)}
            </button>
          ))}
        </div>
      )}

      {/* INPUT */}
      {data.type === "input" && (
        <div>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Enter answer (e.g. 1/2)"
            style={{
              padding: 10,
              width: "70%",
              marginRight: 10,
              borderRadius: 6,
              border: "1px solid #ccc"
            }}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}