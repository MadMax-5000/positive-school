"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure GSAP plugins are registered
gsap.registerPlugin(ScrollTrigger);

const AnimatedSections = () => {
  const containerRef = useRef(null);
  const vinylRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animations
      gsap.utils.toArray(".animate-heading").forEach((heading) => {
        gsap.from(heading, {
          scrollTrigger: {
            trigger: heading,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "back.out(1.7)",
        });
      });

      // Vinyl rotation animation
      const vinylAnimation = gsap.to(vinylRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "none",
      });

      vinylRef.current.addEventListener("mouseenter", () => {
        gsap.to(vinylAnimation, { timeScale: 2, duration: 0.5 });
      });

      vinylRef.current.addEventListener("mouseleave", () => {
        gsap.to(vinylAnimation, { timeScale: 1, duration: 0.5 });
      });

      // Paragraph animations
      gsap.utils.toArray(".animate-paragraph").forEach((para) => {
        gsap.from(para, {
          scrollTrigger: {
            trigger: para,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
        });
      });

      // Decorative line animations
      gsap.utils.toArray(".decorative-line").forEach((line) => {
        gsap.from(line, {
          scrollTrigger: {
            trigger: line,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
          scaleX: 0,
          duration: 1.5,
          ease: "power3.inOut",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-black text-white min-h-screen relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#6D0000FF] opacity-5" />

      {/* About Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
        <div className="space-y-8">
          <div className="relative">
            <div className="decorative-line absolute -left-4 top-1/2 w-8 h-[2px] bg-[#6D0000FF]" />
            <h2 className="animate-heading text-5xl md:text-6xl font-bold tracking-tight pl-6">
              ABOUT US
            </h2>
            <div className="absolute -right-4 bottom-0 w-24 h-24 border-r-2 border-b-2 border-[#FE3A26] opacity-20" />
          </div>
          <p className="animate-paragraph text-gray-300 leading-relaxed text-lg relative group">
            <span className="block relative overflow-hidden">
              The Positive School of Hip-Hop is a transformative initiative
              founded by the Ali Zaoua Foundation in 2016 with the support of
              the U.S. Embassy in Morocco.
              <span className="block h-[1px] w-full bg-gradient-to-r from-[#FE3A26] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </span>
            Over the years, we've worked with thousands of aspiring artists
            across Morocco building a community of artists who are shaping the
            Moroccan hip-hop scene.
            <span className=" to-white bg-clip-text text-transparent"></span>{" "}
          </p>
        </div>
        <div className="flex justify-center items-center relative">
          <div className="absolute inset-0 bg-[#FE3A26] opacity-5 blur-3xl rounded-full" />
          {/* Vinyl SVG section */}
          <svg
            ref={vinylRef}
            viewBox="0 0 400 400"
            className="w-64 h-64 md:w-80 md:h-80 cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <defs>
              <path
                id="circlePath"
                d="M200,200 m-160,0 a160,160 0 1,1 320,0 a160,160 0 1,1 -320,0"
              />
            </defs>

            {/* Vinyl background */}
            <circle cx="200" cy="200" r="200" fill="#FE3A26" />

            {/* Black interior disc */}
            <circle cx="200" cy="200" r="150" fill="black" />

            {/* Grooves */}
            <circle
              cx="200"
              cy="200"
              r="190"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.5"
            />
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.5"
            />
            <circle
              cx="200"
              cy="200"
              r="170"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.5"
            />
            <circle
              cx="200"
              cy="200"
              r="140"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
            />
            <circle
              cx="200"
              cy="200"
              r="130"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
            />
            <circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
            />

            {/* Repeated text */}
            <text
              fill="white"
              fontSize="35"
              fontWeight="bold"
              letterSpacing="0.3"
            >
              <textPath href="#circlePath" startOffset="0%">
                POSITIVE SCHOOL POSITIVE SCHOOL POSITIVE SCHOOL
              </textPath>
            </text>

            {/* Center circle */}
            <circle
              cx="200"
              cy="200"
              r="50"
              fill="#FE3A26"
              stroke="white"
              strokeWidth="2"
            />

            {/* Center hole */}
            <circle cx="200" cy="200" r="8" fill="white" />
          </svg>
        </div>
      </section>

      {/* How It Started Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:order-2 space-y-8">
          <div className="relative">
            <div className="decorative-line absolute -left-4 top-1/2 w-8 h-[2px] bg-[#FE3A26]" />
            <h2 className="animate-heading text-5xl md:text-6xl font-bold tracking-tight pl-6">
              OUR <span className="text-white">MISSION</span>
            </h2>
            <div className="absolute -left-8 -bottom-8 w-32 h-32 border-l-2 border-b-2 border-[#FE3A26] opacity-20" />
          </div>
          <p className="animate-paragraph text-gray-300 leading-relaxed text-lg relative">
            At the Positive School of Hip-Hop, we aim to give young people the
            chance to build&nbsp;
            <span className="relative inline-block">
              a brighter future
              <span className="absolute bottom-0 left-0 w-full h-[2px] " />
            </span>{" "}
            <br />
            <span className=" from-white bg-clip-text ">
              We believe that hip-hop is more than just music or art—it’s a way
              to express yourself, challenge the norm, and create real
              opportunities.
            </span>{" "}
            <span className="inline-block transform hover:scale-105 transition-transform duration-300 text-[#FE3A26]"></span>{" "}
          </p>
        </div>
        <div className="md:order-1 overflow-hidden group">
          <div className="history-image relative w-full aspect-video">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-[#FE3A26] to-transparent opacity-20 z-10 
              group-hover:opacity-30 transition-opacity duration-500"
            />
            <img
              src="/images/get-started.jpg"
              alt="How it started"
              className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimatedSections;
