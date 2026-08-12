const Navbar = () => {
  return (
    <nav className="border-b-4 border-black bg-yellow-300 px-6 py-5">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em]">
            React + TypeScript
          </p>

          <h1 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
            Brutalist UI
          </h1>
        </div>

        <div className="border-4 border-black bg-white px-4 py-2 text-center font-black uppercase shadow-[5px_5px_0px_0px_#000000]">
          Component Lab
        </div>
      </div>
    </nav>
  );
};

export default Navbar;