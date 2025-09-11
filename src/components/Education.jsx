import React from 'react';
import Specular from '@/components/Specular';
import { Globe } from 'lucide-react';
import './education.css';

const educationData = [
  {
    title: 'North Andover High School',
    subtitle: 'North Andover, MA',
    image: 'https://resources.finalsite.net/images/t_image_size_4/v1624630679/northandoverpublicschoolscom/zd5tszujkc9zanziphx3/NAHS-entrance-2.jpg',
    desc: (
      <>
        <p text-style='display' style={{opacity: 0.7}}>2020 - 2024</p>
        <p>At NAHS, I was a passionate academic with a love for robotics. Throughout by four years, I worked with a growing team of passionate robotics peers to spearhead a talented, formidable team that represented NAHS at the VEX Robotics World Championships, bringing home the THINK Award for our unique, innovative code.</p>
      </>
    ),
    links: [
      { text: 'NAHS Website', icon: Globe, href: 'https://nahs.northandoverpublicschools.com/', color: '#3d3d75' },
    ],
  },
  {
    title: 'Northeastern University',
    subtitle: 'Boston, MA',
    image: 'https://www.touristsbook.com/wp-content/uploads/2019/10/college-1-1.jpg',
    desc: (
      <>
        <p text-style='display' style={{opacity: 0.7}}>2024 - Present</p>
        <p>At Northeastern, I don't just settle for complacency -- beyond my academics, I'm constantly pushing the boundaries of what I can do; from designing my own game-theory-hackathon, completing internships <i>while working on indsutry-level personal projects</i>, or infusing the world of design into my software decisions at every turn, I'm constantly expanding my own collegiate experience.</p>
      </>
    ),
    links: [
      { text: 'University Website', icon: Globe, href: 'https://www.northeastern.edu/', color: '#3d3d75' },
    ],
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-title section-title" text-style="display">My Education</div>
      <div className="education-cards">
        {educationData.map((edu, idx) => (
          <Specular className="education-card section" key={idx}>
            <div className="education-details">
              <div className="education-card-title" text-style="display">{edu.title}</div>
              <div className="education-card-subtitle">{edu.subtitle}</div>
              <div className="education-card-desc">
                <img className="education-image" src={edu.image} alt={edu.title + ' photo'} />
                {edu.desc}
              </div>
              <div className="education-links">
                {edu.links.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <Specular key={i} className="education-link-btn" dynamic={true} specularColor={link.color} link={link.href}>
                      {Icon ? <Icon size={16}/> : null}{link.text}
                    </Specular>
                  );
                })}
              </div>
            </div>
          </Specular>
        ))}
      </div>
    </section>
  );
}

export default Education;
