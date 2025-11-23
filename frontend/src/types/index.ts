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

