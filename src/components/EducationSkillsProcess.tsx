import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '../utils/gsapConfig';
import { EDUCATION, SKILLS, PROCESS_STEPS, PERSONAL_INFO } from '../data/portfolioData';

export const EducationSkillsProcess: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const colEduRef = useRef<HTMLDivElement>(null);
  const colProcessRef = useRef<HTMLDivElement>(null);
  const colPhilosophyRef = useRef<HTMLDivElement>(null);
  const timelineProgressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // 1. Column 1: Education & Skills ScrollTrigger
      const eduTl = gsap.timeline({
        scrollTrigger: {
          trigger: colEduRef.current,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
        defaults: { ease: 'power3.out' },
      });

      // Heading and Education items reveal from left
      eduTl
        .fromTo(
          '.edu-heading',
          { x: -35, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7 }
        )
        .fromTo(
          '.edu-label',
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          '-=0.4'
        )
        .fromTo(
          '.edu-item',
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.65, stagger: 0.15 },
          '-=0.3'
        )
        .fromTo(
          '.skills-label',
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          '-=0.3'
        )
        // Skills tags animate with stagger
        .fromTo(
          '.skill-tag',
          {
            scale: 0.85,
            y: 12,
            opacity: 0,
          },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.04,
            ease: 'back.out(1.5)',
          },
          '-=0.2'
        );

      // 2. Column 2: Work Process progressive line & step reveal
      const processTl = gsap.timeline({
        scrollTrigger: {
          trigger: colProcessRef.current,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
        defaults: { ease: 'power3.out' },
      });

      processTl
        .fromTo(
          '.process-heading',
          { x: -35, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7 }
        )
        // Progressive draw of timeline line
        .fromTo(
          timelineProgressRef.current,
          { scaleY: 0 },
          { scaleY: 1, duration: 1.2, ease: 'power2.inOut' },
          '-=0.4'
        )
        // Process steps and icons enter
        .fromTo(
          '.process-step-item',
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.16,
          },
          '-=1.1'
        )
        .fromTo(
          '.process-icon-box',
          {
            scale: 0.5,
            rotation: -20,
            opacity: 0,
          },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.16,
            ease: 'back.out(1.7)',
          },
          '-=1.0'
        );

      // 3. Column 3: Philosophy Card smooth fade & entrance
      const philTl = gsap.timeline({
        scrollTrigger: {
          trigger: colPhilosophyRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        defaults: { ease: 'power3.out' },
      });

      philTl
        .fromTo(
          colPhilosophyRef.current,
          {
            y: 35,
            opacity: 0,
            scale: 0.97,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
          }
        )
        .fromTo(
          '.phil-quote-mark',
          { scale: 1.4, opacity: 0 },
          { scale: 1, opacity: 0.5, duration: 0.6, ease: 'power2.out' },
          '-=0.6'
        )
        .fromTo(
          '.phil-quote-text',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          '.phil-signature',
          { x: -15, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo(
          '.phil-callout',
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          '-=0.2'
        );
    },
    { scope: containerRef }
  );

  const renderStepIcon = (icon: string) => {
    switch (icon) {
      case 'search':
        return (
          <svg
            className="w-3.5 h-3.5 text-gray-300 group-hover:text-brand-red transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        );
      case 'bulb':
        return (
          <svg
            className="w-3.5 h-3.5 text-gray-300 group-hover:text-brand-red transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        );
      case 'code':
        return (
          <svg
            className="w-3.5 h-3.5 text-gray-300 group-hover:text-brand-red transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        );
      case 'shield':
        return (
          <svg
            className="w-3.5 h-3.5 text-gray-300 group-hover:text-brand-red transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        );
      case 'rocket':
      default:
        return (
          <svg
            className="w-3.5 h-3.5 text-gray-300 group-hover:text-brand-red transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        );
    }
  };

  return (
    <section
      ref={containerRef}
      className="py-12 sm:py-16 md:py-24 border-b border-[#1E1E1E] overflow-hidden"
      data-purpose="education-skills-process"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* 3-Column Structured Layout - responsive stack on mobile/tablet, 12 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10">
          {/* Column 1: Education & Technical Skills (5 Cols) */}
          <div
            ref={colEduRef}
            className="lg:col-span-5 flex flex-col"
            data-purpose="col-education-skills"
          >
            <h2 className="edu-heading font-display text-xl sm:text-2xl tracking-wider text-white uppercase mb-6 sm:mb-8 border-b border-[#1E1E1E] pb-3 will-change-transform">
              EDUCATION &amp; TECHNICAL SKILLS
            </h2>

            {/* Education Sub-block */}
            <div className="mb-8 sm:mb-10">
              <span className="edu-label font-mono text-xs font-bold text-brand-red uppercase tracking-widest block mb-3 sm:mb-4 will-change-transform">
                EDUCATION
              </span>
              <div className="space-y-4 sm:space-y-5">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="edu-item will-change-transform">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-semibold text-white gap-1">
                      <span>{edu.title}</span>
                      <span className="font-mono text-brand-red text-xs shrink-0">{edu.period}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5 sm:mt-1">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Badges Grid */}
            <div>
              <span className="skills-label font-mono text-xs font-bold text-brand-red uppercase tracking-widest block mb-3 sm:mb-4 will-change-transform">
                SKILLS
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-sm border border-[#2a2a2a] bg-[#0d0d0d] font-mono text-[10px] sm:text-[11px] font-medium tracking-wider text-gray-300 hover:border-brand-red hover:text-white transition-colors cursor-default will-change-transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Work Process (4 Cols) */}
          <div
            ref={colProcessRef}
            className="lg:col-span-4 flex flex-col mt-4 lg:mt-0"
            data-purpose="col-work-process"
          >
            <h2 className="process-heading font-display text-xl sm:text-2xl tracking-wider text-white uppercase mb-6 sm:mb-8 border-b border-[#1E1E1E] pb-3 will-change-transform">
              WORK PROCESS
            </h2>

            {/* Connected Timeline List with real SVG/div progressive line */}
            <div className="relative space-y-5 sm:space-y-6">
              {/* Background static line */}
              <div className="absolute top-[14px] bottom-[14px] left-[17px] w-[1px] bg-[#222222] z-0" />
              {/* Animated drawing progress line */}
              <div
                ref={timelineProgressRef}
                className="absolute top-[14px] bottom-[14px] left-[17px] w-[1px] bg-brand-red z-0 origin-top will-change-transform"
              />

              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="process-step-item relative z-10 flex items-start space-x-3 sm:space-x-3.5 group will-change-transform"
                >
                  <span className="font-mono text-xs font-bold text-brand-red w-4 pt-1 shrink-0">
                    {step.step}
                  </span>
                  <div className="process-icon-box w-7 h-7 rounded-full bg-[#111111] border border-[#2f2f2f] flex items-center justify-center flex-shrink-0 group-hover:border-brand-red transition-colors will-change-transform">
                    {renderStepIcon(step.icon)}
                  </div>
                  <div className="flex-grow pt-0.5">
                    <h3 className="font-mono text-xs font-bold text-brand-red uppercase tracking-wider">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Developer Philosophy Crimson Block (3 Cols) */}
          <div
            ref={colPhilosophyRef}
            className="lg:col-span-3 flex flex-col justify-between bg-gradient-to-b from-[#6b0812] to-[#450309] rounded-sm p-6 sm:p-7 border border-[#850b16] relative overflow-hidden shadow-2xl will-change-transform mt-4 lg:mt-0"
            data-purpose="col-philosophy"
          >
            {/* Subtle Red Texture Glow */}
            <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Giant Quotation Mark Icon */}
              <span className="phil-quote-mark font-serif text-5xl sm:text-6xl text-brand-red/50 leading-none select-none block -mt-2 will-change-transform">
                “
              </span>

              {/* Quote Text */}
              <blockquote className="phil-quote-text text-xs sm:text-sm font-medium text-white/95 leading-relaxed mt-2 will-change-transform">
                {PERSONAL_INFO.philosophy}
              </blockquote>

              {/* Stylized Signature */}
              <div className="mt-6 sm:mt-8">
                <span className="phil-signature script-accent text-2xl sm:text-3xl text-white/90 block will-change-transform">
                  {PERSONAL_INFO.name}
                </span>
              </div>
            </div>

            {/* Bottom Action Callout */}
            <div className="phil-callout mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/10 flex items-center justify-between will-change-transform">
              <span className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase text-white/80 font-bold leading-tight">
                LET&apos;S CREATE
                <br />
                SOMETHING GREAT
                <br />
                TOGETHER.
              </span>
              <span className="text-brand-red text-base font-bold">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
