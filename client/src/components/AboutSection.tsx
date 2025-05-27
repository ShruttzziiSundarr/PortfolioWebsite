import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1 * index
      }
    })
  };

  return (
    <section id="about" ref={ref} className="section bg-dark-800 py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span variants={itemVariants} className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3">
            <i className="fas fa-user-alt mr-1"></i> About Me
          </motion.span>
          <motion.h2 variants={itemVariants} className="font-heading text-3xl md:text-4xl font-bold mb-4">Who am I?</motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-dark-700 rounded-xl p-6"
            variants={cardVariants}
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="w-14 h-14 mb-5 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-2xl">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Education</h3>
            <p className="text-gray-400 mb-4">B.Tech in Computer Science (IoT), Shiv Nadar University Chennai</p>
            <div className="flex items-center text-sm text-gray-500">
              <i className="far fa-calendar-alt mr-2"></i> Graduating Aug 2026
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-dark-700 rounded-xl p-6"
            variants={cardVariants}
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="w-14 h-14 mb-5 rounded-lg bg-accent/20 flex items-center justify-center text-accent text-2xl">
              <i className="fas fa-trophy"></i>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Recognition</h3>
            <p className="text-gray-400 mb-4">Reliance Foundation Undergraduate Scholarship recipient for academic merit</p>
            <div className="flex items-center text-sm text-gray-500">
              <i className="far fa-calendar-alt mr-2"></i> 2023
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-dark-700 rounded-xl p-6"
            variants={cardVariants}
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="w-14 h-14 mb-5 rounded-lg bg-[#06B6D4]/20 flex items-center justify-center text-[#06B6D4] text-2xl">
              <i className="fas fa-tasks"></i>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Experience</h3>
            <p className="text-gray-400 mb-4">Vizset Analytics Intern, Microsoft Learn Student Ambassador</p>
            <div className="flex items-center text-sm text-gray-500">
              <i className="far fa-calendar-alt mr-2"></i> Since 2024
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 bg-dark-700 rounded-xl p-8"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/5 mb-8 md:mb-0 md:pr-8">
              <p className="text-gray-300 mb-4 leading-relaxed">
                Like trading stories, code is a currency of creativity—I'm a Computer Science student driven by the art of transforming logic into experiences that empower people.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Every algorithm I design and every feature I ship carries my commitment to unlock hidden potential, streamline complexity, and circulate value. I aim to fuse my foundation in data structures, databases, and full-stack development with heartfelt curiosity to build features that feel alive, connect communities, and leave a lasting, positive imprint.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently, I'm focused on building interactive applications that combine data analytics with user-friendly interfaces, while exploring the possibilities of AI-driven tools.
              </p>
            </div>
            
            <div className="md:w-2/5">
              <div className="gradient-border p-6 bg-dark-600">
                <h3 className="font-heading text-xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <i className="fas fa-map-marker-alt mt-1 mr-3 text-primary"></i>
                    <span>Based in Chennai, India</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-language mt-1 mr-3 text-accent"></i>
                    <span>Fluent in Multiple Programming Languages</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-lightbulb mt-1 mr-3 text-[#06B6D4]"></i>
                    <span>Passionate about Problem Solving</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-users mt-1 mr-3 text-primary"></i>
                    <span>Active in Technical Communities</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-brain mt-1 mr-3 text-accent"></i>
                    <span>Exploring AI & Machine Learning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
