import React from 'react';
import { CheckCircle2, Circle, Plus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Tasks = ({ tasks, onToggle, onAdd, onDelete }) => {
  const topTasks = tasks.slice(0, 3);

  return (
    <div className="glass-card flex flex-col h-full animate-slide-up" style={{ animationDelay: '0.1s' }}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Top Priorities</h3>
        <button 
          onClick={onAdd}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-accent-indigo"
        >
          <Plus size={20} />
        </button>
      </div>
      
      <div className="space-y-4 flex-grow">
        <AnimatePresence initial={false}>
          {topTasks.map((task) => (
            <motion.div 
              key={task.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
              onClick={() => onToggle(task.id)}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                {task.completed ? (
                  <CheckCircle2 className="text-accent-emerald flex-shrink-0" size={20} />
                ) : (
                  <Circle className="text-zinc-500 flex-shrink-0" size={20} />
                )}
                <span className={`text-zinc-200 truncate ${task.completed ? 'line-through text-zinc-500' : ''}`}>
                  {task.text}
                </span>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); onDelete(task.id); }}
                className="opacity-0 group-hover:opacity-100 p-1 hover:text-accent-rose transition-all"
              >
                <Trash2 size={16} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {topTasks.length === 0 && (
          <div className="text-zinc-500 text-center py-10 italic">
            No tasks for today. Chill out! 🌴
          </div>
        )}
      </div>
      
      <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-zinc-500 uppercase tracking-widest font-bold">
        <span>{tasks.filter(t => !t.completed).length} Pending</span>
        <button className="hover:text-white transition-colors">View All</button>
      </div>
    </div>
  );
};

export default Tasks;
