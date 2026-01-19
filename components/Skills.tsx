
import React from 'react';
import { SkillCategory } from '../types';

interface SkillsProps {
  categories: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ categories }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-azure font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Technical Stack</span>
        <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">Core Expertise & Technologies</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm animate-in fade-in duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
            <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-1.5 h-6 bg-azure rounded-full"></div>
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-3 py-1.5 bg-slate-50 text-slate-600 text-[11px] font-bold uppercase tracking-wider rounded-lg border border-slate-100 hover:border-azure/20 hover:text-azure transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
