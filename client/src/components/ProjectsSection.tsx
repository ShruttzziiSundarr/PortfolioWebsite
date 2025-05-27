import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projectData";

const ProjectsSection = () => {
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

  return (
    <section id="projects" ref={ref} className="section py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12 text-center"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3">
            <i className="fas fa-code-branch mr-1"></i> Projects
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">My Latest Work</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Check out some of my featured projects from web applications to machine learning systems
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a href="#" className="inline-flex items-center gap-2 py-3 px-6 border border-primary/30 rounded-lg font-medium hover:bg-dark-700 transition-all">
            <span>View All Projects</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
