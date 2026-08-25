import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const interests = [
  {
    emoji: "📚",
    title: "Avid Reader",
    description: "Fiction, tech books, and everything in between. Always have a book on the go.",
  },
  {
    emoji: "🌍",
    title: "Traveller",
    description: "Exploring new cultures, cuisines, and perspectives whenever possible.",
  },
  {
    emoji: "🎨",
    title: "Creative Side",
    description: "Enjoy UI/UX design and making things look as good as they work.",
  },
  {
    emoji: "🤖",
    title: "AI Enthusiast",
    description: "Fascinated by ML, LLMs, and the intersection of data and human behavior.",
  },
];

const Personal = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Beyond the code</p>
        <h2 className={styles.sectionHeadText}>Life Outside Work.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm more than just my tech stack. Here's a bit about what keeps me going
        outside of work.
      </motion.p>

      {/* Interests grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeIn("up", "spring", index * 0.15, 0.6)}
            className="bg-tertiary rounded-2xl p-6 flex flex-col gap-3 hover:scale-105 transition-transform duration-300 border border-[#915EFF]/20 hover:border-[#915EFF]/60"
          >
            <span className="text-4xl">{item.emoji}</span>
            <h3 className="text-white font-bold text-[18px]">{item.title}</h3>
            <p className="text-secondary text-[14px] leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Personal, "personal");
