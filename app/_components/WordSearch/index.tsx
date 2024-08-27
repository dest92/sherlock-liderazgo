"use client";

import { useState } from 'react';

interface WordSearchProps {
  onSolve: () => void;
}

export default function WordSearch({ onSolve }: WordSearchProps) {
  const [foundWord, setFoundWord] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Grilla de la sopa de letras
  const wordSearchGrid = [
    ['M', 'P', 'R', 'O', 'M', 'P', 'L', 'A', 'Y', 'A'],
    ['U', 'S', 'D', 'E', 'U', 'A', 'F', 'I', 'O', 'X'],
    ['L', 'O', 'F', 'E', 'S', 'O', 'S', 'M', 'C', 'R'],
    ['T', 'C', 'H', 'A', 'E', 'L', 'E', 'N', 'G', 'E'],
    ['A', 'L', 'P', 'Q', 'O', 'I', 'B', 'R', 'O', 'S'],
    ['X', 'C', 'N', 'R', 'D', 'A', 'P', 'L', 'A', 'N'],
    ['S', 'P', 'R', 'O', 'Y', 'E', 'C', 'T', 'O', 'B'],
    ['M', 'U', 'E', 'L', 'L', 'E', 'I', 'T', 'L', 'E'],
    ['A', 'N', 'A', 'L', 'I', 'S', 'I', 'S', 'A', 'N'],
    ['T', 'R', 'A', 'B', 'A', 'J', 'O', 'S', 'L', 'I'],
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoundWord(e.target.value.toUpperCase());
    setErrorMessage(''); // Limpiar el mensaje de error al cambiar el input
  };

  const handleSubmit = () => {
    if (foundWord === "MUSEO") {
      onSolve(); // Llama al callback para indicar que la palabra fue encontrada correctamente
    } else {
      setErrorMessage('Palabra incorrecta, inténtalo de nuevo.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-1/3 bg-blue-900 p-4 rounded-lg shadow-lg text-white">
        <h3 className="text-xl font-bold mb-2">Estilo de Liderazgo: Apoyo</h3>
        <p>
          El estilo de liderazgo de apoyo se enfoca en mostrar empatía y brindar motivación al equipo.
          Es especialmente útil cuando el equipo enfrenta dificultades emocionales o necesita
          aliento para superar un desafío. Este estilo busca aumentar la moral y la cohesión del equipo.
        </p>
      </div>
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">Mesa 2: Scotland Yard - Obstáculo: Baja Moral</h2>
        <p>Encuentra la palabra clave en la siguiente sopa de letras:</p>
        <div className="grid grid-cols-10 gap-0 mt-4">
          {wordSearchGrid.map((row, rowIndex) =>
            row.map((letter, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="h-8 flex items-center justify-center bg-gray-800 text-white border border-yellow-600"
              >
                {letter}
              </div>
            ))
          )}
        </div>
        <input
          type="text"
          value={foundWord}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
          className="mt-4 p-2 w-full rounded border-2 border-yellow-600 bg-gray-800 text-white"
          placeholder="Escribe la palabra encontrada..."
        />
        {errorMessage && (
          <p className="mt-2 text-red-500">{errorMessage}</p>
        )}
        <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded">
          Comprobar
        </button>
      </div>
    </div>
  );
}
