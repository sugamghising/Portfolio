import type { Skill, Education, Certification, WorkExperience, SoftSkill } from "@/types";

export const bio = {
  professional: `Backend-focused developer with hands-on experience building and deploying RESTful APIs, microservices, and full-stack web applications.`,
  background: `Proficient in Node.js, Express, TypeScript, and PostgreSQL, with practical exposure to React and React Native. Experienced in Agile delivery, database optimization, and writing clean, maintainable code for production systems.`,
};

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", proficiency: 80, category: "frontend" },
  { name: "React Native", proficiency: 70, category: "frontend" },
  { name: "Tailwind CSS", proficiency: 82, category: "frontend" },
  { name: "HTML5/CSS3", proficiency: 88, category: "frontend" },

  // Backend
  { name: "Node.js", proficiency: 92, category: "backend" },
  { name: "Express.js", proficiency: 90, category: "backend" },
  { name: "TypeScript", proficiency: 90, category: "backend" },
  { name: "REST API Design", proficiency: 92, category: "backend" },
  { name: "Prisma ORM", proficiency: 86, category: "backend" },
  { name: "Zod", proficiency: 80, category: "backend" },
  { name: "JWT Auth", proficiency: 86, category: "backend" },
  { name: "Socket.io", proficiency: 82, category: "backend" },
  { name: "WebSockets", proficiency: 80, category: "backend" },

  // Database
  { name: "PostgreSQL", proficiency: 88, category: "database" },
  { name: "MySQL", proficiency: 84, category: "database" },
  { name: "MongoDB", proficiency: 80, category: "database" },
  { name: "Redis", proficiency: 78, category: "database" },

  // Tools
  { name: "Git/GitHub", proficiency: 90, category: "tools" },
  { name: "Docker", proficiency: 76, category: "tools" },
  { name: "Postman", proficiency: 86, category: "tools" },
  { name: "Swagger/OpenAPI", proficiency: 84, category: "tools" },
  { name: "Linux", proficiency: 76, category: "tools" },
];

export const education: Education[] = [
  {
    id: "edu1",
    degree: "Bachelor in Computer Science and Information Technology (BSc. CSIT)",
    institution: "Tribhuvan University, Kathmandu",
    period: "2022 - 2026",
    description:
      "Relevant coursework: Data Structures and Algorithms, Web Development, Operating Systems, OOP, and DBMS.",
  },
];

export const certifications: Certification[] = [
  // {
  //   id: "cert1",
  //   name: "AWS Certified Developer - Associate",
  //   issuer: "Amazon Web Services",
  //   date: "2024",
  //   credentialId: "AWS-DEV-12345"
  // },
  // {
  //   id: "cert2",
  //   name: "Meta Front-End Developer",
  //   issuer: "Meta (Coursera)",
  //   date: "2023",
  //   credentialUrl: "https://coursera.org/verify/..."
  // },
  // {
  //   id: "cert3",
  //   name: "MongoDB Certified Developer",
  //   issuer: "MongoDB University",
  //   date: "2023"
  // }
];

export const workExperience: WorkExperience[] = [
  {
    id: "exp1",
    title: "Backend Developer Intern",
    company: "Geek Tech Solutions",
    period: "Dec 2025 - May 2026",
    description: [
      "Improved POS API response latency by about 25 percent by restructuring backend data handling and removing redundant MySQL queries.",
      "Designed and maintained RESTful endpoints consumed by 10+ daily active users with reliable data delivery and robust error handling.",
      "Contributed backend logic for a cross-platform POS system used by React and React Native clients with consistent TypeScript behavior.",
      "Participated in Agile sprints, delivered features on schedule, and maintained code quality through peer reviews and Git/GitHub workflows.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MySQL",
      "React",
      "React Native",
      "Git",
      "GitHub",
    ],
  },
];

export const softSkills: SoftSkill[] = [
  { name: "Problem Solving", description: "Analytical thinking and practical solutions for production issues." },
  { name: "Communication", description: "Clear collaboration with technical and non-technical stakeholders." },
  { name: "Team Collaboration", description: "Strong teamwork in Agile/Scrum development environments." },
  { name: "Code Quality", description: "Focus on maintainable code, code review, and testing discipline." },
  { name: "Adaptability", description: "Fast learning and smooth transitions across tools and stacks." },
  { name: "Delivery Focus", description: "Consistent on-time delivery in sprint-based workflows." },
];

