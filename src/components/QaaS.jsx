import React from 'react';
import { UserCheck, ShieldCheck, Workflow, ArrowRight } from 'lucide-react';

export default function QaaS() {
  return (
    <section id="qaas" className="relative py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14 items-center">
          <div>
            <span className="eyebrow"><span className="dot"></span>Hybrid Model</span>
            <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Get dedicated payment QA engineers when you need them.
            </h2>
            <p className="mt-5 text-mist-300 text-lg leading-relaxed">
              Run QAtalyst as a self-serve platform, or pair it with senior QA engineers
              who've shipped switch and core-banking releases before — writing your
              scenarios, running your regression cycles, and signing off before you go live.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <UserCheck className="text-cyan-400 w-[18px] h-[18px]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Dedicated payment QA engineers</h3>
                  <p className="text-sm text-mist-400 mt-1">On-demand specialists who know ISO 8583 field-level nuance, not generalist testers reading your spec cold.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <ShieldCheck className="text-violet-400 w-[18px] h-[18px]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Security &amp; regression as a cycle</h3>
                  <p className="text-sm text-mist-400 mt-1">Scheduled regression passes and security testing before every major release, not just once a year.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Workflow className="text-cyan-400 w-[18px] h-[18px]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Platform + people, one contract</h3>
                  <p className="text-sm text-mist-400 mt-1">Your team keeps the sandbox and dashboards; ours does the heavy lifting when you're short-staffed or short on time.</p>
                </div>
              </div>
            </div>

            <a href="#/contact" className="mt-9 inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
              See QaaS engagement options
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-ink-800 p-6 sm:p-7">
              <div className="flex items-center justify-between mb-5">
                <span className="chip text-xs text-mist-400">Regression cycle #14</span>
                <span className="chip text-[10px] text-pass bg-pass/10 border border-pass/30 rounded px-1.5 py-0.5">ON TRACK</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-mist-200">QRIS scenario coverage</span>
                    <span className="chip text-mist-400">92%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full w-[92%] bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-mist-200">ISO 8583 field assertions</span>
                    <span className="chip text-mist-400">78%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full w-[78%] bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-mist-200">Settlement edge cases</span>
                    <span className="chip text-mist-400">61%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full w-[61%] bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <span className="w-8 h-8 rounded-full bg-cyan-500/30 avatar-ring flex items-center justify-center text-[11px] font-semibold text-cyan-200">RN</span>
                  <span className="w-8 h-8 rounded-full bg-violet-500/30 avatar-ring flex items-center justify-center text-[11px] font-semibold text-violet-200">SA</span>
                  <span className="w-8 h-8 rounded-full bg-white/10 avatar-ring flex items-center justify-center text-[11px] font-semibold text-mist-200">+2</span>
                </div>
                <p className="text-xs text-mist-400">Dedicated pod assigned to your integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
