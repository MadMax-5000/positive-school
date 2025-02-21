export default function MerchSection() {
  const products = [
    {
      id: 1,
      name: 'ChainGPT "Launch" Lightweight T-Shirt (Black)',
      price: 30.0,
      image: "/images/merch1.png",
    },
    {
      id: 2,
      name: 'ChainGPT "Launch" Lightweight T-Shirt (White)',
      price: 30.0,
      image: "/images/merch2.png",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="uppercase text-4xl md:text-6xl font-zentry text-center mb-12 tracking-wide">
          L<b>a</b>test Additi<b>o</b>ns
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 justify-items-center">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative w-96 h-w-96 aspect-square mb-4 bg-white rounded-lg overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-medium mb-2">{product.name}</h3>
              <p className="text-zinc-400">${product.price.toFixed(2)} MAD</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white border border-white rounded-md hover:bg-white hover:text-black transition-colors duration-200">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </section>
  );
}
