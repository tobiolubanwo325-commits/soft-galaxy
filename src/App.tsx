import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { HomePage } from './components/HomePage';
import { LiveRoomPage } from './components/LiveRoomPage';
import { RankingPage } from './components/RankingPage';
import { CoinStore } from './components/CoinStore';
import { ProfilePage } from './components/ProfilePage';
import { TasksPage } from './components/TasksPage';
import { AgencyPage } from './components/AgencyPage';
import { EarningsPage } from './components/EarningsPage';
import { HelpPage } from './components/HelpPage';
import { FlyerPage } from './components/FlyerPage';
import { WebsiteTabViewer } from './components/WebsiteTabViewer';
import { UserProfile, ConnectedWebsite, LiveRoom as LiveRoomType } from './types';
import { checkSupabaseConnection } from './lib/supabase';
import { agoraManager } from './lib/agora';

export default function App() {
  const [user, setUser] = useState<UserProfile | null>({
    id: 'user-default-1',
    name: 'SOFT BOSS',
    email: 'boss@softlifelive.com',
    role: 'creator',
    coins: 2500,
    isVerified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
    level: 8,
    idNumber: '77889955'
  });

  const [activeTab, setActiveTab] = useState<string>('home');
  const [activeRoom, setActiveRoom] = useState<LiveRoomType | null>(null);
  const [showCoinStore, setShowCoinStore] = useState<boolean>(false);

  // 3 connected websites as requested
  const [connectedWebsites] = useState<ConnectedWebsite[]>([
    {
      id: 'web-1',
      name: 'SOFT LIFE Studio',
      url: 'https://softgalaxystudio.com',
      description: 'Primary platform portal with verified 18+ membership and live broadcast streams.',
      iconName: 'Globe',
      status: 'Connected'
    },
    {
      id: 'web-2',
      name: 'SOFT LIFE Creator Hub',
      url: 'https://creator.softlifestudio.com',
      description: 'Creator analytics, earnings payout portal, and 8-seat party stage management.',
      iconName: 'Video',
      status: 'Connected'
    },
    {
      id: 'web-3',
      name: 'SOFT LIFE Community Vault',
      url: 'https://vault.softlifestudio.com',
      description: 'Exclusive merchandise, profile frames, VIP rides, and virtual coin exchange.',
      iconName: 'Sparkles',
      status: 'Connected'
    }
  ]);

  const [rooms, setRooms] = useState<LiveRoomType[]>([
    {
      id: 'room-1',
      title: '✨ VIP Late Night Party Stage (9 Seats)',
      hostName: 'Daddy O',
      hostAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
      category: 'Party',
      viewersCount: 420,
      isLive: true,
      thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800',
      seats: Array.from({ length: 9 }, (_, i) => ({ id: i + 1, user: i === 0 ? user : null, isMuted: false, isVideoOn: true }))
    },
    {
      id: 'room-2',
      title: '🎵 Acoustic Vibes & Live Mingle',
      hostName: 'Marcus Host',
      hostAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
      category: 'Music',
      viewersCount: 285,
      isLive: true,
      thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
      seats: Array.from({ length: 9 }, (_, i) => ({ id: i + 1, user: null, isMuted: false, isVideoOn: false }))
    },
    {
      id: 'room-3',
      title: '💎 Exclusive Creator Q&A & Gift Drop',
      hostName: 'Elena Live',
      hostAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250',
      category: 'VIP Mingle',
      viewersCount: 610,
      isLive: true,
      thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
      seats: Array.from({ length: 9 }, (_, i) => ({ id: i + 1, user: null, isMuted: false, isVideoOn: false }))
    }
  ]);

  useEffect(() => {
    checkSupabaseConnection();
    agoraManager.joinChannel('soft-life-main');
  }, []);

  const handlePurchaseCoins = (addedCoins: number) => {
    if (user) {
      setUser({ ...user, coins: user.coins + addedCoins });
      setShowCoinStore(false);
      alert(`Successfully added ${addedCoins} coins to SOFT LIFE! ✨`);
    }
  };

  const handleSendGift = (cost: number) => {
    if (user) {
      setUser({ ...user, coins: Math.max(0, user.coins - cost) });
    }
  };

  const handleStartLive = () => {
    const newRoom: LiveRoomType = {
      id: 'room-' + Math.random().toString(36).substring(2, 9),
      title: '🔥 ' + (user?.name || 'SOFT BOSS') + ' Live Party Room (9 Seats)',
      hostName: user?.name || 'SOFT BOSS',
      hostAvatar: user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
      category: 'Party',
      viewersCount: 1,
      isLive: true,
      thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800',
      seats: Array.from({ length: 9 }, (_, i) => ({
        id: i + 1,
        user: i === 0 && user ? user : null,
        isMuted: false,
        isVideoOn: true
      }))
    };
    setRooms([newRoom, ...rooms]);
    setActiveRoom(newRoom);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans selection:bg-pink-600 selection:text-white overflow-x-hidden">
      
      {/* Left Sidebar in Deep Pink */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveRoom(null);
          setActiveTab(tab);
        }}
        user={user}
        connectedWebsites={connectedWebsites}
      />

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
        
        {/* Top Bar */}
        <TopBar
          user={user}
          onOpenCoinStore={() => setShowCoinStore(true)}
          onPublish={handleStartLive}
        />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">
          {activeRoom ? (
            <LiveRoomPage
              room={activeRoom}
              user={user}
              onBack={() => setActiveRoom(null)}
              onSendGift={handleSendGift}
            />
          ) : activeTab === 'home' || activeTab === 'rooms' ? (
            <HomePage
              user={user}
              rooms={rooms}
              onSelectRoom={(r) => setActiveRoom(r)}
              onOpenCoinStore={() => setShowCoinStore(true)}
              onStartLive={handleStartLive}
            />
          ) : activeTab === 'ranking' ? (
            <RankingPage />
          ) : activeTab === 'coins' ? (
            <ProfilePage user={user} onOpenCoinStore={() => setShowCoinStore(true)} />
          ) : activeTab === 'profile' ? (
            <ProfilePage user={user} onOpenCoinStore={() => setShowCoinStore(true)} />
          ) : activeTab === 'flyer' ? (
            <FlyerPage />
          ) : activeTab === 'tasks' ? (
            <TasksPage
              user={user}
              onRewardCoins={(amount) => setUser(user ? { ...user, coins: user.coins + amount } : null)}
            />
          ) : activeTab === 'agency' ? (
            <AgencyPage />
          ) : activeTab === 'earnings' ? (
            <EarningsPage />
          ) : activeTab === 'help' ? (
            <HelpPage />
          ) : activeTab.startsWith('site-') ? (
            <WebsiteTabViewer
              website={connectedWebsites[parseInt(activeTab.split('-')[1])]}
              index={parseInt(activeTab.split('-')[1])}
            />
          ) : (
            <HomePage
              user={user}
              rooms={rooms}
              onSelectRoom={(r) => setActiveRoom(r)}
              onOpenCoinStore={() => setShowCoinStore(true)}
              onStartLive={handleStartLive}
            />
          )}
        </main>

      </div>

      {/* Coin Store Modal */}
      {showCoinStore && (
        <CoinStore
          user={user}
          onPurchaseCoins={handlePurchaseCoins}
          onClose={() => setShowCoinStore(false)}
        />
      )}

    </div>
  );
}
