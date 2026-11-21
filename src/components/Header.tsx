import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '../utils/gsapConfig';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headerRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          logoRef.current,
          { x: -15, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          '-=0.4'
        )
        .fromTo(
          badgeRef.current,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5 },
          '-=0.3'
        );
    },
    { scope: headerRef }
  );

  return (
    <header
      ref={headerRef}
      className="w-full border-b border-[#1E1E1E] bg-[#080808]/90 backdrop-blur-md sticky top-0 z-50 will-change-transform"
      data-purpose="site-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-3">
        {/* Brand Logo / Identity */}
        <a
          ref={logoRef}
          href="#"
          className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-sm"
          aria-label={`${PERSONAL_INFO.name} Portfolio Home`}
        >
          <span className="font-display text-xl sm:text-2xl tracking-widest text-white group-hover:text-brand-red transition-colors duration-200">
            {PERSONAL_INFO.displayInitials}
          </span>
          <span className="font-mono text-[8px] sm:text-[9px] tracking-widestPlus text-brand-grayMuted uppercase font-semibold">
            {PERSONAL_INFO.role}
          </span>
        </a>

        {/* Availability Beacon Badge - responsive text */}
        <div
          ref={badgeRef}
          className="flex items-center space-x-2 sm:space-x-2.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-[#222222] bg-[#111111]/80 shadow-sm shrink-0"
          data-purpose="status-badge"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
          </span>
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest font-medium text-gray-300">
            <span className="hidden sm:inline">Available For Opportunities</span>
            <span className="sm:hidden">Available</span>
          </span>
        </div>
      </div>
    </header>
  );
};
