import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoFeatures from './components/BentoFeatures';
import SilentProfiling from './components/SilentProfiling';
import ClipboardIntelligence from './components/ClipboardIntelligence';
import MultiAgentSwarm from './components/MultiAgentSwarm';
import NightShift from './components/NightShift';
import ModelFreedom from './components/ModelFreedom';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="glow-bg"></div>
      
      <Navbar />
      <main>
        <Hero />
        <BentoFeatures />
        <SilentProfiling />
        <ClipboardIntelligence />
        <MultiAgentSwarm />
        <NightShift />
        <ModelFreedom />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

export default App;
