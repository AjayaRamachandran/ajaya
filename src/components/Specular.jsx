import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Specular({className, text, icon, dynamic = false, specularColor = '#2d2d61', mobile = false, bleedColor='#ffffff'}) {
  const [ desiredAngle, setDesiredAngle ] = useState(45);
  const [ currentAngle, setCurrentAngle ] = useState(45);
  const [ mounted, setMounted ] = useState(false);

  // On mount, set currentAngle to -100 for glint effect and trigger glide-in
  useEffect(() => {
    setCurrentAngle(-100);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (currentAngle === desiredAngle) return;
    const id = setTimeout(() => {
      setCurrentAngle(currentAngle + (desiredAngle - currentAngle) / (currentAngle > desiredAngle ? 6 : 20));
    }, 16); // ~60fps
    return () => clearTimeout(id);
  }, [desiredAngle, currentAngle]);

  return (
    <>
      <div
        className={'specular' + (dynamic? ' dynamic' : '') + (mounted ? ' specular-mounted' : '')}
        style={{
          "--specular-color": specularColor,
          '--bleed-color-1' : bleedColor + '6b',
          '--bleed-color-2' : bleedColor + '11',
          '--bleed-color-3' : bleedColor + '3f',
          '--bleed-color-4' : bleedColor + 'bb',
          '--specular-angle': `${Math.round(currentAngle)}deg`,
          transition: 'transform 0.7s cubic-bezier(.4,1.4,.6,1), opacity 0.7s cubic-bezier(.4,1.4,.6,1), box-shadow 0.4s',
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          opacity: mounted ? 1 : 0,
        }}
      >
        <button className={className} onMouseEnter={() => setDesiredAngle(0)} onMouseLeave={() => setDesiredAngle(45)}>
          {icon && <span className="specular-icon" style={{marginRight: mobile ? 0 : 8, display: 'inline-flex', alignItems: 'center'}}>{icon}</span>}
          {text}
        </button>
      </div>
    </>
  );
}

export default Specular;