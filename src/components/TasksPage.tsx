import React, { useState } from 'react';
import { CheckSquare, Coins, Sparkles, Check, Flame, Gift, Calendar } from 'lucide-react';
import { UserProfile } from '../types';

interface TasksPageProps {
  user: UserProfile | null;
  onRewardCoins: (amount: number) => void;
}

export const TasksPage: React.FC<TasksPageProps> = ({ user, onRewardCoins }) => {
  const [streakDays, setStreakDays] = useState<number[]>([1, 2, 3]); // Days 1, 2, 3 checked in
  const [todayClaimed, setTodayClaimed] = useState<boolean>(false);
  const currentStreak = 4; // 4 days streak

  const [tasks, setTasks] = useState([
    { id: '1', title: 'Broadcast Live for 30 minutes', reward: 200, completed: true },
    { id: '2', title: 'Send 3 gifts to fellow creators', reward: 150, completed: false },
    { id: '3', title: 'Invite a new friend to SOFT LIFE', reward: 500, completed: false },
    { id: '4', title: 'Participate in 8-seat party stage', reward: 300, completed: true }
  ]);

  const handleClaimCheckIn = () => {
    if (todayClaimed) return;
    const rewardAmount = currentStreak * 100; // e.g., 400 coins for day 4
    onRewardCoins(rewardAmount);
    setTodayClaimed(true);
    setStreakDays([...streakDays, currentStreak]);
    alert(`Successfully checked in! Claimed +${rewardAmount} bonus coins! 🎉`);
  };

  const handleClaimTask = (taskId: string, reward: number) => {
    onRewardCoins(reward);
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: true } : t));
    alert(`Claimed +${reward} coins reward! ✨`);
  };

  const checkInDays = [
    { day: 1, coins: 100 },
    { day: 2, coins: 200 },
    { day: 3, coins: 300 },
    { day: 4, coins: 400 },
    { day: 5, coins: 500 },
    { day: 6, coins: 600 },
    { day: 7, coins: 1000, jackpot: true }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header */}
      <div className="bg-slate-900 border border-pink-500/30 p-6 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <CheckSquare className="w-6 h-6 text-pink-400" />
            <h1 className="text-2xl font-black text-white">Daily Tasks & Check-in</h1>
          </div>
          <p className="text-xs text-slate-300">Complete daily tasks and maintain your check-in streak on SOFT LIFE to earn bonus coins.</p>
        </div>

        <div className="bg-gradient-to-r from-amber-500/20 to-pink-500/20 border border-amber-500/40 px-5 py-3 rounded-2xl flex items-center space-x-3">
          <Flame className="w-6 h-6 text-amber-400 animate-bounce" />
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Login Streak</div>
            <div className="text-xl font-black text-amber-300">{currentStreak} Days Consecutive</div>
          </div>
        </div>
      </div>

      {/* Daily Check-in Streak Section */}
      <div className="bg-gradient-to-r from-slate-900 via-purple-950/40 to-slate-900 border border-amber-500/40 p-6 rounded-3xl shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold text-white">Daily Check-in Reward System</h3>
          </div>
          <span className="text-xs text-amber-300 font-bold bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
            {todayClaimed ? 'Checked In Today ✓' : 'Reward Available!'}
          </span>
        </div>

        {/* 7-Day Streak Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
          {checkInDays.map((item) => {
            const isChecked = streakDays.includes(item.day) || (item.day === currentStreak && todayClaimed);
            const isToday = item.day === currentStreak && !todayClaimed;

            return (
              <div
                key={item.day}
                className={`bg-slate-950 border rounded-2xl p-4 text-center relative flex flex-col justify-between transition-all ${
                  isToday
                    ? 'border-amber-400 shadow-lg shadow-amber-500/20 bg-gradient-to-b from-slate-950 to-amber-950/20 scale-105'
                    : isChecked
                    ? 'border-emerald-500/60 bg-emerald-950/20'
                    : 'border-slate-800'
                }`}
              >
                {item.jackpot && (
                  <span className="absolute -top-2.5 right-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
                    Jackpot
                  </span>
                )}

                <div className="text-xs font-bold text-slate-400 mb-1">Day {item.day}</div>
                <div className="my-2">
                  <Coins className={`w-7 h-7 mx-auto ${isChecked ? 'text-emerald-400' : 'text-amber-400 animate-pulse'}`} />
                </div>
                <div className="text-xs font-black text-amber-300">+{item.coins}</div>

                <div className="mt-3">
                  {isChecked ? (
                    <span className="inline-flex items-center justify-center w-full bg-emerald-900/80 text-emerald-300 text-[10px] font-bold py-1 rounded-lg">
                      Claimed ✓
                    </span>
                  ) : isToday ? (
                    <button
                      onClick={handleClaimCheckIn}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-[10px] py-1.5 rounded-lg shadow-md hover:scale-105 transition-all uppercase tracking-wider"
                    >
                      Check In
                    </button>
                  ) : (
                    <span className="text-[10px] text-slate-500 block py-1">Locked</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {!todayClaimed && (
          <div className="text-center">
            <button
              onClick={handleClaimCheckIn}
              className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-slate-950 font-black px-8 py-3.5 rounded-2xl text-sm shadow-xl hover:scale-105 transition-all inline-flex items-center space-x-2"
            >
              <Gift className="w-4 h-4" />
              <span>Claim Today's Check-in (+{currentStreak * 100} Coins)</span>
            </button>
          </div>
        )}
      </div>

      {/* Daily Tasks List */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white">Extra Daily Missions</h3>
        <div className="grid grid-cols-1 gap-4">
          {tasks.map((task) => (
            <div key={task.id} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center justify-between shadow-lg">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                  task.completed ? 'bg-emerald-700 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {task.completed ? <Check className="w-5 h-5" /> : '•'}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{task.title}</h3>
                  <p className="text-xs text-amber-400 font-semibold flex items-center space-x-1 mt-0.5">
                    <Coins className="w-3.5 h-3.5" />
                    <span>+{task.reward} Coins Reward</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => !task.completed && handleClaimTask(task.id, task.reward)}
                disabled={task.completed}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase transition-all ${
                  task.completed
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md hover:scale-105'
                }`}
              >
                {task.completed ? 'Claimed' : 'Claim Reward'}
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
