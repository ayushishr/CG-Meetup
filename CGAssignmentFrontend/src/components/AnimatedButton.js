import React from "react";
import { motion } from "framer-motion";

const AnimatedButton = ({ children, ...props }) => {
  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)" },
    tap: { scale: 0.9 },
  };

  return (
    <motion.button
      {...props}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
