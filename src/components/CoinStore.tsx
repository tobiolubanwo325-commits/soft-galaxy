import React from 'react';
import { Coins, Sparkles, Gift, Check, ShieldCheck } from 'lucide-react';
import { CoinPackage, UserProfile } from '../types';

interface CoinStoreProps {
  user: UserProfile | null;
  onPurchaseCoins: (coins: number) => void;
  onClose: () => void;
}

export const CoinStore: React.FC<CoinStoreProps> = ({ user, onPurchaseCoins, onClose }) => {
  const coinPackages: CoinPackage[] = [
    { id: 'p1', coins: 1000, bonusCoins: 100, priceUSD: 9.99 },
    { id: 'p2', coins: 5000, bonusCoins: 750, priceUSD: 39.99, popular: true },
    { id: 'p3', coins: 12000, bonusCoins: 2000, priceUSD: 89.99 },
    { id: 'p4', coins: 30000, bonusCoins: 6000, priceUSD: 199.99 }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-pink-500/30 max-w-2xl w-full rounded-3xl p-8 relative shadow-2xl overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-pink-600 flex items-center justify-center shadow-lg">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">SOFT LIFE Coin Store</h2>
              <p className="text-xs text-slate-400">Top up virtual coins to send gifts and unlock VIP privileges</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>

        {user && (
          <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border border-pink-500 object-cover" />
              <div>
                <div className="text-xs text-slate-400">Current Balance</div>
                <div className="text-lg font-black text-amber-400 flex items-center space-x-1">
                  <Coins className="w-4 h-4" />
                  <span>{user.coins.toLocaleString()} Coins</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2.5 py-1 rounded-full uppercase font-bold">
                Secure SSL Payment
              </span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {coinPackages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => onPurchaseCoins(pkg.coins + pkg.bonusCoins)}
              className={`bg-slate-950 border rounded-2xl p-5 cursor-pointer transition-all hover:scale-[1.02] relative ${
                pkg.popular
                  ? 'border-pink-500 shadow-lg shadow-pink-600/20 bg-gradient-to-b from-slate-950 to-pink-950/20'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 right-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular
                </span>
              )}

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Coins className="w-5 h-5 text-amber-400" />
                  <span className="text-xl font-black text-white">{pkg.coins.toLocaleString()}</span>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2 py-1 rounded-lg">
                  +{pkg.bonusCoins} Bonus
                </span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-900">
                <span className="text-xs text-slate-400">USD Price</span>
                <span className="text-lg font-bold text-pink-400">${pkg.priceUSD}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-[11px] text-slate-500 flex items-center justify-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Transactions are processed securely through SOFT LIFE encrypted payment gateway.</span>
        </div>

      </div>
    </div>
  );
};
