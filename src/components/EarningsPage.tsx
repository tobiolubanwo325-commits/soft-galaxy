import React from 'react';
import { TrendingUp, Coins, DollarSign, ArrowUpRight } from 'lucide-react';

export const EarningsPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="bg-slate-900 border border-pink-500/30 p-6 rounded-3xl shadow-xl">
        <div className="flex items-center space-x-3 mb-2">
          <TrendingUp className="w-6 h-6 text-emerald-400" />
          <h1 className="text-2xl font-black text-white">Earnings & Payout</h1>
        </div>
        <p className="text-xs text-slate-300">Convert virtual coins earned from live streams and 8-seat party stages into cash withdrawals.</p>
      </div>

      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border border-emerald-500/40 p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Available Balance</div>
          <div className="text-4xl font-black text-white mt-1 flex items-center space-x-2">
            <DollarSign className="w-8 h-8 text-emerald-400" />
            <span>2,845.50 USD</span>
          </div>
          <p className="text-xs text-slate-400 mt-2">Equivalent to 284,550 SOFT LIFE Coins</p>
        </div>

        <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 font-black px-8 py-4 rounded-2xl text-sm shadow-xl hover:scale-105 transition-all flex items-center space-x-2">
          <span>Withdraw Funds</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
