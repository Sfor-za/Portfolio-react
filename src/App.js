import { useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Cardgrid from './components/Cardgrid';
import Publication from './components/Publication';
import Education from './components/Education';
import Contact from './components/Contact';

const BLOB_DRIFT = [
  { scrollSpeed: 0.16, ampX: 50, ampY: 35, freqX: 0.00043, freqY: 0.00059, phase: 0.3 },
  { scrollSpeed: 0.26, ampX: 40, ampY: 55, freqX: 0.00063, freqY: 0.00038, phase: 2.1 },
  { scrollSpeed: 0.38, ampX: 60, ampY: 40, freqX: 0.00034, freqY: 0.00069, phase: 4.5 },
  { scrollSpeed: 0.21, ampX: 35, ampY: 50, freqX: 0.00057, freqY: 0.00045, phase: 1.4 },
  { scrollSpeed: 0.3, ampX: 55, ampY: 45, freqX: 0.00049, freqY: 0.00063, phase: 5.6 },
  { scrollSpeed: 0.23, ampX: 45, ampY: 60, freqX: 0.00069, freqY: 0.00039, phase: 3.2 },
  { scrollSpeed: 0.25, ampX: 48, ampY: 42, freqX: 0.00056, freqY: 0.00053, phase: 6.2 },
];

function App() {
  const blobRefs = useRef([]);

  useEffect(() => {
    let rafId;
    const animate = (t) => {
      const y = window.scrollY;
      blobRefs.current.forEach((el, i) => {
        if (!el) return;
        const cfg = BLOB_DRIFT[i];
        const driftX = Math.sin(t * cfg.freqX + cfg.phase) * cfg.ampX;
        const driftY = Math.cos(t * cfg.freqY + cfg.phase) * cfg.ampY;
        el.style.transform = `translate(-50%, -50%) translate3d(${driftX.toFixed(1)}px, ${(driftY + y * cfg.scrollSpeed).toFixed(1)}px, 0)`;
      });
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="app">
      <div className="bg-blobs" aria-hidden="true">
        <div className="bg-blob bg-blob-1" ref={(el) => (blobRefs.current[0] = el)} />
        <div className="bg-blob bg-blob-2" ref={(el) => (blobRefs.current[1] = el)} />
        <div className="bg-blob bg-blob-3" ref={(el) => (blobRefs.current[2] = el)} />
        <div className="bg-blob bg-blob-4" ref={(el) => (blobRefs.current[3] = el)} />
        <div className="bg-blob bg-blob-5" ref={(el) => (blobRefs.current[4] = el)} />
        <div className="bg-blob bg-blob-6" ref={(el) => (blobRefs.current[5] = el)} />
        <div className="bg-blob bg-blob-7" ref={(el) => (blobRefs.current[6] = el)} />
      </div>
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Cardgrid />
      <Publication />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
