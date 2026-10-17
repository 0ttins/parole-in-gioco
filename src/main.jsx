import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { exercises } from "./exercises.js";
import "./style.css";

const QUESTIONS_PER_GAME = 10;


// ========================================
// Mischia casualmente un array
// ========================================

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}


// ========================================
// Prepara una nuova partita
// ========================================

function createGame() {
  return shuffle(exercises).slice(0, QUESTIONS_PER_GAME);
}


// ========================================
// App principale
// ========================================

function App() {
  const [game, setGame] = useState(() => createGame());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentExercise = game[currentIndex];

  const answered = selectedAnswer !== null;
  const isCorrect =
    answered && selectedAnswer === currentExercise.answer;


  // ========================================
  // Gestisce la risposta
  // ========================================

  function handleAnswer(option) {
    if (answered) return;

    setSelectedAnswer(option);

    if (option === currentExercise.answer) {
      setScore((oldScore) => oldScore + 1);
    }
  }


  // ========================================
  // Passa alla domanda successiva
  // ========================================

  function handleNext() {
    if (currentIndex === game.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentIndex((oldIndex) => oldIndex + 1);
    setSelectedAnswer(null);
  }


  // ========================================
  // Inizia una nuova partita
  // ========================================

  function restartGame() {
    setGame(createGame());
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  }


  // ========================================
  // Schermata finale
  // ========================================

  if (finished) {
    return (
      <main className="app">
        <div className="card">

          <div className="celebration">
            🎉
          </div>

          <h1>Bravissimo!</h1>

          <p className="final-text">
            Hai completato tutti gli esercizi.
          </p>

          <div className="final-score">
            {score} / {game.length}
          </div>

          <button
            className="next-button"
            onClick={restartGame}
          >
            Gioca ancora
          </button>

        </div>
      </main>
    );
  }


  // ========================================
  // Schermata dell'esercizio
  // ========================================

  return (
    <main className="app">

      <div className="card">

        <div className="top-bar">

          <div className="progress-text">
            {currentIndex + 1} / {game.length}
          </div>

          <div className="score-text">
            ⭐ {score}
          </div>

        </div>


        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width:
                `${((currentIndex + 1) / game.length) * 100}%`
            }}
          />
        </div>


        <h1 className="title">
          Parole in gioco
        </h1>


        <p className="instruction">
          {currentExercise.type === "correctWord"
            ? currentExercise.prompt
            : "Completa la parola"}
        </p>


        {currentExercise.type === "complete" && (
          <div className="word">
            {currentExercise.prompt}
          </div>
        )}


        <div className="options">

          {currentExercise.options.map((option) => {

            let buttonClass = "option-button";

            if (answered) {

              if (option === currentExercise.answer) {
                buttonClass += " correct";
              }

              else if (option === selectedAnswer) {
                buttonClass += " wrong";
              }

            }

            return (
              <button
                key={option}
                className={buttonClass}
                onClick={() => handleAnswer(option)}
                disabled={answered}
              >
                {option}
              </button>
            );
          })}

        </div>


        {answered && (

          <div className="feedback">

            {isCorrect ? (
              <>
                <div className="feedback-icon">
                  🎉
                </div>

                <div className="feedback-correct">
                  Bravo!
                </div>
              </>
            ) : (
              <>
                <div className="feedback-icon">
                  💪
                </div>

                <div className="feedback-wrong">
                  Quasi!
                </div>
              </>
            )}


            <div className="correct-word">
              {currentExercise.word}
            </div>


            <button
              className="next-button"
              onClick={handleNext}
            >
              {currentIndex === game.length - 1
                ? "Vedi il risultato"
                : "Avanti"}
            </button>

          </div>

        )}

      </div>

    </main>
  );
}


// ========================================
// Avvio di React
// ========================================

createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
