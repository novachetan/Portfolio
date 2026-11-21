export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  tags: string[];
  link?: string;
}

export interface EducationItem {
  id: string;
  title: string;
  period: string;
  institution: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: 'search' | 'bulb' | 'code' | 'shield' | 'rocket';
}

export interface HeroStat {
  value: string;
  labelTop: string;
  labelBottom: string;
}

export interface SocialLink {
  label: string;
  href: string;
  display: string;
  type: 'email' | 'github' | 'linkedin' | 'location';
}

