import { motion } from "framer-motion";
import React from "react";

const ButtonTap = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.button
        className="bg-purple-600 text-white px-8 py-4 rounded-lg text-xl font-bold"
        whileTap={{ scale: 0.5 }}
        whileHover={{ scale: 1.5, transition: {yoyo:Infinity} }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Tap Me!
      </motion.button>
    </div>
  );
};

export default ButtonTap;
