import React from 'react';
import { Command, Github } from 'lucide-react';

const AppHeader = () => {
  return (
    <nav className="w-full flex items-center justify-between py-4 mb-8 border-b border-white/5">
      <div className="flex items-center gap-3 text-white">
        <div className="p-2 bg-accent-indigo/20 rounded-xl border border-accent-indigo/30">
          <Command size={20} className="text-accent-indigo" />
        </div>
        <span className="font-bold tracking-widest text-lg">LIFE <span className="text-zinc-500 font-light">OS</span></span>
      </div>
      <div>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); alert('Github integration ready for deployment link!'); }}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:bg-white/10"
        >
          <Github size={16} />
          <span>Star</span>
        </a>
      </div>
    </nav>
  );
};

export default AppHeader;
