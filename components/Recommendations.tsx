
import React from 'react';
import { Recommendation } from '../types';
import { PERSONAL_INFO } from '../constants';

interface RecommendationsProps {
  items: Recommendation[];
}

const Recommendations: React.FC<RecommendationsProps> = ({ items }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-azure font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Social Proof</span>
        <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">Professional Endorsements</h3>
        <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto">
          Direct feedback from industry leaders and colleagues regarding my technical delivery and professional impact.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
          >
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-slate-100 group-hover:text-azure/10 transition-colors">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="flex-grow">
              <div className="inline-block px-3 py-1 bg-azure/5 text-azure text-[10px] font-black uppercase tracking-widest rounded-full mb-6 border border-azure/10">
                {item.tag}
              </div>
              <p className="text-slate-600 leading-relaxed font-medium italic mb-8 relative z-10">
                "{item.content}"
              </p>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
              <div className="flex-grow">
                <h4 className="text-sm font-bold text-slate-900 leading-tight">{item.name}</h4>
                <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">{item.role} @ {item.company}</p>
              </div>
              <div className="text-[#0A66C2]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a 
          href={PERSONAL_INFO.recommendationsLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-azure font-bold text-sm hover:underline"
        >
          View all endorsements on LinkedIn
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Recommendations;
