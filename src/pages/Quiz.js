import React, { useState } from "react";

function Quiz() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h2>Quiz Educacional</h2>
      <p>Pergunta 1: Qual é a capital do Brasil?</p>
      <button onClick={() => setScore(score + 1)}>Brasília</button>
      <button onClick={() => setScore(score)}>São Paulo</button>
      <p>Você acertou {score} vez(es)!</p>
    </div>
  );
}

export default Quiz;
