
function Footer() {
  return (
    <footer className="border-t border-[#3a3025] bg-[#080706] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

        <div>
          <h2 className="mb-4 font-serif text-3xl text-[#d4af70]">
            Bella Cucina
          </h2>
          <p className="max-w-sm leading-7 text-gray-400">
            A Taste of Italy, Crafted with Passion.
            Experience authentic Italian flavours
            and unforgettable dining moments.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold text-[#d4af70]">
            Quick Links
          </h3>
          <div className="flex flex-col items-start gap-3 text-gray-400">
            <a href="#home" className="transition hover:text-[#d4af70]">Home</a>
            <a href="#menu" className="transition hover:text-[#d4af70]">Our Menu</a>
            <a href="#about" className="transition hover:text-[#d4af70]">About Us</a>
            <a href="#gallery" className="transition hover:text-[#d4af70]">Gallery</a>
            <a href="#contact" className="transition hover:text-[#d4af70]">Contact</a>
            <a href="#reservation" className="transition hover:text-[#d4af70]">Reservations</a>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold text-[#d4af70]">
            Follow Us
          </h3>
          <p className="mb-4 text-gray-400">
            Follow us for delicious updates and special moments.
          </p>
          <div className="flex gap-5 text-gray-400">
            <a href="#" className="transition hover:text-[#d4af70]">Instagram</a>
            <a href="#" className="transition hover:text-[#d4af70]">Facebook</a>
          </div>
        </div>

      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-[#3a3025] pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Bella Cucina. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
