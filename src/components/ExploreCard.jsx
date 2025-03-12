"use client";

import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ExploreCard = ({
  id,
  imgUrl,
  title,
  biography,
  index,
  active,
  setActive,
}) => {
  const isActive = active === id;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
      className={`relative ${
        isActive ? "lg:flex-[2.5] flex-[6]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[120px] h-[600px]
         transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer
         rounded-[24px] overflow-hidden`}
      onMouseEnter={() => setActive(id)}
      onMouseLeave={() => setActive("")}
    >
      <img
        src={imgUrl || "/placeholder.svg"}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px] transition-all duration-500 group-hover:scale-110 grayscale"
      />

      <motion.div
        className={`
          absolute bottom-0 w-full p-8 flex flex-col
          ${
            isActive
              ? "bg-black/40 backdrop-blur-xl border border-white/20 max-h-[350px]"
              : "bg-transparent max-h-[80px] justify-center items-center"
          }
          overflow-hidden transition-all duration-500 rounded-b-[16px]
        `}
      >
        <motion.h2
          layout="position"
          className={`
            font-bold text-white transition-all duration-300 font-circular-web
            ${isActive ? "text-[40px] mb-[16px]" : "text-[30px] mb-[4px]"}
          `}
        >
          {title}
        </motion.h2>

        <motion.p
          layout="position"
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className={`
            font-robert-medium leading-[20.16px] text-white text-[19px]
            overflow-hidden transition-all duration-500 font-thin
            ${isActive ? "max-h-[500px]" : "max-h-0"}
          `}
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
