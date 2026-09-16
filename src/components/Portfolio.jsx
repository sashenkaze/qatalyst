import React from 'react';
import { ArrowRight, QrCode, Landmark, GaugeCircle, FileCheck } from 'lucide-react';

export default function Portfolio() {
  const items = [
    {
      title: "QRIS Migration — Regional Bank",
      subtitle: "Regression Testing · QRIS MPM/CPM",
      icon: <QrCode className="relative w-12 h-12 text-cyan-300" />,
      img: "https://images.unsplash.com/photo-1754039984985-ef607d80113a?auto=format&fit=crop&w=1200&q=70"
    },
    {
      title: "Core Banking Regression — National Multifinance",
      subtitle: "ISO 8583 · Switch Simulation",
      icon: <Landmark className="relative w-12 h-12 text-violet-300" />,
      img: "https://images.unsplash.com/photo-1764591696226-ea4e8d655bc7?auto=format&fit=crop&w=1200&q=70"
    },
    {
      title: "Load Testing — National Payment Gateway",
      subtitle: "TPS & Capacity Testing",
      icon: <GaugeCircle className="relative w-12 h-12 text-cyan-300" />,
      img: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=1200&q=70"
    },
    {
      title: "Switch Simulation — BPR Apex Compliance",
      subtitle: "Bank Indonesia Apex Model",
      icon: <FileCheck className="relative w-12 h-12 text-violet-300" />,
      img: "https://images.unsplash.com/photo-1764591696226-ea4e8d655bc7?auto=format&fit=crop&w=1200&q=70"
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-28 border-t border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div className="max-w-xl">
            <span className="eyebrow"><span className="dot"></span>Portfolio</span>
            <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              QAtalyst's Track Record of Earning Trust.
            </h2>
            <p className="mt-3 text-mist-300 leading-relaxed">Client names are anonymized per confidentiality agreements — testing results and scope are shown as they are.</p>
          </div>
          <a href="#/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-semibold px-5 py-2.5 hover:brightness-110 transition shrink-0">
            View All
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="carousel flex gap-5 overflow-x-auto no-scrollbar pb-2">
          {items.map((item, idx) => (
            <div key={idx} className="shrink-0 w-[85vw] max-w-[300px] sm:w-[300px] min-w-0">
              <div className="graphic-panel rounded-2xl h-56 flex items-center justify-center overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-45"
                />
                {item.icon}
              </div>
              <p className="mt-3 font-medium text-white text-sm">{item.title}</p>
              <p className="text-xs text-mist-500 mt-0.5">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
