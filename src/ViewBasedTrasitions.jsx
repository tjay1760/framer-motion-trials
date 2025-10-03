import React from 'react'
import { motion } from 'motion/react'

const ViewBasedTransitions = () => {
  return (
    <div>
        <motion.button className="rounded p-2 bg-blue-700 m-4"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 20 }}

      >Click Me|</motion.button>
      <motion.div
        className="box h-72 w-72 bg-black"
        initial={{ opacity: 0 }}
        transition={{ duration: 1,
            ease: "circIn" 
        }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        ViewBasedTransitions
      </motion.div>
    </div>
  )
}

export default ViewBasedTransitions