import React from 'react';
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
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-ink-900 text-mist-100 font-sans antialiased min-h-screen">
      <Navbar />
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
      <Footer />
    </div>
  );
}
