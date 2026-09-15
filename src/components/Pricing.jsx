import React, { useState } from 'react';
import { FlaskConical, Rocket, Building2, Check, X, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  // ROI Calculator state
  const [qaEngineers, setQaEngineers] = useState(4);
  const [hoursCycle, setHoursCycle] = useState(60);
  const [cyclesMonth, setCyclesMonth] = useState(4);
  const [hourlyRate, setHourlyRate] = useState(150000);

  const AUTOMATION_RATE = 0.7;

  const totalMonthlyHours = hoursCycle * cyclesMonth;
  const hoursSaved = totalMonthlyHours * AUTOMATION_RATE;
  const costSaved = hoursSaved * hourlyRate;

  const fmtIDR = (n) => Math.round(n).toLocaleString('id-ID');

  return (
    <section id="pricing" className="relative py-24 lg:py-28 border-t border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow"><span className="dot"></span>Pricing</span>
          <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">Pricing that scales with your switch.</h2>
          <p className="mt-4 text-mist-300 text-lg leading-relaxed">
            Start on one protocol in a sandbox. Move to the full suite when your integration does. Talk to us when your infrastructure needs a partner, not a subscription.
          </p>
        </div>

        {/* Monthly / Annual Toggle */}
        <div className="mt-10 flex items-center justify-center gap-3.5">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-mist-400'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            role="switch"
            aria-checked={isAnnual}
            aria-label="Toggle annual billing"
            className="relative w-14 h-8 rounded-full bg-white/10 border border-white/15 transition-colors"
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></span>
          </button>
          <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-mist-400'}`}>Annual</span>
          <span className="chip text-[11px] text-pass bg-pass/10 border border-pass/30 rounded-full px-2.5 py-1">Save 20%</span>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6 items-start">
          {/* STARTER */}
          <div className="rounded-2xl border border-white/10 bg-ink-800 p-7 flex flex-col h-full">
            <div className="flex items-center gap-2 text-mist-300">
              <FlaskConical className="w-[18px] h-[18px]" />
              <span className="text-sm font-medium">Starter</span>
            </div>
            <p className="chip text-[11px] text-mist-500 mt-1">PTS-BASIC-MODULE</p>
            <div className="mt-5 flex items-baseline gap-1.5">
              <span className="chip text-mist-400 text-lg">Rp</span>
              <span className="price-amount font-display font-extrabold text-4xl text-white">
                {isAnnual ? '10' : '12.5'}
              </span>
              <span className="font-display font-extrabold text-4xl text-white">M</span>
              <span className="text-mist-400 text-sm">/ month</span>
            </div>
            <p className="text-xs text-mist-500 mt-1.5">
              {isAnnual ? 'Billed annually · save 20%' : 'Billed monthly'}
            </p>
            <p className="text-sm text-mist-400 mt-4">For fintech sandboxes &amp; single-protocol integrators validating one payment rail.</p>

            <a href="#/contact" className="mt-6 block text-center rounded-full border border-white/15 text-white font-semibold py-3 hover:bg-white/10 transition">Start Free Sandbox</a>

            <ul className="mt-7 space-y-3 text-sm text-mist-300">
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />Core platform, dashboards &amp; monitoring</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />1 protocol module — ISO 8583, JSON, ISO 20022 or QR</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />Acquirer &amp; issuer host simulation</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />Scenario builder — positive, negative &amp; timeout</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />Test data sandbox — card, account, EMV/PIN, terminal</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />ATM controller, ATM/debit switch, NMM</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />User management, RBAC &amp; basic reporting</li>
              <li className="flex gap-2.5 text-mist-500"><X className="w-4 h-4 shrink-0 mt-0.5" />Performance, TPS &amp; stress testing</li>
              <li className="flex gap-2.5 text-mist-500"><X className="w-4 h-4 shrink-0 mt-0.5" />Multi-tenant &amp; custom scenarios</li>
            </ul>
          </div>

          {/* PROFESSIONAL */}
          <div className="relative rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-violet-500/[0.08] to-transparent p-7 flex flex-col h-full shadow-glow lg:-mt-4 lg:mb-4">
            <span className="absolute -top-3 left-7 chip text-[11px] font-semibold text-white bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full px-3 py-1">MOST POPULAR</span>
            <div className="flex items-center gap-2 text-cyan-300">
              <Rocket className="w-[18px] h-[18px]" />
              <span className="text-sm font-medium">Professional</span>
            </div>
            <p className="chip text-[11px] text-mist-500 mt-1">PTS-PRO</p>
            <div className="mt-5 flex items-baseline gap-1.5">
              <span className="chip text-mist-400 text-lg">Rp</span>
              <span className="price-amount font-display font-extrabold text-4xl text-white">
                {isAnnual ? '30.4' : '38'}
              </span>
              <span className="font-display font-extrabold text-4xl text-white">M</span>
              <span className="text-mist-400 text-sm">/ month</span>
            </div>
            <p className="text-xs text-mist-500 mt-1.5">
              {isAnnual ? 'Billed annually · save 20%' : 'Billed monthly'}
            </p>
            <p className="text-sm text-mist-300 mt-4">For growing switch integrators, PSPs and payment gateways running full-suite regression.</p>

            <a href="#/contact" className="mt-6 block text-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold py-3 hover:brightness-110 transition">Start Free Sandbox</a>

            <ul className="mt-7 space-y-3 text-sm text-mist-200">
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />Everything in Starter, plus:</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />All protocols — ISO 8583, ISO 20022 JSON/XML, custom protocol</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />Full QRIS suite — MPM, CPM, TTS, cross-border, CCW</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />Custom scenarios &amp; message mapping/transformation</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />Performance, TPS, stress &amp; capacity testing</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />Task scheduler, full dashboard &amp; reporting</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />Multi-tenant, institution management &amp; user audit</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />Group &amp; role management</li>
            </ul>
          </div>

          {/* ENTERPRISE */}
          <div className="rounded-2xl border border-white/10 bg-ink-800 p-7 flex flex-col h-full">
            <div className="flex items-center gap-2 text-mist-300">
              <Building2 className="w-[18px] h-[18px]" />
              <span className="text-sm font-medium">Enterprise</span>
            </div>
            <p className="chip text-[11px] text-mist-500 mt-1">PTS-ENTERPRISE</p>
            <div className="mt-5 flex items-baseline gap-1.5">
              <span className="font-display font-extrabold text-4xl text-white">Custom</span>
            </div>
            <p className="text-xs text-mist-500 mt-1.5">Scoped to your infrastructure &amp; SLA</p>
            <p className="text-sm text-mist-400 mt-4">For core banking platforms and large financial institutions who need a testing partner, not just a tool.</p>

            <a href="#/contact" className="mt-6 block text-center rounded-full border border-white/15 text-white font-semibold py-3 hover:bg-white/10 transition">Contact Us / Book a Call</a>

            <ul className="mt-7 space-y-3 text-sm text-mist-300">
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />Everything in Professional, plus:</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />Dedicated QA-as-a-Service pod &amp; senior payment engineers</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />On-premise, hybrid or private cloud deployment</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />Custom protocol &amp; scheme onboarding</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />SLA-backed uptime with 24/7 priority support</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />Dedicated CSM &amp; PCI-DSS audit assistance</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />SSO/SAML, unlimited multi-tenant &amp; institutions</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />White-glove onboarding &amp; data migration</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />Custom MSA &amp; volume-based pricing</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-xs text-mist-500 mt-8 chip">
          Starter is limited to one protocol module. Need more than one without going full Professional? <a href="#faq" className="underline hover:text-mist-300">Ask about add-ons.</a>
        </p>

        {/* ROI CALCULATOR */}
        <div className="mt-24 rounded-2xl border border-white/10 bg-ink-850 p-6 sm:p-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">What's manual regression actually costing you?</h3>
              <p className="mt-3 text-mist-300 leading-relaxed">Move the sliders to match your team, and see what automating your payment test cycles could save each month.</p>

              <div className="mt-9 space-y-7">
                <div>
                  <div className="flex justify-between text-sm mb-2.5">
                    <label htmlFor="rQaEngineers" className="text-mist-200 font-medium">QA engineers on payment testing</label>
                    <span className="chip text-cyan-400">{qaEngineers}</span>
                  </div>
                  <input
                    type="range" id="rQaEngineers" min="1" max="20" value={qaEngineers}
                    onChange={(e) => setQaEngineers(parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2.5">
                    <label htmlFor="rHoursCycle" className="text-mist-200 font-medium">Manual hours per regression cycle</label>
                    <span className="chip text-cyan-400">{hoursCycle}</span>
                  </div>
                  <input
                    type="range" id="rHoursCycle" min="10" max="200" value={hoursCycle} step="5"
                    onChange={(e) => setHoursCycle(parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2.5">
                    <label htmlFor="rCyclesMonth" className="text-mist-200 font-medium">Regression cycles per month</label>
                    <span className="chip text-cyan-400">{cyclesMonth}</span>
                  </div>
                  <input
                    type="range" id="rCyclesMonth" min="1" max="20" value={cyclesMonth}
                    onChange={(e) => setCyclesMonth(parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2.5">
                    <label htmlFor="rHourlyRate" className="text-mist-200 font-medium">Blended hourly cost per engineer (Rp)</label>
                    <span className="chip text-cyan-400">{fmtIDR(hourlyRate)}</span>
                  </div>
                  <input
                    type="range" id="rHourlyRate" min="50000" max="500000" value={hourlyRate} step="10000"
                    onChange={(e) => setHourlyRate(parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-ink-800 p-7 sm:p-9">
              <p className="chip text-xs text-mist-400 mb-1">Estimated monthly savings</p>
              <div className="flex items-baseline gap-2">
                <span className="text-mist-300 text-2xl font-display">Rp</span>
                <span className="font-display font-extrabold text-4xl sm:text-5xl text-white">{fmtIDR(costSaved)}</span>
              </div>
              <p className="text-sm text-mist-400 mt-2">based on ~<span className="text-cyan-400 chip">70%</span> of manual regression effort automated away.</p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="chip text-[11px] text-mist-500">Hours reclaimed / mo</p>
                  <p className="font-display font-bold text-2xl text-white mt-1">{Math.round(hoursSaved).toLocaleString('id-ID')}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="chip text-[11px] text-mist-500">Cycle time today</p>
                  <p className="font-display font-bold text-2xl text-white mt-1">{hoursCycle}h</p>
                </div>
              </div>

              <a href="#/contact" className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold px-6 py-3.5 hover:brightness-110 transition">
                See the plan that fits
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-mist-500 mt-4 leading-relaxed">Estimate for directional planning, based on aggregate customer regression-cycle data. Actual results vary by scenario complexity and team maturity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
