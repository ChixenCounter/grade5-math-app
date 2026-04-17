import { useState } from "react";
import { InlineMath } from "react-katex";

export default function Question({ data, onAnswer }) {
  const [inputValue, setInputValue] = useState("");

  const convertToLatexFraction = (input) => {
    const match = input.match(/^(\d+)\s*\/\s*(\d+)$/);
    if (match) {
      return `\\frac{${match[1]}}{${match[2]}}`;
    }
    return input.trim();
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    onAnswer(convertToLatexFraction(inputValue));
    setInputValue("");
  };

  const renderMath = (text) => {
    return text?.includes("\\frac") ? (
      <InlineMath math={text} />
    ) : (
      text
    );
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        {renderMath(data.question)}
      </div>

      {data.image && (
        <img
          src={data.image}
          alt="diagram"
          style={{ maxWidth: "100%", marginBottom: 20 }}
        />
      )}

      {data.type === "mc" &&
        data.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onAnswer(opt)}
            onMouseEnter={(e) => (e.target.style.background = "#e8f0ff")}
            onMouseLeave={(e) => (e.target.style.background = "#f9fafc")}
            style={{
              display: "block",
              width: "100%",
              marginBottom: 10,
              padding: "12px",
              textAlign: "left",
              borderRadius: "8px",
              border: "1px solid #ddd",
              background: "#f9fafc",
              cursor: "pointer"
            }}
          >
            {renderMath(opt)}
          </button>
        ))}

      {data.type === "input" && (
        <div>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Enter answer (e.g. 1/2)"
            style={{
              padding: "10px",
              width: "70%",
              marginRight: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}