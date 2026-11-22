import React, { useState } from 'react';
import { Video, Mic, MicOff, VideoOff, Users, MessageSquare, Gift, Heart, Send, Sparkles, Coins, Radio, Crown, Music, Plus, UserPlus } from 'lucide-react';
import { LiveRoom, UserProfile, GiftItem } from '../types';

interface LiveRoomPageProps {
  room: LiveRoom;
  user: UserProfile | null;
  onBack: () => void;
  onSendGift: (cost: number) => void;
}

export const LiveRoomPage: React.FC<LiveRoomPageProps> = ({ room, user, onBack, onSendGift }) => {
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [messages, setMessages] = useState<{ id: string; user: string; text: string; time: string }[]>([
    { id: '1', user: 'Sofia_VIP', text: 'Welcome to SOFT LIFE live room! ✨', time: '12:00' },
    { id: '2', user: 'Daddy O', text: 'Music vibe is incredible tonight!', time: '12:01' },
    { id: '3', user: 'Elena_Live', text: 'Just sent a SOFT LIFE Crown gift! 👑', time: '12:02' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [showGifts, setShowGifts] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const gifts: GiftItem[] = [
    { id: 'g1', name: 'Rose', coinPrice: 10, icon: '🌹' },
    { id: 'g2', name: 'Champagne', coinPrice: 50, icon: '🍾' },
    { id: 'g3', name: 'Sports Car', coinPrice: 200, icon: '🏎️' },
    { id: 'g4', name: 'Diamond Ring', coinPrice: 500, icon: '💍' },
    { id: 'g5', name: 'SOFT LIFE Tiger', coinPrice: 1000, icon: '🐅' }
  ];

  // 9 seats grid as requested
  const seats = Array.from({ length: 9 }, (_, i) => {
    return room.seats[i] || { id: i + 1, user: null, isMuted: false, isVideoOn: false };
  });

  const topHosts = [
    { id: '1', name: 'Daddy O', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250', viewers: '12.4k' },
    { id: '2', name: 'Sofia VIP', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250', viewers: '9.8k' },
    { id: '3', name: 'Marcus Live', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250', viewers: '7.5k' }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages([
      ...messages,
      {
        id: Math.random().toString(),
        user: user?.name || 'Guest',
        text: inputMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setInputMessage('');
  };

  const handleSendGiftItem = (gift: GiftItem) => {
    if (!user || user.coins < gift.coinPrice) {
      alert('Not enough coins! Please top up in the Coin Store.');
      return;
    }
    onSendGift(gift.coinPrice);
    setMessages([
      ...messages,
      {
        id: Math.random().toString(),
        user: user.name,
        text: `Sent a deluxe gift: ${gift.icon} ${gift.name} (${gift.coinPrice} coins)! 🎉`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setShowGifts(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6 bg-slate-900/90 border border-pink-500/30 px-6 py-4 rounded-2xl backdrop-blur-md">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-all"
          >
            ← Back to Rooms
          </button>
          
          <div className="flex items-center space-x-3">
            <img src={room.hostAvatar} alt={room.hostName} className="w-10 h-10 rounded-full border-2 border-amber-400 object-cover" />
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base font-bold text-white">{room.hostName}</h2>
                <span className="text-[10px] bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded-full uppercase">
                  ID: 889922
                </span>
              </div>
              <p className="text-[10px] text-pink-300">Level 8 Creator • Agora HD Audio + Video</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`px-5 py-2 rounded-xl font-black text-xs uppercase tracking-wider transition-all ${
              isFollowing
                ? 'bg-emerald-700 text-white'
                : 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-600/30 hover:scale-105'
            }`}
          >
            {isFollowing ? 'Following ✓' : '+ Follow'}
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left: Top Hosts List */}
        <div className="bg-slate-900/80 border border-pink-500/20 p-5 rounded-3xl backdrop-blur-md hidden lg:block space-y-4">
          <div className="flex items-center space-x-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
            <Crown className="w-4 h-4" />
            <span>Top Hosts Online</span>
          </div>

          <div className="space-y-3">
            {topHosts.map((host) => (
              <div key={host.id} className="flex items-center justify-between bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
                <div className="flex items-center space-x-3">
                  <img src={host.avatar} alt={host.name} className="w-9 h-9 rounded-full border border-pink-500 object-cover" />
                  <div>
                    <div className="text-xs font-bold text-white">{host.name}</div>
                    <div className="text-[10px] text-slate-400">{host.viewers} viewers</div>
                  </div>
                </div>
                <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
              </div>
            ))}
          </div>

          <div className="p-4 bg-gradient-to-br from-pink-900/40 to-amber-900/40 border border-pink-500/30 rounded-2xl text-center">
            <div className="w-12 h-12 rounded-2xl overflow-hidden mx-auto mb-2 border border-amber-400 shadow-md">
              <img src="/assets/aistudio/WhatsApp_Image_2026-11-22_at_10.25.49_AM_1bc5c5af.jpeg" alt="Tiger" className="w-full h-full object-cover" />
            </div>
            <div className="text-xs font-bold text-amber-300">SOFT LIFE Tiger Room</div>
            <div className="text-[10px] text-slate-300 mt-1">Official Verified Stream</div>
          </div>
        </div>

        {/* Center / Right: Purple BG with Tiger Banner & 9 Seats Grid */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Purple Background Banner with Tiger */}
          <div className="relative aspect-video bg-gradient-to-tr from-purple-950 via-slate-900 to-pink-950 border border-pink-500/40 rounded-3xl overflow-hidden shadow-2xl p-6 flex flex-col justify-between">
            
            <div className="absolute inset-0 opacity-25 mix-blend-overlay">
              <img src="/assets/aistudio/WhatsApp_Image_2026-11-22_at_10.25.49_AM_1bc5c5af.jpeg" alt="Tiger Background" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <div className="bg-slate-950/80 backdrop-blur-md border border-slate-800 px-4 py-2 rounded-xl flex items-center space-x-2 text-xs text-amber-300 font-bold">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>SOFT LIFE 9-Seat Live Party Stage</span>
              </div>
              <div className="bg-emerald-700 text-white font-bold text-xs px-3 py-1 rounded-full uppercase flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>Live Audio + Video</span>
              </div>
            </div>

            {/* 9 Seats in Grid - Each seat circle with number */}
            <div className="relative z-10 grid grid-cols-3 sm:grid-cols-9 gap-3 my-auto">
              {seats.map((seat, index) => (
                <div
                  key={seat.id}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-950/90 border-2 border-amber-400 flex items-center justify-center relative overflow-hidden shadow-xl group-hover:scale-105 transition-transform">
                    {seat.user ? (
                      <img src={seat.user.avatar} alt={seat.user.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-amber-400 font-black text-lg">
                        {index + 1}
                      </div>
                    )}
                    <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-pink-600 text-[9px] text-white font-bold flex items-center justify-center border border-slate-950">
                      {seat.id}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-200 mt-1 truncate max-w-[60px]">
                    {seat.user ? seat.user.name : `Seat ${index + 1}`}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Controls Bar inside room */}
            <div className="relative z-10 flex items-center justify-between bg-slate-950/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-slate-800">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsAudioMuted(!isAudioMuted)}
                  className={`p-2.5 rounded-xl transition-all ${
                    isAudioMuted ? 'bg-rose-600 text-white' : 'bg-slate-900 border border-slate-700 text-white hover:bg-slate-800'
                  }`}
                  title="Mic"
                >
                  {isAudioMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setIsVideoOff(!isVideoOff)}
                  className={`p-2.5 rounded-xl transition-all ${
                    isVideoOff ? 'bg-rose-600 text-white' : 'bg-slate-900 border border-slate-700 text-white hover:bg-slate-800'
                  }`}
                  title="Video"
                >
                  {isVideoOff ? <VideoOff className="w-4 h-4" /> : <Video className="w-4 h-4" />}
                </button>

                <button className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-amber-300 hover:bg-slate-800 transition-all" title="Music">
                  <Music className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => setShowGifts(true)}
                className="bg-gradient-to-r from-pink-600 via-rose-600 to-amber-500 text-white font-black px-6 py-2.5 rounded-xl text-xs shadow-lg hover:scale-105 transition-all flex items-center space-x-2"
              >
                <Gift className="w-4 h-4" />
                <span>Send Gift</span>
              </button>
            </div>

          </div>

          {/* Chat & Message Input Section */}
          <div className="bg-slate-900/90 border border-pink-500/20 rounded-3xl p-6 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2 text-white font-bold text-sm">
                <MessageSquare className="w-4 h-4 text-pink-400" />
                <span>Live Room Chat</span>
              </div>
              <span className="text-xs text-amber-300 font-mono">Agora RTC Connected</span>
            </div>

            <div className="h-40 overflow-y-auto space-y-2.5 pr-2 mb-4 text-xs">
              {messages.map((m) => (
                <div key={m.id} className="bg-slate-950/70 border border-slate-800 p-2.5 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-amber-300">{m.user}</span>
                    <span className="text-[9px] text-slate-500">{m.time}</span>
                  </div>
                  <p className="text-slate-300">{m.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Send a message to room..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-400 transition-all"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black px-6 py-3 rounded-2xl text-xs shadow-lg hover:scale-105 transition-all flex items-center space-x-1"
              >
                <Send className="w-4 h-4" />
                <span>Send</span>
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Gift Store Modal */}
      {showGifts && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-amber-500/40 max-w-lg w-full rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Gift className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-black text-white">SOFT LIFE Gift Store</h3>
              </div>
              <button onClick={() => setShowGifts(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {gifts.map((g) => (
                <button
                  key={g.id}
                  onClick={() => handleSendGiftItem(g)}
                  className="bg-slate-950 border border-slate-800 hover:border-amber-400 p-4 rounded-2xl text-center transition-all group"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{g.icon}</div>
                  <div className="text-xs font-bold text-white truncate">{g.name}</div>
                  <div className="text-xs font-black text-amber-400 mt-1">{g.coinPrice} coins</div>
                </button>
              ))}
            </div>

            <div className="text-center text-xs text-slate-400">
              Your Balance: <strong className="text-amber-400">{user?.coins || 0} Coins</strong>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
