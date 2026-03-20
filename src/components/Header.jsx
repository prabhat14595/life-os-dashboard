import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { MOTIVATIONAL_QUOTES } from '../constants.js';
import { Edit2 } from 'lucide-react';

const Header = ({ username = "Friend", onNameChange }) => {
  const [time, setTime] = useState(new Date());
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(username);
  
  const [quote] = useState(() => 
    MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]
  );

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const handleSave = () => {
    if (tempName.trim()) {
      onNameChange(tempName);
    } else {
      setTempName(username); // Revert if empty
    }
    setIsEditing(false);
  };

  return (
    <header className="mb-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-4xl font-bold tracking-tight text-white mb-2 flex items-center gap-2 flex-wrap">
            <span>{getGreeting()},</span>
            {isEditing ? (
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                onBlur={handleSave}
                onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                autoFocus
                className="bg-transparent border-b-2 border-accent-indigo text-accent-indigo outline-none w-48"
                placeholder="Your name"
              />
            ) : (
              <span 
                className="group cursor-pointer flex items-center gap-3 text-white hover:text-zinc-300 transition-colors"
                onClick={() => setIsEditing(true)}
              >
                {username} <span className="group-hover:inline-block hidden text-zinc-500"><Edit2 size={20} /></span>
              </span>
            )}
            {!isEditing && <span className="ml-1">👋</span>}
          </div>
          <p className="text-zinc-400 italic text-lg">
            "{quote}"
          </p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-medium text-white tabular-nums">
            {format(time, 'HH:mm:ss')}
          </div>
          <div className="text-zinc-500 font-medium tracking-wide">
            {format(time, 'EEEE, d MMMM yyyy')}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
