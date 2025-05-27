import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SkillBar from "@/components/ui/SkillBar";
import { programmingSkills, frameworksSkills, databases, tools, visualization, softSkills } from "@/data/skillsData";

const SkillsSection = () => {
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: delay * 0.2
      }
    })
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3 + (delay * 0.15)
      }
    })
  };

  return (
    <section id="skills" ref={ref} className="section py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12 text-center"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3">
            <i className="fas fa-tools mr-1"></i> Skills
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            A collection of technologies and tools I've mastered throughout my journey
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <motion.div
            variants={sectionVariants}
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="font-heading text-xl font-semibold mb-6 pb-2 border-b border-gray-700">
              Programming Languages
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {programmingSkills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                  delay={index * 0.2}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Frameworks & Libraries */}
          <motion.div
            variants={sectionVariants}
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="font-heading text-xl font-semibold mb-6 pb-2 border-b border-gray-700">
              Frameworks & Libraries
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {frameworksSkills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                  delay={index * 0.2}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Databases */}
          <motion.div 
            className="bg-dark-700 rounded-xl p-6"
            variants={cardVariants}
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="font-heading text-lg font-semibold mb-4 flex items-center">
              <i className="fas fa-database text-primary mr-2"></i> Databases
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {databases.map((item, index) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-check text-accent text-xs mr-2"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Tools */}
          <motion.div 
            className="bg-dark-700 rounded-xl p-6"
            variants={cardVariants}
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="font-heading text-lg font-semibold mb-4 flex items-center">
              <i className="fas fa-wrench text-accent mr-2"></i> Tools
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {tools.map((item, index) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-check text-primary text-xs mr-2"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Visualization */}
          <motion.div 
            className="bg-dark-700 rounded-xl p-6"
            variants={cardVariants}
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="font-heading text-lg font-semibold mb-4 flex items-center">
              <i className="fas fa-chart-bar text-[#06B6D4] mr-2"></i> Visualization
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {visualization.map((item, index) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-check text-[#06B6D4] text-xs mr-2"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Soft Skills */}
          <motion.div 
            className="bg-dark-700 rounded-xl p-6"
            variants={cardVariants}
            custom={3}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="font-heading text-lg font-semibold mb-4 flex items-center">
              <i className="fas fa-users text-primary mr-2"></i> Soft Skills
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {softSkills.map((item, index) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-check text-accent text-xs mr-2"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
