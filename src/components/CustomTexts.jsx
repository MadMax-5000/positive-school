"use client";

import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`text-[20px] text-white font-robert-medium ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

TypingText.propTypes = {
  title: PropTypes.string.isRequired,
  textStyles: PropTypes.string,
};

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] md:text-[70px] text-[40px] text-white font-akira font-bold tracking-normal ${textStyles}`}
  >
    {title}
  </motion.h2>
);

TitleText.propTypes = {
  title: PropTypes.string.isRequired,
  textStyles: PropTypes.string,
};
