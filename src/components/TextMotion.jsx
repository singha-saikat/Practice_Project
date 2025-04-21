/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";

const TextMotion = () => {
  const message = "Hello! from Saikat Singha";
  const words = message.split(" ");
  return (
    <div className="flex flex-wrap gap-2 p-4 text-2xl">
      {words.map((word, index) => {
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};

export default TextMotion;
