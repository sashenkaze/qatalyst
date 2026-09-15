import React, { useState } from 'react';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage('Thanks — the datasheet is on its way to your inbox.');
    }
  };

  return (
    <section className="relative py-24 lg:py-28 bg-ink-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 p-10 sm:p-14 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-violet-600/10 to-transparent"></div>
          <div className="absolute inset-0 grid-overlay opacity-40"></div>
          <div className="relative">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Ready to test your payment systems?
            </h2>
            <p className="mt-4 text-mist-300 text-lg max-w-xl mx-auto">
              Start a free sandbox, or talk to a payment QA engineer this week.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3.5 justify-center">
              <a href="#/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold px-6 py-3.5 shadow-glow hover:brightness-110 transition">Start Free Sandbox</a>
              <a href="#/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 text-mist-100 font-semibold px-6 py-3.5 hover:bg-white/10 transition">Schedule Enterprise Call</a>
            </div>

            <p className="mt-3 text-xs text-mist-500 h-4">{message}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
