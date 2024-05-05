import React from "react";
import { TextField } from "@material-ui/core";
import { motion } from "framer-motion";

const AnimatedTextField = ({ children, ...props }) => {
  const textFieldVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      variants={textFieldVariants}
    >
      <TextField {...props}>{children}</TextField>
    </motion.div>
  );
};

export default AnimatedTextField;
