import React from 'react';
import { Heart } from 'lucide-react';

const AppFooter = () => {
  return (
    <footer className="mt-20 pt-8 pb-4 border-t border-white/5 text-center flex flex-col items-center gap-2">
      <p className="flex items-center justify-center gap-2 text-zinc-400 text-sm">
        Built with <Heart size={14} className="text-accent-rose animate-pulse" fill="currentColor" /> for productivity.
      </p>
      <p className="text-xs text-zinc-600 font-medium">
        Your data never leaves your device. Local storage only.
      </p>
      <p className="mt-4 text-[10px] uppercase tracking-widest text-zinc-700 font-bold">
        &copy; {new Date().getFullYear()} Life OS. All rights reserved.
      </p>
    </footer>
  );
};

export default AppFooter;
