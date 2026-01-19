
import React from 'react';
import { Achievement } from '../types';

interface AchievementsProps {
  items: Achievement[];
}

const Achievements: React.FC<AchievementsProps> = ({ items }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-azure font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Accolades</span>
        <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">Certifications & Recognition</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm text-center flex flex-col items-center animate-in zoom-in duration-500" style={{ animationDelay: `${idx * 150}ms` }}>
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-azure mb-8 shadow-inner">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h4>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
