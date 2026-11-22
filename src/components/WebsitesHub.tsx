import React from 'react';
import { Globe, ExternalLink, ShieldCheck, Sparkles, Radio } from 'lucide-react';
import { ConnectedWebsite } from '../types';

interface WebsitesHubProps {
  connectedWebsites: ConnectedWebsite[];
}

export const WebsitesHub: React.FC<WebsitesHubProps> = ({ connectedWebsites }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 bg-emerald-700/15 border border-emerald-500/30 px-4 py-1.5 rounded-full mb-4">
          <Globe className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-semibold text-emerald-300">SOFT LIFE Connected Network</span>
        </div>
        <h1 className="text-4xl font-black text-white mb-4">Ecosystem & Connected Websites</h1>
        <p className="text-slate-300 text-sm">
          SOFT LIFE seamlessly integrates across your 3 core web platforms with synchronized Supabase authentication and real-time Agora live stream channels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {connectedWebsites.map((site) => (
          <div
            key={site.id}
            className="bg-slate-900/80 border border-emerald-700/30 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between shadow-xl hover:border-emerald-500/60 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-700 to-emerald-900 flex items-center justify-center shadow-lg shadow-emerald-700/30">
                  <Radio className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                  {site.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{site.name}</h3>
              <p className="text-slate-400 text-xs mb-8 leading-relaxed">{site.description}</p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="text-[11px] text-slate-500 font-mono truncate max-w-[180px]">
                {site.url}
              </div>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md hover:opacity-95 transition-all"
              >
                <span>Visit Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-pink-950/30 via-slate-900 to-emerald-950/30 border border-pink-500/20 rounded-3xl p-8 text-center">
        <div className="flex items-center justify-center space-x-2 text-pink-400 mb-2">
          <ShieldCheck className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">Synchronized Database & Auth</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Supabase & Agora RTC Integration Active</h3>
        <p className="text-xs text-slate-400 max-w-xl mx-auto">
          All 3 connected websites share the same user credentials, verified 18+ status, coin balances, and live broadcasting infrastructure.
        </p>
      </div>
    </div>
  );
};
