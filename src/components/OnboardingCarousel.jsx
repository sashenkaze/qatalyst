import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, PlugZap, Map, Play, FileCheck2, ArrowRight } from 'lucide-react';

export default function OnboardingCarousel() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 296;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-24 lg:py-28 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div className="max-w-xl">
            <span className="eyebrow"><span className="dot"></span>Onboarding Stages</span>
            <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              From Sandbox to Sign-Off.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous step"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-mist-300 hover:bg-white/10 transition"
            >
              <ChevronLeft className="w-[18px] h-[18px]" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next step"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-mist-300 hover:bg-white/10 transition"
            >
              <ChevronRight className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>

        <div ref={carouselRef} className="carousel flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {/* Step 1 */}
          <div className="shrink-0 w-[260px] sm:w-[280px] rounded-2xl border border-white/10 bg-ink-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <PlugZap className="w-[18px] h-[18px] text-cyan-400" />
              </div>
              <span className="chip text-xs text-mist-500">#1</span>
            </div>
            <p className="font-semibold text-white">Connect Your Sandbox</p>
            <p className="mt-2 text-sm text-mist-400 leading-relaxed">Upload a sample payload or connect your sandbox environment in minutes.</p>
          </div>

          {/* Step 2 */}
          <div className="shrink-0 w-[260px] sm:w-[280px] rounded-2xl border border-white/10 bg-ink-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <Map className="w-[18px] h-[18px] text-violet-400" />
              </div>
              <span className="chip text-xs text-mist-500">#2</span>
            </div>
            <p className="font-semibold text-white">We Map Your Protocol</p>
            <p className="mt-2 text-sm text-mist-400 leading-relaxed">Our team configures ISO 8583, ISO 20022 or QRIS to match your switch and scheme.</p>
          </div>

          {/* Step 3 */}
          <div className="shrink-0 w-[260px] sm:w-[280px] rounded-2xl border border-white/10 bg-ink-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Play className="w-[18px] h-[18px] text-cyan-400" />
              </div>
              <span className="chip text-xs text-mist-500">#3</span>
            </div>
            <p className="font-semibold text-white">Run the Scenario Suite</p>
            <p className="mt-2 text-sm text-mist-400 leading-relaxed">Automated regression runs against your sandbox or staging environment, whenever it's triggered.</p>
          </div>

          {/* Step 4 */}
          <div className="shrink-0 w-[260px] sm:w-[280px] rounded-2xl border border-white/10 bg-ink-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <FileCheck2 className="w-[18px] h-[18px] text-violet-400" />
              </div>
              <span className="chip text-xs text-mist-500">#4</span>
            </div>
            <p className="font-semibold text-white">Get Your Coverage Report</p>
            <p className="mt-2 text-sm text-mist-400 leading-relaxed">A full pass/fail report with message logs and recommended next steps.</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold px-6 py-3 hover:brightness-110 transition"
          >
            Try the Free Sandbox
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[-160px] w-[900px] h-[320px] rounded-[50%] bg-gradient-to-t from-white/10 to-transparent blur-3xl opacity-40"></div>
    </section>
  );
}
