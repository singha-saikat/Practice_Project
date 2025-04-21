/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";

const Variants = () => {
  const shapeVariants = {
    initial: {
      opacity: 0,
      y: "-100vh",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: "easeInOut",
        type: "spring",
      },
    },
  };
  return (
    <motion.div variants={shapeVariants} initial='initial' animate='animate' className="bg-green-600 w-32 h-32 rounded border-2 m-4"/>
  );
};

export default Variants;
