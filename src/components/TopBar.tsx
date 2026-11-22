import React from 'react';
import { Bell, Upload, Coins, Radio } from 'lucide-react';
import { UserProfile } from '../types';

interface TopBarProps {
  user: UserProfile | null;
  onOpenCoinStore: () => void;
  onPublish: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ user, onOpenCoinStore, onPublish }) => {
  return (
    <header className="h-16 bg-slate-900 border-b border-pink-500/20 px-6 flex items-center justify-between sticky top-0 z-40 shadow-md">
      
      {/* Left: Branding & Tagline */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-400">
          <img
            src="/assets/aistudio/WhatsApp_Image_2026-11-22_at_10.25.49_AM_1bc5c5af.jpeg"
            alt="Tiger Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <span className="text-lg font-black tracking-wider bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">
            SOFT LIFE STUDIO
          </span>
          <span className="block text-[9px] text-emerald-400 font-semibold tracking-widest uppercase">
            Live Streaming & Social Network
          </span>
        </div>
      </div>

      {/* Right: Coins, Notifications, Publish button */}
      <div className="flex items-center space-x-4">
        
        {/* Coins Balance */}
        <button
          onClick={onOpenCoinStore}
          className="flex items-center space-x-2 bg-slate-950 border border-amber-500/50 px-4 py-1.5 rounded-full hover:border-amber-400 transition-all shadow-inner"
        >
          <Coins className="w-4 h-4 text-amber-400 animate-bounce" />
          <span className="font-bold text-amber-300 text-xs">{user?.coins.toLocaleString() || 0} Coins</span>
          <span className="bg-amber-500 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded-full uppercase">
            Top Up
          </span>
        </button>

        {/* Notification Bell */}
        <button className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-pink-500 transition-all relative">
          <Bell className="w-4 h-4 text-pink-400" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-pink-600 animate-ping" />
        </button>

        {/* Publish Button */}
        <button
          onClick={onPublish}
          className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black px-5 py-2 rounded-xl text-xs shadow-lg shadow-amber-500/30 hover:scale-105 transition-all flex items-center space-x-2"
        >
          <Upload className="w-4 h-4" />
          <span>Publish</span>
        </button>

      </div>

    </header>
  );
};
