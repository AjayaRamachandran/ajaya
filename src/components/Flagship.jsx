import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, Github } from 'lucide-react';

import Specular from './Specular';

import './flagship.css'

function Flagship() {

  return (
    <>
        <div className='section-title' text-style='display'>
          My Flagship Project
        </div>
        <div className='specular' style={{ "--specular-color": "#2d2d61", width:'calc(40% + 150px)' }}>
          <div className='section'>
            <span className='header' text-style='display'>Symphony</span>
            <span className='subheader'>A professional-grade music production platform.</span>
            <span className='content'>
              Symphony is a powerhouse music editor program designed for users of all skill levels.
              It features an editor built with Python and SDL2, and a project manager built in React
              + Vite and running locally via Electron (node.js). I began working on Symphony in January 2025,
              iterating over months to build what is now a full-fledged product, used by real musical institutions
              like Northeastern University's <i>NAAD</i> a-cappella team.
            </span>
            <span className='subheader'>Stack: <i>React.js • Electron • Node.js • SDL2 • Pygame.Mixer</i></span>
            <div style={{display:'flex', flexDirection:'row', gap:'10px', marginTop:'10px'}}>
              <Specular className={'specular-appearance accent'} bleedColor={'#ffc2a8'} specularColor={'#6b5863'} text={'Official Website'} icon={<Link size={18}/>} dynamic={true} />
              <Specular className={'specular-appearance'} specularColor={'#595980'} text={'See on GitHub'} icon={<Github size={18}/>} dynamic={true} />
            </div>
          </div>
        </div>
    </>
  );
}

export default Flagship;