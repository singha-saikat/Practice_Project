import { motion } from "framer-motion";
import React from "react";

const Keyframe = () => {
  return (
    <motion.div
      className="bg-blue-500 border w-32 h-32 m-20"
      animate={{
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        rotate: [0, 90, 270, 360, 0],
        scale: [1, 1.5, 2, 1.5, 1],
      }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
    />
  );
};

export default Keyframe;
