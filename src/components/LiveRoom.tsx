import React, { useState } from 'react';
import { Video, Mic, MicOff, VideoOff, Users, MessageSquare, Gift, Heart, Send, Sparkles, Coins, Radio, Crown } from 'lucide-react';
import { LiveRoom as LiveRoomType, UserProfile, GiftItem } from '../types';

interface LiveRoomProps {
  room: LiveRoomType;
  user: UserProfile | null;
  onBack: () => void;
  onSendGift: (cost: number) => void;
}

export const LiveRoom: React.FC<LiveRoomProps> = ({ room, user, onBack, onSendGift }) => {
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [messages, setMessages] = useState<{ id: string; user: string; text: string; time: string }[]>([
    { id: '1', user: 'Sofia_VIP', text: 'Welcome everyone to SOFT LIFE live room! ✨', time: '12:00' },
    { id: '2', user: 'David_Creator', text: 'Amazing vibes here today!', time: '12:01' },
    { id: '3', user: 'Elena_Live', text: 'Just sent a Diamond Ring gift! 💎', time: '12:02' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [showGifts, setShowGifts] = useState(false);

  const gifts: GiftItem[] = [
    { id: 'g1', name: 'Rose', coinPrice: 10, icon: '🌹' },
    { id: 'g2', name: 'Champagne', coinPrice: 50, icon: '🍾' },
    { id: 'g3', name: 'Sports Car', coinPrice: 200, icon: '🏎️' },
    { id: 'g4', name: 'Diamond Ring', coinPrice: 500, icon: '💍' },
    { id: 'g5', name: 'SOFT LIFE Crown', coinPrice: 1000, icon: '👑' }
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
      
      {/* Top Header of Room */}
      <div className="flex items-center justify-between mb-6 bg-slate-900/90 border border-pink-500/20 px-6 py-4 rounded-2xl backdrop-blur-md">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-all"
          >
            ← Leave Room
          </button>
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <h2 className="text-lg font-bold text-white">{room.title}</h2>
              <span className="text-[10px] bg-pink-600 text-white font-bold px-2 py-0.5 rounded-full uppercase">
                {room.category}
              </span>
            </div>
            <p className="text-xs text-slate-400">Host: {room.hostName} • Agora HD Stream Active</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs text-slate-300">
            <Users className="w-4 h-4 text-pink-400" />
            <span className="font-bold text-white">{room.viewersCount}</span>
            <span>viewers</span>
          </div>
        </div>
      </div>

      {/* Main Room Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left / Center: Live Video + 8-Seat Party Stage */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Main Video Stream Box */}
          <div className="relative aspect-video bg-slate-900 border border-pink-500/30 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group">
            
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200"
              alt="Live Stream"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

            {/* Host Badge Top Left */}
            <div className="absolute top-4 left-4 flex items-center space-x-2 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-xl">
              <img src={room.hostAvatar} alt={room.hostName} className="w-7 h-7 rounded-full border border-pink-500 object-cover" />
              <span className="text-xs font-bold text-white">{room.hostName}</span>
              <span className="bg-emerald-700 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">LIVE</span>
            </div>

            {/* Center Audio/Video simulation notice */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="flex items-center space-x-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-xs text-emerald-400">
                <Radio className="w-4 h-4 animate-pulse" />
                <span>Agora RTC Live Stream Connected (1080p 60FPS)</span>
              </div>

              {/* Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsAudioMuted(!isAudioMuted)}
                  className={`p-3 rounded-xl backdrop-blur-md transition-all ${
                    isAudioMuted ? 'bg-rose-600 text-white' : 'bg-slate-900/80 border border-slate-700 text-white hover:bg-slate-800'
                  }`}
                >
                  {isAudioMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setIsVideoOff(!isVideoOff)}
                  className={`p-3 rounded-xl backdrop-blur-md transition-all ${
                    isVideoOff ? 'bg-rose-600 text-white' : 'bg-slate-900/80 border border-slate-700 text-white hover:bg-slate-800'
                  }`}
                >
                  {isVideoOff ? <VideoOff className="w-4 h-4" /> : <Video className="w-4 h-4" />}
                </button>
              </div>
            </div>

          </div>

          {/* 8-Seat Party Stage */}
          <div className="bg-slate-900/90 border border-emerald-700/30 p-6 rounded-3xl backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Crown className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">8-Seat Party Stage</h3>
              </div>
              <span className="text-xs text-emerald-400">3 Seats Occupied • 5 Seats Available</span>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
              {room.seats.map((seat) => (
                <div
                  key={seat.id}
                  className="aspect-square bg-slate-950 border border-slate-800 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group hover:border-pink-500/50 transition-all cursor-pointer"
                >
                  {seat.user ? (
                    <>
                      <img src={seat.user.avatar} alt={seat.user.name} className="w-full h-full object-cover opacity-90" />
                      <div className="absolute inset-x-0 bottom-0 bg-slate-950/80 py-0.5 text-center text-[9px] text-white font-bold truncate px-1">
                        {seat.user.name}
                      </div>
                    </>
                  ) : (
                    <div className="text-center p-2">
                      <div className="w-8 h-8 rounded-full bg-slate-900 border border-dashed border-slate-700 flex items-center justify-center mx-auto mb-1 text-xs text-slate-500">
                        {seat.id}
                      </div>
                      <span className="text-[9px] text-slate-500">Empty Seat</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Sidebar: Chat & Virtual Gifts */}
        <div className="bg-slate-900/90 border border-pink-500/20 rounded-3xl p-5 flex flex-col h-[600px] backdrop-blur-md shadow-xl">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
            <div className="flex items-center space-x-2 text-white font-bold text-sm">
              <MessageSquare className="w-4 h-4 text-pink-400" />
              <span>Live Chat & Gifts</span>
            </div>
            <button
              onClick={() => setShowGifts(!showGifts)}
              className="bg-gradient-to-r from-pink-600 to-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-md hover:opacity-95 transition-all flex items-center space-x-1"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Send Gift</span>
            </button>
          </div>

          {/* Gift Modal drawer inside chat */}
          {showGifts && (
            <div className="mb-4 bg-slate-950 border border-pink-500/40 p-4 rounded-2xl shadow-xl animate-fadeIn">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">SOFT LIFE Gift Store</span>
                <button onClick={() => setShowGifts(false)} className="text-xs text-slate-400 hover:text-white">✕</button>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-3">
                {gifts.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => handleSendGiftItem(g)}
                    className="bg-slate-900 border border-slate-800 hover:border-pink-500 p-2.5 rounded-xl text-center transition-all group"
                  >
                    <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">{g.icon}</div>
                    <div className="text-[10px] font-bold text-white truncate">{g.name}</div>
                    <div className="text-[10px] text-amber-400 font-semibold">{g.coinPrice} coins</div>
                  </button>
                ))}
              </div>

              <div className="text-[10px] text-slate-400 text-center">
                Your Coins: <strong className="text-amber-400">{user?.coins || 0}</strong>
              </div>
            </div>
          )}

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-xs">
            {messages.map((m) => (
              <div key={m.id} className="bg-slate-950/70 border border-slate-800/80 p-2.5 rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-pink-400">{m.user}</span>
                  <span className="text-[9px] text-slate-500">{m.time}</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="mt-4 pt-3 border-t border-slate-800 flex items-center space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Send a message..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-pink-500 transition-all"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-md hover:opacity-95 transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </div>
  );
};
