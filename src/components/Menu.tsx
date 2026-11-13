
const menuItems = [
  {
    name: "Margherita Pizza",
    description: "Fresh mozzarella, basil and rich tomato sauce.",
    price: "₹399",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800",
    category: "PIZZA",
  },
  {
    name: "Creamy Alfredo Pasta",
    description: "Silky parmesan cream sauce with fresh herbs.",
    price: "₹449",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800",
    category: "PASTA",
  },
  {
    name: "Classic Tiramisu",
    description: "Italian coffee-soaked dessert with mascarpone.",
    price: "₹299",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800",
    category: "DESSERT",
  },
];

function Menu() {
  return (
    <section
      id="menu"
      className="bg-[#0c0b09] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="mb-4 text-sm tracking-[0.4em] text-[#d4af70]">
            A TASTE OF ITALY
          </p>

          <h2 className="font-serif text-4xl md:text-5xl">
            Our Signature Menu
          </h2>

          <p className="mt-5 text-gray-400">
            Discover our chef's specially crafted Italian favourites.
          </p>
        </div>

        <div className="grid gap-22 md:grid-cols-3">

          {menuItems.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-xl border border-[#3a3025] bg-[#1c1814] transition-all duration-500 ease-in-out hover:-translate-y-3 hover:scale-[1.03] hover:border-[#d4af70] hover:shadow-2xl hover:shadow-[#d4af70]/10"
            >

              <img
                src={item.image}
                alt={item.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <p className="mb-3 text-xs tracking-[0.3em] text-[#d4af70]">
                  {item.category}
                </p>

                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="font-serif text-xl">
                    {item.name}
                  </h3>

                  <span className="text-[#d4af70]">
                    {item.price}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Menu;
