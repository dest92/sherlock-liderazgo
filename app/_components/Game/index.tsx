"use client";

import { useEffect, useState } from "react";
import Activity1 from "../Activity1";
import WordSearch from "../WordSearch";
import Activity3 from "../Activity3";
import Activity4 from "../Activity4";

export default function Game() {
  const [timeLeft, setTimeLeft] = useState(480); // 8 minutos en segundos
  const [currentStep, setCurrentStep] = useState(1);
  const [isGameWon, setIsGameWon] = useState(false); // Nuevo estado para la victoria
  const [showModal, setShowModal] = useState(false); // Para manejar el estado del modal
  const [gameStarted, setGameStarted] = useState(false); // Para manejar el estado del inicio del juego

  useEffect(() => {
    if (!gameStarted || isGameWon) return;

    if (timeLeft <= 0) {
      setShowModal(true); // Mostrar el modal cuando el tiempo se acabe
      setTimeout(() => {
        window.location.reload(); // Recargar la página después de 9 segundos
      }, 9000);
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, gameStarted, isGameWon]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsGameWon(true); // Marcar el juego como ganado después de la última actividad
    }
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const renderContent = () => {
    switch (currentStep) {
      case 1:
        return <Activity1 onSolve={handleNextStep} />;
      case 2:
        return <WordSearch onSolve={handleNextStep} />;
      case 3:
        return <Activity3 onSolve={handleNextStep} />;
      case 4:
        return <Activity4 onSolve={handleNextStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-serif">
      <div className="container max-w-3xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-500 drop-shadow-lg">
          Sherlock Holmes - Teoría de la Ruta-Meta
        </h1>

        {!gameStarted ? (
          <div className="text-center">
            <button
              onClick={handleStartGame}
              className="px-6 py-3 bg-yellow-600 text-white font-bold rounded-lg shadow-lg hover:bg-yellow-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Comenzar
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <p className="text-lg text-gray-300 font-mono">
                Tiempo restante: {formatTime(timeLeft)}
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              {isGameWon ? (
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4 text-green-500">
                    ¡Felicidades, has resuelto el caso!
                  </h2>
                  <p className="text-lg">
                    Has atrapado al criminal y completado todas las actividades
                    exitosamente.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    Volver a Jugar
                  </button>
                </div>
              ) : (
                renderContent()
              )}
            </div>
          </>
        )}
        <h3 className="font-mono text-center p-10 text-xs">
          Por Matías Acebal, Tomas Vogel, Ian Hein y Agustín Davila
        </h3>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-500">
              ¡Tiempo agotado!
            </h2>
            <p>Has perdido el juego. No has sido un buen líder. Recargando la página...</p>
          </div>
        </div>
      )}
    </div>
  );
}
