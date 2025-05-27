import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  icon: string;
  color: string;
  delay: number;
  isInView: boolean;
}

const SkillBar = ({ name, icon, color, delay, isInView }: SkillBarProps) => {
  return (
    <motion.div 
      className="bg-dark-700 p-3 rounded-lg flex items-center gap-3 border border-transparent hover:border-primary/30 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 + delay }}
    >
      <div className={`w-10 h-10 rounded-full bg-${color}/20 flex items-center justify-center`}>
        <i className={`${icon} text-${color}`}></i>
      </div>
      <span className="font-medium">{name}</span>
    </motion.div>
  );
};

export default SkillBar;
