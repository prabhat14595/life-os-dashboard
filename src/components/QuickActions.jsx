import React, { useState } from 'react';
import { Plus, X, ListTodo, Wallet, StickyNote, Activity, Link2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QuickActions = ({ onAction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { id: 'task', label: 'Add Task', icon: ListTodo, color: 'bg-accent-indigo' },
    { id: 'expense', label: 'Add Expense', icon: Wallet, color: 'bg-accent-emerald' },
    { id: 'note', label: 'Add Note', icon: StickyNote, color: 'bg-accent-rose' },
    { id: 'link', label: 'Add Link', icon: Link2, color: 'bg-orange-500' },
    { id: 'habit', label: 'Add Habit', icon: Activity, color: 'bg-accent-violet' },
  ];

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-64 glass p-4 rounded-3xl"
          >
            <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-4 px-2">Quick Commands</h4>
            <div className="space-y-2">
              {actions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => {
                    onAction(action.id);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center gap-4 p-3 hover:bg-white/5 rounded-2xl transition-all group"
                >
                  <div className={`${action.color} p-2 rounded-xl shadow-lg shadow-${action.id === 'task' ? 'indigo' : action.id === 'expense' ? 'emerald' : action.id === 'note' ? 'rose' : 'violet'}-500/20 group-hover:scale-110 transition-transform`}>
                    <action.icon size={18} className="text-white" />
                  </div>
                  <span className="text-zinc-200 font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all ${
          isOpen ? 'bg-zinc-800 rotate-45' : 'bg-accent-indigo hover:scale-110 active:scale-95'
        }`}
      >
        {isOpen ? <X className="text-white" /> : <Plus className="text-white" size={32} />}
      </button>
    </div>
  );
};

export default QuickActions;
