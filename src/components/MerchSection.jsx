import React, { useState } from "react";
import { ChevronRight, Sparkles } from "lucide-react";

const LatestAdditions = () => {
  const products = [
    {
      id: 1,
      name: "POSITIVE SCHOOL Lightweight T-Shirt (FRONT)",
      price: 169.00,
      image: "/images/merch1.png",
    },
    {
      id: 2,
      name: "POSITIVE SCHOOL Lightweight T-Shirt (BACK)",
      price: 169.00,
      image: "/images/merch2.png",
    },
  ];

  const [isHovered, setIsHovered] = useState(null);

  return (
    <div
      id="merch"
      className="bg-black text-white min-h-screen flex flex-col justify-center items-center p-4 sm:p-8 mt-28"
    >
      <div className="max-w-4xl w-full">
        <div className="relative">
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 sm:mb-8 text-center text-white font-akira">
            Latest Additions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative group"
                onMouseEnter={() => setIsHovered(product.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div
                  className={`absolute -inset-0.5 bg-white/20 
                  rounded-xl opacity-0 
                  ${isHovered === product.id ? "opacity-100" : ""}
                  transition duration-500 
                  shadow-[0_0_30px_5px_rgba(255,255,255,0.3)]`}
                ></div>

                <div
                  className="relative bg-black rounded-xl overflow-hidden 
                  border border-white/10 hover:border-white/30 transition duration-300"
                >
                  <div
                    className="aspect-square bg-gray-200 
                    flex items-center justify-center p-4 relative overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 bg-[length:40px_40px] opacity-10 
                      bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)]"
                    ></div>

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain rounded-lg 
                        transform group-hover:scale-110 transition duration-500 
                        opacity-70 group-hover:opacity-100"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-base sm:text-lg font-semibold mb-1 text-white">
                      {product.name}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm">
                    {`${product.price.toFixed(2)} MAD`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              onClick={() =>
                (window.location.href = "https://positivesch2ol.com/merch")
              }
              className="group relative px-6 py-3 rounded-full 
  bg-white text-black hover:bg-gray-200
  flex items-center space-x-2 
  transition duration-300 ease-in-out
  hover:shadow-[0_0_30px_5px_rgba(0,0,0,0.1)]"
            >
              <span className="relative z-10 flex items-center text-sm font-medium">
                Shop Now <ChevronRight className="ml-2 w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestAdditions;
