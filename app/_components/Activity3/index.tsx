"use client";

import Puzzle from "react-image-puzzle";

interface Activity3Props {
  onSolve: () => void;
}

export default function Activity3({ onSolve }: Activity3Props) {
  const handleComplete = () => {
   
    onSolve();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Mesa 3: Museo Británico - Obstáculo: Rompecabezas Complejo
      </h2>
      <p>
        Coloca las piezas en el orden correcto para completar el rompecabezas:
      </p>
      <div className="mt-4 mb-4 flex justify-center">
        <Puzzle
          image="/sherlock.jpg" // Cambia esto a la ruta de tu imagen
          onDone={handleComplete}
          size={300}
          level={3}
        />
      </div>
      <div className="bg-blue-900 p-4 rounded-lg shadow-lg text-white ">
          <h3 className="text-xl font-bold mb-2">Estilo de Liderazgo: Participativo</h3>
          <p>
            El estilo de liderazgo participativo implica involucrar al equipo en el proceso de toma de decisiones.
            Se enfoca en fomentar la colaboración, escuchar las opiniones del equipo y tomar decisiones en conjunto.
            Es ideal en situaciones donde es importante contar con diversas perspectivas para resolver un problema.
          </p>
        </div>
    </div>
  );
}
