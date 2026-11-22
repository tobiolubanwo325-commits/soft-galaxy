export type UserRole = 'creator' | 'vip' | 'viewer' | 'moderator' | 'host';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  coins: number;
  isVerified: boolean;
  avatar: string;
  level: number;
  idNumber: string;
}

export interface LiveRoom {
  id: string;
  title: string;
  hostName: string;
  hostAvatar: string;
  category: 'Party' | 'Music' | 'Chat' | 'VIP Mingle';
  viewersCount: number;
  isLive: boolean;
  seats: { id: number; user: UserProfile | null; isMuted: boolean; isVideoOn: boolean }[];
  thumbnail: string;
}

export interface ConnectedWebsite {
  id: string;
  name: string;
  url: string;
  description: string;
  iconName: string;
  status: 'Connected' | 'Syncing';
}

export interface CoinPackage {
  id: string;
  coins: number;
  bonusCoins: number;
  priceUSD: number;
  popular?: boolean;
}

export interface GiftItem {
  id: string;
  name: string;
  coinPrice: number;
  icon: string;
}

export interface RankingUser {
  rank: number;
  name: string;
  avatar: string;
  score: number;
  coins: number;
  role: string;
}
