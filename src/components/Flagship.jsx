import React, { useState, useRef } from 'react';
import { Link, Github, FileImage, ChevronLeft, ChevronRight } from 'lucide-react';
import Specular from './Specular';
import './flagship.css';

function Flagship() {
  // Featured project cards (Symphony removed)
  const cards = [
    {
      header: 'VRC Tracker',
      subheader: 'A gamified robotics league that took the world by storm.',
      content: <>VRC Tracker is a web-based tracker app that turns boring points into competitive ranks, accolades, and more. Upon the day of release, it received more than 2 thousand visits and has continued to receive several thousands visits since.</>,
      stack: 'AJAX • Firebase • Python Flask • Vercel • HTML/CSS',
      links: [
        { text: 'VRC Tracker', icon: <Link size={18}/>, className: 'specular-appearance', specularColor: '#3c7078' },
        { text: 'GitHub', icon: <Github size={18}/>, className: 'specular-appearance' },
      ]
    },
    {
      header: 'LaunchPad',
      subheader: "Accelerating the workforce with AI.",
      content: <>Leading a team of 4 developers, in May of 2025 I developed LaunchPad, an AI-powered data retrieval engine that can scan across entire company databases to solve client cases in a matter of seconds as opposed to hours or days. It won 'most creative' at <i>Vestmark</i>'s 2025 AI Hackathon.</>,
      stack: 'React.js • Express.js • Node.js • OpenAI API • Salesforce API • Confluence API',
      links: [
        { text: 'See in Action', icon: <FileImage size={18}/>, className: 'specular-appearance', specularColor: '#7f3f8c' }
      ]
    },
    {
      header: 'Procedural Terrain Generator',
      subheader: "Replicating the world generation of the world's most popular video game.",
      content: <>Designed originally for the purpose of creating a fun plugin for Minecraft, the Procedural Island Generator became a deep pursuit of understanding of the video game's intricate world generation system. From natural ecosystems to undergound resources, creating an entire Minecraft world in code is no easy feat.</>,
      stack: 'Python (mcschematic) • Java',
      links: [
        { text: 'GitHub', icon: <Github size={18}/>, className: 'specular-appearance' }
      ]
    }
  ];

  // Carousel state
  const [current, setCurrent] = useState(0);
  const [offset, setOffset] = useState(0); // px offset for drag
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const containerRef = useRef(null);

  // Handle drag/swipe
  function handleTouchStart(e) {
    setIsDragging(true);
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  }
  function handleTouchMove(e) {
    if (!isDragging) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setOffset(x - startX.current);
  }
  function handleTouchEnd() {
    setIsDragging(false);
    if (Math.abs(offset) > 60) {
      if (offset < 0) goTo(current + 1);
      else goTo(current - 1);
    } else {
      setOffset(0);
    }
  }
  function goTo(idx) {
    let next = idx;
    if (next < 0) next = cards.length - 1;
    if (next >= cards.length) next = 0;
    setOffset(0);
    setCurrent(next);
  }

  // Keyboard navigation
  function handleKeyDown(e) {
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  }

  return (
    <>
      <div className='section-title' text-style='display'>Flagship Project</div>
      {/* Symphony project restored as a standalone section */}
      <Specular className="symphony-section" overrideSize={'calc(40% + 200px)'}>
        <div className='section'>
          <div style={{display:'flex', flexDirection:'row', gap:'20px', marginTop:'10px'}}>
            <span className='header' text-style='display'><big>Symphony</big></span>
            <Specular className='specular-appearance accent' bleedColor='#e3b2ff' specularColor='#6b3a6b' dynamic={true} callToAction={true}>
              <Link size={18}/>Official Website
            </Specular>
          </div>
          <span className='subheader' text-style='display'><big>A professional-grade music production platform.</big></span>
          <img src='https://www.dropbox.com/scl/fi/sj3qb5zu4x82k8s6785rn/Symphony-SS.png?rlkey=lxpta4hjcdhybl4400nrql20o&st=wpe8nxt3&raw=1' style={{borderRadius:'10px', width: '100%', margin: '10px 0px 20px 0px', outlineOffset: '-1px', outline: '1px solid #ffffff33', boxShadow: '0px 5px 13px #00000044'}}></img>
          <span className='content'><big>Symphony is a powerhouse music editor program designed for users of all skill levels. It features an editor built with Python and SDL2, and a project manager built in React + Vite and running locally via Electron (node.js). I began working on Symphony in January 2025, iterating over months to build what is now a full-fledged product, used by real musical institutions like Northeastern University's <i>NAAD</i> a-cappella team.</big></span>
          <span className='subheader'><big>Stack: <i>React.js • Electron • Node.js • Python • SDL2 • Pygame.Mixer</i></big></span>
        </div>
      </Specular>
      <div className="carousel-root" style={{ width: '100%', maxWidth: 600, position: 'relative' }}>
        <div className='section-subtitle' text-style='display'>Featured Projects</div>
        {/* Chevron Buttons - moved outside overflow-hidden container */}
        <Specular
          overrideSize={40}
          className="carousel-btn prev"
          style={{ position: 'absolute', top: '300px', right: '-20px', zIndex: 2 }}
          onClick={() => goTo(current + 1)}
          dynamic={true}
        >
          <ChevronRight />
        </Specular>
        <Specular
          overrideSize={40}
          className="carousel-btn next"
          style={{ position: 'absolute', top: '300px', left: '-20px', zIndex: 2 }}
          onClick={() => goTo(current - 1)}
          dynamic={true}
        >
          <ChevronLeft />
        </Specular>
        <div
          className="carousel-swipe-container"
          ref={containerRef}
          tabIndex={0}
          style={{ overflow: 'hidden', position: 'relative', touchAction: 'pan-x' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={isDragging ? handleTouchMove : undefined}
          onMouseUp={handleTouchEnd}
          onMouseLeave={isDragging ? handleTouchEnd : undefined}
          onKeyDown={handleKeyDown}
        >
          {/* Feathered edge masks */}
          <div className="carousel-mask carousel-mask-left" />
          <div className="carousel-mask carousel-mask-right" />
          <div>
            <div
              className="carousel-track"
              style={{
                display: 'flex',
                transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(.4,1.2,.4,1)',
                transform: `translateX(calc(${-current * 103}% + ${offset + 58}px))`,
                cursor: isDragging ? 'grabbing' : 'grab',
              }}
            >
              {cards.map((card, idx) => (
                <Specular
                  className="carousel-card"
                  key={idx}
                >
                  <div className='section'>
                    <span className='header' text-style='display'>{card.header}</span>
                    <span className='subheader' text-style='display'>{card.subheader}</span>
                    <span className='content'>{card.content}</span>
                    <span className='subheader'>Stack: <i>{card.stack}</i></span>
                    <div style={{display:'flex', flexDirection:'row', gap:'10px', marginTop:'10px'}}>
                      {card.links.map((link, idx2) => (
                        <Specular key={idx2} className={link.className} bleedColor={link.bleedColor} specularColor={link.specularColor} dynamic={true}>{link.icon}{link.text}</Specular>
                      ))}
                    </div>
                  </div>
                </Specular>
              ))}
            </div>
          </div>
          {/* Dots */}
          <div className="carousel-dots">
            {cards.map((_, idx) => (
              <span
                key={idx}
                className={idx === current ? 'active' : ''}
                onClick={() => goTo(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Flagship;