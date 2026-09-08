import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import Architecture from './components/Architecture';
import Projects from './components/Projects';
import WhatIBuild from './components/WhatIBuild';
import Experience from './components/Experience';
import Education from './components/Education';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import useLenis from './hooks/useLenis';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  useLenis();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-obsidian relative">
      {loading && (
        <div className="fixed inset-0 z-[200] bg-obsidian flex flex-col items-center justify-center gap-4 transition-opacity duration-700">
          <div className="w-14 h-14 rounded-full border border-warm-gold/40 flex items-center justify-center bg-dark-card/80">
            <span className="font-serif text-xl font-light text-bright-gold">AR</span>
          </div>
          <span className="font-mono text-[11px] text-warm-gold uppercase tracking-[0.3em]">Loading</span>
        </div>
      )}

      <ScrollProgress />
      <Navbar />

      <Profile />
      <About />
      <Skills />
      <Architecture />
      <Projects />
      <WhatIBuild />
      <Experience />
      <Education />
      <ContactForm />
      <Footer />

      <BackToTop />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
