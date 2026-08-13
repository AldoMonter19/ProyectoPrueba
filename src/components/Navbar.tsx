const Navbar = () => {
  return (
    <header className="border-b-4 border-black bg-yellow-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em]">
            Día 3
          </p>

          <h1 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
            React + TypeScript
          </h1>
        </div>

        <div className="border-4 border-black bg-white px-4 py-2 font-black uppercase shadow-[5px_5px_0_0_#000]">
          Tailwind CSS v4
        </div>
      </div>
    </header>
  );
};

export default Navbar;