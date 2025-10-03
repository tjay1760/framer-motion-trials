import React from "react";
import { motion, useAnimationControls } from "motion/react";

const AnimationControls = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start('flip');
  };
  const handleShake = () => {
    controls.start('shake');
  };
  const handleSquish = () => {
    controls.start('squish');
  };

  return (
    <div className="min-h-80 min-w-80 p-4">
      <motion.button
      onClick={handleClick}
        className="rounded p-2 bg-blue-700 mb-4 max-h-fit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, rotate: 20 }}
      >
        rotate!
      </motion.button>
          <motion.button
      onClick={handleShake}
        className="rounded p-2 bg-blue-700 mb-4 mx-2 max-h-fit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, rotate: 20 }}
      >
        shake!
      </motion.button>
        <motion.button
      onClick={handleSquish}
        className="rounded p-2 bg-blue-700 mb-4 mx-2 max-h-fit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, rotate: 20 }}
      >
        squish!
      </motion.button>
      <motion.div className="box h-72 w-72"
      variants={{
        initial:{
            backgroundColor:"black",
            rotate:0,
        },
        flip:{
            rotate:[0, 360, 0],
            backgroundColor:"red",
            transition:{
                duration:0.5,
                ease:"easeInOut"
            },
        },
            shake:{
                x:[0, -10, 10, -10, 10, -10, 10, 0],
                transition:{
                    duration:0.5,
                    ease:"easeInOut"
                },
                backgroundColor:"green",
            },
            squish:{
                scale:[1, 0.8, 1.2, 1],
                transition:{
                    duration:0.5,
                    ease:"easeInOut"
                },
                backgroundColor:"yellow",
            }

      }}
      initial="initial"
      animate={controls}
      >
      </motion.div>
    </div>
  );
};

export default AnimationControls;
