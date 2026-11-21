import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '../utils/gsapConfig';
import { HERO_STATS, PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const bgTitleRef = useRef<HTMLHeadingElement>(null);
  const greetingRef = useRef<HTMLSpanElement>(null);
  const roleRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const collabBadgeRef = useRef<HTMLDivElement>(null);
  const mottoRef = useRef<HTMLDivElement>(null);
  const portraitScrollRef = useRef<HTMLDivElement>(null);
  const portraitMouseRef = useRef<HTMLDivElement>(null);
  const portraitFloatRef = useRef<HTMLDivElement>(null);
  const portraitImgRef = useRef<HTMLImageElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const statValRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        delay: 0.15,
        defaults: { ease: 'power3.out' },
      });

      // 1. Background PORTFOLIO typography reveals using clip-path
      tl.fromTo(
        bgTitleRef.current,
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          opacity: 0,
          scale: 1.04,
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 0.9,
          scale: 1,
          duration: 1.3,
          ease: 'power4.out',
        }
      )

      // 2. The greeting "Hello, I'm" appears with a handwritten-style reveal
      .fromTo(
        greetingRef.current,
        {
          opacity: 0,
          x: -25,
          clipPath: 'inset(0% 100% 0% 0%)',
        },
        {
          opacity: 1,
          x: 0,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.7'
      )

      // 3. CHETAN PAWAR reveals line by line
      .fromTo(
        '.hero-name-line',
        {
          yPercent: 110,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.14,
          ease: 'power4.out',
        },
        '-=0.6'
      )

      // 4. Developer role slides upward
      .fromTo(
        roleRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        },
        '-=0.5'
      )

      // 5. Description fades in
      .fromTo(
        [bioRef.current, collabBadgeRef.current],
        {
          y: 18,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
        },
        '-=0.4'
      )

      // 6. Portrait smoothly scales from 0.85 to 1 with opacity transition
      .fromTo(
        portraitImgRef.current,
        {
          scale: 0.85,
          opacity: 0,
          y: 35,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
        },
        '-=1.0'
      )

      // 7. Right-side description enters with subtle horizontal movement
      .fromTo(
        mottoRef.current,
        {
          x: 35,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
        },
        '-=0.8'
      )

      // 8. Statistics container entrance & count upward from zero
      .fromTo(
        statsContainerRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
        },
        '-=0.6'
      );

      // Numeric count-up animation for stats
      const targetNumbers = [15, 12, 3];
      statValRefs.current.forEach((el, idx) => {
        if (!el) return;
        const target = targetNumbers[idx] ?? 10;
        const counter = { val: 0 };
        tl.to(
          counter,
          {
            val: target,
            duration: 1.4,
            ease: 'power2.out',
            snap: { val: 1 },
            onUpdate: () => {
              el.innerText = `${counter.val}+`;
            },
          },
          '-=0.6'
        );
      });

      // SECTION 3: Portrait Effects (Float, Scroll parallax, Mouse parallax)
      const mm = gsap.matchMedia();

      // Desktop & large screens
      mm.add('(min-width: 768px)', () => {
        // Idle floating animation
        if (portraitFloatRef.current) {
          gsap.to(portraitFloatRef.current, {
            y: -12,
            duration: 3.6,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          });
        }

        // Subtle scroll-based vertical movement
        if (portraitScrollRef.current && heroRef.current) {
          gsap.to(portraitScrollRef.current, {
            yPercent: 14,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2,
            },
          });
        }

        // Gentle mouse-follow parallax
        if (portraitMouseRef.current && heroRef.current) {
          const heroEl = heroRef.current;
          const xTo = gsap.quickTo(portraitMouseRef.current, 'x', {
            duration: 0.9,
            ease: 'power2.out',
          });
          const yTo = gsap.quickTo(portraitMouseRef.current, 'y', {
            duration: 0.9,
            ease: 'power2.out',
          });

          const handleMouseMove = (e: MouseEvent) => {
            const rect = heroEl.getBoundingClientRect();
            const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
            const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
            // subtle bounded parallax (max 14px)
            xTo(relX * 14);
            yTo(relY * 10);
          };

          const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
          };

          heroEl.addEventListener('mousemove', handleMouseMove);
          heroEl.addEventListener('mouseleave', handleMouseLeave);

          return () => {
            heroEl.removeEventListener('mousemove', handleMouseMove);
            heroEl.removeEventListener('mouseleave', handleMouseLeave);
          };
        }
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative w-full pt-4 pb-14 sm:pt-8 sm:pb-20 md:pt-10 md:pb-28 overflow-hidden border-b border-[#1a1a1a]"
      data-purpose="hero-section"
    >
      {/* Mega Background Word "PORTFOLIO" */}
      <div
        className="absolute top-2 left-0 right-0 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <h1
          ref={bgTitleRef}
          className="font-hero-portfolio text-[22vw] text-brand-red font-black tracking-normal leading-none opacity-90 drop-shadow-[0_15px_35px_rgba(229,9,32,0.18)] will-change-transform"
        >
          PORTFOLIO
        </h1>
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 min-h-[520px] sm:min-h-[580px] lg:min-h-[700px] flex flex-col justify-between">
        {/* Center Portrait Component - responsive scaling and opacity layering */}
        <div
          ref={portraitScrollRef}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[320px] sm:max-w-[420px] md:max-w-[490px] lg:max-w-[540px] pointer-events-none z-10 flex justify-center will-change-transform opacity-30 sm:opacity-50 lg:opacity-100 transition-opacity duration-300"
          data-purpose="hero-portrait"
        >
          <div ref={portraitMouseRef} className="w-full flex justify-center will-change-transform">
            <div ref={portraitFloatRef} className="w-full flex justify-center will-change-transform">
              <img
                ref={portraitImgRef}
                alt={`Portrait of ${PERSONAL_INFO.name} in a black suit`}
                className="w-full h-auto object-cover object-top hero-portrait-fade filter contrast-110 drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] will-change-transform"
                src={PERSONAL_INFO.portraitImage}
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Hero Two-Sided Foreground Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end relative z-20 pt-20 sm:pt-28 lg:pt-36">
          {/* Left Side: Bio & Personal Info */}
          <div className="lg:col-span-5 flex flex-col justify-end" data-purpose="hero-left-col">
            {/* Script Greeting (in clean white) */}
            <span
              ref={greetingRef}
              className="script-accent text-white text-2xl sm:text-3xl lg:text-4xl -mb-1 sm:-mb-2 block select-none will-change-transform"
            >
              Hello, I&apos;m
            </span>

            {/* Developer Name - line by line reveal with responsive sizing */}
            <h2 className="font-display text-5xl xs:text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.88] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              <span className="block overflow-hidden">
                <span className="hero-name-line block will-change-transform">CHETAN</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-name-line block will-change-transform">PAWAR</span>
              </span>
            </h2>

            {/* Role Label */}
            <h3
              ref={roleRef}
              className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-red mt-3 sm:mt-4 mb-2.5 sm:mb-3 will-change-transform"
            >
              {PERSONAL_INFO.headline}
            </h3>

            {/* Bio Paragraph */}
            <p
              ref={bioRef}
              className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed max-w-sm mb-5 sm:mb-6 will-change-transform"
            >
              {PERSONAL_INFO.bio}
            </p>

            {/* Worldwide / Collab Badge */}
            <div
              ref={collabBadgeRef}
              className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono tracking-wider text-gray-400 uppercase will-change-transform"
            >
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-red flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="1.5"></circle>
                <path
                  d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  strokeWidth="1.5"
                ></path>
              </svg>
              <span>AVAILABLE FOR COLLABORATION</span>
            </div>

            {/* Stats Row - responsive 3-column / flex */}
            <div
              ref={statsContainerRef}
              className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-6 lg:gap-8 border-t border-[#222222] pt-5 sm:pt-6 mt-5 sm:mt-6 will-change-transform"
              data-purpose="hero-stats"
            >
              {HERO_STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2.5 lg:space-x-3">
                  <span
                    ref={(el) => {
                      statValRefs.current[idx] = el;
                    }}
                    className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-brand-red font-black leading-none will-change-contents"
                  >
                    0+
                  </span>
                  <div className="font-mono text-[8px] sm:text-[9px] lg:text-[10px] uppercase text-gray-400 leading-tight tracking-wider mt-1 sm:mt-0">
                    {stat.labelTop}
                    <br />
                    {stat.labelBottom}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Spacer for Desktop Alignment */}
          <div className="hidden lg:block lg:col-span-3" aria-hidden="true"></div>

          {/* Right Side: Motto */}
          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end mt-4 lg:mt-0" data-purpose="hero-right-col">
            <div
              ref={mottoRef}
              className="flex items-start space-x-2.5 max-w-xs mb-4 lg:mb-10 lg:text-left will-change-transform"
            >
              <span className="text-brand-red text-base mt-0.5">✦</span>
              <p className="font-mono text-xs text-gray-300 leading-snug">
                {PERSONAL_INFO.motto}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
