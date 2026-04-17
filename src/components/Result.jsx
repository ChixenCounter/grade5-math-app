export default function Result({ answers, questions, onRestart }) {
  let score = 0;

  questions.forEach((q, i) => {
    if (answers[i] === q.answer) score++;
  });

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      <h1>Test Submitted</h1>

      <p>Score: {score} / {questions.length}</p>

      <button
        onClick={onRestart}
        style={{
          marginTop: "15px",
          padding: "10px 20px"
        }}
      >
        Restart Test
      </button>

      <div style={{ marginTop: "20px" }}>
        {questions.map((q, i) => {
          const isCorrect = answers[i] === q.answer;

          return (
            <div key={i} style={{ marginBottom: "20px" }}>
              <p><strong>Q{q.id}:</strong> {q.question}</p>
              <p>Your Answer: {answers[i] || "—"}</p>
              <p>Correct Answer: {q.answer}</p>

              {/* 🔴 SHOW EXPLANATION ONLY IF WRONG */}
              {!isCorrect && q.explanation && (
                <p style={{ color: "red" }}>
                  Explanation: {q.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}