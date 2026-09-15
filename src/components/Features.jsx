import React from 'react';
import { ShieldCheck, Radar, Headset, Lock } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-28 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow"><span className="dot"></span>Why QAtalyst</span>
          <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Take Control of Your Payment Release Quality With the Experts
          </h2>
          <p className="mt-4 text-mist-300 text-lg leading-relaxed">
            Protect your payment product releases with official protocol standards
            and continuous monitoring that keeps operations running without disruption.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 sm:grid-flow-row-dense sm:auto-rows-[180px]">
          {/* Card 1 */}
          <div className="rounded-2xl border border-white/10 bg-ink-800 p-6 sm:row-span-1">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="font-display font-semibold text-white">Protocol Accuracy</p>
            <p className="mt-1.5 text-sm text-mist-400 leading-relaxed">
              Every simulation follows the official payload structure of ISO 8583, ISO 20022 and QRIS — never a generic approximation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="graphic-panel rounded-2xl p-6 sm:row-span-2 flex flex-col justify-between overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=1200&q=70"
              alt="Radar-style monitoring dashboard for proactive regression testing"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
              <Radar className="w-5 h-5 text-cyan-300" />
            </div>
            <div className="relative">
              <p className="font-display font-semibold text-white text-lg">Proactive Regression</p>
              <p className="mt-1.5 text-sm text-mist-300 leading-relaxed max-w-xs">
                We don't wait for an incident in production. Through scheduled regression and load testing, payload and capacity gaps are caught before they become real problems.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 to-violet-600/10 p-6 sm:row-span-1 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
              <Headset className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <p className="font-display font-extrabold text-2xl text-white">24/7</p>
              <p className="text-sm text-mist-300 mt-0.5">
                Fast response through Managed QA Service — our team never lets its guard down.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-white/10 bg-ink-800 p-6 sm:row-span-1">
            <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
              <Lock className="w-5 h-5 text-violet-400" />
            </div>
            <p className="font-display font-semibold text-white">Compliance by Design</p>
            <p className="mt-1.5 text-sm text-mist-400 leading-relaxed">
              Compliance is built into every scenario from day one — secure &amp; audit-ready by design.
            </p>
          </div>

          {/* Card 5 */}
          <div className="graphic-panel rounded-2xl p-6 sm:row-span-1 flex flex-col justify-between">
            <div className="relative flex -space-x-2.5">
              <span className="w-9 h-9 rounded-full bg-cyan-500/40 avatar-ring flex items-center justify-center text-[11px] font-semibold text-white">RN</span>
              <span className="w-9 h-9 rounded-full bg-violet-500/40 avatar-ring flex items-center justify-center text-[11px] font-semibold text-white">SA</span>
              <span className="w-9 h-9 rounded-full bg-white/15 avatar-ring flex items-center justify-center text-[11px] font-semibold text-white">+4</span>
            </div>
            <p className="relative text-sm text-mist-300 leading-relaxed">
              Expertise isn't just about the system — our QA team understands payment protocol nuance a generalist tester rarely has.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
