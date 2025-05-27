interface ExperienceItem {
  title: string;
  subtitle: string;
  date: string;
  description: string | string[];
  link?: {
    url: string;
    text: string;
  };
}

export const workExperience: ExperienceItem[] = [
  {
    title: "Vizset Analytics",
    subtitle: "Intern",
    date: "Jun 2024",
    description: [
      "Designed and deployed interactive dashboards using Apache Superset, enhancing user engagement by 40%",
      "Collaborated across teams to gather feedback and refine dashboard features",
      "Developed an AI-driven HR tool that automated hiring processes, reducing time-to-hire by 50%"
    ]
  },
  {
    title: "Microsoft",
    subtitle: "Learn Student Ambassador",
    date: "Apr 2025",
    description: [
      "Organized and facilitated technical workshops for students on Microsoft technologies",
      "Promoted Microsoft developer platforms and tools within the university community",
      "Collaborated with fellow ambassadors on community outreach initiatives"
    ]
  }
];

export const certifications: ExperienceItem[] = [
  {
    title: "Postman API Fundamentals Student Expert",
    subtitle: "Postman",
    date: "",
    description: ""
  },
  {
    title: "Google Data Analytics",
    subtitle: "Coursera",
    date: "",
    description: ""
  },
  {
    title: "Introduction to Industrial 4.0 and Industrial IoT",
    subtitle: "IIT Kharagpur",
    date: "",
    description: ""
  },
  {
    title: "App Development for Entrepreneurs",
    subtitle: "Certificate",
    date: "",
    description: ""
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    subtitle: "Amazon Web Services",
    date: "",
    description: ""
  },
  {
    title: "IBM Enterprise Design Thinking Practitioner Badge",
    subtitle: "IBM",
    date: "",
    description: ""
  },
  {
    title: "Affective Computing",
    subtitle: "Certificate",
    date: "",
    description: ""
  }
];
