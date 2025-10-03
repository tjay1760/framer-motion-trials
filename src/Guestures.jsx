import React from "react";
import { motion, MotionConfig } from "motion/react";

const Guestures = () => {
  return (
    <div className="min-h-80 min-w-80 ">
      <MotionConfig transition={{ duration: 0.1, ease: "easeInOut" }}>
      <motion.button className="rounded p-2 bg-blue-700 m-4"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 20 }}
      
      >
        Move!
      </motion.button>
      <motion.button className="rounded p-2 bg-blue-700"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 20 }}
     
      style={{ backgroundColor:'red'}}
      >
        Move!
      </motion.button>
      </MotionConfig>

    </div>
  );
};

export default Guestures;
