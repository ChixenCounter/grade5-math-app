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
    if (finished) return;

    const updated = [...answers];
    updated[current] = answer;
    setAnswers(updated);

    if (mode === "practice") {
      setShowFeedback(true);
    } else {
      nextQuestion(updated);
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

  // 🔥 Render math safely
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
      <div style={{ textAlign: "center", padding: 20 }}>
        <h1>Grade 5 Math</h1>
        <button onClick={() => setMode("test")}>Test Mode</button>
        <button onClick={() => setMode("practice")} style={{ marginLeft: 10 }}>
          Practice Mode
        </button>
      </div>
    );
  }

  // START SCREEN
  if (!started) {
    return (
      <div style={{ textAlign: "center", padding: 20 }}>
        <h1>{mode === "test" ? "Test Mode" : "Practice Mode"}</h1>

        {mode === "test" && (
          <p>Time limit: {TEST_TIME_SECONDS / 60} minutes</p>
        )}

        <button onClick={() => setStarted(true)}>Start</button>
      </div>
    );
  }

  if (finished) {
    return (
      <Result
        answers={answers}
        questions={questions}
        onRestart={handleRestart}
      />
    );
  }

  const currentQ = questions[current];
  const userAnswer = answers[current];
  const isCorrect = userAnswer === currentQ.answer;

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      <h2>{mode === "test" ? "Test Mode" : "Practice Mode"}</h2>

      {mode === "test" && <p>Time Left: {formatTime()}</p>}

      <p>Question {current + 1} of {questions.length}</p>

      {!showFeedback && (
        <Question data={currentQ} onAnswer={handleAnswer} />
      )}

      {/* PRACTICE FEEDBACK */}
      {mode === "practice" && showFeedback && (
        <div>
          <p>{isCorrect ? "Correct" : "Incorrect"}</p>

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

          <button onClick={nextQuestion}>
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default App;