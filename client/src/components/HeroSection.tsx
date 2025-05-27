import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" ref={ref} className="section relative overflow-hidden flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-12 md:mb-0"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.span variants={item} className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
            <i className="fas fa-code mr-1"></i> Junior Year (3rd Year)
          </motion.span>
          
          <motion.h1 variants={item} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            I do code and <span className="gradient-text">solve problems</span> with it!
          </motion.h1>
          
          <motion.p variants={item} className="text-gray-400 text-lg mb-8 max-w-xl">
            Computer Science student driven by the art of transforming logic into experiences that empower people. Building features that feel alive, connect communities, and leave a lasting, positive imprint.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a href="#" className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-medium transition-transform hover:scale-105 focus:ring-2 focus:ring-primary/50 flex items-center gap-2">
              <i className="fas fa-download"></i> Download Resume
            </a>
            <a href="#projects" className="px-6 py-3 bg-dark-700 border border-primary/30 rounded-lg font-medium hover:bg-dark-600 transition-all flex items-center gap-2">
              <i className="fas fa-laptop-code"></i> View Projects
            </a>
          </motion.div>
          
          <motion.div variants={item} className="mt-8 flex gap-4">
            <a 
              href="https://github.com/ShruttzziiSundarr" 
              className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-dark-600 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/shruthisundar23/" 
              className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-dark-600 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="mailto:shruthi22110463@snuchennai.edu.in" 
              className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-dark-600 transition-all"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a 
              href="tel:+919876543210" 
              className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-dark-600 transition-all"
            >
              <i className="fas fa-phone"></i>
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Avatar with glow effect */}
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-xl glow animate-float">
              <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center overflow-hidden">
                <svg
                  viewBox="0 0 200 200"
                  className="w-56 h-56"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="200" height="200" fill="#1e1e2f" />
                  <path d="M40,40 L40,160 L160,160 L160,40 Z" fill="#0f0f17" />
                  <circle cx="100" cy="85" r="30" fill="#EC4899" />
                  <rect x="70" y="120" width="60" height="60" rx="5" fill="#8B5CF6" />
                  <circle cx="85" cy="75" r="5" fill="#fff" />
                  <circle cx="115" cy="75" r="5" fill="#fff" />
                  <path d="M90,95 C90,100 110,100 110,95" stroke="#fff" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
            
            {/* Floating tech icons */}
            <motion.div 
              className="absolute -top-4 -right-4 w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <i className="fab fa-react text-[#06B6D4] text-xl"></i>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 -right-8 w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <i className="fab fa-python text-[#06B6D4] text-xl"></i>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -right-4 w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            >
              <i className="fab fa-java text-accent text-xl"></i>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/2 -left-8 w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
            >
              <i className="fab fa-node-js text-primary text-xl"></i>
            </motion.div>
            
            <motion.div 
              className="absolute -top-4 -left-4 w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 3 }}
            >
              <i className="fas fa-database text-accent text-xl"></i>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 8, 0],
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <i className="fas fa-chevron-down text-gray-400"></i>
      </motion.div>
    </section>
  );
};

export default HeroSection;
