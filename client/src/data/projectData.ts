export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  iconColor: string;
  date: string;
  demoLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sonic Radar Pro",
    description: "Designed and revamped an ultrasonic radar system using Arduino, achieving 80% detection accuracy within a 10-meter range. Optimized system performance through iterative testing and debugging.",
    technologies: ["Arduino", "Ultrasonic Sensors", "C++", "Hardware Design"],
    icon: "fas fa-radar",
    iconColor: "accent",
    date: "April 2024",
    githubLink: "https://github.com/ShruttzziiSundarr/"
  },
  {
    id: 2,
    title: "Campus Shuttle Navigator",
    description: "Created a student bus tracking system using MySQL database, optimizing routes and improving on-time performance. Integrated real-time tracking data and automated notifications, enhancing user experience and safety.",
    technologies: ["MySQL", "GPS Tracking", "Web Development", "Notification Systems"],
    icon: "fas fa-bus",
    iconColor: "primary",
    date: "November 2023",
    githubLink: "https://github.com/ShruttzziiSundarr/"
  },
  {
    id: 3,
    title: "Blood Bank Management",
    description: "Engineered a system for detecting alcohol levels in blood donations using Arduino, increasing efficiency in the blood bank management process by 20%. Implemented a user-friendly interface through team collaboration.",
    technologies: ["Arduino", "Sensors", "Database Management", "UI Design"],
    icon: "fas fa-tint",
    iconColor: "[#06B6D4]",
    date: "May 2023",
    githubLink: "https://github.com/ShruttzziiSundarr/"
  },
  {
    id: 4,
    title: "E-Proctor Suite",
    description: "Remote proctoring system using OpenCV enhancing accuracy by 30% and reducing false positives by 20%, ensuring secure assessments.",
    technologies: ["Python", "OpenCV", "NumPy", "ML"],
    icon: "fas fa-user-shield",
    iconColor: "accent",
    date: "Nov 2023",
    githubLink: "https://github.com/ShruttzziiSundarr/"
  },
  {
    id: 5,
    title: "Vehicle Detection System",
    description: "Multi-threaded vehicle detection reducing processing time by 30% and enabling real-time traffic analytics with concurrent video handling.",
    technologies: ["Python", "OpenCV", "Multi-threading", "Computer Vision"],
    icon: "fas fa-car",
    iconColor: "primary",
    date: "May 2023",
    githubLink: "https://github.com/ShruttzziiSundarr/"
  },
  {
    id: 6,
    title: " PROPlay-Sports Network Platform",
    description: " Engineered a system for detecting alcohol levels in blood donations using Arduino, increasing efficiency in the blood bank management process by 20%",
    technologies: ["Python", "OpenCV", "Multi-threading", "Computer Vision"],
    icon: "fas fa-car",
    iconColor: "primary",
    date: "May 2023",
    githubLink: "https://github.com/ShruttzziiSundarr/"
  }
];
