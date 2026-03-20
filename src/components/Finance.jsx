import React from 'react';
import { Wallet, TrendingUp, CreditCard } from 'lucide-react';

const Finance = ({ data, onAddExpense }) => {
  const creditUsagePercent = Math.min(100, (data.creditCardUsed / data.creditCardLimit) * 100);

  return (
    <div className="glass-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-semibold text-white">Money Tracker</h3>
        <Wallet className="text-accent-indigo" size={24} />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white/5 rounded-2xl p-4">
          <p className="text-zinc-500 text-sm font-medium mb-1">Today</p>
          <p className="text-2xl font-bold text-white">₹{data.today.toLocaleString()}</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-4">
          <p className="text-zinc-500 text-sm font-medium mb-1">Monthly</p>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-white">₹{data.monthly.toLocaleString()}</p>
            <TrendingUp size={16} className="text-accent-emerald" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-end mb-2">
          <div className="flex items-center gap-2 text-zinc-400">
            <CreditCard size={16} />
            <span className="text-xs uppercase tracking-wider font-bold">Credit Usage</span>
          </div>
          <span className="text-sm font-medium text-white">
            ₹{data.creditCardUsed.toLocaleString()} / ₹{data.creditCardLimit.toLocaleString()}
          </span>
        </div>
        
        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-1000 ${
              creditUsagePercent > 80 ? 'bg-accent-rose' : 
              creditUsagePercent > 50 ? 'bg-amber-400' : 'bg-accent-indigo'
            }`}
            style={{ width: `${creditUsagePercent}%` }}
          />
        </div>
        
        <button 
          onClick={onAddExpense}
          className="w-full mt-4 py-3 bg-accent-indigo hover:bg-accent-indigo/80 text-white rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default Finance;
