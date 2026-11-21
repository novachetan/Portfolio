import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '../utils/gsapConfig';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const workstationImgRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        defaults: { ease: 'power3.out' },
      });

      // 1. Badge & Word-by-word heading reveal
      tl.fromTo(
        '.contact-badge',
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      )
        .fromTo(
          '.contact-word',
          {
            yPercent: 110,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power4.out',
          },
          '-=0.3'
        )

        // 2. Subtitle paragraph and CTA button
        .fromTo(
          '.contact-cta-elem',
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.14,
          },
          '-=0.5'
        )

        // 3. Contact information channels appear sequentially
        .fromTo(
          '.contact-channel-item',
          {
            x: -25,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
          },
          '-=0.6'
        )

        // 4. Laptop workstation card enters with subtle upward movement
        .fromTo(
          '.workstation-card',
          {
            y: 45,
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
          },
          '-=0.7'
        )

        // 5. Footer copyright bar elements fade in smoothly
        .fromTo(
          '.footer-bar-elem',
          {
            y: 15,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
          },
          '-=0.4'
        );

      // Subtle scroll scrub for workstation image depth
      if (workstationImgRef.current && footerRef.current) {
        gsap.to(workstationImgRef.current, {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 1.2,
          },
        });
      }
    },
    { scope: footerRef }
  );

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="pt-12 sm:pt-16 pb-10 sm:pb-12 bg-[#050505] overflow-hidden"
      data-purpose="contact-and-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Row: Contact Details & Desk Setup */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center pb-10 sm:pb-14 border-b border-[#1E1E1E]">
          {/* Left: Work Together Call To Action (4 Cols) */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col items-start" data-purpose="contact-cta">
            <div className="contact-badge flex items-center space-x-2 text-brand-red mb-2 will-change-transform">
              <span className="text-xs">✦</span>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold">
                GET IN TOUCH
              </span>
            </div>

            {/* Word by word heading reveal */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase leading-none text-white mb-3 sm:mb-4">
              <span className="block overflow-hidden">
                <span className="contact-word inline-block will-change-transform">
                  LET&apos;S
                </span>{' '}
                <span className="contact-word inline-block will-change-transform">
                  WORK
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="contact-word inline-block will-change-transform">
                  TOGETHER
                </span>
              </span>
            </h2>

            <p className="contact-cta-elem text-xs sm:text-sm text-gray-400 font-normal mb-5 sm:mb-6 max-w-sm will-change-transform">
              I&apos;m currently open for new projects, engineering internships, and full-time opportunities. Let&apos;s create something amazing that drives real results.
            </p>

            {/* Contact Action Button */}
            <div className="contact-cta-elem will-change-transform">
              <a
                className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-full bg-brand-red hover:bg-red-700 text-white font-mono text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-semibold transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-red"
                href={`mailto:${PERSONAL_INFO.email}`}
              >
                <span>AVAILABLE FOR OPPORTUNITIES</span>
                <span className="text-sm" aria-hidden="true">
                  ➔
                </span>
              </a>
            </div>
          </div>

          {/* Center: Contact Channel Info Links (4 Cols) */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col space-y-3.5 sm:space-y-4" data-purpose="contact-links">
            {/* Email Link */}
            <a
              className="contact-channel-item group flex items-center space-x-3 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors cursor-pointer will-change-transform"
              href={`mailto:${PERSONAL_INFO.email}`}
              onClick={handleCopyEmail}
              title="Click to copy email address"
            >
              <div className="w-8 h-8 rounded border border-[#2a2a2a] bg-[#111111] flex items-center justify-center text-brand-red group-hover:border-brand-red transition-colors shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <span className="font-mono truncate">{PERSONAL_INFO.email}</span>
              {copied && (
                <span className="text-[10px] font-mono text-brand-red bg-[#1a0a0c] px-2 py-0.5 rounded border border-brand-red/30 shrink-0">
                  Copied!
                </span>
              )}
            </a>

            {/* Portfolio / GitHub Link */}
            <a
              className="contact-channel-item group flex items-center space-x-3 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors will-change-transform"
              href={PERSONAL_INFO.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="w-8 h-8 rounded border border-[#2a2a2a] bg-[#111111] flex items-center justify-center text-brand-red group-hover:border-brand-red transition-colors shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
                  <path
                    d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <span className="font-mono truncate">{PERSONAL_INFO.githubDisplay}</span>
            </a>

            {/* LinkedIn Link */}
            <a
              className="contact-channel-item group flex items-center space-x-3 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors will-change-transform"
              href={PERSONAL_INFO.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="w-8 h-8 rounded border border-[#2a2a2a] bg-[#111111] flex items-center justify-center text-brand-red group-hover:border-brand-red transition-colors shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
              </div>
              <span className="font-mono truncate">{PERSONAL_INFO.linkedinDisplay}</span>
            </a>

            {/* Location Info */}
            <div className="contact-channel-item flex items-center space-x-3 text-xs sm:text-sm text-gray-400 will-change-transform">
              <div className="w-8 h-8 rounded border border-[#2a2a2a] bg-[#111111] flex items-center justify-center text-brand-red shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <span className="font-mono truncate">{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Right: Studio Workstation Setup Image (4 Cols) */}
          <div
            className="workstation-card col-span-1 md:col-span-12 lg:col-span-4 max-w-md md:max-w-none mx-auto lg:mx-0 w-full overflow-hidden rounded border border-[#222222] shadow-xl group will-change-transform mt-4 lg:mt-0"
            data-purpose="workstation-preview"
          >
            <div className="relative w-full aspect-[4/3] bg-black overflow-hidden">
              <img
                ref={workstationImgRef}
                alt="Realistic premium studio photograph of a modern sleek open laptop on a dark matte graphite desk with a glowing developer code and portfolio screen, subtle warm and red ambient rim lighting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110 will-change-transform"
                src={PERSONAL_INFO.workstationImage}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-gray-400">
                <span className="text-white font-semibold">DEV WORKSPACE</span>
                <span className="text-brand-red">● ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Rights */}
        <div
          className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-3 sm:gap-4"
          data-purpose="copyright-bar"
        >
          <p className="footer-bar-elem font-mono text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-wider will-change-transform">
            © {new Date().getFullYear()} {PERSONAL_INFO.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </p>
          <div className="footer-bar-elem flex items-center space-x-6 font-mono text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-widest will-change-transform">
            <a
              className="hover:text-brand-red transition-colors cursor-pointer py-1"
              href="#top"
              onClick={scrollToTop}
            >
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
