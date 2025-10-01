import { useState } from "react";
import { spring } from "motion";
import { motion } from "motion/react";

export default function SpringBox() {
  const [state, setState] = useState(false);
  return (
    <div
      className="example-container"
    >
      <motion.div className="box" data-state={state}
       animate={{ x: state? -100 : 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      ></motion.div>
      <button className='bg-blue-500 text-red-950 p-2 rounded hover:bg-amber-400' onClick={() => setState(!state)}>Toggle State</button>
    </div>
  );
}
