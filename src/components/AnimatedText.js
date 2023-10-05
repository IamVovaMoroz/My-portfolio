import React from 'react'
import { motion } from 'framer-motion'

const quote = {
  //opacity - not visible and position(y: 50) + animation
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1, // time for animate
      // ease: "easeOut", // Type of animat (can be "linear", "easeInOut", "easeOut" and others)
      // if add staggerChildren than delete initial and animate for children/ staggerChildren - time before next word
      staggerChildren: 0.19
    }
  }
}

const singleWord = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    duration: 1
  }
}

const AnimatedText = ({ text, className = '' }) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden
    sm:py-0
    '>
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light ${className}`}
        variants={quote}
        initial='initial'
        animate='animate'
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className='inline-block'
            variants={singleWord}
            // initial='initial'
            // animate='animate'
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}

export default AnimatedText
