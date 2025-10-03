import React from 'react'
import { motion, useInView} from 'motion/react'
const ViewBasedTransitions = () => {
    const ref = React.useRef(null);
    const isVisible = useInView(ref);
React.useEffect(() => {
    console.log("Is in view: ", isVisible);
}, [isVisible]);
  return (
    <div className='border'>
        <motion.button className="rounded p-2 bg-blue-700 m-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 20 }}

      >Click Me|</motion.button>
      <motion.div
        className="box h-screen w-72 bg-black"
        initial={{ opacity: 0 }}
        transition={{ duration: 1,
            ease: "circIn" 
        }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        ViewBasedTransitions
      </motion.div>
      <div ref={ref}
      className="box h-screen w-72 bg-red-500 m-2"
      style={{ backgroundColor: isVisible ? 'pink' : 'blue' }}
      >
      </div>
    </div>
  )
}

export default ViewBasedTransitions