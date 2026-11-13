function Navbar() {
  return (
    <nav className="bg-[#0c0b09] text-white px-8 py-5">
      <div className="flex items-center justify-between">


        <h1 className="text-2xl font-serif text-[#d4af70]">
          Bella Cucina
        </h1>


        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-[#d4af70]">Home</a>
          <a href="#" className="hover:text-[#d4af70]">Menu</a>
          <a href="#" className="hover:text-[#d4af70]">About</a>
          <a href="#" className="hover:text-[#d4af70]">Gallery</a>
          <a href="#" className="hover:text-[#d4af70]">Contact</a>
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