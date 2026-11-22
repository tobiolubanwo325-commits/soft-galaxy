import React from 'react';
import { HelpCircle, MessageSquare, ShieldCheck, Mail } from 'lucide-react';

export const HelpPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="bg-slate-900 border border-pink-500/30 p-6 rounded-3xl shadow-xl">
        <div className="flex items-center space-x-3 mb-2">
          <HelpCircle className="w-6 h-6 text-pink-400" />
          <h1 className="text-2xl font-black text-white">Help & Support</h1>
        </div>
        <p className="text-xs text-slate-300">Get 24/7 assistance from SOFT LIFE support team, verify your 18+ ID, or manage creator guidelines.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
          <h3 className="font-bold text-white text-lg">Direct WhatsApp Support</h3>
          <p className="text-xs text-slate-400">Chat instantly with our 24/7 dedicated creator success managers.</p>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-lg hover:opacity-95 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Open WhatsApp Support</span>
          </a>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
          <h3 className="font-bold text-white text-lg">Email Assistance</h3>
          <p className="text-xs text-slate-400">For security inquiries, coin payouts, and agency contracts.</p>
          <div className="text-xs font-mono text-amber-400 font-bold bg-slate-950 p-3 rounded-xl border border-slate-800">
            support@softlifelive.com
          </div>
        </div>
      </div>
    </div>
  );
};
