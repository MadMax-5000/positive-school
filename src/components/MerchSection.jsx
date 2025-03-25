import React, { memo, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProductCard = memo(({ product }) => {
  return (
    <div key={product.id} className="group cursor-pointer">
      <div className="relative w-96 h-w-96 aspect-square mb-4 bg-white rounded-lg overflow-hidden">
        <div className="blur-lg">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
      <h3 className="text-sm font-medium mb-2">{product.name}</h3>
      <p className="text-zinc-400">{product.price.toFixed(2)} MAD</p>
    </div>
  );
});

export default function MerchSection() {
  const products = [
    {
      id: 1,
      name: "POSITIVE SCHOOL Lightweight T-Shirt (FRONT)",
      price: 0,
      image: "/images/merch1.png",
    },
    {
      id: 2,
      name: "POSITIVE SCHOOL Lightweight T-Shirt (BACK)",
      price: 0,
      image: "/images/merch2.png",
    },
  ];

  // Refs for animation targets
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Initialize all cards to be invisible
    gsap.set(".product-card", { y: 80, opacity: 0, scale: 0.9 });
    gsap.set(headingRef.current, { y: 50, opacity: 0 });
    gsap.set(buttonRef.current, { y: 30, opacity: 0 });

    // Create a timeline for the section animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%", // Start animation when the top of the section hits 70% down the viewport
        end: "bottom 70%",
        toggleActions: "play none none none", // Play animation when scrolled into view
        // markers: true, // Enable for debugging - shows scroll trigger points
      },
    });

    // Add animations to the timeline
    tl.to(headingRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        ".product-card",
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.2,
          ease: "back.out(1.2)",
        },
        "-=0.4"
      )
      .to(
        buttonRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      );

    return () => {
      // Clean up animations and scroll triggers when component unmounts
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={headingRef}
          className="uppercase text-4xl md:text-6xl font-zentry text-center mb-12 tracking-wide"
        >
          L<b>a</b>test Additi<b>o</b>ns
        </h2>
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 justify-items-center"
        >
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            ref={buttonRef}
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white border border-white rounded-md hover:bg-white hover:text-black transition-colors duration-200"
          >
            DISCOVER MORE
          </button>
        </div>
      </div>
    </section>
  );
}
