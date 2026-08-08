'use client';
import React from 'react';
import Link from 'next/link';
import { Gift, Award, Flame, CheckCircle, Lock, ArrowRight, Zap } from 'lucide-react';
import '@/styles/games.css';

export default function RewardsPage() {
  return (
    <div className="page-container">
      <header className="page-header">
        <div>
          <h1 className="page-title flex items-center gap-3">
            <Award className="text-primary" size={32} />
            Rewards & Wallet
          </h1>
          <p className="page-subtitle">Earn points through healthy actions and redeem them for healthcare discounts</p>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="glass-card mb-10 p-6 md:p-8 border border-white/10 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest mb-2 font-bold text-gray-400">Total Balance</p>
            <div className="text-5xl font-black text-white mb-3 flex items-center gap-3">
              2,450 <span className="text-[#59b6c2] text-2xl font-bold">pts</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-bold mb-3">
              <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">Level: Tree 🌳</span>
              <span className="text-gray-300">Next: Forest 🌲 (5,000 pts)</span>
            </div>
            <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden border border-white/10">
              <div className="bg-gradient-to-r from-[#156d78] to-[#7ebf1a] h-full" style={{ width: '49%' }}></div>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg text-white flex items-center gap-2">Health Streak <Flame className="text-amber-400 animate-pulse" size={20} /></h3>
                <p className="text-sm text-gray-300">Log vitals or meds daily</p>
              </div>
              <div className="text-3xl font-black text-white">12 <span className="text-sm font-normal text-gray-400">days</span></div>
            </div>
            <div className="flex gap-2 mb-3">
              {[1,2,3,4,5,6,7].map(i => (
                <div key={i} className={`h-2 flex-1 rounded-full ${i <= 5 ? 'bg-[#7ebf1a]' : 'bg-white/10'}`}></div>
              ))}
            </div>
            <p className="text-xs text-gray-400 font-medium">2 more days until +200 bonus pts!</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Vouchers Section */}
          <section className="glass-card p-6 rounded-2xl border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Gift size={24} className="text-[#59b6c2]" /> Your Vouchers</h2>
              <Link href="/rewards/redeem" className="btn-action-primary inline-flex items-center gap-2 self-start sm:self-auto">
                Redeem Points <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="voucher-card available bg-white/5 p-6 rounded-xl border border-emerald-500/30 relative flex flex-col justify-between">
                <div className="absolute top-4 right-4 text-emerald-400"><CheckCircle size={20} /></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 pr-6">20% off Grocery Bill</h3>
                  <p className="text-sm text-gray-300 mb-6">Local Kirana & Partner Supermarkets</p>
                </div>
                <Link href="/rewards/redeem" className="btn-action-primary w-full text-center">Use Voucher</Link>
              </div>

              <div className="voucher-card available bg-white/5 p-6 rounded-xl border border-emerald-500/30 relative flex flex-col justify-between">
                <div className="absolute top-4 right-4 text-emerald-400"><CheckCircle size={20} /></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 pr-6">20% off Electricity Bill</h3>
                  <p className="text-sm text-gray-300 mb-6">State Electricity Board Payment</p>
                </div>
                <Link href="/rewards/redeem" className="btn-action-primary w-full text-center">Use Voucher</Link>
              </div>

              <div className="voucher-card available bg-white/5 p-6 rounded-xl border border-emerald-500/30 relative flex flex-col justify-between">
                <div className="absolute top-4 right-4 text-emerald-400"><CheckCircle size={20} /></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 pr-6">20% off Internet & Recharge</h3>
                  <p className="text-sm text-gray-300 mb-6">Broadband & Mobile Data Plans</p>
                </div>
                <Link href="/rewards/redeem" className="btn-action-primary w-full text-center">Use Voucher</Link>
              </div>

              <div className="voucher-card locked bg-white/5 p-6 rounded-xl border border-white/10 relative opacity-60 flex flex-col justify-between">
                <div className="absolute top-4 right-4 text-gray-400"><Lock size={20} /></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 pr-6">20% Bus Transport Discount</h3>
                  <p className="text-sm text-gray-300 mb-6">State Transport (MSRTC) Bus Tickets</p>
                </div>
                <div className="pt-3 border-t border-white/10 text-xs font-bold text-amber-400">
                  Needs 3,000 pts (550 more)
                </div>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Award size={24}/> Achievements</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: 'First Checkup', done: true, icon: '🩺' },
                { name: '7-Day Streak', done: true, icon: '🔥' },
                { name: 'Blood Donor', done: true, icon: '🩸' },
                { name: 'Fully Vaxxed', done: true, icon: '💉' },
                { name: '30-Day Streak', done: false, icon: '📅' },
                { name: 'Game Master', done: false, icon: '🎮' },
                { name: 'Scholar', done: false, icon: '📚' },
              ].map((badge, i) => (
                <div key={i} className={`p-4 rounded-xl text-center border transition-all ${badge.done ? 'bg-surface border-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]' : 'bg-surface-light border-border opacity-60 grayscale'}`}>
                  <div className="text-4xl mb-2">{badge.icon}</div>
                  <div className="text-xs font-bold uppercase">{badge.name}</div>
                  {badge.done && <CheckCircle size={14} className="text-success mx-auto mt-2" />}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div>
          {/* History */}
          <section className="glass-panel mb-8">
            <h2 className="text-xl font-bold mb-6">Recent History</h2>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {[
                { action: 'Logged Vitals', time: 'Today', pts: 50 },
                { action: 'Took Medication', time: 'Today', pts: 30 },
                { action: 'Doctor Appointment', time: 'Yesterday', pts: 100 },
                { action: 'Played Water Hero', time: '2 days ago', pts: 150 },
                { action: 'Read Article', time: '3 days ago', pts: 25 },
                { action: 'Completed Quiz', time: '3 days ago', pts: 50 },
                { action: 'Played Healthy Plate', time: '5 days ago', pts: 200 },
                { action: 'Blood Donation', time: '1 week ago', pts: 500 },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-3 hover:bg-surface rounded-lg transition-colors border-b border-border last:border-0">
                  <div>
                    <div className="font-bold text-sm">{item.action}</div>
                    <div className="text-xs text-text-secondary">{item.time}</div>
                  </div>
                  <div className="text-success font-bold text-sm flex items-center gap-1">
                    +{item.pts} <Zap size={12}/>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-panel">
            <h2 className="text-xl font-bold mb-4">How to Earn Points</h2>
            <div className="text-sm space-y-2">
              <div className="flex justify-between py-2 border-b border-border"><span className="text-text-secondary">Daily Login</span> <span className="font-bold">+10</span></div>
              <div className="flex justify-between py-2 border-b border-border"><span className="text-text-secondary">Log Vitals/Meds</span> <span className="font-bold">+30-50</span></div>
              <div className="flex justify-between py-2 border-b border-border"><span className="text-text-secondary">Read Article</span> <span className="font-bold">+25</span></div>
              <div className="flex justify-between py-2 border-b border-border"><span className="text-text-secondary">Play Games</span> <span className="font-bold">+100-200</span></div>
              <div className="flex justify-between py-2 border-b border-border"><span className="text-text-secondary">Attend Camp</span> <span className="font-bold">+300</span></div>
              <div className="flex justify-between py-2"><span className="text-text-secondary">Blood Donation</span> <span className="font-bold text-primary">+500</span></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
