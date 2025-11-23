import type { Skill, Education, Certification, WorkExperience, SoftSkill } from "@/types";

export const bio = {
  professional: `I'm a passionate Full-stack Developer with expertise in building modern, scalable web applications. I specialize in creating seamless user experiences with robust backend systems, real-time features, and clean, maintainable code.`,
  background: `With a strong foundation in both frontend and backend technologies, I enjoy solving complex problems and turning ideas into reality. I'm always eager to learn new technologies and best practices to deliver high-quality solutions.`,
  // interests: `When I'm not coding, I enjoy contributing to open-source projects, reading tech blogs, and exploring new frameworks and tools. I believe in writing clean, efficient code and following best practices.`
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", proficiency: 70, category: "frontend" },
  { name: "TypeScript", proficiency: 85, category: "frontend" },
  { name: "JavaScript", proficiency: 90, category: "frontend" },
  { name: "HTML/CSS", proficiency: 95, category: "frontend" },
  { name: "Tailwind CSS", proficiency: 80, category: "frontend" },
  // { name: "Next.js", proficiency: 80, category: "frontend" },

  // Backend
  { name: "Node.js", proficiency: 90, category: "backend" },
  { name: "Express", proficiency: 85, category: "backend" },
  { name: "REST APIs", proficiency: 90, category: "backend" },
  // { name: "GraphQL", proficiency: 75, category: "backend" },
  { name: "Socket.IO", proficiency: 75, category: "backend" },

  // Database
  { name: "PostgreSQL", proficiency: 80, category: "database" },
  { name: "MongoDB", proficiency: 85, category: "database" },
  { name: "Redis", proficiency: 70, category: "database" },
  { name: "Prisma", proficiency: 85, category: "database" },

  // // Tools
  // { name: "Git", proficiency: 90, category: "tools" },
  // { name: "Docker", proficiency: 75, category: "tools" },
  // { name: "AWS", proficiency: 70, category: "tools" },
  // { name: "CI/CD", proficiency: 75, category: "tools" },
];

export const education: Education[] = [
  {
    id: "edu1",
    degree: "Bachelor of Science in Computer Science and Information Technology.",
    institution: "Tribhuwan University ",
    period: "2022 - present",
    description: "Focused on software engineering, algorithms, and web development",
    gpa: "?/4.0"
  },
  {
    id: "edu1",
    degree: "Secondary Level (12 Grade)",
    institution: "Viswa Niketan School ",
    period: "2019 - 2021",
    description: "",
    gpa: "3.15/4.0"
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
  // {
  //   id: "exp1",
  //   title: "Senior Full-Stack Developer",
  //   company: "Tech Company Inc.",
  //   period: "2023 - Present",
  //   location: "Remote",
  //   description: [
  //     "Developed and maintained scalable web applications using React and Node.js",
  //     "Led a team of 3 developers in building real-time features with WebSockets",
  //     "Improved application performance by 40% through optimization techniques",
  //     "Implemented CI/CD pipelines reducing deployment time by 60%"
  //   ],
  //   technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"]
  // },
  // {
  //   id: "exp2",
  //   title: "Full-Stack Developer",
  //   company: "StartupXYZ",
  //   period: "2021 - 2023",
  //   location: "San Francisco, CA",
  //   description: [
  //     "Built responsive web applications from scratch using modern frameworks",
  //     "Collaborated with designers to implement pixel-perfect UI components",
  //     "Integrated third-party APIs and payment gateways (Stripe)",
  //     "Mentored junior developers and conducted code reviews"
  //   ],
  //   technologies: ["React", "TypeScript", "Express", "MongoDB", "Stripe"]
  // },
  // {
  //   id: "exp3",
  //   title: "Junior Web Developer",
  //   company: "Digital Agency",
  //   period: "2020 - 2021",
  //   location: "New York, NY",
  //   description: [
  //     "Developed client websites using HTML, CSS, and JavaScript",
  //     "Assisted in migrating legacy applications to modern frameworks",
  //     "Participated in agile development processes"
  //   ],
  //   technologies: ["JavaScript", "React", "Node.js", "MySQL"]
  // }
];

export const softSkills: SoftSkill[] = [
  { name: "Problem Solving", description: "Analytical thinking and creative solutions" },
  { name: "Communication", description: "Clear technical and non-technical communication" },
  { name: "Team Collaboration", description: "Effective teamwork and cross-functional collaboration" },
  { name: "Time Management", description: "Efficient task prioritization and deadline management" },
  { name: "Adaptability", description: "Quick learning and adapting to new technologies" },
  // { name: "Leadership", description: "Mentoring and guiding team members" },
  { name: "Attention to Detail", description: "Thorough code review and quality assurance" },
  { name: "Continuous Learning", description: "Staying updated with industry trends and best practices" }
];

