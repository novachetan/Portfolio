import { Project, EducationItem, ProcessStep, HeroStat } from '../types';

export const HERO_STATS: HeroStat[] = [
  { value: '15+', labelTop: 'PROJECTS', labelBottom: 'BUILT' },
  { value: '12+', labelTop: 'TECHNOLOGIES', labelBottom: 'EXPLORED' },
  { value: '3+', labelTop: 'YEARS OF', labelBottom: 'LEARNING' },
];

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'CLASSROOM MANAGEMENT SYSTEM',
    subtitle: 'FULL STACK WEB APPLICATION',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAqhDkz5-ijJzeQjT2UdMA7YdpHVaJkg9XFGaQRRqgHi90kEiX9rAKSZe5iBy9jGdXyFguEY_z0CN3sVfaZW6J7wh5GegxSQ7Cj42k119bMD0MGLV0Yce3vCs4h2OQplkEXVi6LBzkHqGQWWpJvAML1ORuND_2pLLoTVVes9fdIutA9PQmIJQr9hwU-WvRgdA65vHYc40aPGJBtn9hmjzF6My2OBZ31zNpsJaXcaHk',
    imageAlt:
      'High-tech dark mode classroom management LMS dashboard interface UI, dark charcoal background with crimson red accent charts, analytics cards, modern web app UI screenshot',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '#',
  },
  {
    id: '02',
    title: 'AI VIDEO EDITING PLATFORM',
    subtitle: 'AI-POWERED CREATIVE STUDIO TOOL',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACPsS_GCasTB7p-pRgTSe3sLFelMsaSZk3J0rOJQefyHfuuRbAG4FowNzuYlaf6TzniFdYONf_V9mrIsavoHDHKXmgj8DXYy89H0xkeUisTaLfI373UVr8DxrAqm0PahmdZcgWBCkjnUViS0JHBZDOevQQkILJpzWWlwsLEvsGVKqsFfH4uDuPk_SDwy2wuEwS29oXzZ8To29-zFkxheF0GtVa_NDQA_PJyNBqNbk',
    imageAlt:
      'Sleek dark mode AI video editing platform UI interface with multitrack video timeline, AI generation prompt bar, preview player, modern creative studio software screenshot',
    tags: ['Next.js', 'Python', 'FastAPI', 'WebGL'],
    link: '#',
  },
  {
    id: '03',
    title: 'REAL-TIME CHAT APPLICATION',
    subtitle: 'COLLABORATIVE MESSAGING PLATFORM',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCy1xmGewWoNqBDRtCIiLrpx7DVnjUDW6HCe6uM4z8AxU8V0dXWvqYSZOrXSowmiMwR2lDTFlQZbzRz74X_c7PTxyDlGuVrjNldvoxJ5WXhFDf_KiJp0ZzgKGmT_W_x0aY7AMwOBTOtjYWTJnUUuP7vlOa-er3J9IrDVPDAmXZSWlmkX35PpFQkHaLY7T_uQLUNfIw5Fs9uT0mwEEDb-kk139pQNAn-S_1DbHf8ULw',
    imageAlt:
      'Minimalist dark mode real-time messaging chat application web interface with conversation list, active chat window, code snippet blocks, sleek dark UI with crimson accent dots',
    tags: ['TypeScript', 'WebSockets', 'Redis', 'Docker'],
    link: '#',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-1',
    title: 'B.E. in Computer Engineering',
    period: '2021 — 2025',
    institution: 'Gangamai College of Engineering, Dhule',
  },
  {
    id: 'edu-2',
    title: 'Full Stack Development & Cloud Architecture',
    period: '2023',
    institution: 'Specialized Engineering & Distributed Systems Training',
  },
];

export const SKILLS: string[] = [
  'JAVASCRIPT',
  'REACT',
  'NODE.JS',
  'EXPRESS.JS',
  'MONGODB',
  'POSTGRESQL',
  'REDIS',
  'C++',
  'PYTHON',
  'GIT & GITHUB',
  'DOCKER',
  'REST APIS',
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Understand goals, architecture requirements & user needs.',
    icon: 'search',
  },
  {
    step: '02',
    title: 'PLAN',
    description: 'System design, schema modeling & tech stack selection.',
    icon: 'bulb',
  },
  {
    step: '03',
    title: 'DEVELOP',
    description: 'Clean, scalable, modular frontend & backend implementation.',
    icon: 'code',
  },
  {
    step: '04',
    title: 'TEST',
    description: 'Performance optimization, security audits & edge case testing.',
    icon: 'shield',
  },
  {
    step: '05',
    title: 'DEPLOY',
    description: 'Containerized CI/CD delivery, cloud hosting & monitoring.',
    icon: 'rocket',
  },
];

export const PERSONAL_INFO = {
  name: 'Chetan Pawar',
  displayInitials: 'CHETAN.DEV',
  role: 'Full Stack Developer',
  headline: 'FULL STACK DEVELOPER & BACKEND ENTHUSIAST',
  bio: "I'm a Computer Engineering student passionate about building scalable web applications, backend systems, and meaningful digital experiences that combine clean architecture with smooth interactions.",
  motto: 'Turning ideas into powerful digital experiences.',
  portraitImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB74hijGPbxrpF86uHjQCEwt5s3d6Vny-a1lEi6RD2kxTmqWlvkQ9ga64pytKMrmtlhHw80OiFb-2kgFl8JoqsCCFqQWwV1CF0_uge2OuTKlyY4USQNZmPq6AulC8cTsdF7930E_ux1W9QMXGwt1f4EiRrzymqUCRqvsyn7EBP5Rtmo0hN1SBVBawQH9Yc-rIG5BAphgPu_tZvm3niVEmz5Q_NJkmwGzHUFNav9Bp9Lp42F7_PWrarh',
  workstationImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuABVZzGq_-ONXEvgyWtBanvrb3bSxxf9baNvnAzrWMGpR-nbfDzjx70NVGEAyYzJod1hyuvi1dP0Kh_JtnzQ8mj0iELcYDuIq8dcXXWMig7rccNbA15_n62XwgwgDrhHymzJKxWvjYNYHBkTPH6pBnpB32oepMC1yQaTMglhdhmYlmdNydwJngJ177KkFTPsJ__z6IM-333dppBchIN2wNCJ09BG6e5DA1vfuupwsA',
  philosophy:
    'Good design is not just how it looks, but how it works. Great software solves real problems with thoughtful, scalable engineering.',
  email: 'cp9265343480@gmail.com',
  github: 'https://github.com/novachetan',
  githubDisplay: 'github.com/novachetan',
  linkedin: 'https://linkedin.com/in/chetan-pawar-a3990439a',
  linkedinDisplay: 'linkedin.com/in/chetan-pawar-a3990439a',
  location: 'Maharashtra, India',
};

