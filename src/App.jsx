import { useState, useEffect } from "react";
import { InlineMath } from "react-katex";
import { questions } from "./data.js";
import Question from "./components/Question.jsx";
import Result from "./components/Result.jsx";

function App() {
  const TEST_TIME_SECONDS = 1800;

  const [mode, setMode] = useState(null);
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(TEST_TIME_SECONDS);
  const [finished, setFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (!started || finished || mode !== "test") return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setFinished(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [started, finished, mode]);

  const handleAnswer = (answer) => {
    const updated = [...answers];
    updated[current] = answer;
    setAnswers(updated);

    if (mode === "practice") {
      setShowFeedback(true);
    } else {
      nextQuestion();
    }
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setShowFeedback(false);
    } else {
      setFinished(true);
    }
  };

  const retryQuestion = () => {
    const updated = [...answers];
    updated[current] = undefined;
    setAnswers(updated);
    setShowFeedback(false);
  };

  const handleRestart = () => {
    setMode(null);
    setStarted(false);
    setCurrent(0);
    setAnswers([]);
    setTimeLeft(TEST_TIME_SECONDS);
    setFinished(false);
    setShowFeedback(false);
  };

  const formatTime = () => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const renderMath = (text) => {
    if (!text) return "";
    return text.includes("\\frac") ? (
      <InlineMath math={text} />
    ) : (
      text
    );
  };

  // MODE SELECT
  if (!mode) {
    return (
      <CenteredCard>
        <h1>Grade 5 Math Practice</h1>
        <p style={{ color: "#666" }}>
          Learn, practice, and improve step by step
        </p>

        <div style={{ marginTop: 20 }}>
          <button onClick={() => setMode("test")}>Test Mode</button>
          <button onClick={() => setMode("practice")} style={{ marginLeft: 10 }}>
            Practice Mode
          </button>
        </div>
      </CenteredCard>
    );
  }

  // START SCREEN
  if (!started) {
    return (
      <CenteredCard>
        <h1>{mode === "test" ? "Test Mode" : "Practice Mode"}</h1>

        {mode === "test" && (
          <p>Time limit: {TEST_TIME_SECONDS / 60} minutes</p>
        )}

        <button onClick={() => setStarted(true)}>Start</button>
      </CenteredCard>
    );
  }

  if (finished) {
    return (
      <CenteredCard>
        <Result
          answers={answers}
          questions={questions}
          onRestart={handleRestart}
        />
      </CenteredCard>
    );
  }

  const currentQ = questions[current];
  const userAnswer = answers[current];
  const isCorrect = userAnswer === currentQ.answer;

  return (
    <CenteredCard>
      <h2 style={{ marginBottom: 5 }}>
        {mode === "test" ? "Test Mode" : "Practice Mode"}
      </h2>

      {mode === "test" && (
        <p style={{ color: "#666" }}>Time Left: {formatTime()}</p>
      )}

      <p style={{ marginBottom: 20 }}>
        Question {current + 1} of {questions.length}
      </p>

      {!showFeedback && (
        <Question data={currentQ} onAnswer={handleAnswer} />
      )}

      {mode === "practice" && showFeedback && (
        <div>
          <p
            style={{
              fontWeight: "bold",
              color: isCorrect ? "#2e7d32" : "#d32f2f",
              fontSize: "18px"
            }}
          >
            {isCorrect ? "✓ Correct!" : "✗ Try again"}
          </p>

          {!isCorrect && (
            <p>Correct Answer: {renderMath(currentQ.answer)}</p>
          )}

          {currentQ.explanation && (
            <p>Explanation: {renderMath(currentQ.explanation)}</p>
          )}

          {!isCorrect && (
            <button onClick={retryQuestion} style={{ marginRight: 10 }}>
              Retry
            </button>
          )}

          <button onClick={nextQuestion}>Next Question</button>
        </div>
      )}
    </CenteredCard>
  );
}

// 🎨 Reusable layout wrapper
function CenteredCard({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default App;