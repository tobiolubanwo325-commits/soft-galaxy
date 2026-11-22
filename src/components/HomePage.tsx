import React from 'react';
import { Coins, Radio, Sparkles, Megaphone, Video, Users, ChevronRight, Play } from 'lucide-react';
import { LiveRoom, UserProfile } from '../types';

interface HomePageProps {
  user: UserProfile | null;
  rooms: LiveRoom[];
  onSelectRoom: (room: LiveRoom) => void;
  onOpenCoinStore: () => void;
  onStartLive: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  user,
  rooms,
  onSelectRoom,
  onOpenCoinStore,
  onStartLive
}) => {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      
      {/* 1. Top Yellow/Gold Box: SOFT BOSS Profile, ID, Coins, Recharge */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 rounded-3xl p-6 text-slate-950 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center space-x-4 relative z-10">
          <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-950 shadow-xl">
            <img
              src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-black text-slate-950 tracking-tight">SOFT BOSS</h2>
              <span className="bg-slate-950 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                VIP Lv.{user?.level || 8}
              </span>
            </div>
            <p className="text-xs font-mono font-bold text-slate-900 mt-1">ID: {user?.idNumber || '77889955'}</p>
          </div>
        </div>

        <div className="flex items-center space-x-6 relative z-10 bg-slate-950/15 p-4 rounded-2xl backdrop-blur-sm">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-900">Available Coins</div>
            <div className="text-2xl font-black text-slate-950 flex items-center space-x-1">
              <Coins className="w-5 h-5 text-slate-950" />
              <span>{user?.coins.toLocaleString() || 0}</span>
            </div>
          </div>

          <button
            onClick={onOpenCoinStore}
            className="bg-slate-950 text-amber-300 font-black px-6 py-3 rounded-xl text-xs shadow-lg hover:bg-slate-900 transition-all uppercase tracking-wider flex items-center space-x-2"
          >
            <span>Recharge</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Blue Banner: Announcement */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 border border-blue-500/40 p-5 rounded-2xl shadow-xl flex items-center space-x-4">
        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
          <Megaphone className="w-5 h-5 text-white animate-bounce" />
        </div>
        <div className="flex-1">
          <div className="text-xs font-bold text-blue-300 uppercase tracking-wider">Announcement</div>
          <p className="text-xs text-slate-200 mt-0.5">
            Welcome to SOFT LIFE! Join 8-seat party stages, send deluxe virtual gifts, and earn top ranking rewards this week. ✨
          </p>
        </div>
      </div>

      {/* 3. Rooms in Grid: 3 rooms per row */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Radio className="w-5 h-5 text-pink-500 animate-pulse" />
            <h3 className="text-xl font-black text-white">Live Rooms & Party Stages</h3>
          </div>
          <span className="text-xs font-bold text-pink-400 bg-pink-950/60 px-3 py-1 rounded-full border border-pink-500/30">
            {rooms.length} Rooms Online
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-slate-900 border border-pink-500/20 rounded-3xl overflow-hidden shadow-2xl hover:border-pink-500/50 transition-all group flex flex-col justify-between"
            >
              <div className="relative aspect-video bg-slate-950 overflow-hidden">
                <img
                  src={room.thumbnail || "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800"}
                  alt={room.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 bg-pink-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center space-x-1 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <span>LIVE</span>
                </div>

                <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-slate-200 text-xs font-bold px-3 py-1 rounded-full border border-slate-800 flex items-center space-x-1">
                  <Users className="w-3.5 h-3.5 text-pink-400" />
                  <span>{room.viewersCount}</span>
                </div>
              </div>

              <div className="p-5">
                <h4 className="font-bold text-white text-base mb-2 group-hover:text-amber-300 transition-colors line-clamp-1">
                  {room.title}
                </h4>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                  <div className="flex items-center space-x-2">
                    <img src={room.hostAvatar} alt={room.hostName} className="w-7 h-7 rounded-full border border-pink-500 object-cover" />
                    <span className="text-xs font-semibold text-slate-300 truncate max-w-[120px]">{room.hostName}</span>
                  </div>

                  {/* Gold Enter Button */}
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black px-4 py-2 rounded-xl text-xs shadow-md hover:scale-105 transition-all flex items-center space-x-1"
                  >
                    <span>Enter</span>
                    <Play className="w-3 h-3 fill-slate-950" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Bottom Button: GO LIVE / WE LIVE in pink + gold */}
      <div className="pt-6 pb-12 text-center">
        <button
          onClick={onStartLive}
          className="px-12 py-5 rounded-3xl bg-gradient-to-r from-pink-600 via-rose-600 to-amber-500 text-white font-black text-lg shadow-2xl shadow-pink-600/50 hover:scale-105 transition-all inline-flex items-center space-x-3 border-2 border-amber-300"
        >
          <Radio className="w-6 h-6 animate-pulse text-amber-300" />
          <span>GO LIVE / WE LIVE</span>
        </button>
      </div>

    </div>
  );
};
