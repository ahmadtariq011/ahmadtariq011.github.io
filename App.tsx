
import React, { useState, useEffect } from 'react';
import { SKILL_CATEGORIES, PROJECTS, ACHIEVEMENTS, RECOMMENDATIONS, EXPERIENCE } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Recommendations from './components/Recommendations';
import Contact from './components/Contact';
import Footer from './components/Footer';

export type ViewType = 'home' | 'projects' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as ViewType;
    if (['home', 'projects', 'contact'].includes(hash)) {
      setCurrentView(hash);
    }
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <div className="animate-in fade-in duration-700 fill-mode-both">
            <Hero onNavigate={handleNavigate} />
            <section id="about" className="py-20 md:py-32 bg-white border-b border-slate-100">
              <About />
            </section>
            <section id="experience" className="py-20 md:py-32 bg-slate-50 border-b border-slate-100">
              <Experience items={EXPERIENCE} />
            </section>
            <section id="skills" className="py-20 md:py-32 bg-white border-b border-slate-100">
              <Skills categories={SKILL_CATEGORIES} />
            </section>
            <section id="achievements" className="py-20 md:py-32 bg-slate-50 border-b border-slate-100">
              <Achievements items={ACHIEVEMENTS} />
            </section>
            <section id="recommendations" className="py-20 md:py-32 bg-white border-b border-slate-100">
              <Recommendations items={RECOMMENDATIONS} />
            </section>
          </div>
        );
      case 'projects':
        return (
          <div className="py-28 md:py-40 bg-white animate-in fade-in duration-700 fill-mode-both">
            <Projects projects={PROJECTS} />
          </div>
        );
      case 'contact':
        return (
          <div className="bg-slate-900 py-28 md:py-40 min-h-screen flex items-center animate-in fade-in duration-700 fill-mode-both">
            <Contact />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-azure selection:text-white">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
