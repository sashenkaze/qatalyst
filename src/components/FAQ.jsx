import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "How does QAtalyst integrate with our ISO 8583 switch?",
      a: "You simply point a connection profile at your switch or gateway over TCP, HTTP or HTTPS — QAtalyst's message handler already understands ISO 8583 natively, including dynamic field configuration, with no code changes required on your side.",
      defaultOpen: true
    },
    {
      q: "Is QAtalyst PCI-DSS compliant, and can we use real card data?",
      a: "QAtalyst is built to PCI-DSS-ready standards and includes a synthetic data engine for cards, accounts and EMV/PIN — so you never need real PANs in a test environment. Enterprise plans include compliance and audit support."
    },
    {
      q: "Cloud SaaS, or can it run on-premise?",
      a: "Starter and Professional run as multi-tenant cloud SaaS. Enterprise supports hybrid or fully on-premise / private cloud deployment for institutions with data residency requirements — common in core banking and regulated financial infrastructure."
    },
    {
      q: "What's the difference between QA-as-a-Service and just the platform?",
      a: "The platform is self-serve — your team builds and runs the scenarios. QA-as-a-Service adds senior QA engineers who write scenarios, run scheduled regression cycles, and sign off before release — so coverage stays solid even when your internal team is stretched thin."
    },
    {
      q: "Can we use more than one protocol on the Starter plan?",
      a: "Starter is limited to one protocol module — ISO 8583, ISO 20022 JSON, ISO 20022 XML, or the QR suite. If you need two protocols without moving fully to Professional, contact us about an add-on module."
    }
  ];

  return (
    <section id="faq" className="relative py-16 sm:py-24 lg:py-32 bg-paper-50 text-ink-800 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-100 px-3.5 py-1.5 text-xs text-ink-500">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600"></span>FAQ
          </span>
        </div>
        <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl text-ink-950 tracking-tight text-center">Frequently Asked Questions</h2>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => (
            <details key={idx} className="faq group rounded-xl border border-line bg-white px-5 open:shadow-card" open={faq.defaultOpen}>
              <summary className="flex items-center justify-between py-5 cursor-pointer list-none font-medium text-ink-950">
                {faq.q}
                <ChevronDown className="chevron w-[18px] h-[18px] text-ink-400 transition-transform shrink-0" />
              </summary>
              <div className="pb-5 text-sm text-ink-500 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
