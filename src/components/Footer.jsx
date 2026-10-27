import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { FigmaIcon, GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <img
                src="/logo.png"
                alt="Soumya B. - Senior UI/UX & Frontend"
                className="footer-logo"
                style={{ height: '50px', width: 'auto', display: 'block', objectFit: 'contain' }}
              />
            </div>
            <p className="footer-text">
              Senior UI/UX Designer & Frontend Developer · Kolkata, India · Open to Remote
            </p>
          </div>

          <div className="footer-links">
            <a href="#showcase" className="footer-text" style={{ transition: 'color 0.2s' }}>
              Showcase
            </a>
            <a href="#experience" className="footer-text" style={{ transition: 'color 0.2s' }}>
              Experience
            </a>
            <a href="#skills" className="footer-text" style={{ transition: 'color 0.2s' }}>
              Skills Matrix
            </a>
            <a href="#contact" className="footer-text" style={{ transition: 'color 0.2s' }}>
              Contact
            </a>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              title="Return to top"
              style={{ marginLeft: '1rem', padding: '0.45rem 0.75rem' }}
            >
              <ArrowUp size={14} />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div style={{
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.78rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} Soumya Bhattacharya. Built with React JS & Clean Component Architecture.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)' }}>
            Lighthouse 90+ Optimized · WCAG 2.1 Compliant
          </div>
        </div>
      </div>
    </footer>
  );
}
