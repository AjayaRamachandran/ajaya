import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './progress-bar.css';

function ProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(percent);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // set initial value
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='progress-bar' style={{width: `${scrollPercent}%`}}></div>
    </>
  );
}

export default ProgressBar;