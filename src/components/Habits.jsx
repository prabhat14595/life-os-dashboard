import React from 'react';
import { Flame, Activity } from 'lucide-react';

const Habits = ({ habits, onToggle }) => {
  return (
    <div className="glass-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-semibold text-white">Daily Habits</h3>
        <Activity className="text-accent-violet" size={24} />
      </div>

      <div className="space-y-4">
        {habits.map((habit) => (
          <div 
            key={habit.id}
            className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div 
                onClick={() => onToggle(habit.id)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all border-2 ${
                  habit.completed 
                    ? 'bg-accent-violet border-accent-violet shadow-lg shadow-accent-violet/20' 
                    : 'bg-transparent border-white/10 hover:border-white/20'
                }`}
              >
                {habit.completed && <div className="w-4 h-4 bg-white rounded-full shadow-inner animate-pulse" />}
              </div>
              <div>
                <p className="font-semibold text-white">{habit.name}</p>
                <div className="flex items-center gap-1 text-orange-400">
                  <Flame size={14} fill="currentColor" />
                  <span className="text-sm font-bold">{habit.streak} day streak</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-1">
              {[...Array(7)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1.5 h-6 rounded-full ${
                    i === 6 ? 'bg-accent-violet animate-pulse' : 'bg-white/10'
                  }`} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habits;
