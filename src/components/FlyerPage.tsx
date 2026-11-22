import React from 'react';
import { FileText, Sparkles, Download } from 'lucide-react';

export const FlyerPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="bg-slate-900 border border-pink-500/30 p-6 rounded-3xl shadow-xl">
        <div className="flex items-center space-x-3 mb-2">
          <FileText className="w-6 h-6 text-amber-400" />
          <h1 className="text-2xl font-black text-white">Flyer & Promo Materials</h1>
        </div>
        <p className="text-xs text-slate-300">Download official SOFT LIFE promotional flyers and banners to share on social media.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center space-y-6">
        <div className="w-48 h-48 rounded-3xl overflow-hidden mx-auto border-4 border-amber-400 shadow-2xl">
          <img src="/assets/aistudio/WhatsApp_Image_2026-11-22_at_10.25.49_AM_1bc5c5af.jpeg" alt="Flyer Tiger" className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-bold text-white">SOFT LIFE Official Creator Flyer</h3>
        <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black px-8 py-3.5 rounded-2xl text-xs shadow-lg hover:scale-105 transition-all inline-flex items-center space-x-2">
          <Download className="w-4 h-4" />
          <span>Download High-Res Flyer</span>
        </button>
      </div>
    </div>
  );
};
