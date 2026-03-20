import React from 'react';
import { StickyNote, Trash2 } from 'lucide-react';

const Notes = ({ notes, onChange, onClear }) => {
  return (
    <div className="glass-card flex flex-col h-full animate-slide-up" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Brain Dump</h3>
        <div className="flex gap-2">
          <button 
            onClick={onClear}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-500 hover:text-accent-rose"
          >
            <Trash2 size={18} />
          </button>
          <StickyNote className="text-accent-rose" size={24} />
        </div>
      </div>

      <textarea 
        value={notes}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write anything..."
        className="flex-grow bg-transparent border-none focus:ring-0 text-zinc-300 resize-none font-sans text-lg leading-relaxed placeholder:text-zinc-600 custom-scrollbar"
      />
      
      <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
        <span>Cloud Sync Active</span>
        <span>{notes.length} Characters</span>
      </div>
    </div>
  );
};

export default Notes;
