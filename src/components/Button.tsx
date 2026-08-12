interface ButtonProps {
  titulo: string;
  variante: "amarillo" | "azul" | "rojo";
  onClick: () => void;
}

const Button = ({ titulo, variante, onClick }: ButtonProps) => {
  const colores: Record<ButtonProps["variante"], string> = {
    amarillo: "bg-yellow-300",
    azul: "bg-blue-400",
    rojo: "bg-red-400",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        border-4 border-black
        px-6 py-4
        text-base font-black uppercase tracking-wide
        shadow-[7px_7px_0px_0px_#000000]
        transition-all duration-100
        hover:translate-x-1
        hover:translate-y-1
        hover:shadow-[3px_3px_0px_0px_#000000]
        active:translate-x-2
        active:translate-y-2
        active:shadow-none
        ${colores[variante]}
      `}
    >
      {titulo}
    </button>
  );
};

export default Button;