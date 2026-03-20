import React, { useState, useEffect } from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const DailyFocus = ({ focus, onChange }) => {
  const [isEditing, setIsEditing] = useState(!focus);
  const [tempText, setTempText] = useState(focus || '');

  // Reset temp text if the actual focus prop changes externally
  useEffect(() => {
    setTempText(focus || '');
    if (!focus) setIsEditing(true);
  }, [focus]);

  const handleSave = () => {
    if (tempText.trim()) {
      onChange(tempText);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
  };

  return (
    <div className="glass-card mb-6 animate-slide-up relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-accent-rose"></div>
      
      <div className="flex flex-col md:flex-row items-center gap-4 py-2">
        <Target className="text-accent-rose shrink-0" size={32} />
        
        <div className="flex-grow w-full text-center md:text-left">
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-1">Main Focus for Today</p>
          
          {isEditing ? (
            <input
              type="text"
              className="w-full bg-transparent border-b border-accent-rose/50 focus:border-accent-rose text-2xl md:text-3xl font-bold text-white outline-none pb-1 transition-colors text-center md:text-left"
              placeholder="What is the ONE thing you need to do?"
              value={tempText}
              onChange={(e) => setTempText(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              onBlur={handleSave}
            />
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="group/focus flex items-center justify-center md:justify-start gap-3 cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white hover:text-accent-rose transition-colors">{focus}</h2>
            </motion.div>
          )}
        </div>
        
        {!isEditing && focus && (
          <button 
            onClick={() => { onChange(''); setIsEditing(true); }}
            className="md:opacity-0 group-hover:opacity-100 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all text-accent-emerald shrink-0"
            title="Mark Focus as Complete"
          >
            <CheckCircle2 size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default DailyFocus;
