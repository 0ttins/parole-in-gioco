import React, { useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { exercises } from "./exercises.js";
import "./style.css";

const QUESTIONS_PER_GAME = 10;

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function createGame() {
  const numberOfQuestions = Math.min(
    QUESTIONS_PER_GAME,
    exercises.length
  );

  return shuffle(exercises)
    .slice(0, numberOfQuestions)
    .map((exercise) => ({
      ...exercise,
      options: shuffle(exercise.options)
    }));
}

function ExerciseImage({ exercise }) {
  const [imageError, setImageError] = useState(false);

  if (!exercise.image || imageError) {
    return null;
  }

  return (
    <div className="image-container">
      <img
        className="exercise-image"
        src={exercise.image}
        alt={exercise.word}
        onError={() => setImageError(true)}
      />
    </div>
  );
}

function App() {
  const [game, setGame] = useState(() => createGame());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const audioContextRef = useRef(null);
  const currentExercise = game[currentIndex];
  const answered = selectedAnswer !== null;
  const isCorrect =
    answered && selectedAnswer === currentExercise.answer;

  function getAudioContext() {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) {
      return null;
    }

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContextClass();
    }

    return audioContextRef.current;
  }

  function playTone(
    audioContext,
    frequency,
    startTime,
    duration,
    type = "sine",
    volume = 0.12
  ) {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, startTime);

    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(
      volume,
      startTime + 0.02
    );
    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      startTime + duration
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(startTime);
    oscillator.stop(startTime + duration + 0.03);
  }

  function playCorrectSound() {
    if (!soundEnabled) {
      return;
    }

    const audioContext = getAudioContext();

    if (!audioContext) {
      return;
    }

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const startTime = audioContext.currentTime;

    playTone(audioContext, 523.25, startTime, 0.16);
    playTone(audioContext, 659.25, startTime + 0.14, 0.16);
    playTone(
      audioContext,
      783.99,
      startTime + 0.28,
      0.24,
      "sine",
      0.14
    );
  }

  function playWrongSound() {
    if (!soundEnabled) {
      return;
    }

    const audioContext = getAudioContext();

    if (!audioContext) {
      return;
    }

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const startTime = audioContext.currentTime;

    playTone(
      audioContext,
      330,
      startTime,
      0.18,
      "triangle",
      0.09
    );
    playTone(
      audioContext,
      247,
      startTime + 0.16,
      0.25,
      "triangle",
      0.08
    );
  }

  function handleAnswer(option) {
    if (answered) {
      return;
    }

    setSelectedAnswer(option);

    if (option === currentExercise.answer) {
      setScore((oldScore) => oldScore + 1);
      playCorrectSound();
    } else {
      playWrongSound();
    }
  }

  function handleNext() {
    if (currentIndex >= game.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentIndex((oldIndex) => oldIndex + 1);
    setSelectedAnswer(null);
  }

  function restartGame() {
    setGame(createGame());
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  }

  function toggleSound() {
    setSoundEnabled((oldValue) => !oldValue);
  }

  if (finished) {
    return (
      <main className="app">
        <div className="card">
          <button
            className="sound-button"
            type="button"
            onClick={toggleSound}
            aria-label={
              soundEnabled
                ? "Disattiva i suoni"
                : "Attiva i suoni"
            }
            title={
              soundEnabled
                ? "Disattiva i suoni"
                : "Attiva i suoni"
            }
          >
            {soundEnabled ? "🔊" : "🔇"}
          </button>

          <div className="celebration">🎉</div>
          <h1>Bravissimo!</h1>

          <p className="final-text">
            Hai completato tutti gli esercizi.
          </p>

          <div className="final-score">
            {score} / {game.length}
          </div>

          <button
            className="next-button"
            type="button"
            onClick={restartGame}
          >
            Gioca ancora
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="app">
      <div className="card">
        <div className="top-bar">
          <div className="progress-text">
            {currentIndex + 1} / {game.length}
          </div>

          <button
            className="sound-button"
            type="button"
            onClick={toggleSound}
            aria-label={
              soundEnabled
                ? "Disattiva i suoni"
                : "Attiva i suoni"
            }
            title={
              soundEnabled
                ? "Disattiva i suoni"
                : "Attiva i suoni"
            }
          >
            {soundEnabled ? "🔊" : "🔇"}
          </button>

          <div className="score-text">⭐ {score}</div>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${
                ((currentIndex + 1) / game.length) * 100
              }%`
            }}
          />
        </div>

        <h1 className="title">Parole in gioco</h1>

        <ExerciseImage
          key={currentExercise.id}
          exercise={currentExercise}
        />

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
              } else if (option === selectedAnswer) {
                buttonClass += " wrong";
              }
            }

            return (
              <button
                key={option}
                className={buttonClass}
                type="button"
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
                <div className="feedback-icon">🎉</div>
                <div className="feedback-correct">
                  Bravo!
                </div>
              </>
            ) : (
              <>
                <div className="feedback-icon">💪</div>
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
              type="button"
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

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'Elemento con id "root" non trovato in index.html'
  );
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
