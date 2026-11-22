import React, { useState } from 'react';
import { Globe, ExternalLink, ShieldCheck, Sparkles, Radio, RefreshCw, Smartphone, Monitor } from 'lucide-react';
import { ConnectedWebsite } from '../types';

interface WebsiteTabViewerProps {
  website: ConnectedWebsite;
  index: number;
}

export const WebsiteTabViewer: React.FC<WebsiteTabViewerProps> = ({ website, index }) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header bar */}
      <div className="bg-slate-900/90 border border-emerald-700/30 p-6 rounded-3xl backdrop-blur-md shadow-xl mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-emerald-400 mb-1">
            <Globe className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Website Tab #{index + 1} Inside SOFT LIFE</span>
          </div>
          <h1 className="text-2xl font-black text-white">{website.name}</h1>
          <p className="text-xs text-slate-400 mt-1">{website.description}</p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl text-xs text-slate-300 font-mono">
            {website.url}
          </div>

          <button
            onClick={handleRefresh}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Refresh View"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-emerald-400' : ''}`} />
          </button>

          <a
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-600 to-rose-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md hover:opacity-95 transition-all flex items-center space-x-1.5"
          >
            <span>Open External</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Embedded App View / Browser Frame */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 shadow-2xl relative overflow-hidden">
        
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 px-2">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs text-slate-400 font-mono ml-2 bg-slate-950 px-3 py-0.5 rounded-md border border-slate-800">
              {website.url}
            </span>
          </div>

          <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setViewMode('desktop')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1 ${
                viewMode === 'desktop' ? 'bg-emerald-700 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1 ${
                viewMode === 'mobile' ? 'bg-emerald-700 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile View</span>
            </button>
          </div>
        </div>

        {/* Simulated Interactive Website Frame / Content */}
        <div className={`mx-auto transition-all duration-300 ${viewMode === 'mobile' ? 'max-w-sm' : 'max-w-full'}`}>
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 min-h-[550px] flex flex-col items-center justify-center text-center relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/20 via-pink-950/20 to-slate-950 pointer-events-none" />

            <div className="relative z-10 max-w-lg">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-emerald-700 to-emerald-900 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-700/30">
                <Globe className="w-8 h-8 text-white animate-pulse" />
              </div>

              <h2 className="text-3xl font-black text-white mb-3">{website.name}</h2>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                {website.description}
              </p>

              <div className="bg-slate-900 border border-emerald-500/30 p-6 rounded-2xl mb-8 text-left space-y-3">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Integrated SOFT LIFE Tab Active</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  This website is synchronized with your SOFT LIFE account, Supabase database, and shared coin wallet.
                </p>
              </div>

              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-600 via-rose-600 to-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-pink-600/30 hover:scale-105 transition-all"
              >
                <span>Launch {website.name} Fullscreen</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
