import React from "react";
import { motion } from "motion/react";

const Guestures = () => {
  return (
    <div className="min-h-80 min-w-80">
      <motion.button className="rounded p-2 bg-blue-700"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.4 }}
      >
        Move!
      </motion.button>
    </div>
  );
};

export default Guestures;
