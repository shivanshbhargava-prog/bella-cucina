
function Navbar() {
  return (
    <nav className="bg-[#0c0b09] px-8 py-5 text-white">
      <div className="flex items-center justify-between">

        <h1 className="font-serif text-2xl text-[#d4af70]">
          Bella Cucina
        </h1>

        <div className="flex items-center gap-8">
          <a href="#home" className="hover:text-[#d4af70]">Home</a>
          <a href="#menu" className="hover:text-[#d4af70]">Menu</a>
          <a href="#about" className="hover:text-[#d4af70]">About</a>
          <a href="#gallery" className="hover:text-[#d4af70]">Gallery</a>
          <a href="#contact" className="hover:text-[#d4af70]">Contact</a>
        </div>

        <a
          href="#reservation"
          className="cursor-pointer border border-[#d4af70] px-5 py-3 text-[#d4af70] transition duration-300 hover:bg-[#d4af70] hover:text-black"
        >
          Reserve a Table
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
