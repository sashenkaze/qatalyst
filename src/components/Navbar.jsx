import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="border-b border-white/5 bg-ink-900/80 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 shrink-0" onClick={closeMenu}>
            <img
              src={`${import.meta.env.BASE_URL}logo-qatalyst.png`}
              alt="QAtalyst Logo"
              className="h-8 w-auto object-contain shrink-0"
              style={{ height: '32px', width: 'auto' }}
            />
            {/* <span className="font-display font-bold text-lg text-white tracking-tight">QAtalyst</span> */}
            <span className="hidden sm:inline text-[11px] chip text-mist-400 border border-white/10 rounded px-1.5 py-0.5 leading-none">
              qatalyst.hbm.co.id
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8 text-sm text-mist-200">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#scenarios" className="hover:text-white transition-colors">Test Scenarios</a>
            <a href="#qaas" className="hover:text-white transition-colors">QA-as-a-Service</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">Docs</a>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="text-sm text-mist-200 hover:text-white transition-colors px-3 py-2">Sign In</a>
            <a href="#pricing" className="text-sm font-semibold bg-gradient-to-r from-cyan-500 to-violet-600 text-white transition hover:brightness-110 px-4 py-2 rounded-full">Request Demo</a>
          </div>

          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="lg:hidden text-mist-100 p-2 -mr-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {isOpen && (
          <div className="lg:hidden border-t border-white/5 bg-ink-900/95 px-6 py-5 space-y-1">
            <a href="#features" onClick={closeMenu} className="block py-2.5 text-mist-200 hover:text-white">Features</a>
            <a href="#solutions" onClick={closeMenu} className="block py-2.5 text-mist-200 hover:text-white">Solutions</a>
            <a href="#scenarios" onClick={closeMenu} className="block py-2.5 text-mist-200 hover:text-white">Test Scenarios</a>
            <a href="#qaas" onClick={closeMenu} className="block py-2.5 text-mist-200 hover:text-white">QA-as-a-Service</a>
            <a href="#pricing" onClick={closeMenu} className="block py-2.5 text-mist-200 hover:text-white">Pricing</a>
            <a href="#faq" onClick={closeMenu} className="block py-2.5 text-mist-200 hover:text-white">Docs</a>
            <div className="pt-3 flex flex-col gap-2">
              <a href="#" onClick={closeMenu} className="text-center text-sm text-mist-200 border border-white/10 rounded-lg py-2.5">Sign In</a>
              <a href="#pricing" onClick={closeMenu} className="text-center text-sm font-semibold bg-gradient-to-r from-cyan-500 to-violet-600 text-white rounded-full py-2.5">Request Demo</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
