import React, { useState, useEffect } from 'react';
import { Blocks, Briefcase, GraduationCap, Heart, Star } from 'lucide-react';

import Specular from '@/components/Specular';

import './navbar.css';

function NavLinks({ mobile = false }) {
  if (mobile) {
    return (
      <div className="mobile-navbar">
        <Specular className='navbar-link' text='Flagship Project' icon={<Star size={30}/>} dynamic={true} mobile={true} />
        <Specular className='navbar-link' text='Experience' icon={<Briefcase size={30}/>} dynamic={true} mobile={true} />
        <Specular className='navbar-link' text='Education' icon={<GraduationCap size={30}/>} dynamic={true} mobile={true} />
        <Specular className='navbar-link' text='My Philosophy' icon={<Heart size={30}/>} dynamic={true} mobile={true} />
      </div>
    );
  }
  return (
    <>
      <div></div>
      <div className="navbar-right">
        <Specular className='navbar-link' text='Flagship Project' icon={<Star size={18}/>} dynamic={true} />
        <Specular className='navbar-link' text='Experience' icon={<Briefcase size={18}/>} dynamic={true} />
        <Specular className='navbar-link' text='Education' icon={<GraduationCap size={18}/>} dynamic={true} />
        <Specular className='navbar-link' text='My Philosophy' icon={<Heart size={18}/>} dynamic={true} />
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
        <div className={`navbar-title ${scrolled ? 'scrolled' : ''}`}><Blocks /><i>Ajaya Ramachandran</i></div>
        <NavLinks mobile={isMobile} />
      </div>
    </>
  );
}

export default FreshNavbar;