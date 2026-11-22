import React from 'react';
import { Radio, Video, Globe, Coins, ShieldCheck, Sparkles, ArrowRight, Play, Users, CheckCircle2 } from 'lucide-react';
import { ConnectedWebsite } from '../types';

interface LandingPageProps {
  onGetStarted: () => void;
  connectedWebsites: ConnectedWebsite[];
  onSelectSiteTab: (index: number) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, connectedWebsites, onSelectSiteTab }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-pink-600 selection:text-white">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-28">
        {/* Glowing background gradients in Deep Pink and Deep Green */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-700/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Tiger Logo Showcase */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl mx-auto mb-8 overflow-hidden border-4 border-pink-500 shadow-2xl shadow-pink-600/50 hover:scale-105 transition-transform">
            <img
              src="/assets/aistudio/WhatsApp_Image_2026-11-22_at_10.25.49_AM_1bc5c5af.jpeg"
              alt="SOFT LIFE Tiger Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-600/20 to-emerald-700/20 border border-pink-500/30 px-4 py-2 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 text-pink-400 animate-spin" />
            <span className="text-sm font-semibold text-pink-300">SOFT LIFE Official Platform</span>
            <span className="bg-emerald-700 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">18+ Verified</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            Experience the Ultimate{' '}
            <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-amber-300 bg-clip-text text-transparent">
              SOFT LIFE
            </span>{' '}
            Experience
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            The premier live social and interactive broadcasting platform featuring HD Live Video & Audio streaming, 8-seat party stages, VIP mingle rooms, virtual coins, and 3 fully integrated website tabs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-600 to-emerald-700 text-white font-bold text-lg shadow-xl shadow-pink-600/40 hover:scale-105 transition-all flex items-center justify-center space-x-3"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 border border-pink-500/30 text-pink-300 font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center space-x-3"
            >
              <Play className="w-5 h-5 fill-pink-400 text-pink-400" />
              <span>Explore Live Rooms</span>
            </button>
          </div>

          {/* Connected Websites as Tabs Section */}
          <div className="mt-28 bg-gradient-to-b from-slate-900/90 to-slate-950 border border-emerald-700/30 rounded-3xl p-10 shadow-2xl text-left">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 text-emerald-400 mb-2">
                <Globe className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">3 Websites Inside SOFT LIFE App</span>
              </div>
              <h2 className="text-3xl font-black text-white">Direct Website Tabs</h2>
              <p className="text-slate-300 text-sm mt-2 max-w-xl mx-auto">
                Click any of your 3 connected websites below to open them as interactive tabs directly inside the SOFT LIFE app.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {connectedWebsites.map((site, index) => (
                <div
                  key={site.id}
                  onClick={() => onSelectSiteTab(index)}
                  className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500 transition-all cursor-pointer group flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                        Tab #{index + 1}
                      </span>
                      <Globe className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2 group-hover:text-pink-400 transition-colors">{site.name}</h4>
                    <p className="text-xs text-slate-400 mb-6 leading-relaxed">{site.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-900 flex items-center justify-between text-xs font-semibold text-pink-400 group-hover:translate-x-1 transition-transform">
                    <span>Open Inside App</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
