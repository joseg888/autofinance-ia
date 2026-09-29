export type ProjectStatus = 'Completado' | 'En desarrollo' | 'Open Source';

export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  tools: string[];
  status: ProjectStatus;
  href?: string;
}

export interface TechCategory {
  label: string;
  icon: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface HighlightStat {
  value: string;
  label: string;
}
