
const galleryImages = [
  {
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=900",
    title: "Authentic Italian Pizza",
    category: "OUR CUISINE",
  },
  {
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900",
    title: "Fresh Handmade Pasta",
    category: "FRESHLY PREPARED",
  },
  {
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900",
    title: "Italian Sweet Treats",
    category: "DESSERTS",
  },
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900",
    title: "Elegant Dining",
    category: "OUR AMBIENCE",
  },
  {
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900",
    title: "Chef's Special",
    category: "SIGNATURE DISHES",
  },
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900",
    title: "Beautiful Evenings",
    category: "RESTAURANT LIFE",
  },
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#0c0b09] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

       
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm tracking-[0.4em] text-[#d4af70]">
            A GLIMPSE INTO BELLA CUCINA
          </p>

          <h2 className="font-serif text-4xl md:text-5xl">
            Our Gallery
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Every plate tells a story. Explore the flavours,
            moments and atmosphere of Bella Cucina.
          </p>
        </div>

       
       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

           
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                <p className="mb-2 text-xs tracking-[0.3em] text-[#d4af70]">
                  {item.category}
                </p>

                <h3 className="font-serif text-2xl text-white">
                  {item.title}
                </h3>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;
