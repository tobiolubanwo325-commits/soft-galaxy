import React from 'react';
import { Building2, ShieldCheck, Users, TrendingUp } from 'lucide-react';

export const AgencyPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="bg-slate-900 border border-pink-500/30 p-6 rounded-3xl shadow-xl">
        <div className="flex items-center space-x-3 mb-2">
          <Building2 className="w-6 h-6 text-amber-400" />
          <h1 className="text-2xl font-black text-white">SOFT LIFE Agency Hub</h1>
        </div>
        <p className="text-xs text-slate-300">Manage creators, track agency revenue sharing, and scale your broadcasting agency on SOFT LIFE.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
          <div className="text-xs text-slate-400 font-bold uppercase">Agency Tier</div>
          <div className="text-2xl font-black text-amber-400 mt-1">Diamond Agency</div>
          <p className="text-xs text-slate-400 mt-2">Maximum commission split active (85%).</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
          <div className="text-xs text-slate-400 font-bold uppercase">Active Creators</div>
          <div className="text-2xl font-black text-white mt-1">42 Creators</div>
          <p className="text-xs text-emerald-400 mt-2">+6 joined this week</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
          <div className="text-xs text-slate-400 font-bold uppercase">Monthly Revenue</div>
          <div className="text-2xl font-black text-amber-400 mt-1">$14,850.00</div>
          <p className="text-xs text-slate-400 mt-2">Direct Supabase Payout</p>
        </div>
      </div>
    </div>
  );
};
