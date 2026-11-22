import React, { useState } from 'react';
import { Radio, ShieldCheck, Mail, Lock, User, CheckCircle2, AlertCircle } from 'lucide-react';
import { UserProfile, UserRole } from '../types';

interface SignUpPageProps {
  onLogin: (user: UserProfile) => void;
  onBack: () => void;
}

export const SignUpPage: React.FC<SignUpPageProps> = ({ onLogin, onBack }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || (!isLogin && !name)) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!ageConfirmed) {
      setError('You must confirm you are 18 years or older to access SOFT LIFE.');
      return;
    }

    // Create user profile
    const newUser: UserProfile = {
      id: 'user-' + Math.random().toString(36).substring(2, 9),
      name: name || email.split('@')[0],
      email: email,
      role: 'creator',
      coins: 500, // starting coins
      isVerified: true,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
      level: 5,
      idNumber: '8899' + Math.floor(Math.random() * 9000)
    };

    onLogin(newUser);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-700/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-md w-full bg-slate-900/90 border border-pink-500/30 p-8 rounded-3xl backdrop-blur-xl shadow-2xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-600 via-rose-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-pink-600/30">
            <Radio className="w-6 h-6 text-white animate-pulse" />
          </div>
          <h2 className="text-3xl font-black bg-gradient-to-r from-pink-500 via-rose-400 to-emerald-400 bg-clip-text text-transparent">
            {isLogin ? 'Welcome Back to SOFT LIFE' : 'Join SOFT LIFE Studio'}
          </h2>
          <p className="text-slate-400 text-xs mt-2">
            Live Social, Audio & Video Broadcasting Platform
          </p>
        </div>

        {error && (
          <div className="mb-6 bg-rose-950/80 border border-rose-500/50 p-3.5 rounded-xl flex items-center space-x-3 text-rose-200 text-xs">
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Display Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your creator name"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-10 text-sm text-white focus:outline-none focus:border-pink-500 transition-all"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-10 text-sm text-white focus:outline-none focus:border-pink-500 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-10 text-sm text-white focus:outline-none focus:border-pink-500 transition-all"
              />
            </div>
          </div>

          {/* 18+ Age verification checkbox */}
          <div className="flex items-start space-x-3 pt-2">
            <input
              type="checkbox"
              id="ageCheck"
              checked={ageConfirmed}
              onChange={(e) => setAgeConfirmed(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-slate-800 bg-slate-950 text-pink-600 focus:ring-pink-500"
            />
            <label htmlFor="ageCheck" className="text-xs text-slate-300 leading-relaxed">
              I confirm that I am <strong className="text-pink-400">18 years of age or older</strong> and agree to SOFT LIFE Terms & Privacy Policy.
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-emerald-700 text-white font-bold text-sm shadow-lg shadow-pink-600/30 hover:opacity-95 transition-all mt-4"
          >
            {isLogin ? 'Sign In to SOFT LIFE' : 'Create SOFT LIFE Account'}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-400">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-pink-400 font-bold hover:underline ml-1"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-800 text-center">
          <button
            onClick={onBack}
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            ← Back to Home
          </button>
        </div>

      </div>
    </div>
  );
};
