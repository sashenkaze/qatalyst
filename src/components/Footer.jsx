import React from 'react';

export default function Footer({ onNavigate, isHome = true }) {
  const currentYear = new Date().getFullYear();

  const linkTo = (e, sectionId) => {
    e.preventDefault();
    if (onNavigate) onNavigate(sectionId);
  };

  return (
    <footer className="relative border-t border-white/5 py-14 bg-ink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 sm:gap-10">
          <div className="lg:col-span-2">
            <a href={isHome ? '#top' : '#/'} onClick={(e) => linkTo(e, 'top')} className="flex items-center gap-2.5">
              <img
                src={`${import.meta.env.BASE_URL}logo-qatalyst.png`}
                alt="QAtalyst Logo"
                className="h-8 w-auto object-contain shrink-0"
                style={{ height: '32px', width: 'auto' }}
              />
              {/* <span className="font-display font-bold text-lg text-white">QAtalyst</span> */}
            </a>
            <p className="mt-4 text-sm text-mist-400 max-w-xs leading-relaxed">
              Next-gen enterprise payment &amp; core banking test automation, built by{' '}
              <a href="https://hbm.co.id" target='blank' className="underline hover:text-mist-200">HBM</a>.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white mb-4">Product</p>
            <ul className="space-y-2.5 text-sm text-mist-400">
              <li><a href="#features" onClick={(e) => linkTo(e, 'features')} className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#solutions" onClick={(e) => linkTo(e, 'solutions')} className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#scenarios" onClick={(e) => linkTo(e, 'scenarios')} className="hover:text-white transition-colors">Test Scenarios</a></li>
              <li><a href="#pricing" onClick={(e) => linkTo(e, 'pricing')} className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white mb-4">Service</p>
            <ul className="space-y-2.5 text-sm text-mist-400">
              <li><a href="#qaas" onClick={(e) => linkTo(e, 'qaas')} className="hover:text-white transition-colors">QA-as-a-Service</a></li>
              <li><a href="#faq" onClick={(e) => linkTo(e, 'faq')} className="hover:text-white transition-colors">Docs</a></li>
              <li><a href="#faq" onClick={(e) => linkTo(e, 'faq')} className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white mb-4">Company</p>
            <ul className="space-y-2.5 text-sm text-mist-400">
              <li><a href="#" className="hover:text-white transition-colors">About HBM</a></li>
              <li><a href="#/contact" className="hover:text-white transition-colors">Contact Sales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-mist-500">© <span>{currentYear}</span> QAtalyst — a product of PT Hexaon Business Mitrasindo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
