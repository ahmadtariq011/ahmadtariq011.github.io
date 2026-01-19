
import React from 'react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 md:mb-24">
        <span className="text-azure font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Portfolio</span>
        <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">Recent Projects & Case Studies</h3>
      </div>

      <div className="space-y-20 md:space-y-40">
        {projects.map((project, idx) => (
          <div key={project.id} className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1 w-full aspect-video rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 bg-slate-100">
               <img 
                 src={project.imageUrl} 
                 alt={project.name} 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
            </div>
            
            <div className="flex-1 space-y-6 md:space-y-8 animate-in slide-in-from-bottom duration-500">
              <div className="space-y-2">
                <span className="text-azure font-bold text-xs uppercase tracking-widest">{project.role}</span>
                <h4 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{project.name}</h4>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">The Challenge</h5>
                  <p className="text-slate-600 font-medium italic">"{project.problem}"</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-azure-light text-azure text-[10px] font-bold rounded-lg uppercase tracking-wider border border-azure/10">
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Enterprise Solution</h5>
                  <p className="text-slate-700 leading-relaxed font-medium text-sm md:text-base">{project.solution}</p>
                </div>

                <div className="p-5 md:p-6 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl">
                  <h5 className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Business Impact</h5>
                  <p className="text-emerald-800 font-bold text-sm md:text-base">{project.impact}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
