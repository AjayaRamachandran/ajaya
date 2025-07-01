import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Specular({
  className, 
  children, 
  dynamic = false, 
  specularColor = '#3d3d75', 
  mobile = false, 
  bleedColor = '#ffffff', 
  onClick = undefined, 
  overrideSize = null,
  callToAction = false,
  ...rest
}) {
  const [desiredAngle, setDesiredAngle] = useState(45);
  const [currentAngle, setCurrentAngle] = useState(45);
  const [mounted, setMounted] = useState(false);

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
    <div
      className={'specular' + (dynamic ? ' dynamic' : '') + (mounted ? ' specular-mounted' : '') + (className ? ` ${className}` : '')}
      style={{
        '--specular-color': specularColor,
        '--bleed-color-1': bleedColor + '6b',
        '--bleed-color-2': bleedColor + '11',
        '--bleed-color-3': bleedColor + '3f',
        '--bleed-color-4': bleedColor + 'bb',
        '--specular-angle': `${Math.round(currentAngle)}deg`,
        transition: 'transform 0.7s cubic-bezier(.4,1.4,.6,1), opacity 0.7s cubic-bezier(.4,1.4,.6,1), box-shadow 0.4s',
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
        opacity: mounted ? 1 : 0,
        width: overrideSize && overrideSize
      }}
      onMouseEnter={() => setDesiredAngle(dynamic? 0 : 45)}
      onMouseLeave={() => setDesiredAngle(45)}
      onClick={onClick}
      {...rest}
    >
      <div style={{padding: '7px 10px', display: 'flex', alignItems:'center', gap: '10px'}}>{children}</div>
    </div>
  );
}

export default Specular;