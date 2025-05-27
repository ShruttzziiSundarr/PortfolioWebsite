import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string | string[];
  link?: {
    url: string;
    text: string;
  };
  index: number;
  isInView: boolean;
}

const TimelineItem = ({ title, subtitle, date, description, link, index, isInView }: TimelineItemProps) => {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <motion.div 
        className="gradient-border bg-dark-700 p-5 rounded-xl"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
      >
        <div className="flex flex-wrap justify-between mb-2">
          <h4 className="font-heading font-semibold text-lg">{title}</h4>
          <span className="text-sm text-primary">{date}</span>
        </div>
        <p className="text-sm text-gray-400 mb-2">{subtitle}</p>
        {Array.isArray(description) && description.length > 0 ? (
          <ul className="text-gray-300 text-sm space-y-2 list-disc pl-4">
            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : description ? (
          <p className="text-gray-300 text-sm">{description}</p>
        ) : null}
        
        {link && (
          <a
            href={link.url}
            className="inline-flex items-center gap-1 text-xs text-primary mt-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{link.text}</span>
            <i className="fas fa-external-link-alt text-xs"></i>
          </a>
        )}
      </motion.div>
    </div>
  );
};

export default TimelineItem;
