import { motion } from 'framer-motion'

const stairAnimation = {
  initial: {
    top: "8%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: "100%",
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6; // Total number of steps
  return totalSteps - index - 1; // Reverse the index
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div 
          key={index} 
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ 
            duration: 1,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1 
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
}

export default Stairs
