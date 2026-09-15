import React, { useState } from 'react';
import { Clock, MousePointerClick, ArrowDownToLine } from 'lucide-react';

export default function IntegrationFlow() {
  const [tipText, setTipText] = useState("Hover or focus a stage above to see what it does.");
  const [hoveredNode, setHoveredNode] = useState(null);

  const nodes = [
    {
      id: 'schedule',
      tip: 'A run starts by itself at a set time — no one needs to press anything.'
    },
    {
      id: 'manual',
      tip: 'Someone starts the run from the dashboard. QAtalyst builds each transaction and sends it — this is sender mode.'
    },
    {
      id: 'inbound',
      tip: 'The system under test sends a transaction to QAtalyst. It replies from a pre-built scenario — this is responder mode.'
    },
    {
      id: 'suite',
      tip: 'QAtalyst assembles the assigned scenario suite for this integration, whichever way the run was triggered.'
    },
    {
      id: 'mode',
      tip: 'Decides whether this run acts as a sender (it builds and sends the transaction) or a responder (it replies to one).'
    },
    {
      id: 'sender_action',
      tip: 'In sender mode, QAtalyst builds the transaction, sends it to your system, then checks the reply against the expected result.'
    },
    {
      id: 'responder_action',
      tip: 'In responder mode, QAtalyst matches the inbound request to a scenario, replies, then checks the request against the expected result.'
    },
    {
      id: 'report',
      tip: 'Every step of the run is written to the run log, then aggregated into a report with pass/fail counts and diffs.'
    },
    {
      id: 'result',
      tip: 'The finished report is delivered back to your workflow — dashboard, email or webhook.'
    }
  ];

  const handleMouseEnter = (nodeId, tip) => {
    setHoveredNode(nodeId);
    setTipText(tip);
  };

  const handleMouseLeave = () => {
    setHoveredNode(null);
  };

  return (
    <section className="relative py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start mb-12">
          <div>
            <span className="eyebrow"><span className="dot"></span>Integration</span>
            <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">How regression integration runs.</h2>
            <p className="mt-4 text-mist-300 text-lg leading-relaxed">
              Wire the tool into your own workflow and let it check the system under
              test on every change. Whichever way a run starts, the steps are written
              to the run log and the finished report is delivered back to you.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-white/10 bg-ink-800 p-5">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                <Clock className="text-cyan-400 w-4 h-4" />
              </div>
              <p className="font-semibold text-white text-sm">Schedule</p>
              <p className="mt-1.5 text-xs text-mist-400 leading-relaxed">The suite fires by itself at a set time.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-ink-800 p-5">
              <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center mb-3">
                <MousePointerClick className="text-violet-400 w-4 h-4" />
              </div>
              <p className="font-semibold text-white text-sm">Manual</p>
              <p className="mt-1.5 text-xs text-mist-400 leading-relaxed">Started from the dashboard. QAtalyst builds each transaction and sends it — sender mode.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-ink-800 p-5">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                <ArrowDownToLine className="text-cyan-400 w-4 h-4" />
              </div>
              <p className="font-semibold text-white text-sm">Inbound request</p>
              <p className="mt-1.5 text-xs text-mist-400 leading-relaxed">Your system sends a transaction in. QAtalyst replies from a matched scenario — responder mode.</p>
            </div>
          </div>
        </div>

        <div className="theme-fixed-dark rounded-2xl border border-white/10 bg-ink-850 p-4 sm:p-8 overflow-x-auto">
          <svg viewBox="0 0 1600 400" className="w-full h-auto min-w-[1080px]" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="High-level flow diagram">
            <defs>
              <marker id="arrowH" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#22D3EE"></path>
              </marker>
            </defs>

            <path d="M230,55 C275,55 275,150 320,196" stroke="#7C8AA8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowH)"></path>
            <path d="M230,200 H320" stroke="#7C8AA8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowH)"></path>
            <path d="M230,345 C275,345 275,250 320,204" stroke="#7C8AA8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowH)"></path>

            <path d="M510,200 H550" stroke="#22D3EE" strokeWidth="1.75" fill="none" className="flow-path" markerEnd="url(#arrowH)"></path>

            <path d="M650,125 C650,95 700,112 830,112" stroke="#22D3EE" strokeWidth="1.5" fill="none" markerEnd="url(#arrowH)"></path>
            <text x="710" y="90" textAnchor="middle" fill="#22D3EE" fontSize="12" fontFamily="JetBrains Mono, monospace">as a sender</text>

            <path d="M650,275 C650,305 700,337 830,337" stroke="#7C8AA8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowH)"></path>
            <text x="710" y="360" textAnchor="middle" fill="#94A3B8" fontSize="12" fontFamily="JetBrains Mono, monospace">as a responder</text>

            <path d="M1130,112 C1180,112 1180,175 1210,196" stroke="#7C8AA8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowH)"></path>
            <path d="M1130,337 C1180,337 1180,225 1210,204" stroke="#7C8AA8" strokeWidth="1.5" fill="none" markerEnd="url(#arrowH)"></path>

            <path d="M1370,200 H1440" stroke="#34D399" strokeWidth="1.5" fill="none" markerEnd="url(#arrowH)"></path>

            {/* Schedule */}
            <g
              className="flow-node cursor-pointer"
              tabIndex={0}
              onMouseEnter={() => handleMouseEnter('schedule', nodes[0].tip)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleMouseEnter('schedule', nodes[0].tip)}
            >
              <rect
                x="20" y="20" width="210" height="70" rx="12" fill="#141D33"
                stroke={hoveredNode === 'schedule' ? '#22D3EE' : '#28334D'}
              ></rect>
              <text x="125" y="61" textAnchor="middle" fill="#F1F3F7" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Schedule</text>
            </g>

            {/* Manual */}
            <g
              className="flow-node cursor-pointer"
              tabIndex={0}
              onMouseEnter={() => handleMouseEnter('manual', nodes[1].tip)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleMouseEnter('manual', nodes[1].tip)}
            >
              <rect
                x="20" y="165" width="210" height="70" rx="12" fill="#141D33"
                stroke={hoveredNode === 'manual' ? '#22D3EE' : '#28334D'}
              ></rect>
              <text x="125" y="196" textAnchor="middle" fill="#F1F3F7" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Manual</text>
              <text x="125" y="216" textAnchor="middle" fill="#7C8AA8" fontSize="10.5" fontFamily="JetBrains Mono, monospace">run scenario</text>
            </g>

            {/* Inbound request */}
            <g
              className="flow-node cursor-pointer"
              tabIndex={0}
              onMouseEnter={() => handleMouseEnter('inbound', nodes[2].tip)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleMouseEnter('inbound', nodes[2].tip)}
            >
              <rect
                x="20" y="310" width="210" height="70" rx="12" fill="#141D33"
                stroke={hoveredNode === 'inbound' ? '#22D3EE' : '#28334D'}
              ></rect>
              <text x="125" y="341" textAnchor="middle" fill="#F1F3F7" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Inbound request</text>
              <text x="125" y="361" textAnchor="middle" fill="#7C8AA8" fontSize="10" fontFamily="JetBrains Mono, monospace">from system under test</text>
            </g>

            {/* Suite Run */}
            <g
              className="flow-node cursor-pointer"
              tabIndex={0}
              onMouseEnter={() => handleMouseEnter('suite', nodes[3].tip)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleMouseEnter('suite', nodes[3].tip)}
            >
              <rect
                x="320" y="155" width="190" height="90" rx="14" fill="#16233F"
                stroke={hoveredNode === 'suite' ? '#22D3EE' : 'rgba(34,211,238,0.4)'}
              ></rect>
              <text x="415" y="188" textAnchor="middle" fill="#22D3EE" fontSize="11" fontFamily="JetBrains Mono, monospace">QATALYST</text>
              <text x="415" y="215" textAnchor="middle" fill="#F1F3F7" fontSize="15" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">Suite Run</text>
            </g>

            {/* Mode */}
            <g
              className="flow-node cursor-pointer"
              tabIndex={0}
              onMouseEnter={() => handleMouseEnter('mode', nodes[4].tip)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleMouseEnter('mode', nodes[4].tip)}
            >
              <polygon
                points="650,125 750,200 650,275 550,200" fill="#141D33"
                stroke={hoveredNode === 'mode' ? '#22D3EE' : '#7C8AA8'}
              ></polygon>
              <text x="650" y="205" textAnchor="middle" fill="#F1F3F7" fontSize="13.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Mode</text>
            </g>

            {/* Sender Action */}
            <g
              className="flow-node cursor-pointer"
              tabIndex={0}
              onMouseEnter={() => handleMouseEnter('sender_action', nodes[5].tip)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleMouseEnter('sender_action', nodes[5].tip)}
            >
              <rect
                x="830" y="65" width="300" height="95" rx="14" fill="#141D33"
                stroke={hoveredNode === 'sender_action' ? '#22D3EE' : '#28334D'}
              ></rect>
              <text x="980" y="106" textAnchor="middle" fill="#F1F3F7" fontSize="13.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Build &amp; send transaction</text>
              <text x="980" y="128" textAnchor="middle" fill="#7C8AA8" fontSize="12" fontFamily="JetBrains Mono, monospace">→ check the reply</text>
            </g>

            {/* Responder Action */}
            <g
              className="flow-node cursor-pointer"
              tabIndex={0}
              onMouseEnter={() => handleMouseEnter('responder_action', nodes[6].tip)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleMouseEnter('responder_action', nodes[6].tip)}
            >
              <rect
                x="830" y="290" width="300" height="95" rx="14" fill="#141D33"
                stroke={hoveredNode === 'responder_action' ? '#22D3EE' : '#28334D'}
              ></rect>
              <text x="980" y="331" textAnchor="middle" fill="#F1F3F7" fontSize="13.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Reply from matched scenario</text>
              <text x="980" y="353" textAnchor="middle" fill="#7C8AA8" fontSize="12" fontFamily="JetBrains Mono, monospace">→ check the request</text>
            </g>

            {/* Run Report */}
            <g
              className="flow-node cursor-pointer"
              tabIndex={0}
              onMouseEnter={() => handleMouseEnter('report', nodes[7].tip)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleMouseEnter('report', nodes[7].tip)}
            >
              <rect
                x="1210" y="155" width="160" height="90" rx="14" fill="#141D33"
                stroke={hoveredNode === 'report' ? '#22D3EE' : '#28334D'}
              ></rect>
              <text x="1290" y="192" textAnchor="middle" fill="#F1F3F7" fontSize="13.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Run</text>
              <text x="1290" y="212" textAnchor="middle" fill="#F1F3F7" fontSize="13.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Report</text>
            </g>

            {/* Result */}
            <g
              className="flow-node cursor-pointer"
              tabIndex={0}
              onMouseEnter={() => handleMouseEnter('result', nodes[8].tip)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleMouseEnter('result', nodes[8].tip)}
            >
              <rect
                x="1440" y="160" width="140" height="80" rx="14" fill="#0F1F19"
                stroke={hoveredNode === 'result' ? '#22D3EE' : '#34D399'} strokeOpacity={0.4}
              ></rect>
              <text x="1510" y="196" textAnchor="middle" fill="#34D399" fontSize="13" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">Result</text>
              <text x="1510" y="215" textAnchor="middle" fill="#34D399" fontSize="11" fontStyle="italic" fontFamily="Plus Jakarta Sans, sans-serif">dashboard</text>
            </g>
          </svg>

          <p className="mt-5 text-sm text-mist-300 min-h-[20px] chip">
            {tipText}
          </p>
          <p className="mt-1 text-xs text-mist-500 sm:hidden">Swipe sideways to see the full flow.</p>
        </div>
      </div>
    </section>
  );
}
