import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!bgRef.current) return;
    
    // Create animated particles
    for (let i = 0; i < 20; i++) {
      const span = document.createElement('span');
      const size = Math.random() * 30 + 10;
      
      span.style.width = `${size}px`;
      span.style.height = `${size}px`;
      span.style.top = `${Math.random() * 100}%`;
      span.style.left = `${Math.random() * 100}%`;
      span.style.opacity = `${Math.random() * 0.1}`;
      span.style.animation = `move ${Math.random() * 35 + 15}s linear infinite`;
      span.style.animationDelay = `${Math.random() * 5}s`;
      span.style.background = "rgba(139, 92, 246, 0.05)";
      span.style.position = "absolute";
      span.style.display = "block";
      span.style.borderRadius = "50%";
      
      bgRef.current.appendChild(span);
    }
    
    // Cleanup
    return () => {
      if (bgRef.current) {
        bgRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <motion.div 
      ref={bgRef} 
      className="animated-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default AnimatedBackground;
