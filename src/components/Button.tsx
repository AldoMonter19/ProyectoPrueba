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
      className={`border-4 border-black px-6 py-4 font-black uppercase shadow-[6px_6px_0_0_#000] transition-all duration-100 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000] active:translate-x-2 active:translate-y-2 active:shadow-none ${colores[variante]}`}
    >
      {titulo}
    </button>
  );
};

export default Button;