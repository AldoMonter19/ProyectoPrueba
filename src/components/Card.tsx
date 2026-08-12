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
      className={`
        group
        border-4 border-black
        p-6
        ${colores[variante]}
        shadow-[9px_9px_0px_0px_#000000]
        transition-all duration-100
        hover:-translate-x-1
        hover:-translate-y-1
        hover:shadow-[13px_13px_0px_0px_#000000]
      `}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="border-4 border-black bg-white px-3 py-1 text-xs font-black uppercase">
          Card
        </span>

        <span className="text-2xl font-black leading-none">
          #
        </span>
      </div>

      <h2 className="mb-4 text-3xl font-black uppercase leading-none tracking-tight">
        {titulo}
      </h2>

      <div className="mb-5 h-1 w-full bg-black" />

      <p className="text-base font-bold leading-relaxed">
        {texto}
      </p>

      <div className="mt-6 border-t-4 border-black pt-4">
        <p className="text-xs font-black uppercase tracking-[0.15em]">
          Variante: {variante}
        </p>
      </div>
    </article>
  );
};

export default Card;