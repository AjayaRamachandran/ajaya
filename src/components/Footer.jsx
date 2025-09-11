import React from 'react';
import { Lightbulb } from 'lucide-react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="footer-title" text-style='display'>
          <Lightbulb size={24} className="footer-icon" />
          Ajaya Ramachandran
        </div>
        <div className="footer-contact">
          <div className="footer-contact-title">Contact</div>
          <a className="footer-link" href="mailto:ajaya.ramachandran@gmail.com">ajaya.ramachandran@gmail.com</a>
          <a className="footer-link" href="tel:9783053363">978-305-3363</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
