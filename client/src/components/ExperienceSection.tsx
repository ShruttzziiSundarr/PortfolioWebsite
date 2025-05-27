import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import TimelineItem from "@/components/ui/TimelineItem";
import { workExperience, certifications } from "@/data/experienceData";

const ExperienceSection = () => {
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

  const columnVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: delay
      }
    })
  };

  return (
    <section id="experience" ref={ref} className="section bg-dark-800 py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12 text-center"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3">
            <i className="fas fa-briefcase mr-1"></i> Experience
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            variants={columnVariants}
            custom={0.2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="font-heading text-2xl font-semibold mb-6 flex items-center">
              <i className="fas fa-briefcase text-primary mr-3"></i> Work Experience
            </h3>
            
            <div className="space-y-8">
              {workExperience.map((item, index) => (
                <TimelineItem 
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  description={item.description}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            variants={columnVariants}
            custom={0.4}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="font-heading text-2xl font-semibold mb-6 flex items-center">
              <i className="fas fa-certificate text-accent mr-3"></i> Certifications
            </h3>
            
            <div className="space-y-8">
              {certifications.map((item, index) => (
                <TimelineItem 
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  description={item.description}
                  link={item.link}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
