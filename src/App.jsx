import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NightShift from './components/NightShift';
import ModelFreedom from './components/ModelFreedom';
import BentoFeatures from './components/BentoFeatures';
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
        <NightShift />
        <ModelFreedom />
        <BentoFeatures />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

export default App;
