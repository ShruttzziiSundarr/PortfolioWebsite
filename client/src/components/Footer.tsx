import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-dark-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="font-heading text-sm font-bold">MS</span>
              </div>
              <span className="font-heading font-semibold">M S Shruthi</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Building technology that makes a difference, one line of code at a time.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h4 className="font-heading font-medium mb-3 text-sm uppercase tracking-wider text-gray-400">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-medium mb-3 text-sm uppercase tracking-wider text-gray-400">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://github.com/ShruttzziiSundarr" 
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/shruthisundar23/" 
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:shruthi22110463@snuchennai.edu.in" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} M S Shruthi. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm">
            Designed with passion and lots of <i className="fas fa-coffee text-[#06B6D4]"></i>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
