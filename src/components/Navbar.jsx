import React, { useState, useEffect } from 'react';
import { Lightbulb, Briefcase, GraduationCap, Heart, Star } from 'lucide-react';

import Specular from '@/components/Specular';

import './navbar.css';

function NavLinks({ mobile = false }) {
  if (mobile) {
    return (
      <div className="mobile-navbar">
        <Specular className='navbar-link' dynamic={true} mobile={true}>
          <span style={{display:'inline-flex', alignItems:'center', marginRight: mobile ? 0 : 8}}><Star size={30}/></span>Flagship Project
        </Specular>
        <Specular className='navbar-link' dynamic={true} mobile={true}>
          <span style={{display:'inline-flex', alignItems:'center', marginRight: mobile ? 0 : 8}}><Briefcase size={30}/></span>Experience
        </Specular>
        <Specular className='navbar-link' dynamic={true} mobile={true}>
          <span style={{display:'inline-flex', alignItems:'center', marginRight: mobile ? 0 : 8}}><GraduationCap size={30}/></span>Education
        </Specular>
        <Specular className='navbar-link' dynamic={true} mobile={true}>
          <span style={{display:'inline-flex', alignItems:'center', marginRight: mobile ? 0 : 8}}><Heart size={30}/></span>My Philosophy
        </Specular>
      </div>
    );
  }
  return (
    <>
      <div></div>
      <div className="navbar-right">
        <Specular className='navbar-link' dynamic={true}>
          <span style={{display:'inline-flex', alignItems:'center'}}><Star size={18}/></span>Flagship Project
        </Specular>
        <Specular className='navbar-link' dynamic={true}>
          <span style={{display:'inline-flex', alignItems:'center'}}><Briefcase size={18}/></span>Experience
        </Specular>
        <Specular className='navbar-link' dynamic={true}>
          <span style={{display:'inline-flex', alignItems:'center'}}><GraduationCap size={18}/></span>Education
        </Specular>
        <Specular className='navbar-link' dynamic={true}>
          <span style={{display:'inline-flex', alignItems:'center'}}><Heart size={18}/></span>My Philosophy
        </Specular>
      </div>
    </>
  )
}

function FreshNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    const handleResize = () => setIsMobile(window.innerWidth <= 1000);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={`navbar ${scrolled ? 'scrolled' : ''} ${isMobile ? 'mobile' : ''}`}>
        <div className={`navbar-title ${scrolled ? 'scrolled' : ''}`} text-style='display'><Lightbulb />Ajaya Ramachandran</div>
        <NavLinks mobile={isMobile} />
      </div>
    </>
  );
}

export default FreshNavbar;