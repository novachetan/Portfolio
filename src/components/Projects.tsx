import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '../utils/gsapConfig';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const viewAllRef = useRef<HTMLAnchorElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
        defaults: { ease: 'power3.out' },
      });

      // Section heading reveals from left
      tl.fromTo(
        headingRef.current,
        {
          x: -35,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
        }
      )
        .fromTo(
          viewAllRef.current,
          {
            x: 20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
          },
          '-=0.6'
        )

        // Project cards animate upward sequentially
        .fromTo(
          '.project-card-item',
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.16,
            ease: 'power3.out',
          },
          '-=0.4'
        )

        // Project numbers reveal vertically
        .fromTo(
          '.project-num',
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.16,
            ease: 'power4.out',
          },
          '-=0.7'
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-12 sm:py-16 md:py-20 border-b border-[#1E1E1E] overflow-hidden"
      data-purpose="selected-projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading Row - responsive flex layout */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-[#1E1E1E] mb-8 sm:mb-10">
          <h2
            ref={headingRef}
            className="font-display text-2xl sm:text-3xl tracking-wider text-white uppercase will-change-transform"
          >
            SELECTED PROJECTS
          </h2>
          <a
            ref={viewAllRef}
            className="group inline-flex items-center space-x-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-150 will-change-transform self-start sm:self-auto"
            href="#projects"
          >
            <span>VIEW ALL PROJECTS</span>
            <span
              className="group-hover:translate-x-1 transition-transform duration-150 text-brand-red font-bold"
              aria-hidden="true"
            >
              ➔
            </span>
          </a>
        </div>

        {/* Projects 3-Card Grid - responsive 1-col on mobile, 2-col on tablet, 3-col on desktop */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className={idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
