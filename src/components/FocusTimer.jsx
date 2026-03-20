import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Timer } from 'lucide-react';

const WORK_TIME = 25 * 60; // 25 minutes
const BREAK_TIME = 5 * 60;  // 5 minutes

const FocusTimer = () => {
  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isActive, setIsActive] = useState(false);
  const [isWork, setIsWork] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      // Auto-switch mode when timer ends
      const nextIsWork = !isWork;
      setIsWork(nextIsWork);
      setTimeLeft(nextIsWork ? WORK_TIME : BREAK_TIME);
      setIsActive(false);
      // Optional: Play a sound here
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, isWork]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(isWork ? WORK_TIME : BREAK_TIME);
  };

  const switchMode = (mode) => {
    setIsWork(mode === 'work');
    setIsActive(false);
    setTimeLeft(mode === 'work' ? WORK_TIME : BREAK_TIME);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  const totalTime = isWork ? WORK_TIME : BREAK_TIME;
  const progressPercent = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <div className="glass-card animate-slide-up relative overflow-hidden h-full flex flex-col" style={{ animationDelay: '0.15s' }}>
      {/* Background progress indicator */}
      <div 
        className={`absolute bottom-0 left-0 w-full opacity-10 transition-all duration-1000 ease-linear ${isWork ? 'bg-accent-indigo' : 'bg-accent-emerald'}`}
        style={{ height: `${progressPercent}%` }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">Focus Timer</h3>
          <Timer className={isWork ? 'text-accent-indigo' : 'text-accent-emerald'} size={24} />
        </div>

        <div className="flex justify-center gap-2 mb-6">
          <button 
            onClick={() => switchMode('work')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${isWork ? 'bg-accent-indigo text-white' : 'bg-white/10 text-zinc-400 hover:text-white'}`}
          >
            Work (25m)
          </button>
          <button 
            onClick={() => switchMode('break')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${!isWork ? 'bg-accent-emerald text-white' : 'bg-white/10 text-zinc-400 hover:text-white'}`}
          >
            Break (5m)
          </button>
        </div>

        <div className="flex-grow flex items-center justify-center mb-6">
          <div className="text-6xl font-black text-white tabular-nums tracking-tighter drop-shadow-lg">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </div>
        </div>

        <div className="flex justify-center gap-4 border-t border-white/10 pt-4">
          <button 
            onClick={toggleTimer}
            className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 ${
              isActive ? 'bg-white/10 text-white' : 'bg-white text-zinc-900'
            }`}
          >
            {isActive ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
          </button>
          <button 
            onClick={resetTimer}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FocusTimer;
