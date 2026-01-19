
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { ViewType } from '../App';

interface HeroProps {
  onNavigate: (view: ViewType) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-white pt-28 pb-16 md:pt-44 md:pb-32 overflow-hidden border-b border-slate-50">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-azure/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start animate-in slide-in-from-left duration-700 ease-out order-2 md:order-1">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-azure-light/50 backdrop-blur-sm border border-azure/10 text-azure rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 md:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-azure opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-azure"></span>
              </span>
              {PERSONAL_INFO.role}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.15] mb-6 md:mb-8 tracking-tight font-display text-left">
              Hi, I'm {PERSONAL_INFO.name.split(' ')[0]} <br />
              <span className="text-azure italic">Full Stack & Integration Specialist</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-10 max-w-xl font-medium leading-relaxed text-left">
              Ex-Microsoft Vendor Building <span className="text-slate-900 font-bold underline decoration-azure/30 decoration-4 underline-offset-4">enterprise-grade architectures</span> that connect systems and automate business at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 w-full sm:w-auto mb-12 md:mb-16">
              <button
                onClick={() => onNavigate('projects')}
                className="px-10 py-4 bg-azure text-white rounded-2xl font-bold shadow-2xl shadow-azure/30 hover:bg-azure-dark hover:-translate-y-1 transition-all duration-300 active:scale-95 text-center"
              >
                View Portfolio
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-10 py-4 bg-white text-slate-700 border-2 border-slate-100 rounded-2xl font-bold hover:border-azure/20 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 active:scale-95 text-center"
              >
                Get In Touch
              </button>
            </div>

            <div className="w-full max-w-lg border-t border-slate-100 pt-10">
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">Experience with / Core Stack</p>
               <div className="flex flex-wrap gap-x-8 gap-y-4 grayscale opacity-70 group hover:grayscale-0 hover:opacity-100 transition-all duration-500 items-center">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-slate-900" viewBox="0 0 23 23" fill="currentColor"><path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z"/></svg>
                    <span className="text-sm font-black text-slate-900 uppercase">Microsoft Vendor</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">.NET 9</span>
                  <span className="text-sm font-bold text-slate-900">Azure</span>
                  <span className="text-sm font-bold text-slate-900">Angular</span>
                  <span className="text-sm font-bold text-slate-900">D365 F&O</span>
               </div>
            </div>
          </div>

          {/* Right Column: Image Content */}
          <div className="relative animate-in slide-in-from-right duration-1000 ease-out flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative z-10 w-full max-w-[480px] group">
              {/* Main Image Wrapper */}
              <div className="aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-[10px] md:border-[12px] border-white relative transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src="https://picsum.photos/seed/hafiz_portrait/1000/1000" 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-azure/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Float Badge - Expertise */}
              <div className="absolute -bottom-6 md:-bottom-8 -left-2 md:-left-8 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 border border-white/50 flex items-center gap-4 md:gap-5 hidden sm:flex transform hover:scale-110 transition-transform cursor-default">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-azure rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-azure/30">
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Expertise</p>
                  <p className="text-lg md:text-xl font-extrabold text-slate-800">Full Stack & Integration</p>
                </div>
              </div>

              {/* Experience Stat Overlay */}
              <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-white p-3 md:p-4 px-5 md:px-6 rounded-2xl md:rounded-3xl shadow-xl z-20 border border-slate-50 flex items-center gap-3 hidden md:flex">
                 <span className="text-3xl md:text-4xl font-black text-azure">{PERSONAL_INFO.yearsExperience}</span>
                 <span className="text-[10px] font-bold text-slate-500 uppercase leading-tight text-left">Years<br/>Experience</span>
              </div>

              {/* Background Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-azure/10 rounded-full blur-[120px] -z-10 opacity-60 group-hover:bg-azure/20 transition-colors duration-500"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
