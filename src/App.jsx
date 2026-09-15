import React, { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Methodology from './components/Methodology';
import Solutions from './components/Solutions';
import IntegrationFlow from './components/IntegrationFlow';
import OnboardingCarousel from './components/OnboardingCarousel';
import ScenarioExplorer from './components/ScenarioExplorer';
import Risk from './components/Risk';
import QaaS from './components/QaaS';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const CONTACT_HASH = '#/contact';

function getRoute() {
  if (typeof window === 'undefined') return 'home';
  return window.location.hash.startsWith(CONTACT_HASH) ? 'contact' : 'home';
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  // Track hash changes (back/forward buttons, CTA clicks)
  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    // Legacy redirect: old in-page anchor -> new standalone page
    if (window.location.hash === '#contact-us') {
      window.location.hash = CONTACT_HASH;
    }
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Scroll handling on page switch
  useEffect(() => {
    if (route === 'contact') {
      window.scrollTo(0, 0);
    } else {
      const anchor = window.location.hash.replace('#', '').replace('/', '');
      if (anchor) {
        const t = setTimeout(() => {
          document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
        return () => clearTimeout(t);
      }
    }
  }, [route]);

  // Section navigation that works from either page
  const goHome = useCallback((sectionId) => {
    const target = sectionId || 'top';
    if (getRoute() === 'contact') {
      window.location.hash = target === 'top' ? '#/' : `#${target}`;
      setRoute('home');
      setTimeout(() => {
        if (target === 'top') window.scrollTo(0, 0);
        else document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      if (target === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
        try {
          history.replaceState(null, '', `#${target}`);
        } catch {
          /* noop */
        }
      }
    }
  }, []);

  if (route === 'contact') {
    return (
      <div className="bg-ink-900 text-mist-100 font-sans antialiased min-h-screen">
        <Navbar onNavigate={goHome} isHome={false} />
        <main>
          <ContactUs />
        </main>
        <Footer onNavigate={goHome} isHome={false} />
      </div>
    );
  }

  return (
    <div className="bg-ink-900 text-mist-100 font-sans antialiased min-h-screen">
      <Navbar onNavigate={goHome} isHome />
      <main id="top">
        <Hero />
        <About />
        <Features />
        <Methodology />
        <Solutions />
        <IntegrationFlow />
        <OnboardingCarousel />
        <ScenarioExplorer />
        <Risk />
        <QaaS />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer onNavigate={goHome} isHome />
    </div>
  );
}
