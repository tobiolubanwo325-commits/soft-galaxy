import React, { useState } from 'react';
import { Crown, Trophy, Radio, Users, Sparkles, Star } from 'lucide-react';
import { RankingUser } from '../types';

export const RankingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'hosts'>('daily');

  const rankingUsers: RankingUser[] = [
    { rank: 1, name: 'Sofia Creator', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250', score: 145200, coins: 54000, role: 'Creator' },
    { rank: 2, name: 'Daddy O', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250', score: 120400, coins: 42000, role: 'VIP Host' },
    { rank: 3, name: 'Elena Live', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250', score: 98700, coins: 35000, role: 'Creator' },
    { rank: 4, name: 'Marcus Vibe', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250', score: 76500, coins: 21000, role: 'VIP' },
    { rank: 5, name: 'Jessica Star', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=250', score: 65400, coins: 18000, role: 'Creator' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90 border border-amber-500/30 p-6 rounded-3xl backdrop-blur-md shadow-xl">
        <div>
          <div className="flex items-center space-x-2 text-amber-300 mb-1">
            <Trophy className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider">SOFT LIFE Leaderboards</span>
          </div>
          <h1 className="text-3xl font-black text-white">Rankings & Weekly Rooms</h1>
        </div>

        <div className="flex items-center space-x-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => setActiveTab('daily')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'daily' ? 'bg-amber-500 text-slate-950 shadow-lg' : 'text-slate-300 hover:text-white'
            }`}
          >
            Daily Top
          </button>
          <button
            onClick={() => setActiveTab('weekly')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'weekly' ? 'bg-amber-500 text-slate-950 shadow-lg' : 'text-slate-300 hover:text-white'
            }`}
          >
            Weekly Room
          </button>
          <button
            onClick={() => setActiveTab('hosts')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'hosts' ? 'bg-amber-500 text-slate-950 shadow-lg' : 'text-slate-300 hover:text-white'
            }`}
          >
            Top Hosts
          </button>
        </div>
      </div>

      {/* Top 3 Podium with Crowns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        
        {/* 2nd Place */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700 rounded-3xl p-6 text-center relative shadow-2xl flex flex-col items-center justify-between mt-4">
          <div className="absolute -top-5 w-10 h-10 rounded-full bg-slate-400 text-slate-950 font-black flex items-center justify-center border-2 border-slate-950 shadow-xl">
            2
          </div>
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-slate-400 shadow-xl mb-4 mt-2">
            <img src={rankingUsers[1].avatar} alt="" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg font-bold text-white mb-1">{rankingUsers[1].name}</h3>
          <span className="text-xs text-amber-400 font-mono font-bold mb-4">{rankingUsers[1].score.toLocaleString()} pts</span>
          <div className="w-full bg-slate-900 border border-slate-800 py-2 rounded-xl text-xs text-slate-300 font-bold uppercase">
            {rankingUsers[1].role}
          </div>
        </div>

        {/* 1st Place (Crown) */}
        <div className="bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/50 rounded-3xl p-6 text-center relative shadow-2xl flex flex-col items-center justify-between scale-105 z-10">
          <div className="absolute -top-7 text-amber-400 animate-bounce">
            <Crown className="w-10 h-10 fill-amber-400" />
          </div>
          <div className="absolute -top-3 right-6 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center border-2 border-slate-950 shadow-xl">
            1
          </div>
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-400 shadow-2xl mb-4 mt-2">
            <img src={rankingUsers[0].avatar} alt="" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{rankingUsers[0].name}</h3>
          <span className="text-sm text-amber-400 font-mono font-black mb-4">{rankingUsers[0].score.toLocaleString()} pts</span>
          <div className="w-full bg-amber-500 text-slate-950 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider">
            {rankingUsers[0].role} • Champion 👑
          </div>
        </div>

        {/* 3rd Place */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-700/40 rounded-3xl p-6 text-center relative shadow-2xl flex flex-col items-center justify-between mt-4">
          <div className="absolute -top-5 w-10 h-10 rounded-full bg-amber-700 text-white font-black flex items-center justify-center border-2 border-slate-950 shadow-xl">
            3
          </div>
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-amber-700 shadow-xl mb-4 mt-2">
            <img src={rankingUsers[2].avatar} alt="" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg font-bold text-white mb-1">{rankingUsers[2].name}</h3>
          <span className="text-xs text-amber-400 font-mono font-bold mb-4">{rankingUsers[2].score.toLocaleString()} pts</span>
          <div className="w-full bg-slate-900 border border-slate-800 py-2 rounded-xl text-xs text-slate-300 font-bold uppercase">
            {rankingUsers[2].role}
          </div>
        </div>

      </div>

      {/* Rankings List Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl mt-8">
        <div className="p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
          <span>Rank & User</span>
          <span>Role</span>
          <span>Score / Coins</span>
        </div>

        <div className="divide-y divide-slate-800/80">
          {rankingUsers.map((user) => (
            <div key={user.rank} className="p-4 flex items-center justify-between hover:bg-slate-950/50 transition-colors">
              <div className="flex items-center space-x-4">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs ${
                  user.rank === 1 ? 'bg-amber-500 text-slate-950' : user.rank === 2 ? 'bg-slate-300 text-slate-950' : user.rank === 3 ? 'bg-amber-700 text-white' : 'bg-slate-800 text-slate-300'
                }`}>
                  {user.rank}
                </span>
                <img src={user.avatar} alt="" className="w-10 h-10 rounded-full border border-pink-500 object-cover" />
                <div>
                  <div className="font-bold text-white text-sm">{user.name}</div>
                  <div className="text-[10px] text-slate-400">ID: 9948{user.rank}</div>
                </div>
              </div>

              <div>
                <span className="bg-pink-950 text-pink-300 border border-pink-500/30 px-3 py-1 rounded-full text-xs font-bold">
                  {user.role}
                </span>
              </div>

              <div className="text-right">
                <div className="text-sm font-black text-amber-400">{user.score.toLocaleString()} pts</div>
                <div className="text-[10px] text-slate-400">{user.coins.toLocaleString()} coins</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
