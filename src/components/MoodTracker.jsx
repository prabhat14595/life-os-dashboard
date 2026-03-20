import React from 'react';
import { Smile } from 'lucide-react';
import { format, subDays } from 'date-fns';

const MOODS = [
  { emoji: '😭', label: 'Terrible', value: 1, color: 'hover:bg-accent-rose/20 hover:border-accent-rose' },
  { emoji: '😔', label: 'Bad', value: 2, color: 'hover:bg-orange-500/20 hover:border-orange-500' },
  { emoji: '😐', label: 'Okay', value: 3, color: 'hover:bg-yellow-500/20 hover:border-yellow-500' },
  { emoji: '🙂', label: 'Good', value: 4, color: 'hover:bg-accent-emerald/20 hover:border-accent-emerald' },
  { emoji: '🤩', label: 'Awesome', value: 5, color: 'hover:bg-accent-indigo/20 hover:border-accent-indigo' },
];

const MoodTracker = ({ moodHistory, onSelectMood }) => {
  const todayStr = format(new Date(), 'yyyy-MM-dd');
  const todayMood = moodHistory[todayStr];

  // Generate last 7 days history
  const historyDays = Array.from({ length: 7 }).map((_, i) => {
    const d = subDays(new Date(), 6 - i);
    const dateStr = format(d, 'yyyy-MM-dd');
    const moodEmoji = moodHistory[dateStr];
    return {
      date: d,
      mood: moodEmoji,
      dayName: format(d, 'eeight'[0] || 'ee[0]') // just need to get standard short day name easily, 'eeeeee' gets 'Mo'
    };
  });

  return (
    <div className="glass-card animate-slide-up h-full flex flex-col" style={{ animationDelay: '0.25s' }}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Daily Mood</h3>
        <Smile className="text-yellow-400" size={24} />
      </div>

      <div className="flex-grow flex flex-col justify-center">
        {!todayMood ? (
          <div>
            <p className="text-zinc-400 text-center mb-4 text-sm font-medium">How are you feeling today?</p>
            <div className="flex justify-between gap-2">
              {MOODS.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => onSelectMood(todayStr, mood.emoji)}
                  className={`flex-1 text-3xl py-3 border border-white/5 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg ${mood.color}`}
                  title={mood.label}
                >
                  {mood.emoji}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-4 bg-white/5 border border-white/10 rounded-3xl">
            <span className="text-6xl drop-shadow-lg block mb-2">{todayMood}</span>
            <span className="text-white font-medium">Mood logged!</span>
            <button 
              onClick={() => onSelectMood(todayStr, null)}
              className="block mx-auto mt-2 text-xs text-zinc-500 hover:text-white underline decoration-zinc-500"
            >
              Change
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-white/5">
        <div className="flex justify-between items-end h-8 gap-1">
          {historyDays.map((day, i) => (
            <div key={i} className="flex flex-col items-center gap-1 flex-1">
              <span className="text-xs">{day.mood || '·'}</span>
              <div 
                className={`w-full max-w-[24px] h-1 rounded-full ${day.mood ? 'bg-white/40' : 'bg-white/5'} ${i === 6 ? 'bg-white' : ''}`}
                title={format(day.date, 'MMM d')}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
