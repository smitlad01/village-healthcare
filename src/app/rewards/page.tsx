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
      <div className="reward-wallet grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
        <div>
          <p className="text-text-secondary uppercase tracking-widest text-sm mb-2 font-bold">Total Balance</p>
          <div className="text-5xl font-bold text-white mb-4 flex items-center gap-3">
            2,450 <span className="text-primary text-2xl">pts</span>
          </div>
          <div className="flex items-center gap-4 text-sm font-bold">
            <span className="bg-success/20 text-success px-3 py-1 rounded-full flex items-center gap-1">Level: Tree 🌳</span>
            <span className="text-text-secondary">Next: Forest 🌲 (5,000 pts)</span>
          </div>
          <div className="w-full bg-surface-light h-3 rounded-full mt-4 overflow-hidden border border-border">
            <div className="bg-primary h-full" style={{ width: '49%' }}></div>
          </div>
        </div>

        <div className="bg-surface p-6 rounded-xl border border-border">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-lg flex items-center gap-2">Health Streak <Flame className="streak-flame" size={20} /></h3>
              <p className="text-sm text-text-secondary">Log vitals or meds daily</p>
            </div>
            <div className="text-3xl font-bold text-white">12 <span className="text-sm text-text-secondary">days</span></div>
          </div>
          <div className="flex gap-2 mb-4">
            {[1,2,3,4,5,6,7].map(i => (
              <div key={i} className={`h-2 flex-1 rounded-full ${i <= 5 ? 'bg-primary' : 'bg-surface-light'}`}></div>
            ))}
          </div>
          <p className="text-xs text-text-secondary">2 more days until +200 bonus pts!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Vouchers Section */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2"><Gift size={24}/> Your Vouchers</h2>
              <Link href="/rewards/redeem" className="btn btn-secondary text-sm">Redeem Points <ArrowRight size={16} className="inline ml-1"/></Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="voucher-card available">
                <div className="absolute top-4 right-4 text-success"><CheckCircle size={20} /></div>
                <h3 className="text-lg font-bold mb-2">20% off Grocery Bill</h3>
                <p className="text-sm text-text-secondary mb-4">Local Kirana & Partner Supermarkets</p>
                <div className="mt-auto">
                  <Link href="/rewards/redeem" className="btn btn-primary w-full">Use Voucher</Link>
                </div>
              </div>
              <div className="voucher-card available">
                <div className="absolute top-4 right-4 text-success"><CheckCircle size={20} /></div>
                <h3 className="text-lg font-bold mb-2">20% off Electricity Bill</h3>
                <p className="text-sm text-text-secondary mb-4">State Electricity Board Payment</p>
                <div className="mt-auto">
                  <Link href="/rewards/redeem" className="btn btn-primary w-full">Use Voucher</Link>
                </div>
              </div>
              <div className="voucher-card available">
                <div className="absolute top-4 right-4 text-success"><CheckCircle size={20} /></div>
                <h3 className="text-lg font-bold mb-2">20% off Internet & Recharge</h3>
                <p className="text-sm text-text-secondary mb-4">Broadband & Mobile Data Plans</p>
                <div className="mt-auto">
                  <Link href="/rewards/redeem" className="btn btn-primary w-full">Use Voucher</Link>
                </div>
              </div>
              <div className="voucher-card locked">
                <div className="absolute top-4 right-4 text-text-secondary"><Lock size={20} /></div>
                <h3 className="text-lg font-bold mb-2">20% Bus Transport Discount</h3>
                <p className="text-sm text-text-secondary mb-4">State Transport (MSRTC) Bus Tickets</p>
                <div className="mt-auto pt-4 border-t border-border">
                  <span className="text-sm font-bold">Needs 3,000 pts (550 more)</span>
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
