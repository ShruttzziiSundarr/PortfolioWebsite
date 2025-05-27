interface Skill {
  name: string;
  icon: string;
  color: string;
}

export const programmingSkills: Skill[] = [
  {
    name: "Python",
    icon: "fab fa-python",
    color: "[#06B6D4]"
  },
  {
    name: "JavaScript",
    icon: "fab fa-js",
    color: "primary"
  },
  {
    name: "Java",
    icon: "fab fa-java",
    color: "accent"
  },
  {
    name: "C / Embedded C",
    icon: "fas fa-code",
    color: "[#06B6D4]"
  },
  {
    name: "TypeScript",
    icon: "fab fa-js",
    color: "primary"
  },
  {
    name: "R",
    icon: "fab fa-r-project",
    color: "accent"
  }
];

export const frameworksSkills: Skill[] = [
  {
    name: "React",
    icon: "fab fa-react",
    color: "[#06B6D4]"
  },
  {
    name: "Node.js / Express",
    icon: "fab fa-node-js",
    color: "primary"
  },
  {
    name: "TensorFlow / PyTorch",
    icon: "fas fa-brain",
    color: "accent"
  },
  {
    name: "Pandas / NumPy",
    icon: "fas fa-table",
    color: "[#06B6D4]"
  },
  {
    name: "Flask / Django",
    icon: "fab fa-python",
    color: "primary"
  },
  {
    name: "Scikit-learn",
    icon: "fas fa-cogs",
    color: "accent"
  }
];

export const databases: string[] = [
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "SQLAlchemy"
];

export const tools: string[] = [
  "Git / GitHub",
  "CI/CD (GitHub Actions)",
  "Docker",
  "VS Code"
];

export const visualization: string[] = [
  "Apache Superset",
  "Power BI",
  "Matplotlib",
  "MS Excel"
];

export const softSkills: string[] = [
  "Problem Solving",
  "Strategic Thinking",
  "Code Review",
  "Team Collaboration"
];
