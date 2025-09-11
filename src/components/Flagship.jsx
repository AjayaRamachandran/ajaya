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
      content: <><img src='https://www.dropbox.com/scl/fi/jl7g33e6w3auttmmiczxi/Sunday-07-Sep-2025-12-55-21.png?rlkey=yy2jsl2ljp9kyawzqz9r90ki9&st=bqyractz&raw=1' width='100%' style={{marginBottom: '15px'}}></img>VRC Tracker is a web-based tracker app that turns boring points into competitive ranks, accolades, and more. Upon the day of release, it received more than 2 thousand visits and has continued to receive several thousands of visits since.</>,
      stack: 'AJAX • Firebase • Python Flask • Vercel • HTML/CSS',
      links: [
        { text: 'VRC Tracker', link: 'https://powerscore.vercel.app', icon: <Link size={18}/>, className: 'specular-appearance', specularColor: '#3c7078' },
        { text: 'GitHub', link: 'https://github.com/AjayaRamachandran/PowerScore', icon: <Github size={18}/>, className: 'specular-appearance' },
      ]
    },
    {
      header: 'Walkthroughs',
      subheader: "Enchancing business-client interaction with a custom-built, comprehensive documentation network.",
      content: <><img src='https://www.dropbox.com/scl/fi/8ebmzg1tjk4ulh82mkvbl/An-image-of-the-document-editor-takes-inspiration-from-Notion.png?rlkey=rjivc11pwh3oafdqrul2qch8j&st=8un1tlyb&raw=1' width='100%' style={{marginBottom: '15px', borderRadius: '5px'}}></img>In a world of data, it's increasingly important for companies to have methods of communicating the ins and outs of their platform with customers. While existing tools may do this, made-in-house platforms allow for more control and reliability. Interning at Vestmark, I developed <i>Walkthroughs,</i> aiming to provide proper documentation to clients in a lightweight, scalable web app.</>,
      stack: 'React.js • Express.js • Node.js • PostgreSQL • Auth (via JWT) • ',
      links: [
        { text: 'See in Action', link: 'https://www.dropbox.com/scl/fo/ff851ivouo07jfkq4vxu7/AIqztCRFgs3ZHtNToFZzm_g?rlkey=60k44v7ti4qo313gyxkyq8do3&st=arowb9l8&dl=0', icon: <FileImage size={18}/>, className: 'specular-appearance', specularColor: '#7f3f8c' }
      ]
    },
    {
      header: 'LaunchPad',
      subheader: "Accelerating client-focused technical support with Agentic AI.",
      content: <><img src='https://www.dropbox.com/scl/fi/foq654mwkwjzx886bu81a/A-general-screenshot-showing-the-interface-of-LaunchPad.jpg?rlkey=iygvsx4xmjp6l38gutot2ec6f&st=uw8rlgzi&raw=1' width='100%' style={{marginBottom: '15px', borderRadius: '5px'}}></img>Leading a team of 4 developers, in May of 2025 I developed LaunchPad, an AI-powered data retrieval engine that can scan across entire company databases to solve client cases in a matter of seconds as opposed to hours or days. It won 'most creative' at <i>Vestmark</i>'s 2025 AI Hackathon.</>,
      stack: 'React.js • Express.js • Node.js • OpenAI API • Salesforce API • Confluence API',
      links: [
        { text: 'See in Action', link: 'https://www.dropbox.com/scl/fo/v5r0bfk4elz1zo907y1zh/AINCjZ_kIjvn64wCs8fqsms?rlkey=m3l5pk7102slcv7fmirj8n0fn&st=3hitakta&dl=0', icon: <FileImage size={18}/>, className: 'specular-appearance', specularColor: '#7f3f8c' }
      ]
    },
    {
      header: 'Procedural Terrain Generator',
      subheader: "Replicating the world generation of the world's most popular video game.",
      content: <><img src='https://www.dropbox.com/scl/fi/bjcl5kejok4ty6tsx1aw4/2024-12-26_21.21.19.png?rlkey=tcznu1gqm4od0pd0hue36ux5x&st=m6lvj9wa&raw=1' width='100%' style={{marginBottom: '15px', borderRadius: '5px'}}></img>Designed originally for the purpose of creating a fun plugin for Minecraft, the Procedural Island Generator became a deep pursuit of understanding of the video game's intricate world generation system. From natural ecosystems to undergound resources, creating an entire Minecraft world in code is no easy feat.</>,
      stack: 'Python (mcschematic) • Java',
      links: [
        { text: 'GitHub', link: 'https://github.com/AjayaRamachandran/Procedural-Terrain-Generator', icon: <Github size={18}/>, className: 'specular-appearance' }
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
      <div className='section-title' text-style='display' id='flagship'>Flagship Project</div>
      {/* Symphony project restored as a standalone section */}
      <Specular className="symphony-section" overrideSize={'calc(40% + 200px)'}>
        <div className='section'>
          <div style={{display:'flex', flexDirection:'row', gap:'20px', marginTop:'10px'}}>
            <span className='header' text-style='display'><big>Symphony</big></span>
            <Specular className='specular-appearance accent' link='https://symphony.nimbialapps.com' bleedColor='#e3b2ff' specularColor='#6b3a6b' dynamic={true} callToAction={true}>
              <Link size={18}/>Official Website
            </Specular>
            <Specular className='specular-appearance' link='https://github.com/AjayaRamachandran/symphony' dynamic={true}>
              <Github size={18}/>GitHub
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
          style={{ position: 'absolute', top: '450px', right: '-20px', zIndex: 2 }}
          onClick={() => goTo(current + 1)}
          dynamic={true}
        >
          <ChevronRight />
        </Specular>
        <Specular
          overrideSize={40}
          className="carousel-btn next"
          style={{ position: 'absolute', top: '450px', left: '-20px', zIndex: 2 }}
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
                        <Specular link={link.link} key={idx2} className={link.className} bleedColor={link.bleedColor} specularColor={link.specularColor} dynamic={true}>{link.icon}{link.text}</Specular>
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