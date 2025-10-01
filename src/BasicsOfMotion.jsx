import React from "react";
import {
  backInOut,
  easeIn,
  easeInOut,
  motion,
  AnimatePresence,
} from "motion/react";

const BasicsOfMotion = () => {
  const [isVisible, setisVisible] = React.useState(false);
  return (
    <div className=" min-h-80 min-w-80">
      <motion.button
        className="p-2 mt-4 rounded bg-blue-400"
        onClick={() => setisVisible(!isVisible)}
        layout
      >
        Animate !!!
      </motion.button>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              x: 0,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              rotate: "270deg",
              scale: 1,
              x: [-100, 0, 100, 0, -100, 0, 0, 100, 0, -100, 0,0, 100, 0, -100, 0,0, 100, 0, -100, 0],
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: backInOut,
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              x:0,
            }}
            className="box h-72 w-72 bg-amber-900"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
