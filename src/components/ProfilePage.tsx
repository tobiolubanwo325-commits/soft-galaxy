import React from 'react';
import { User, ShieldCheck, Coins, Crown } from 'lucide-react';
import { UserProfile } from '../types';

interface ProfilePageProps {
  user: UserProfile | null;
  onOpenCoinStore: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ user, onOpenCoinStore }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <div className="bg-slate-900 border border-pink-500/30 p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-400 shadow-2xl flex-shrink-0">
          <img src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="text-center md:text-left flex-1">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <h1 className="text-2xl font-black text-white">{user?.name || 'SOFT BOSS'}</h1>
            <span className="bg-amber-500 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-full">
              Verified 18+ ✓
            </span>
          </div>
          <p className="text-xs text-amber-300 font-mono mt-1">SOFT LIFE ID: {user?.idNumber || '77889955'}</p>
          <p className="text-xs text-slate-400 mt-2">{user?.email || 'boss@softlifelive.com'}</p>
        </div>

        <button
          onClick={onOpenCoinStore}
          className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black px-6 py-3 rounded-2xl text-xs shadow-lg hover:scale-105 transition-all"
        >
          Recharge Coins
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4">
        <h3 className="font-bold text-white text-lg">Account Privileges & Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center space-x-3">
            <Crown className="w-6 h-6 text-amber-400" />
            <div>
              <div className="text-xs font-bold text-white">VIP Level 8 Active</div>
              <div className="text-[10px] text-slate-400">Unlock all 8-seat party stages & priority broadcasting</div>
            </div>
          </div>
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center space-x-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <div>
              <div className="text-xs font-bold text-white">18+ Government ID Verified</div>
              <div className="text-[10px] text-slate-400">Secure Supabase authentication active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
