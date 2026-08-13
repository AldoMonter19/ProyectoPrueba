import { useState } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Card from "./components/Card";

interface CardData {
  titulo: string;
  texto: string;
  variante: "amarillo" | "azul" | "rojo";
}

const tarjetasIniciales: CardData[] = [
  {
    titulo: "React",
    texto:
      "Biblioteca para construir interfaces mediante componentes reutilizables.",
    variante: "azul",
  },
  {
    titulo: "TypeScript",
    texto:
      "Lenguaje que incorpora tipado estático para mejorar la seguridad del código.",
    variante: "amarillo",
  },
  {
    titulo: "Tailwind",
    texto:
      "Framework CSS basado en clases utilitarias para construir interfaces rápidamente.",
    variante: "rojo",
  },
];

const tarjetasAlternativas: CardData[] = [
  {
    titulo: "Props",
    texto:
      "Permiten enviar información de un componente padre a un componente hijo.",
    variante: "amarillo",
  },
  {
    titulo: "Estado",
    texto:
      "Permite controlar información que cambia durante la ejecución de la aplicación.",
    variante: "rojo",
  },
  {
    titulo: "Vite",
    texto:
      "Herramienta de desarrollo utilizada para ejecutar y construir el proyecto.",
    variante: "azul",
  },
];

const App = () => {
  const [modo, setModo] = useState(false);

  const tarjetas = modo ? tarjetasAlternativas : tarjetasIniciales;

  const cambiarTarjetas = () => {
    setModo((estadoActual) => !estadoActual);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <section className="mb-14 border-b-4 border-black pb-10">
          <div className="max-w-4xl">
            <span className="mb-6 inline-block border-4 border-black bg-blue-400 px-4 py-2 text-sm font-black uppercase shadow-[5px_5px_0_0_#000]">
              Entorno fuertemente tipado
            </span>

            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
              Build
              <br />
              Bold.
            </h2>

            <p className="mt-8 max-w-2xl border-l-8 border-black pl-5 text-lg font-bold leading-relaxed sm:text-xl">
              Interfaz desarrollada con React, TypeScript y Tailwind CSS v4,
              utilizando componentes reutilizables y contratos de props
              estrictamente tipados.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Button
              titulo={modo ? "Mostrar originales" : "Cambiar tarjetas"}
              variante={modo ? "rojo" : "amarillo"}
              onClick={cambiarTarjetas}
            />

            <div className="border-4 border-black bg-white px-5 py-3 font-black uppercase shadow-[5px_5px_0_0_#000]">
              Modo: {modo ? "Alternativo" : "Original"}
            </div>
          </div>
        </section>

        <section>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em]">
                Componentes
              </p>

              <h3 className="text-4xl font-black uppercase leading-none sm:text-5xl">
                Tarjetas
              </h3>
            </div>

            <span className="border-4 border-black bg-yellow-300 px-4 py-2 font-black uppercase">
              {tarjetas.length} elementos
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tarjetas.map((tarjeta) => (
              <Card
                key={tarjeta.titulo}
                titulo={tarjeta.titulo}
                texto={tarjeta.texto}
                variante={tarjeta.variante}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-black bg-black px-6 py-6 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-black uppercase">
            React + TypeScript
          </p>

          <p className="text-sm font-bold uppercase">
            Tailwind CSS v4 • Día 3
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;