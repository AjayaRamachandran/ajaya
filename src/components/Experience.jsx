import React from 'react';
import './experience.css';

const experiences = [
  {
    title: 'Vestmark',
    description: 'While working with industry professionals to accelerate client solutions, I also took on additional endeavors such as building an AI-powered SQL solution-creating platform for the Vestmark 2025 AI Hackathon, and spending the last month of my internship building a full-fledged official client-facing documentation portal in React/Node. I learned key insights on how the FinTech industry operates, the expectations of high-profile clients, and how SaaS companies move.',
    image: 'https://www.dropbox.com/scl/fi/nn7qy8pbvrgw760hab0gr/1753987140119.jpeg?rlkey=bmt3txjqfpikr3jgq0sevh6x8&st=uisrczak&raw=1',
  },
  {
    title: 'Northeastern TAN Lab',
    description: 'I worked with speech pathology and audiology researchers at the TAN Lab to design and build an adaptive detection and aid system for patients with Aphasia, researching the use of state-of-the-art NLP models for processing real-time audio and other stimuli. I\'ve learned the intricacies of working with real patient data, how to work with large manually-collected datasets, and interdisciplinary research.',
    image: 'https://www.dropbox.com/scl/fi/brottkkmzdib8nm3nws35/shutterstock_1544594174-1-978x550.jpg?rlkey=zgfgfkiazjgwfezmtyao7a2k2&st=9k4oo81t&raw=1',
  },
  {
    title: 'Oasis at NEU',
    description: 'Worked with a team of three developers and mentors to learn the fundamentals of React development, additionally learning how to create OAuth systems and how to use cloud data frameworks like Firebase and Supabase.',
    image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1670243724542/s-FFPB9GG.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress',
  },
  {
    title: 'Curriculum Designer at NAHS',
    description: 'Noticing a stark lack of electrical or low-level programming classes at my high school, I worked with a partner and the North Andover H.S. administration to design and implement a full 2-semester Electronics I & II class, taking students from the basics of circuit design all the way to programming autonomous systems with Raspberry Pi.',
    image: 'https://www.dropbox.com/scl/fi/m2uows51jzejh613w9e2g/IMG_3686.png?rlkey=j16h5hkjnq0d0l265v8r76e0b&st=kytxydtz&raw=1',
  },
];

function Experience() {
  return (
    <section>
      <div className='section-title' text-style='display' id='experience'>My Experiences</div>
      {experiences.map((exp, idx) => (
        <div className="experience-section" key={idx}>
          <div className="experience-details">
            <div className="experience-title" text-style="display">{exp.title}</div>
            <div className="experience-description section">
              {exp.description}
            </div>
          </div>
          <img className="experience-image" src={exp.image} alt={exp.title + ' example'} />
        </div>
      ))}
    </section>
  );
}

export default Experience;