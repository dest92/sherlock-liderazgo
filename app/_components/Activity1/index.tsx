"use client";

import { useState } from "react";

interface Activity1Props {
  onSolve: () => void;
}

export default function Activity1({ onSolve }: Activity1Props) {
  const [inputValue, setInputValue] = useState("");
  const [hasChecked, setHasChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setHasChecked(false); // Resetea el estado al cambiar el input
  };

  const handleSubmit = () => {
    const correctAnswer = "VAMOS AL MUELLE";
    setHasChecked(true);
    if (inputValue.toUpperCase() === correctAnswer) {
      setIsCorrect(true);
      onSolve(); // Llama al callback para avanzar al siguiente paso
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-1/3 bg-blue-900 p-4 rounded-lg shadow-lg text-white">
        <h3 className="text-xl font-bold mb-2">
          Estilo de Liderazgo: Directivo
        </h3>
        <p>
          El estilo de liderazgo directivo se enfoca en dar instrucciones claras
          y precisas, indicando exactamente qué debe hacer el equipo y cómo
          hacerlo. Es útil en situaciones donde el equipo está confundido o
          necesita una guía clara y directa para avanzar.
        </p>
      </div>
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">
          Mesa 1: Baker Street - Obstáculo: Confusión Inicial
        </h2>
        <p>
          El equipo encuentra un mensaje con las palabras desordenadas. Debes
          ordenarlas correctamente.
        </p>
        <p className="mt-4 font-mono"> LA VAM SO EL L MUE</p>
        <input
          type="text"
          value={inputValue.toUpperCase()}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
          className="mt-4 p-2 w-full rounded border-2 border-yellow-600 bg-gray-800 text-white"
          placeholder="Escribe la respuesta aquí..."
        />
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded"
        >
          Comprobar
        </button>
        {hasChecked && !isCorrect && (
          <p className="mt-4 text-red-500">
            Respuesta incorrecta. Inténtalo de nuevo.
          </p>
        )}
        {isCorrect && (
          <p className="mt-4 text-green-500">
            ¡Correcto! Puedes avanzar a la siguiente mesa.
          </p>
        )}
      </div>
    </div>
  );
}
