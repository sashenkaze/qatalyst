import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function ScenarioExplorer() {
  const [activeTab, setActiveTab] = useState('bill');

  return (
    <section id="scenarios" className="relative py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow"><span className="dot"></span>Test Scenarios</span>
          <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">Explore the test scenario library.</h2>
          <p className="mt-4 text-mist-300 text-lg leading-relaxed">
            Every scenario ships with steps and a real payload sample — copy it, or run
            it as-is against your sandbox.
          </p>
        </div>

        <div className="flex gap-1 overflow-x-auto border-b border-white/10 mb-6 sm:mb-8" role="tablist" aria-label="Test scenario categories">
          <button
            className={`scenario-tab tab-underline shrink-0 whitespace-nowrap px-3 sm:px-5 py-3 text-[13px] sm:text-sm font-medium ${
              activeTab === 'bill' ? 'tab-active text-white' : 'text-mist-400 hover:text-mist-200'
            }`}
            onClick={() => setActiveTab('bill')}
            role="tab"
            aria-selected={activeTab === 'bill'}
          >
            Bill Payment
          </button>
          <button
            className={`scenario-tab tab-underline shrink-0 whitespace-nowrap px-3 sm:px-5 py-3 text-[13px] sm:text-sm font-medium ${
              activeTab === 'qris' ? 'tab-active text-white' : 'text-mist-400 hover:text-mist-200'
            }`}
            onClick={() => setActiveTab('qris')}
            role="tab"
            aria-selected={activeTab === 'qris'}
          >
            QRIS &amp; E-Wallet
          </button>
          <button
            className={`scenario-tab tab-underline shrink-0 whitespace-nowrap px-3 sm:px-5 py-3 text-[13px] sm:text-sm font-medium ${
              activeTab === 'card' ? 'tab-active text-white' : 'text-mist-400 hover:text-mist-200'
            }`}
            onClick={() => setActiveTab('card')}
            role="tab"
            aria-selected={activeTab === 'card'}
          >
            Card Schemes &amp; ISO 8583
          </button>
          <button
            className={`scenario-tab tab-underline shrink-0 whitespace-nowrap px-3 sm:px-5 py-3 text-[13px] sm:text-sm font-medium ${
              activeTab === 'fraud' ? 'tab-active text-white' : 'text-mist-400 hover:text-mist-200'
            }`}
            onClick={() => setActiveTab('fraud')}
            role="tab"
            aria-selected={activeTab === 'fraud'}
          >
            Fraud &amp; Settlement Edge Cases
          </button>
        </div>

        {/* BILL PAYMENT */}
        {activeTab === 'bill' && (
          <div className="scenario-panel grid gap-6 md:grid-cols-2 lg:gap-8">
            <div className="min-w-0">
              <h3 className="font-display font-semibold text-xl text-white mb-1">Bill Payment — Inquiry to Confirmation</h3>
              <p className="text-sm text-mist-400 mb-6">Validates the full biller inquiry → payment → confirmation cycle, including a customer-not-found negative path.</p>
              <ol className="space-y-4">
                <li className="flex gap-3.5">
                  <span className="chip shrink-0 w-6 h-6 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-[11px] text-mist-300">1</span>
                  <div><p className="text-sm text-mist-200">Send inquiry request (0200) with biller code and customer ID.</p></div>
                </li>
                <li className="flex gap-3.5">
                  <span className="chip shrink-0 w-6 h-6 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-[11px] text-mist-300">2</span>
                  <div><p className="text-sm text-mist-200">Assert response (0210) returns customer name and outstanding amount.</p></div>
                </li>
                <li className="flex gap-3.5">
                  <span className="chip shrink-0 w-6 h-6 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-[11px] text-mist-300">3</span>
                  <div><p className="text-sm text-mist-200">Send payment request referencing the inquiry's trace number.</p></div>
                </li>
                <li className="flex gap-3.5">
                  <span className="chip shrink-0 w-6 h-6 rounded-full bg-pass/15 border border-pass/30 flex items-center justify-center text-[11px] text-pass">
                    <Check className="w-3 h-3" />
                  </span>
                  <div><p className="text-sm text-mist-200">Confirm response code 00, and negative-path variant returns 25 for unknown customer.</p></div>
                </li>
              </ol>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-ink-950 theme-fixed-dark min-w-0">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
                <span className="chip text-xs text-mist-500">payload · ISO 8583 (0200)</span>
                <span className="chip text-[10px] text-pass border border-pass/40 rounded px-1.5 py-0.5">SAMPLE</span>
              </div>
              <pre className="font-mono text-[11px] sm:text-[12px] leading-6 p-3 sm:p-4 max-w-full overflow-x-auto text-slate-300">
                <span className="text-cyan-400">MTI</span>        0200{"\n"}
                <span className="text-cyan-400">DE003</span> ProcCode      28 00 00{"\n"}
                <span className="text-cyan-400">DE004</span> Amount        000015000000{"\n"}
                <span className="text-cyan-400">DE018</span> MerchCategory 6051{"\n"}
                <span className="text-cyan-400">DE041</span> TermId        QATLYST01{"\n"}
                <span className="text-cyan-400">DE048</span> BillerCode    88908{"\n"}
                <span className="text-cyan-400">DE102</span> CustomerId    3300112233
              </pre>
            </div>
          </div>
        )}

        {/* QRIS */}
        {activeTab === 'qris' && (
          <div className="scenario-panel grid gap-6 md:grid-cols-2 lg:gap-8">
            <div>
              <h3 className="font-display font-semibold text-xl text-white mb-1">QRIS MPM — Static QR Top-Up</h3>
              <p className="text-sm text-mist-400 mb-6">Covers merchant-presented QR scan-to-pay with a dynamic amount overlay and NMID validation.</p>
              <ol className="space-y-4">
                <li className="flex gap-3.5">
                  <span className="chip shrink-0 w-6 h-6 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-[11px] text-mist-300">1</span>
                  <div><p className="text-sm text-mist-200">Generate static MPM payload and validate CRC + NMID checksum.</p></div>
                </li>
                <li className="flex gap-3.5">
                  <span className="chip shrink-0 w-6 h-6 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-[11px] text-mist-300">2</span>
                  <div><p className="text-sm text-mist-200">Overlay a customer-entered amount and re-encode the payload.</p></div>
                </li>
                <li className="flex gap-3.5">
                  <span className="chip shrink-0 w-6 h-6 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-[11px] text-mist-300">3</span>
                  <div><p className="text-sm text-mist-200">Submit payment via API and assert wallet debit + merchant credit.</p></div>
                </li>
                <li className="flex gap-3.5">
                  <span className="chip shrink-0 w-6 h-6 rounded-full bg-pass/15 border border-pass/30 flex items-center justify-center text-[11px] text-pass">
                    <Check className="w-3 h-3" />
                  </span>
                  <div><p className="text-sm text-mist-200">Confirm notification callback fires within SLA and matches reference ID.</p></div>
                </li>
              </ol>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-ink-950 theme-fixed-dark min-w-0">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
                <span className="chip text-xs text-mist-500">payload · QRIS MPM (JSON)</span>
                <span className="chip text-[10px] text-pass border border-pass/40 rounded px-1.5 py-0.5">SAMPLE</span>
              </div>
              <pre className="font-mono text-[11px] sm:text-[12px] leading-6 p-3 sm:p-4 max-w-full overflow-x-auto text-slate-300 font-normal">
{`{
  `}
                <span className="text-cyan-400">"nmid"</span>: <span className="text-violet-400">"ID1023456789012"</span>,{"\n"}  
                <span className="text-cyan-400">"merchantCity"</span>: <span className="text-violet-400">"JAKARTA"</span>,{"\n"}  
                <span className="text-cyan-400">"amount"</span>: 150000,{"\n"}  
                <span className="text-cyan-400">"currency"</span>: <span className="text-violet-400">"360"</span>,{"\n"}  
                <span className="text-cyan-400">"refId"</span>: <span className="text-violet-400">"QTLY-QR-88213"</span>,{"\n"}  
                <span className="text-cyan-400">"crc"</span>: <span className="text-violet-400">"9F2A"</span>{"\n"}
{`}`}
              </pre>
            </div>
          </div>
        )}

        {/* CARD SCHEMES */}
        {activeTab === 'card' && (
          <div className="scenario-panel grid gap-6 md:grid-cols-2 lg:gap-8">
            <div>
              <h3 className="font-display font-semibold text-xl text-white mb-1">Card Scheme Switch — EMV Authorization</h3>
              <p className="text-sm text-mist-400 mb-6">Simulates a chip-and-PIN authorization through a debit switch, including a stand-in decline path.</p>
              <ol className="space-y-4">
                <li className="flex gap-3.5">
                  <span className="chip shrink-0 w-6 h-6 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-[11px] text-mist-300">1</span>
                  <div><p className="text-sm text-mist-200">Send 0100 authorization with EMV data (DE55) and PIN block (DE52).</p></div>
                </li>
                <li className="flex gap-3.5">
                  <span className="chip shrink-0 w-6 h-6 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-[11px] text-mist-300">2</span>
                  <div><p className="text-sm text-mist-200">Route through simulated debit switch to issuer host.</p></div>
                </li>
                <li className="flex gap-3.5">
                  <span className="chip shrink-0 w-6 h-6 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-[11px] text-mist-300">3</span>
                  <div><p className="text-sm text-mist-200">Assert 0110 response code and verify MAC on the returned message.</p></div>
                </li>
                <li className="flex gap-3.5">
                  <span className="chip shrink-0 w-6 h-6 rounded-full bg-pass/15 border border-pass/30 flex items-center justify-center text-[11px] text-pass">
                    <Check className="w-3 h-3" />
                  </span>
                  <div><p className="text-sm text-mist-200">Run stand-in variant to confirm switch falls back correctly on host timeout.</p></div>
                </li>
              </ol>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-ink-950 theme-fixed-dark min-w-0">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
                <span className="chip text-xs text-mist-500">payload · ISO 8583 (0100)</span>
                <span className="chip text-[10px] text-pass border border-pass/40 rounded px-1.5 py-0.5">SAMPLE</span>
              </div>
              <pre className="font-mono text-[11px] sm:text-[12px] leading-6 p-3 sm:p-4 max-w-full overflow-x-auto text-slate-300">
                <span className="text-cyan-400">MTI</span>        0100{"\n"}
                <span className="text-cyan-400">DE002</span> PAN           4021••••••1123{"\n"}
                <span className="text-cyan-400">DE003</span> ProcCode      00 00 00{"\n"}
                <span className="text-cyan-400">DE022</span> PosEntryMode  051{"\n"}
                <span className="text-cyan-400">DE052</span> PinBlock      AF31C0E29B14FF02{"\n"}
                <span className="text-cyan-400">DE055</span> EmvData       9F2608...9F3704{"\n"}
                <span className="text-cyan-400">DE064</span> MAC           7C3A91FE
              </pre>
            </div>
          </div>
        )}

        {/* FRAUD & SETTLEMENT */}
        {activeTab === 'fraud' && (
          <div className="scenario-panel grid gap-6 md:grid-cols-2 lg:gap-8">
            <div>
              <h3 className="font-display font-semibold text-xl text-white mb-1">Fraud Velocity — Authorization Decline</h3>
              <p className="text-sm text-mist-400 mb-6">Exercises a velocity-based fraud rule on repeated authorizations, then reconciles the result at settlement.</p>
              <ol className="space-y-4">
                <li className="flex gap-3.5">
                  <span className="chip shrink-0 w-6 h-6 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-[11px] text-mist-300">1</span>
                  <div><p className="text-sm text-mist-200">Fire 5 authorizations (0100) from one card within 60 seconds to trip velocity rules.</p></div>
                </li>
                <li className="flex gap-3.5">
                  <span className="chip shrink-0 w-6 h-6 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-[11px] text-mist-300">2</span>
                  <div><p className="text-sm text-mist-200">Assert the 6th authorization is declined with response code 61 (exceeds limit).</p></div>
                </li>
                <li className="flex gap-3.5">
                  <span className="chip shrink-0 w-6 h-6 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center text-[11px] text-mist-300">3</span>
                  <div><p className="text-sm text-mist-200">Trigger the settlement batch and reconcile totals against the day's approved transactions.</p></div>
                </li>
                <li className="flex gap-3.5">
                  <span className="chip shrink-0 w-6 h-6 rounded-full bg-pass/15 border border-pass/30 flex items-center justify-center text-[11px] text-pass">
                    <Check className="w-3 h-3" />
                  </span>
                  <div><p className="text-sm text-mist-200">Confirm the declined transaction is excluded from net settlement, zero drift.</p></div>
                </li>
              </ol>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-ink-950 theme-fixed-dark min-w-0">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
                <span className="chip text-xs text-mist-500">payload · ISO 8583 (0110)</span>
                <span className="chip text-[10px] text-warn border border-warn/40 rounded px-1.5 py-0.5">EDGE CASE</span>
              </div>
              <pre className="font-mono text-[11px] sm:text-[12px] leading-6 p-3 sm:p-4 max-w-full overflow-x-auto text-slate-300">
                <span className="text-cyan-400">MTI</span>        0110{"\n"}
                <span className="text-cyan-400">DE002</span> PAN           4021••••••1123{"\n"}
                <span className="text-cyan-400">DE003</span> ProcCode      00 00 00{"\n"}
                <span className="text-cyan-400">DE004</span> Amount        00007500000{"\n"}
                <span className="text-cyan-400">DE011</span> STAN          004826{"\n"}
                <span className="text-cyan-400">DE037</span> RetrRefNum    250910004826{"\n"}
                <span className="text-fail">DE039</span> RespCode      <span className="text-fail">61 (velocity limit)</span>
              </pre>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
