# Chetan Pawar — Full Stack Developer Portfolio (React + TypeScript + GSAP)

This is the modernized **React + TypeScript + Tailwind CSS** conversion of the portfolio website, enhanced with cinematic **GSAP** and **ScrollTrigger** motion design.

## 🚀 Features

- **React 18 & TypeScript**: Fully typed components, interfaces, and modular architecture.
- **Cinematic GSAP Motion Design**:
  - **Hero Entrance**: Staggered orchestration — header slide-in, background "PORTFOLIO" clip-path reveal, handwritten-style greeting, line-by-line name reveal, role elevation, portrait 0.85→1 scale & fade, live count-up stats from 0, and editorial motto slide-in.
  - **Portrait Parallax & Float**: Decoupled 3-layer architecture for scroll scrub parallax, gentle mouse-follow parallax on desktop (`quickTo`), and idle floating animation without transform conflicts.
  - **Selected Projects**: ScrollTrigger entrance with heading reveal from left, sequential card stagger, vertical project number reveals, and smooth red glow border transitions on hover.
  - **Education, Skills & Process**: Degree cards gliding in from the left, elastic stagger on technical skill badges, progressive timeline line draw, rotating/scaling process icons, and smooth elevation fade on the crimson philosophy block.
  - **Contact & Footer**: Word-by-word heading reveal, sequential contact channels, workstation perspective entrance, and clean footer fade.
  - **Accessibility & Performance**: Full support for `prefers-reduced-motion`, responsive `gsap.matchMedia()`, hardware-accelerated transforms/opacity (`will-change-transform`), and zero scroll hijacking.
- **Tailwind CSS & Editorial Aesthetics**: Bebas Neue, Space Grotesk, Great Vibes, and Inter Google Fonts with deep charcoal `#080808` and crimson `#E50920` palette.

## 📁 Project Structure

```text
├── index.html                   # HTML entry point with Google Fonts & meta tags
├── package.json                 # Dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind configuration (custom brand colors & fonts)
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration
└── src/
    ├── App.tsx                  # Root application layout with ScrollTrigger refresh
    ├── index.css                # Global Tailwind CSS and utility styles
    ├── main.tsx                 # React entry point
    ├── components/              # Reusable React components with GSAP animations
    │   ├── ContactFooter.tsx
    │   ├── EducationSkillsProcess.tsx
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── ProjectCard.tsx
    │   └── Projects.tsx
    ├── data/
    │   └── portfolioData.ts     # Centralized typed data
    ├── types/
    │   └── index.ts             # TypeScript interfaces and types
    └── utils/
        └── gsapConfig.ts        # GSAP & ScrollTrigger registration and motion helpers
```

## 🛠️ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

### 4. Preview the production build
```bash
npm run preview
```
