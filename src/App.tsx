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
      "Biblioteca utilizada para construir interfaces de usuario mediante componentes reutilizables.",
    variante: "azul",
  },
  {
    titulo: "TypeScript",
    texto:
      "Lenguaje que agrega tipado estático a JavaScript para desarrollar aplicaciones más robustas.",
    variante: "amarillo",
  },
  {
    titulo: "Tailwind",
    texto:
      "Framework CSS basado en clases de utilidad para construir interfaces de manera rápida.",
    variante: "rojo",
  },
];

const tarjetasAlternativas: CardData[] = [
  {
    titulo: "Frontend",
    texto:
      "Área encargada de desarrollar la parte visual e interactiva de una aplicación web.",
    variante: "amarillo",
  },
  {
    titulo: "Estado",
    texto:
      "Información que puede cambiar durante la ejecución y actualizar dinámicamente la interfaz.",
    variante: "rojo",
  },
  {
    titulo: "Props",
    texto:
      "Datos que permiten comunicar información entre componentes de React de manera controlada.",
    variante: "azul",
  },
];

const App = () => {
  const [modo, setModo] = useState(false);

  const tarjetas = modo ? tarjetasAlternativas : tarjetasIniciales;

  const cambiarTarjetas = () => {
    setModo((valorActual) => !valorActual);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="mb-14">
          <div className="max-w-4xl">
            <div className="mb-6 inline-block border-4 border-black bg-blue-400 px-4 py-2 shadow-[5px_5px_0px_0px_#000000]">
              <span className="text-sm font-black uppercase tracking-[0.2em]">
                Estado dinámico
              </span>
            </div>

            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl">
              Build
              <br />
              Something
              <br />
              <span className="bg-yellow-300 px-2">Bold.</span>
            </h2>

            <p className="mt-8 max-w-2xl border-l-8 border-black pl-5 text-lg font-bold leading-relaxed">
              Componentes reutilizables desarrollados con React, TypeScript y
              Tailwind CSS v4. El contenido cambia mediante el manejo de estado.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Button
              titulo={modo ? "Mostrar originales" : "Cambiar tarjetas"}
              variante={modo ? "rojo" : "amarillo"}
              onClick={cambiarTarjetas}
            />

            <div className="border-4 border-black bg-white px-5 py-3 font-black uppercase shadow-[5px_5px_0px_0px_#000000]">
              Modo: {modo ? "Alternativo" : "Original"}
            </div>
          </div>
        </section>

        <section>
          <div className="mb-8 flex flex-col gap-3 border-b-4 border-black pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em]">
                Componentes
              </p>

              <h3 className="text-4xl font-black uppercase leading-none">
                Tarjetas
              </h3>
            </div>

            <p className="font-black uppercase">
              {tarjetas.length} elementos
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

      <footer className="mt-12 border-t-4 border-black bg-black px-6 py-6 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-black uppercase">
            Brutalist UI
          </p>

          <p className="text-sm font-bold uppercase">
            React • TypeScript • Tailwind CSS v4
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;