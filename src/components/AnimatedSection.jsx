import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className = '', delay = 0, type = 'fade-up' }) => {
  if (type === 'reveal') {
    return (
      <div className={`overflow-hidden ${className}`}>
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay, ease: [0.33, 1, 0.68, 1] }}
          className="h-full w-full"
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
