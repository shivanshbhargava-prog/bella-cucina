
function Hero() {

    function handleMenuClick() {
        console.log("Explore Menu clicked!")
    }
  return (
    <section id="home" className="min-h-[85vh] bg-[#0c0b09] flex items-center justify-center px-6 text-center">

      <div className="max-w-3xl">

        <p className="text-[#d4af70] tracking-[0.4em] text-sm mb-6">
          BENVENUTI A BELLA CUCINA
        </p>

        <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
          An Authentic Taste of Italy
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Experience the art of Italian cuisine,
          crafted with passion and served with love.
        </p>

        <button onClick={handleMenuClick} className="cursor-pointer bg-[#d4af70] text-black px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white transition duration-300">
          Explore Our Menu
        </button>

      </div>

    </section>
  );
}

export default Hero;
