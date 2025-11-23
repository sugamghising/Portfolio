export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  description: string;
  email: string;
  github: string;
  linkedin?: string;
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  icon?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
  gpa?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  technologies?: string[];
}

export interface SoftSkill {
  name: string;
  description?: string;
}

