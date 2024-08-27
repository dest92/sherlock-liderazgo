"use client";

import { useState } from "react";

interface Activity4Props {
  onSolve: () => void;
}

export default function Activity4({ onSolve }: Activity4Props) {
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.toUpperCase());
    setErrorMessage(""); // Limpiar mensaje de error al cambiar la entrada
  };

  const handleSubmit = () => {
    const normalizedInput = inputValue.trim().toUpperCase();
    if (normalizedInput === "BOLETOS" || normalizedInput === "BOLETO" || normalizedInput === "PASAJES") {
      setIsCorrect(true);
      onSolve(); // Llama al callback para avanzar al siguiente paso
    } else {
      setIsCorrect(false);
      setErrorMessage("Respuesta incorrecta. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-1/3 bg-blue-900 p-4 rounded-lg shadow-lg text-white">
        <h3 className="text-xl font-bold mb-2">
          Estilo de Liderazgo: Orientado al Logro
        </h3>
        <p>
          El estilo de liderazgo orientado al logro se centra en establecer
          objetivos desafiantes y motivar al equipo para alcanzarlos. Los
          líderes que aplican este estilo fomentan la excelencia, impulsan a su
          equipo a superar sus límites y proporcionan el apoyo necesario para
          que logren los resultados deseados.
        </p>
      </div>
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">
          Mesa 4: Luna de miel - Obstáculo: Confrontación Final
        </h2>
        <p>
          Resuelve el siguiente acertijo para encontrar la palabra correcta y
          atrapar al criminal:
        </p>
        <p className="mt-4 font-mono">
          Una pareja se va de luna de miel. Durante la misma, el marido cae por
          un barranco y muere. Como Sherlock Holmes, decidis llamar a la agencia de viajes. Tras la llamada, pides el arresto de la mujer
          como culpable del asesinato de su marido, enmascarado como accidente.
          ¿Cómo supiste que fue ella? ¿Qué fue lo que la delató? Escribe el objeto clave que llevó a su arresto (es una palabra):
        </p>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="mt-4 p-2 w-full rounded border-2 border-yellow-600 bg-gray-800 text-white"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
          placeholder="Escribe el código aquí..."
        />
        {errorMessage && <p className="mt-2 text-red-500">{errorMessage}</p>}
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded"
        >
          Comprobar
        </button>
        {isCorrect && (
          <p className="mt-4 text-green-500">
            ¡Correcto! Has atrapado a la criminal.
          </p>
        )}
      </div>
    </div>
  );
}
