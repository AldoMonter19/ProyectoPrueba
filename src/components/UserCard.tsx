interface UserCardProps {
  nombre: string;
  puesto: string;
}

const UserCard = ({ nombre, puesto }: UserCardProps) => {
  return (
    <div className="border-4 border-black bg-yellow-300 p-6 shadow-[8px_8px_0px_0px_#000000]">
      <h2 className="text-2xl font-black uppercase">
        {nombre}
      </h2>

      <p className="mt-2 text-lg font-bold uppercase">
        {puesto}
      </p>
    </div>
  );
};

export default UserCard;