interface CardProps {
  titulo: string;
  texto: string;
  variante: "amarillo" | "azul" | "rojo";
}

const Card = ({ titulo, texto, variante }: CardProps) => {
  const colores: Record<CardProps["variante"], string> = {
    amarillo: "bg-yellow-300",
    azul: "bg-blue-400",
    rojo: "bg-red-400",
  };

  return (
    <article
      className={`border-4 border-black p-6 shadow-[8px_8px_0_0_#000] transition-transform duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#000] ${colores[variante]}`}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="border-4 border-black bg-white px-3 py-1 text-xs font-black uppercase">
          Card
        </span>

        <span className="text-2xl font-black">
          //
        </span>
      </div>

      <h2 className="text-3xl font-black uppercase leading-none">
        {titulo}
      </h2>

      <div className="my-5 h-1 w-full bg-black" />

      <p className="font-bold leading-relaxed">
        {texto}
      </p>

      <div className="mt-6 border-t-4 border-black pt-4">
        <span className="text-xs font-black uppercase tracking-[0.15em]">
          Variante: {variante}
        </span>
      </div>
    </article>
  );
};

export default Card;