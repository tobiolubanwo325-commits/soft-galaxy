import React from 'react';
import { Sparkles, Coins, Video, Globe, User, Shield, Radio, LogOut, ExternalLink } from 'lucide-react';
import { UserProfile, ConnectedWebsite } from '../types';

interface NavbarProps {
  user: UserProfile | null;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  connectedWebsites: ConnectedWebsite[];
  onLogout: () => void;
  onOpenCoinStore: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  activeTab,
  setActiveTab,
  connectedWebsites,
  onLogout,
  onOpenCoinStore
}) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-pink-500/20 shadow-lg shadow-pink-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo with Tiger Image */}
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => setActiveTab('rooms')}
        >
          <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-pink-500/80 shadow-lg shadow-pink-600/40 group-hover:scale-105 transition-transform flex-shrink-0">
            <img
              src="/assets/aistudio/WhatsApp_Image_2026-11-22_at_10.25.49_AM_1bc5c5af.jpeg"
              alt="SOFT LIFE Tiger Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-pink-500 via-rose-400 to-amber-300 bg-clip-text text-transparent">
              SOFT LIFE
            </span>
            <span className="block text-[10px] text-emerald-400 font-semibold tracking-widest uppercase">
              Live Social Studio
            </span>
          </div>
        </div>

        {/* Navigation Tabs (Including the 3 Websites as direct tabs) */}
        <nav className="hidden xl:flex items-center space-x-1">
          <button
            onClick={() => setActiveTab('rooms')}
            className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
              activeTab === 'rooms'
                ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-md shadow-pink-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Video className="w-3.5 h-3.5 text-pink-400" />
            <span>Live Rooms</span>
          </button>

          {/* Website 1 Tab */}
          <button
            onClick={() => setActiveTab('site-0')}
            className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
              activeTab === 'site-0'
                ? 'bg-gradient-to-r from-emerald-700 to-emerald-900 text-white shadow-md shadow-emerald-700/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>softgalaxystudio.com</span>
          </button>

          {/* Website 2 Tab */}
          <button
            onClick={() => setActiveTab('site-1')}
            className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
              activeTab === 'site-1'
                ? 'bg-gradient-to-r from-emerald-700 to-emerald-900 text-white shadow-md shadow-emerald-700/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>Creator Hub</span>
          </button>

          {/* Website 3 Tab */}
          <button
            onClick={() => setActiveTab('site-2')}
            className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
              activeTab === 'site-2'
                ? 'bg-gradient-to-r from-emerald-700 to-emerald-900 text-white shadow-md shadow-emerald-700/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>Community Vault</span>
          </button>

          <button
            onClick={() => setActiveTab('role')}
            className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
              activeTab === 'role'
                ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Shield className="w-3.5 h-3.5 text-pink-400" />
            <span>Role ({user?.role || 'Viewer'})</span>
          </button>
        </nav>

        {/* User Coins & Profile Actions */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {/* Coin Balance Badge */}
              <button
                onClick={onOpenCoinStore}
                className="flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-pink-500/20 border border-amber-500/40 px-3.5 py-1.5 rounded-full hover:border-amber-400 transition-all shadow-inner"
              >
                <Coins className="w-4 h-4 text-amber-400 animate-bounce" />
                <span className="font-bold text-amber-300 text-sm">{user.coins.toLocaleString()} Coins</span>
                <span className="bg-gradient-to-r from-pink-600 to-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Top Up
                </span>
              </button>

              {/* User Profile Info */}
              <div className="flex items-center space-x-3 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-xl">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full border-2 border-pink-500 object-cover"
                />
                <div className="hidden lg:block text-left">
                  <div className="text-xs font-bold text-white flex items-center space-x-1">
                    <span>{user.name}</span>
                    {user.isVerified && (
                      <span className="text-emerald-400 text-xs" title="18+ Verified">✓</span>
                    )}
                  </div>
                  <div className="text-[10px] text-emerald-400 uppercase font-semibold">
                    Lv.{user.level} {user.role}
                  </div>
                </div>

                <button
                  onClick={onLogout}
                  title="Logout"
                  className="text-slate-400 hover:text-rose-400 transition-colors p-1"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={() => setActiveTab('signup')}
              className="bg-gradient-to-r from-pink-600 via-rose-600 to-emerald-600 text-white font-bold px-5 py-2 rounded-xl text-sm shadow-lg shadow-pink-600/30 hover:opacity-95 transition-all"
            >
              Sign Up / Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
