import React from 'react';
import { SplinePointer, Crosshair, Leaf, PersonStanding } from 'lucide-react';
import './philosophy.css';
import Specular from '@/components/Specular';

const philosophyPoints = [
  {
    title: 'Design + Functionality',
    icon: SplinePointer,
    text: 'Many technologies today have matured into a state where core functionality seldom changes, and new updates are often upgrades to the experience. In this modern age, the methodology with which we design programmed interactions is just as if not more important than the functionality.'
  },
  {
    title: 'Solve a Problem',
    icon: Crosshair,
    text: 'Too often we see products that are designed to turn heads for their novelty or pizazz. What\'s more critical, expecially in an age where AI-accelerated code can do almost anything, is to be tasteful with our decisions, to see what problems actually need fixing, and target those; products made with this goal are bound to last beyond the seed round.'
  },
  {
    title: 'Sustainable Code is Better Code',
    icon: Leaf,
    text: 'It goes without saying that sustainability in all forms makes our code better. But environmental sustainability is often overlooked under this lens. When working with technologies that push the boundaries, it is important to weigh this often ignored factor, designing variants of AI systems and other compute-intensive programs that can, for example, run on-device or perhaps crowdsourced hardware.'
  },
  {
    title: 'The Human Touch',
    icon: PersonStanding,
    text: 'Technology is uniquely human, and it should continue to serve people, not systems. As digital experiences become more intertwined with reality, and users are more immersed in programmed worlds with each new day, programmers have a responsibility to make code that helps people live more fulfilling lives, engages people in real social interactions, and actually increases their productivity.'
  },
];

function Philosophy() {
  return (
    <section className="philosophy-section" id="philosophy">
      <div className="philosophy-title section-title" text-style="display">My Philosophy</div>
      <div className="philosophy-points">
        {philosophyPoints.map((point, idx) => {
          const Icon = point.icon;
          return (
            <Specular className="philosophy-point" key={idx}>
              <div className='point-content'>
                <div className="philosophy-point-title" text-style='display'>
                    <Icon size={28} style={{marginRight: 12, verticalAlign: 'middle'}} />
                    {point.title}
                </div>
                <div className="philosophy-point-text">{point.text}</div>
              </div>
            </Specular>
          );
        })}
      </div>
    </section>
  );
}

export default Philosophy;
