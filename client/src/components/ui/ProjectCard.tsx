import { motion } from "framer-motion";
import { Project } from "@/data/projectData";

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

const ProjectCard = ({ project, index, isInView }: ProjectCardProps) => {
  return (
    <motion.div 
      className="gradient-border group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
    >
      <div className="bg-dark-700 p-5 rounded-xl h-full flex flex-col">
        <div className="mb-5 bg-dark-600 rounded-lg p-6 flex items-center justify-center">
          <i 
            className={`${project.icon} text-5xl text-${project.iconColor} transition-transform duration-500 transform group-hover:scale-110`}
          ></i>
        </div>
        
        <h3 className="font-heading text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className="text-xs py-1 px-2 rounded-full bg-primary/20 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-3 border-t border-gray-700">
          <span className="text-sm text-gray-500">{project.date}</span>
          <div className="flex gap-3">
            {project.demoLink && (
              <a 
                href={project.demoLink} 
                className="text-gray-400 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live demo"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink}
                className="text-gray-400 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
