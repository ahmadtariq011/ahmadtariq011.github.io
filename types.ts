
export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  id: string;
  name: string;
  problem: string;
  role: string;
  technologies: string[];
  solution: string;
  impact: string;
  imageUrl: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

export interface Achievement {
  title: string;
  description: string;
}

export interface Recommendation {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  tag: string;
}
