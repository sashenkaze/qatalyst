import React from 'react';
import { PowerOff, TrendingDown, ShieldAlert, UserX } from 'lucide-react';

export default function Risk() {
  return (
    <section className="relative py-24 lg:py-28 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <span className="eyebrow"><span className="dot"></span>The Cost of Skipping Testing</span>
        <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight max-w-2xl">
          Releasing Without Thorough Testing? The Risk Is Real.
        </h2>
        <p className="mt-4 text-mist-300 text-lg leading-relaxed max-w-2xl">
          A payload failure isn't just a technical bug — it halts operations, stalls
          transactions, and erodes customer trust within minutes. QAtalyst brings a
          systematic approach: thorough simulation, scheduled regression, and a clear
          report before you ship to production.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#qaas"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold px-6 py-3 hover:brightness-110 transition"
          >
            Talk to Us Urgently
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 text-mist-100 font-semibold px-6 py-3 hover:bg-white/10 transition"
          >
            See How It Works
          </a>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-xl border border-white/10 bg-ink-800 p-6">
            <div className="w-10 h-10 rounded-lg bg-fail/10 flex items-center justify-center mb-4">
              <PowerOff className="w-5 h-5 text-fail" />
            </div>
            <p className="font-semibold text-white text-sm">Operational Downtime</p>
            <p className="mt-1.5 text-xs text-mist-400 leading-relaxed">Every minute a switch stays unresponsive means a queue of transactions stuck and services that can't be processed.</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-ink-800 p-6">
            <div className="w-10 h-10 rounded-lg bg-warn/10 flex items-center justify-center mb-4">
              <TrendingDown className="w-5 h-5 text-warn" />
            </div>
            <p className="font-semibold text-white text-sm">Financial Loss</p>
            <p className="mt-1.5 text-xs text-mist-400 leading-relaxed">Failed transactions, emergency remediation costs, and potential regulatory fines add up fast.</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-ink-800 p-6">
            <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
              <ShieldAlert className="w-5 h-5 text-violet-400" />
            </div>
            <p className="font-semibold text-white text-sm">Regulatory Non-Compliance</p>
            <p className="mt-1.5 text-xs text-mist-400 leading-relaxed">Payloads that don't match scheme standards risk breaching Bank Indonesia and OJK requirements.</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-ink-800 p-6">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
              <UserX className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="font-semibold text-white text-sm">Customer Trust</p>
            <p className="mt-1.5 text-xs text-mist-400 leading-relaxed">Repeated failed transactions push customers to switch to a competitor faster than you'd expect.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
