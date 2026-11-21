import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { EducationSkillsProcess } from './components/EducationSkillsProcess';
import { ContactFooter } from './components/ContactFooter';
import { ScrollTrigger } from './utils/gsapConfig';

export const App: React.FC = () => {
  useEffect(() => {
    // Prevent mobile address bar resize from creating jarring recalculations
    ScrollTrigger.config({ ignoreMobileResize: true });

    // Refresh ScrollTrigger once web fonts and images are ready
    if (document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white font-body selection:bg-brand-red selection:text-white antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Projects />
        <EducationSkillsProcess />
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;
