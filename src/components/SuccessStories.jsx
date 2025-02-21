"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Artists } from "../constants";
import ExploreCard from "./ExploreCard";
import { TypingText, TitleText } from "../components/CustomTexts";

const SuccessStories = () => {
  const [active, setActive] = useState("");

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16" id="SuccessStories">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-7xl mx-auto flex flex-col"
      >
        <TypingText
          title="EXPLORE OUR HISTORY"
          textStyles="text-center text-sm uppercase tracking-wider text-gray-500 mb-2"
        />
        <TitleText
          title="SUCCESS STORIES"
          textStyles="text-center text-4xl md:text-5xl font-bold mb-12"
        />
        <div className="mt-12 flex flex-col lg:flex-row gap-6 min-h-[70vh]">
          {Artists.map((artist, index) => (
            <ExploreCard
              key={artist.id}
              {...artist}
              index={index}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SuccessStories;
