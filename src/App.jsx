import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Reveal from './components/Reveal';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './index.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    // Fall back to the visitor's OS preference the very first time they visit
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div style={{ paddingBottom: '4rem' }}>
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Profile />

      <Reveal><Skills /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Education /></Reveal>
      <Reveal><ContactForm /></Reveal>

      <BackToTop />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
