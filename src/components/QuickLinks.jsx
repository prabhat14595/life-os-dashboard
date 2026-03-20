import React from 'react';
import { Link2, Plus, Trash2, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QuickLinks = ({ links, onAddLink, onDeleteLink }) => {
  return (
    <div className="glass-card flex flex-col h-full animate-slide-up" style={{ animationDelay: '0.35s' }}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Quick Links</h3>
        <button 
          onClick={onAddLink}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-accent-indigo"
          title="Add Bookmark"
        >
          <Plus size={20} />
        </button>
      </div>

      <div className="space-y-3 flex-grow overflow-y-auto custom-scrollbar pr-2">
        <AnimatePresence initial={false}>
          {links.map((link) => {
            // Try to extract a clean domain for the fallback icon
            let domain = 'O';
            try {
              domain = new URL(link.url).hostname.replace('www.', '').charAt(0).toUpperCase();
            } catch (e) {
              domain = link.title.charAt(0).toUpperCase();
            }

            return (
              <motion.div 
                key={link.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, height: 0, marginBottom: 0 }}
                className="group relative flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                style={{ overflow: 'hidden' }}
              >
                <a 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 flex-grow overflow-hidden"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-zinc-300">{domain}</span>
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-zinc-200 font-medium truncate text-sm">{link.title}</span>
                    <span className="text-zinc-500 text-[10px] truncate">{link.url.replace(/^https?:\/\//, '')}</span>
                  </div>
                </a>
                
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                  <button 
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); onDeleteLink(link.id); }}
                    className="p-1.5 text-zinc-400 hover:text-accent-rose transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {links.length === 0 && (
          <div className="text-center py-8 opacity-50 flex flex-col items-center">
            <Link2 size={32} className="mb-2 text-zinc-500" />
            <p className="text-sm">No links saved yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickLinks;
