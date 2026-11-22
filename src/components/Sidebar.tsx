import React from 'react';
import { Home, Video, Radio, Coins, User, FileText, CheckSquare, Building2, TrendingUp, HelpCircle, Globe, Shield } from 'lucide-react';
import { ConnectedWebsite, UserProfile } from '../types';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: UserProfile | null;
  connectedWebsites: ConnectedWebsite[];
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, user, connectedWebsites }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'rooms', label: 'Rooms', icon: Video },
    { id: 'ranking', label: 'Ranking & Weekly', icon: Radio },
    { id: 'coins', label: 'Coins & Wallet', icon: Coins },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'flyer', label: 'Flyer & Events', icon: FileText },
    { id: 'tasks', label: 'Tasks & Rewards', icon: CheckSquare },
    { id: 'agency', label: 'Agency Hub', icon: Building2 },
    { id: 'earnings', label: 'Earnings & Payout', icon: TrendingUp },
    { id: 'help', label: 'Help / Support', icon: HelpCircle },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-pink-700 via-rose-700 to-pink-900 border-r border-pink-500/30 flex flex-col flex-shrink-0 text-white shadow-2xl">
      
      {/* Brand Header with Tiger Logo */}
      <div 
        onClick={() => setActiveTab('home')}
        className="p-5 flex items-center space-x-3 cursor-pointer border-b border-pink-500/30 bg-pink-950/40"
      >
        <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-lg flex-shrink-0">
          <img
            src="/assets/aistudio/WhatsApp_Image_2026-11-22_at_10.25.49_AM_1bc5c5af.jpeg"
            alt="SOFT LIFE Tiger Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-xl font-black tracking-wider text-amber-300 drop-shadow">SOFT LIFE</h1>
          <span className="text-[10px] text-pink-200 tracking-widest uppercase font-bold">Studio Platform</span>
        </div>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        <div className="px-3 pb-2 text-[10px] uppercase font-black text-pink-300 tracking-wider">Main Navigation</div>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/30 scale-[1.02]'
                  : 'text-pink-100 hover:bg-pink-800/60 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          );
        })}

        <div className="pt-6 pb-2 px-3 text-[10px] uppercase font-black text-pink-300 tracking-wider">Connected Websites</div>
        {connectedWebsites.map((site, index) => (
          <button
            key={site.id}
            onClick={() => setActiveTab(`site-${index}`)}
            className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
              activeTab === `site-${index}`
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'text-pink-200 hover:bg-pink-800/40 hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-amber-300" />
            <span className="truncate">{site.name}</span>
          </button>
        ))}
      </div>

      {/* User Quick Card at bottom of sidebar */}
      {user && (
        <div className="p-4 m-3 bg-pink-950/80 border border-pink-500/40 rounded-2xl flex items-center space-x-3">
          <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full border-2 border-amber-400 object-cover" />
          <div className="overflow-hidden">
            <div className="text-xs font-bold text-white truncate">{user.name}</div>
            <div className="text-[10px] text-amber-300 font-mono">ID: {user.idNumber}</div>
          </div>
        </div>
      )}

    </aside>
  );
};
