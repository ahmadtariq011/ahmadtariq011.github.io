
import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  items: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ items }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <span className="text-azure font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Career Journey</span>
        <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight font-display">Professional Experience</h3>
      </div>

      <div className="relative">
        {/* Central Vertical Line (Desktop) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block"></div>
        {/* Mobile Left Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 md:hidden"></div>

        <div className="space-y-16">
          {items.map((item, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-azure shadow-lg z-10"></div>
              
              <div className="w-full md:w-[45%] pl-12 md:pl-0">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                  <div className="flex justify-between items-start mb-4 gap-4 flex-wrap">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 font-display">{item.role}</h4>
                      <p className="text-azure font-bold text-sm">{item.company}</p>
                    </div>
                    <span className="px-4 py-1.5 bg-slate-50 text-slate-500 rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-slate-100">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        #{tag.replace(/\s/g, '')}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Spacer for desktop layout */}
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
