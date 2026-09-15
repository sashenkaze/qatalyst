import React from 'react';

export default function Methodology() {
  return (
    <section className="relative py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-4">
          <span className="eyebrow"><span className="dot"></span>Testing Approach</span>
        </div>
        <h2 className="text-center font-display font-bold text-3xl sm:text-4xl text-white tracking-tight max-w-2xl mx-auto">
          We Test Systematically. Protocol-Accurate. No Guesswork.
        </h2>

        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative graphic-panel rounded-2xl h-96 flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1754039984985-ef607d80113a?auto=format&fit=crop&w=1200&q=70"
              alt="QA engineer reviewing regression test coverage"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative flex flex-col items-center">
              <svg viewBox="0 0 140 140" className="w-40 h-40 -rotate-90">
                <circle cx="70" cy="70" r="58" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12"></circle>
                <circle
                  cx="70"
                  cy="70"
                  r="58"
                  fill="none"
                  stroke="url(#gaugeGrad)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray="364"
                  strokeDashoffset="33"
                ></circle>
                <defs>
                  <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#D12E32"></stop>
                    <stop offset="100%" stopColor="#2E5AA5"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display font-extrabold text-3xl text-white">92%</span>
                <span className="text-[11px] text-mist-300 mt-0.5">Coverage</span>
              </div>
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-ink-950/70 border border-white/10 px-4 py-3 backdrop-blur">
              <p className="text-xs text-mist-300 chip">Regression Progress</p>
              <p className="text-sm text-white mt-1">Scenario coverage climbing sprint over sprint</p>
            </div>
          </div>

          <div className="space-y-7">
            <div className="flex gap-5">
              <span className="chip font-display font-bold text-2xl text-mist-600 w-10 shrink-0">01</span>
              <div>
                <h3 className="font-display font-semibold text-white text-lg">Protocol Mapping</h3>
                <p className="mt-1.5 text-sm text-mist-400 leading-relaxed">
                  We map your switch's protocol variant — ISO 8583, ISO 20022, JSON, XML, or a QR scheme — to understand the exact message structure from the start.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <span className="chip font-display font-bold text-2xl text-mist-600 w-10 shrink-0">02</span>
              <div>
                <h3 className="font-display font-semibold text-white text-lg">Scenario Configuration</h3>
                <p className="mt-1.5 text-sm text-mist-400 leading-relaxed">
                  Positive, negative and timeout scenarios are configured in an isolated sandbox, using synthetic test data — with zero production data risk.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <span className="chip font-display font-bold text-2xl text-mist-600 w-10 shrink-0">03</span>
              <div>
                <h3 className="font-display font-semibold text-white text-lg">Automated Regression &amp; Reporting</h3>
                <p className="mt-1.5 text-sm text-mist-400 leading-relaxed">
                  The suite runs automatically on every change, with pass/fail reports and the full message log sent back to your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
