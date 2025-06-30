import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Sparkles, Hammer, Brush, Github, Linkedin, FileText } from 'lucide-react';

import Flagship from '@/components/Flagship'
import Navbar from '@/components/Navbar'
import Specular from '@/components/Specular';

import './homepage.css';
import ProgressBar from '@/components/ProgressBar';

// Star component
const Star = ({ size = 5, top, left, rotate = 0 }) => (
  <i className="star bi bi-star-fill"
    style={{
      position: 'absolute',
      top: `${top}%`,
      left: `${left}%`,
      pointerEvents: 'none',
      opacity: 1,
      zIndex: 10000,
      transform: `rotate(${rotate}deg)`,
      fontSize: size,
    }}
  />
);

// Simple seeded random generator
function mulberry32(seed) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

function HomePage({ seed = 100 }) {
  // Seeded random generator
  const rand = mulberry32(seed);
  const numStars = 50;
  const stars = Array.from({ length: numStars }, (_, i) => ({
    id: i,
    top: rand() * 90, // percent
    left: rand() * 95, // percent
    size: 2 + rand() * 5, // px
    rotate: rand() * 360, // degrees
  }));

  // Typing effect state
  const fullText = "Hello! I'm Ajaya.";
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setTypedText("");
    setShowCursor(true);
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i += 3;
      if (i > fullText.length + 1) {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 300); // Hide cursor after 1s
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <ProgressBar />
      <div className='top-box' style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Star field */}
        <div className='star-field' style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
          {stars.map(star => (
            <Star key={star.id} top={star.top} left={star.left} size={star.size} rotate={star.rotate} />
          ))}
        </div>
        {/* Main content */}
        <div className='big-text' text-style='display' style={{ position: 'relative', zIndex: 1 }}>
          <Sparkles size={52} style={{marginRight:'20px', color:'#ef9067'}}/>{typedText}{showCursor && <span className="type-cursor">⬤</span>}
        </div>
        <div className='specular' style={{ "--specular-color": "#2d2d61" }}>
          <div className='small-text' style={{ position: 'relative', zIndex: 1 }}>
            I'm building 
            <div className='specular' style={{ "--specular-color": "#595980" }}><b><Hammer />powerful software</b></div>
             with 
            <div className='specular' style={{ "--specular-color": "#595980" }}><b><Brush />purposeful design.</b></div>
          </div>
        </div>
        <div className='links-row'>
          <Specular className='specular-appearance' text='GitHub' icon={<Github size={18} />} dynamic={true} />
          <Specular className='specular-appearance' text='Linkedin' icon={<Linkedin size={18} />} dynamic={true} />
          <Specular className='specular-appearance' text='Resume' icon={<FileText size={18} />} dynamic={true} />
        </div>
      </div>
      <hr />
      <Flagship />
    </>
  );
}

export default HomePage;