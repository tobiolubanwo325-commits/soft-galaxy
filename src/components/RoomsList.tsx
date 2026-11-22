import React, { useState } from 'react';
import { Video, Radio, Users, Sparkles, Plus, Globe, Search, Crown } from 'lucide-react';
import { LiveRoom, UserProfile } from '../types';

interface RoomsListProps {
  rooms: LiveRoom[];
  onSelectRoom: (room: LiveRoom) => void;
  onCreateRoom: (title: string, category: 'Party' | 'Music' | 'Chat' | 'VIP Mingle') => void;
  user: UserProfile | null;
}

export const RoomsList: React.FC<RoomsListProps> = ({ rooms, onSelectRoom, onCreateRoom, user }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'Party' | 'Music' | 'Chat' | 'VIP Mingle'>('Party');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    onCreateRoom(newTitle, newCategory);
    setNewTitle('');
    setShowCreateModal(false);
  };

  const filteredRooms = rooms.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.hostName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Banner / Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 bg-pink-600/15 border border-pink-500/30 px-4 py-1.5 rounded-full mb-3">
            <Radio className="w-4 h-4 text-pink-400 animate-pulse" />
            <span className="text-xs font-semibold text-pink-300">SOFT LIFE Live Broadcasts</span>
          </div>
          <h1 className="text-4xl font-black text-white">Live Rooms & Party Stages</h1>
          <p className="text-slate-300 text-sm mt-1">Join interactive live video rooms, 8-seat party stages, and VIP mingle sessions.</p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-gradient-to-r from-pink-600 via-rose-600 to-emerald-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-xl shadow-pink-600/30 hover:scale-105 transition-all flex items-center justify-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Start Live Room</span>
        </button>
      </div>

      {/* Search & Filters */}
      <div className="mb-8 relative max-w-md">
        <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search rooms by title, host, or category..."
          className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 pl-11 text-sm text-white focus:outline-none focus:border-pink-500 transition-all"
        />
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            onClick={() => onSelectRoom(room)}
            className="bg-slate-900/80 border border-pink-500/20 rounded-3xl overflow-hidden backdrop-blur-md shadow-xl hover:border-pink-500/50 hover:scale-[1.02] transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="relative aspect-video bg-slate-950 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800"
                alt={room.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 bg-emerald-700 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center space-x-1 shadow-md">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>LIVE</span>
              </div>

              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-slate-200 text-xs font-bold px-3 py-1 rounded-full border border-slate-800 flex items-center space-x-1">
                <Users className="w-3.5 h-3.5 text-pink-400" />
                <span>{room.viewersCount}</span>
              </div>

              <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-xl border border-slate-800 text-[10px] text-pink-300 font-bold uppercase">
                {room.category}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                {room.title}
              </h3>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                <div className="flex items-center space-x-2.5">
                  <img src={room.hostAvatar} alt={room.hostName} className="w-8 h-8 rounded-full border border-pink-500 object-cover" />
                  <span className="text-xs font-semibold text-slate-300">{room.hostName}</span>
                </div>
                <span className="text-xs font-bold text-pink-400 group-hover:translate-x-1 transition-transform">
                  Join Room →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Room Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-pink-500/30 max-w-md w-full rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-white">Start SOFT LIFE Room</h2>
              <button onClick={() => setShowCreateModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Room Title
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. VIP Late Night Mingle ✨"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-pink-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Category
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-pink-500 transition-all"
                >
                  <option value="Party">Party Stage (8 Seats)</option>
                  <option value="Music">Music & Vibes</option>
                  <option value="Chat">Social Chat</option>
                  <option value="VIP Mingle">VIP Mingle</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-emerald-700 text-white font-bold text-sm shadow-lg shadow-pink-600/30 hover:opacity-95 transition-all mt-4"
              >
                Go Live Now
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
