
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  // Enhanced helper for semantic highlighting
  const highlightText = (text: string) => {
    const keywords = [".NET", "C#", "Azure", "Dynamics 365", "F&O", "Logic Apps", "Functions", "Power Platform", "Service Bus", "ERP"];
    let parts: React.ReactNode[] = [text];
    
    keywords.forEach(keyword => {
      let newParts: React.ReactNode[] = [];
      parts.forEach(part => {
        if (typeof part === 'string') {
          const regex = new RegExp(`(${keyword})`, 'gi');
          const split = part.split(regex);
          split.forEach((s, i) => {
            if (s.toLowerCase() === keyword.toLowerCase()) {
              newParts.push(<span key={`${keyword}-${i}`} className="text-slate-900 font-bold decoration-azure/30 underline decoration-2 underline-offset-2">{s}</span>);
            } else {
              newParts.push(s);
            }
          });
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });
    return parts;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header with improved spacing */}
      <div className="mb-20 md:mb-32 text-center lg:text-left">
        <span className="text-azure font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Professional Profile</span>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
          Architecting systems that <br className="hidden lg:block" />
          <span className="text-azure italic">actually scale.</span>
        </h3>
      </div>

      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left Column: Core Values & Full Stack Ecosystem */}
        <div className="lg:col-span-5 space-y-8">
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-azure/10 rounded-full"></div>
            <p className="pl-8 text-xl md:text-2xl font-medium text-slate-600 leading-relaxed italic">
              "{PERSONAL_INFO.summary}"
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Architecture", val: "Cloud-Native" },
              { label: "Mindset", val: "Performance First" },
              { label: "Methodology", val: "DDD & Clean Code" },
              { label: "Leadership", val: "Owner Mentality" }
            ].map((stat, i) => (
              <div key={i} className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-sm font-bold text-slate-900">{stat.val}</p>
              </div>
            ))}
          </div>

          {/* Full Stack Ecosystem Card */}
          <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-azure/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-azure/20 transition-colors"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-azure flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-azure-light">Full Stack DNA</h4>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase w-16">Frontend</span>
                  <div className="flex-grow h-px bg-slate-700"></div>
                  <span className="text-xs font-bold bg-white/5 px-3 py-1 rounded-full">Angular / TS</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase w-16">Backend</span>
                  <div className="flex-grow h-px bg-slate-700"></div>
                  <span className="text-xs font-bold bg-white/5 px-3 py-1 rounded-full">.NET 9 / C#</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase w-16">Platform</span>
                  <div className="flex-grow h-px bg-slate-700"></div>
                  <span className="text-xs font-bold bg-azure/20 text-azure-light px-3 py-1 rounded-full">Azure Cloud</span>
                </div>
              </div>

              <p className="text-sm text-slate-400 font-medium leading-relaxed">
                I specialize in bridging high-fidelity user interfaces with complex enterprise business logic, ensuring a <span className="text-white font-bold">seamless and highly reliable system integration.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Experience Chapters */}
        <div className="lg:col-span-7">
          <div className="space-y-12">
            {/* Chapter 1 */}
            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex-none w-8 h-8 rounded-lg bg-azure/10 text-azure flex items-center justify-center font-bold text-sm">01</span>
                <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wider">Cloud-Native Integration</h4>
              </div>
              <p className="text-slate-600 leading-[1.8] text-lg font-medium">
                {highlightText("I focus on creating secure, resilient, and maintainable integration architectures using Azure Logic Apps, Functions, and Service Bus.")}
              </p>
            </div>

            {/* Chapter 2 */}
            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex-none w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">02</span>
                <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wider">Enterprise Ecosystems</h4>
              </div>
              <p className="text-slate-600 leading-[1.8] text-lg font-medium">
                {highlightText("My work bridges the gap between ERP ecosystems like Dynamics 365 F&O and external applications. I design high-performance API and file-based data synchronizations.")}
              </p>
            </div>

            {/* Chapter 3 */}
            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex-none w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm">03</span>
                <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wider">Automation & Delivery</h4>
              </div>
              <p className="text-slate-600 leading-[1.8] text-lg font-medium">
                {highlightText("I leverage the Power Platform to build intelligent Canvas and Model-Driven apps that streamline modern workflows, combined with a problem-solving mindset and consistent ownership.")}
              </p>
            </div>

            <div className="p-8 bg-slate-900 rounded-3xl text-white shadow-2xl shadow-slate-200">
               <p className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-[0.2em]">Operational Standard</p>
               <p className="text-xl font-bold leading-relaxed">
                 Every system I build is backed by <span className="text-azure-light">Application Insights</span> for total observability and <span className="text-azure-light">Key Vault</span> for enterprise-grade security.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
