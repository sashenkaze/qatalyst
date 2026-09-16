import React, { useState } from 'react';

export default function Solutions() {
  const [activeTab, setActiveTab] = useState('acquirer');

  return (
    <section id="solutions" className="relative py-16 sm:py-24 lg:py-28 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow"><span className="dot"></span>Solutions</span>
          <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Use QAtalyst as your acquirer, or as your issuer.
          </h2>
          <p className="mt-4 text-mist-300 text-lg leading-relaxed">
            Test only the system you own. QAtalyst stands in for whichever side of the
            connection you don't have yet — pick which one below.
          </p>
        </div>

        <div className="theme-fixed-dark flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-ink-800 p-1 mb-8" role="tablist" aria-label="Simulation direction">
          <button
            className={`solution-tab pill-tab shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium border border-transparent ${
              activeTab === 'acquirer' ? 'pill-active text-white' : 'text-mist-300'
            }`}
            onClick={() => setActiveTab('acquirer')}
            role="tab"
            aria-selected={activeTab === 'acquirer'}
          >
            Simulate as Acquirer
          </button>
          <button
            className={`solution-tab pill-tab shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium border border-transparent ${
              activeTab === 'issuer' ? 'pill-active text-white' : 'text-mist-300'
            }`}
            onClick={() => setActiveTab('issuer')}
            role="tab"
            aria-selected={activeTab === 'issuer'}
          >
            Simulate as Issuer
          </button>
        </div>

        <div className="theme-fixed-dark rounded-2xl border border-white/10 bg-ink-850 p-4 sm:p-8 max-w-full overflow-hidden">
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          {/* AS ACQUIRER */}
          {activeTab === 'acquirer' && (
            <div className="solution-panel min-w-[560px] sm:min-w-[640px]">
              <p className="text-sm text-mist-400 mb-5 max-w-xl">
                Your issuer or core banking host isn't ready, or you don't want to hit it directly yet. QAtalyst plays the acquirer / terminal and sends real transaction traffic into your system.
              </p>
              <svg viewBox="0 0 900 220" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="QAtalyst simulating the acquirer, sending requests to your issuer or core banking host">
                <defs>
                  <marker id="arrowA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="#D12E32"></path>
                  </marker>
                  <marker id="arrowB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="#7C8AA8"></path>
                  </marker>
                </defs>
                <path d="M316,88 H584" stroke="#D12E32" strokeWidth="1.75" fill="none" className="flow-path" markerEnd="url(#arrowA)"></path>
                <text x="450" y="76" textAnchor="middle" fill="#D12E32" fontSize="11.5" fontFamily="JetBrains Mono, monospace">request</text>

                <path d="M584,148 H316" stroke="#7C8AA8" strokeWidth="1.5" fill="none" strokeDasharray="5 5" markerEnd="url(#arrowB)"></path>
                <text x="450" y="167" textAnchor="middle" fill="#94A3B8" fontSize="11.5" fontFamily="JetBrains Mono, monospace">response</text>

                <g>
                  <rect x="60" y="40" width="240" height="140" rx="14" fill="#16233F" stroke="#D12E32" strokeOpacity="0.4"></rect>
                  <text x="180" y="72" textAnchor="middle" fill="#D12E32" fontSize="11" fontFamily="JetBrains Mono, monospace">QATALYST</text>
                  <text x="180" y="100" textAnchor="middle" fill="#F1F3F7" fontSize="15" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">Acting as</text>
                  <text x="180" y="120" textAnchor="middle" fill="#F1F3F7" fontSize="15" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">Acquirer / Terminal</text>
                  <text x="180" y="150" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono, monospace">POS · ATM · QR scan</text>
                </g>

                <g>
                  <rect x="600" y="40" width="240" height="140" rx="14" fill="#141D33" stroke="#28334D"></rect>
                  <text x="720" y="72" textAnchor="middle" fill="#7C8AA8" fontSize="11" fontFamily="JetBrains Mono, monospace">YOUR SYSTEM</text>
                  <text x="720" y="100" textAnchor="middle" fill="#F1F3F7" fontSize="15" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">Issuer /</text>
                  <text x="720" y="120" textAnchor="middle" fill="#F1F3F7" fontSize="15" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">Core Banking Host</text>
                  <text x="720" y="150" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono, monospace">Authorizes or declines</text>
                </g>
              </svg>
            </div>
          )}

          {/* AS ISSUER */}
          {activeTab === 'issuer' && (
            <div className="solution-panel min-w-[560px] sm:min-w-[640px]">
              <p className="text-sm text-mist-400 mb-5 max-w-xl">
                Your acquirer or switch is ready but you have no issuer to test against yet. QAtalyst plays the issuer host and returns scheme-accurate authorization responses to your switch.
              </p>
              <svg viewBox="0 0 900 220" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="QAtalyst simulating the issuer, responding to requests from your acquirer or switch">
                <defs>
                  <marker id="arrowC" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="#7C8AA8"></path>
                  </marker>
                  <marker id="arrowD" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="#D12E32"></path>
                  </marker>
                </defs>
                <path d="M316,88 H584" stroke="#7C8AA8" strokeWidth="1.5" fill="none" strokeDasharray="5 5" markerEnd="url(#arrowC)"></path>
                <text x="450" y="76" textAnchor="middle" fill="#94A3B8" fontSize="11.5" fontFamily="JetBrains Mono, monospace">request</text>

                <path d="M584,148 H316" stroke="#D12E32" strokeWidth="1.75" fill="none" className="flow-path" markerEnd="url(#arrowD)"></path>
                <text x="450" y="167" textAnchor="middle" fill="#D12E32" fontSize="11.5" fontFamily="JetBrains Mono, monospace">response</text>

                <g>
                  <rect x="60" y="40" width="240" height="140" rx="14" fill="#141D33" stroke="#28334D"></rect>
                  <text x="180" y="72" textAnchor="middle" fill="#7C8AA8" fontSize="11" fontFamily="JetBrains Mono, monospace">YOUR SYSTEM</text>
                  <text x="180" y="100" textAnchor="middle" fill="#F1F3F7" fontSize="15" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">Acquirer /</text>
                  <text x="180" y="120" textAnchor="middle" fill="#F1F3F7" fontSize="15" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">Switch</text>
                  <text x="180" y="150" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono, monospace">Routes the transaction</text>
                </g>

                <g>
                  <rect x="600" y="40" width="240" height="140" rx="14" fill="#16233F" stroke="#D12E32" strokeOpacity="0.4"></rect>
                  <text x="720" y="72" textAnchor="middle" fill="#D12E32" fontSize="11" fontFamily="JetBrains Mono, monospace">QATALYST</text>
                  <text x="720" y="100" textAnchor="middle" fill="#F1F3F7" fontSize="15" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">Acting as</text>
                  <text x="720" y="120" textAnchor="middle" fill="#F1F3F7" fontSize="15" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">Issuer Host</text>
                  <text x="720" y="150" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono, monospace">Approves, declines, times out</text>
                </g>
              </svg>
            </div>
          )}
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-2 text-xs chip text-mist-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-cyan-500/25 border border-cyan-400/50"></span>QAtalyst
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-ink-700 border border-white/15"></span>Your system
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
