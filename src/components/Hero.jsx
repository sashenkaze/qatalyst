import React, { useEffect, useRef, useState } from 'react';
import { ServerCog, Upload, Zap } from 'lucide-react';

export default function Hero() {
  const [banksCount, setBanksCount] = useState(0);
  const [transCount, setTransCount] = useState(0);
  const statRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;

          // Animate Banks counter to 120
          const duration = 1200;
          const startTime = performance.now();
          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(1, elapsed / duration);
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setBanksCount(Math.round(120 * easeProgress));
            setTransCount(parseFloat((4.2 * easeProgress).toFixed(1)));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pt-36 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-overlay pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <span className="eyebrow">
          <span className="dot"></span>#1 Payment Test Automation in Indonesia
        </span>

        <h1 className="mt-6 font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.2rem] leading-[1.12] tracking-tight text-white">
          Integrated Test Automation
          <br className="hidden sm:block" />
          {' '}for Payment Infrastructure
        </h1>

        <p className="mt-6 text-lg text-mist-300 max-w-2xl mx-auto leading-relaxed">
          QAtalyst protects your payment product releases from production failure.
          From ISO 8583/20022/QRIS/JSON/XML simulation to automated regression, we are the
          testing partner your payment infrastructure can trust.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center">
          <a
            href="#/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold px-7 py-3.5 shadow-glow hover:brightness-110 transition"
          >
            Talk to Us
          </a>
        </div>
      </div>

      {/* stat row */}
      <div ref={statRef} className="relative max-w-7xl mx-auto px-6 lg:px-8 mt-14">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="graphic-panel rounded-2xl col-span-2 lg:col-span-1 h-56 lg:h-auto flex flex-col justify-end p-5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=1200&q=70"
              alt="Server room representing switch and core banking simulation"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <ServerCog className="text-cyan-300 w-8 h-8 mb-3 relative" />
            <p className="relative text-sm text-white/90 font-medium leading-snug">
              Switch &amp; core banking simulation, live
            </p>
          </div>

          <div className="rounded-2xl bg-ink-800 border border-white/10 p-5 flex flex-col justify-center">
            <span className="font-display font-extrabold text-3xl text-white">
              {banksCount}
            </span>
            <span className="text-xs text-mist-400 mt-1">Banks &amp; PSPs tested</span>
          </div>

          <div className="rounded-2xl bg-ink-800 border border-white/10 p-5">
            <p className="text-xs text-mist-400 mb-3">Regression Coverage</p>
            <svg viewBox="0 0 100 40" className="w-full h-10">
              <polyline
                points="0,32 15,28 30,30 45,18 60,20 75,10 100,6"
                fill="none"
                stroke="#D12E32"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></polyline>
            </svg>
            <span className="text-xs text-cyan-300 chip">+18% this quarter</span>
          </div>

          <div className="rounded-2xl bg-ink-800 border border-white/10 p-5 flex flex-col justify-center">
            <span className="font-display font-extrabold text-3xl text-white">
              99.9<span className="text-xl">%</span>
            </span>
            <span className="text-xs text-mist-400 mt-1">Switch uptime SLA</span>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-cyan-500/15 to-violet-600/15 border border-cyan-400/20 p-5 flex flex-col justify-center col-span-2 lg:col-span-1">
            <Zap className="text-cyan-300 w-5 h-5 mb-2" />
            <span className="font-display font-extrabold text-2xl text-white">
              <span>{transCount}</span>M+
            </span>
            <span className="text-xs text-mist-400 mt-1">Simulated transactions / month</span>
          </div>
        </div>
      </div>
    </section>
  );
}
