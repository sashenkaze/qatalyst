import React from 'react';

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow"><span className="dot"></span>Testimonials</span>
          <h2 className="mt-4 sm:mt-5 font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
            The Trust Our Clients Place in Us.
          </h2>
          <p className="mt-3 text-mist-300 leading-relaxed">How our partners see the stability and speed of testing alongside QAtalyst.</p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-ink-800 p-6 sm:p-7 flex flex-col justify-between min-w-0">
            <span className="font-display font-extrabold text-4xl text-white">92%</span>
            <p className="text-sm text-mist-400 mt-3 leading-relaxed">Average scenario coverage our clients reach within their first sprint using QAtalyst.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-ink-800 p-6 sm:p-7 flex flex-col justify-between min-w-0">
            <p className="text-sm text-mist-200 leading-relaxed">
              QAtalyst's regression reports aren't just a bug list. The team gives us
              strategic, actionable risk analysis — we closed critical gaps before
              the product ever reached production.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1758876204244-930299843f07?auto=format&fit=crop&w=1200&q=70"
                alt="Portrait of Dhika Hartono, Head of Engineering"
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-white">Dhika Hartono</p>
                <p className="text-xs text-mist-500">Head of Engineering, Regional PSP</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-ink-800 p-6 sm:p-7 flex flex-col justify-between min-w-0 md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between gap-2">
              <span className="font-display font-extrabold text-3xl text-white">-85%</span>
              <span className="chip text-[10px] text-pass bg-pass/10 border border-pass/30 rounded px-1.5 py-0.5">CYCLE TIME</span>
            </div>
            <svg viewBox="0 0 200 60" className="w-full h-14 mt-4">
              <polyline
                points="0,15 30,20 60,18 90,32 120,28 150,45 200,50"
                fill="none"
                stroke="#6E8FC7"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></polyline>
            </svg>
            <p className="text-xs text-mist-500 mt-3">Reduction in regression cycle time after switching from manual testing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
