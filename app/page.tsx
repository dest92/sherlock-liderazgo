"use client";
import { useState } from "react";
import Game from "./_components/Game";

export default function Home() {
  const [viewTheory, setViewTheory] = useState(false);

  return (
    <>
      {viewTheory === false ? (
        <>
          <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white px-4 py-5">
            <div className="text-center max-w-3xl mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold mb-6 text-yellow-500 drop-shadow-md">
                Teoría del Liderazgo de la Ruta-Meta
              </h1>
              <p className="text-lg mb-6 leading-relaxed">
                La teoría de la ruta-meta, o goal-path, fue formulada por Robert
                House en 1971. Parte de la noción de que los líderes serán
                eficaces en la medida en que apoyen a sus seguidores para que
                perciban que pueden alcanzar los objetivos, experimentar
                satisfacción y obtener recompensas.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Un líder siempre debe tener estos cuatro componentes básicos:
              </p>
              <ul className="list-disc list-inside text-left mb-6 mx-auto max-w-lg">
                <li className="mb-2">Definir objetivos.</li>
                <li className="mb-2">
                  Clarificar el proceso para llegar a los objetivos.
                </li>
                <li className="mb-2">Eliminar obstáculos.</li>
                <li className="mb-2">Facilitar apoyo a los seguidores.</li>
              </ul>
              <p className="text-lg mb-6 leading-relaxed">
                Esta teoría establece que la motivación de una persona depende
                de:
              </p>
              <ul className="list-disc list-inside text-left mb-6 mx-auto max-w-lg">
                <li className="mb-2">
                  La creencia o expectativa de que el esfuerzo conducirá a un
                  buen resultado de desempeño.
                </li>
                <li className="mb-2">
                  El logro de resultados será recompensado.
                </li>
                <li>Se obtendrá una recompensa percibida como valiosa.</li>
              </ul>
              <button
                onClick={() => setViewTheory(true)}
                className="px-6 py-3 bg-yellow-600 text-white font-bold rounded-lg shadow-md hover:bg-yellow-700 transition-transform transform hover:scale-105"
              >
                Continuar
              </button>
            </div>
          </div>
        </>
      ) : (
        <Game />
      )}
    </>
  );
}
