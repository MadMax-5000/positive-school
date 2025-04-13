"use client";

import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ExploreCard = ({
  id,
  imgUrl,
  title,
  biography,
  index,
  active,
  setActive,
}) => {
  // Track if viewport is mobile (< 768px)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    // Initial check
    checkMobile();
    // Update on resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // For mobile, always treat the card as “active” (i.e. fully open)
  const cardActive = isMobile ? true : active === id;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
      className={
        isMobile
          ? // On mobile: full width, auto height, stack vertically
            "relative w-full h-auto flex flex-col rounded-2xl overflow-hidden mb-4"
          : // On desktop: original flexible layout
            `relative ${
              cardActive ? "lg:flex-[2.5] flex-[6]" : "lg:flex-[0.5] flex-[2]"
            } min-w-[120px] h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer rounded-[24px] overflow-hidden`
      }
      // Only use hover events on desktop
      onMouseEnter={!isMobile ? () => setActive(id) : undefined}
      onMouseLeave={!isMobile ? () => setActive("") : undefined}
    >
      <img
        src={imgUrl || "/placeholder.svg"}
        alt={title}
        className={
          isMobile
            ? // On mobile, no grayscale or hover scale needed
              "w-full h-auto object-cover"
            : // On desktop, original transitions
              "absolute w-full h-full object-cover rounded-[24px] transition-all duration-500 group-hover:scale-110 grayscale"
        }
      />

      {/* Card content container */}
      <motion.div
        className={
          isMobile
            ? // On mobile, place text below image, normal background
              "relative w-full p-4 bg-zinc-800 text-white"
            : // On desktop, keep the “overlay” style
              `absolute bottom-0 w-full p-8 flex flex-col ${
                cardActive
                  ? "bg-black/40 backdrop-blur-xl border border-white/20 max-h-[350px]"
                  : "bg-transparent max-h-[80px] justify-center items-center"
              } overflow-hidden transition-all duration-500 rounded-b-[16px]`
        }
      >
        <motion.h2
          layout="position"
          className={
            isMobile
              ? "text-xl font-bold mb-2"
              : `font-bold text-white transition-all duration-300 font-circular-web ${
                  cardActive ? "text-[40px] mb-[16px]" : "text-[30px] mb-[4px]"
                }`
          }
        >
          {title}
        </motion.h2>

        {/* Biography text */}
        <motion.p
          layout="position"
          initial={{ opacity: 0 }}
          animate={{ opacity: cardActive ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className={
            isMobile
              ? // On mobile, always show the entire text
                "text-sm leading-6"
              : `font-robert-medium leading-[20.16px] text-white text-[19px]
                overflow-hidden transition-all duration-500 font-thin
                ${cardActive ? "max-h-[500px]" : "max-h-0"}`
          }
        >
          {biography}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

ExploreCard.propTypes = {
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  biography: PropTypes.string,
  index: PropTypes.number.isRequired,
  active: PropTypes.string,
  setActive: PropTypes.func.isRequired,
};

export { ExploreCard };
export default ExploreCard;
