import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { leadershipData } from "@/data/leadershipData";

const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.15 * index
      }
    })
  };

  return (
    <section id="leadership" ref={ref} className="section bg-dark-800 py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12 text-center"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3">
            <i className="fas fa-users mr-1"></i> Community
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Leadership & Extracurricular</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {leadershipData.map((item, index) => (
            <motion.div 
              key={index}
              className="gradient-border"
              variants={cardVariants}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="bg-dark-700 p-6 rounded-xl h-full">
                <div className={`w-14 h-14 rounded-full bg-${item.color}/20 flex items-center justify-center text-${item.color} text-2xl mb-4`}>
                  <i className={item.icon}></i>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
