import React from 'react';
import { Shield, Crown, Video, Users, CheckCircle, Sparkles, Radio } from 'lucide-react';
import { UserProfile, UserRole } from '../types';

interface RoleSelectionPageProps {
  user: UserProfile | null;
  onUpdateRole: (role: UserRole) => void;
}

export const RoleSelectionPage: React.FC<RoleSelectionPageProps> = ({ user, onUpdateRole }) => {
  const currentRole = user?.role || 'viewer';

  const roles: { id: UserRole; name: string; icon: any; color: string; description: string; perks: string[] }[] = [
    {
      id: 'creator',
      name: 'Creator',
      icon: Video,
      color: 'from-pink-600 to-rose-600',
      description: 'Broadcast live video & audio streams, host 8-seat party rooms, and earn virtual coins.',
      perks: ['Host Live Video Rooms', 'Custom 8-Seat Stage', 'Receive Virtual Gifts', 'Creator Analytics']
    },
    {
      id: 'host',
      name: 'Room Host',
      icon: Radio,
      color: 'from-purple-600 to-pink-600',
      description: 'Manage interactive social rooms, invite speakers, and moderate live participant stages.',
      perks: ['Manage Seat Requests', 'Room Moderation Tools', 'Priority Streaming', 'Exclusive Host Badge']
    },
    {
      id: 'vip',
      name: 'VIP Member',
      icon: Crown,
      color: 'from-amber-500 to-rose-600',
      description: 'Exclusive access to VIP mingle rooms, special entrance effects, and deluxe gift discounts.',
      perks: ['VIP Entrance Animation', 'Exclusive Mingle Rooms', 'Daily Coin Bonus', 'Special Profile Frame']
    },
    {
      id: 'moderator',
      name: 'Moderator',
      icon: Shield,
      color: 'from-emerald-700 to-emerald-900',
      description: 'Ensure community safety across SOFT LIFE with advanced moderation and verification controls.',
      perks: ['Chat Moderation', 'Report Review Tools', 'Verified Safety Badge', 'Direct Admin Support']
    },
    {
      id: 'viewer',
      name: 'Viewer',
      icon: Users,
      color: 'from-blue-600 to-cyan-600',
      description: 'Explore live rooms, send gifts, chat with creators, and participate in interactive events.',
      perks: ['Watch HD Live Streams', 'Send Virtual Gifts', 'Join Public Chat', 'Unlock Level Rewards']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 bg-pink-600/15 border border-pink-500/30 px-4 py-1.5 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span className="text-xs font-semibold text-pink-300">SOFT LIFE Role Management</span>
        </div>
        <h1 className="text-4xl font-black text-white mb-4">Choose Your SOFT LIFE Role</h1>
        <p className="text-slate-300 text-sm">
          Customize your experience across SOFT LIFE. Switch roles instantly to access specialized broadcasting tools, VIP privileges, or community moderation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((r) => {
          const Icon = r.icon;
          const isSelected = currentRole === r.id;

          return (
            <div
              key={r.id}
              className={`bg-slate-900/80 border rounded-3xl p-6 backdrop-blur-md relative overflow-hidden transition-all flex flex-col justify-between ${
                isSelected
                  ? 'border-pink-500 shadow-xl shadow-pink-600/20 ring-2 ring-pink-500/50'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center space-x-1 shadow-md">
                  <CheckCircle className="w-3 h-3" />
                  <span>Active Role</span>
                </div>
              )}

              <div>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${r.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{r.name}</h3>
                <p className="text-slate-400 text-xs mb-6 leading-relaxed">{r.description}</p>

                <div className="space-y-2.5 mb-8">
                  {r.perks.map((perk, i) => (
                    <div key={i} className="flex items-center space-x-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-900/80 text-emerald-400 flex items-center justify-center flex-shrink-0 text-[10px]">
                        ✓
                      </div>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onUpdateRole(r.id)}
                className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  isSelected
                    ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-700/30'
                    : 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-pink-500 hover:text-white'
                }`}
              >
                {isSelected ? 'Current Role' : `Switch to ${r.name}`}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
