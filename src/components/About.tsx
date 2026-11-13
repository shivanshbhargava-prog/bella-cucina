
function About() {
  return (
    <section id="about" className="bg-[#0c0b09] px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

    
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000"
            alt="Elegant Italian restaurant dining"
            className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        
        <div>
          <p className="mb-5 text-sm tracking-[0.4em] text-[#d4af70]">
            OUR STORY
          </p>

          <h2 className="mb-7 font-serif text-4xl leading-tight md:text-5xl">
            A Passion for Italian Food, A Love for Tradition
          </h2>

          <p className="mb-6 leading-8 text-gray-400">
            At Bella Cucina, we believe that great food brings people
            together. Inspired by the heart of Italy, our kitchen
            celebrates authentic flavours and timeless recipes.
          </p>

          <p className="mb-10 leading-8 text-gray-400">
            Every dish is prepared with care, using carefully selected
            ingredients and a passion for creating unforgettable
            dining experiences.
          </p>

          <button className="border border-[#d4af70] px-8 py-4 text-sm uppercase tracking-widest text-[#d4af70] transition duration-300 hover:bg-[#d4af70] hover:text-black">
            Discover Our Story
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;
