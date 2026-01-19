
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { ViewType } from '../App';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const navLinks: { name: string; id: ViewType }[] = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-slate-900 cursor-pointer" onClick={() => onNavigate('home')}>
          {PERSONAL_INFO.name.split(' ')[0]}<span className="text-azure">.</span>dev
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-sm font-semibold transition-colors relative pb-1 ${
                currentView === link.id ? 'text-azure after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-azure after:rounded-full' : 'text-slate-600 hover:text-azure'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => onNavigate('contact')}
            className="ml-4 px-6 py-2.5 bg-azure text-white rounded-xl font-bold hover:bg-azure-dark transition-all transform hover:-translate-y-0.5 shadow-lg shadow-azure/20"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
