import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 items-start">
          <div>
            <span className="eyebrow"><span className="dot"></span>About QAtalyst</span>
            <h2 className="mt-4 sm:mt-5 font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
              The Testing Partner Your Payment Infrastructure Can Trust
            </h2>
            <a
              href="#/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-semibold px-5 py-2.5 hover:brightness-110 transition"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-mist-300 leading-relaxed lg:pt-3">
            QAtalyst stands at the front line of payment systems testing. Starting
            from deep expertise in switch and core banking simulation, we've grown
            into an end-to-end QA platform that helps banks, PSPs and fintechs ship
            payment products safely, efficiently, and to global standards.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-5 md:grid-cols-2">
          <div className="graphic-panel rounded-2xl p-5 sm:p-7 min-h-[16rem] sm:h-72 flex flex-col justify-between overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1754039984985-ef607d80113a?auto=format&fit=crop&w=1200&q=70"
              alt="QA engineer monitoring a payment testing dashboard"
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />
            <div className="relative flex items-center justify-between">
              <span className="text-xs chip text-mist-300">QAtalyst — dashboard</span>
              <span className="relative flex items-center gap-1.5 text-[11px] chip text-fail bg-fail/10 border border-fail/30 rounded-full px-2.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-fail"></span>Alerts <span className="text-white/70">+3</span>
              </span>
            </div>
            <div className="relative">
              <p className="font-display font-semibold text-white text-lg mb-1">Built for Trust and Resilient Security</p>
              <p className="text-sm text-mist-400 max-w-xs">We deliver end-to-end testing so your payment releases stay stable and dependable.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-ink-800 p-5 sm:p-7 min-h-[16rem] sm:h-72 flex flex-col justify-between">
            <div className="flex flex-wrap gap-2">
              <span className="chip text-[11px] text-mist-300 border border-white/10 rounded px-2.5 py-1.5">ISO 8583</span>
              <span className="chip text-[11px] text-mist-300 border border-white/10 rounded px-2.5 py-1.5">ISO 20022</span>
              <span className="chip text-[11px] text-mist-300 border border-white/10 rounded px-2.5 py-1.5">QRIS</span>
              <span className="chip text-[11px] text-mist-300 border border-white/10 rounded px-2.5 py-1.5">XML</span>
              <span className="chip text-[11px] text-mist-300 border border-white/10 rounded px-2.5 py-1.5">JSON</span>
              <span className="chip text-[11px] text-mist-300 border border-white/10 rounded px-2.5 py-1.5">REST/SOAP</span>
            </div>
            <div>
              <p className="font-display font-semibold text-white text-lg mb-1">Backed by Internationally Scaled Protocol Standards</p>
              <p className="text-sm text-mist-400">Every simulation and scenario follows the official payload structure of the payment scheme — never a generic approximation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
