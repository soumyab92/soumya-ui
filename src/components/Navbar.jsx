import React, { useState, useEffect } from 'react';
import { FileText, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['showcase', 'experience', 'skills', 'awards', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Showcase', href: '#showcase', id: 'showcase' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills & Systems', href: '#skills', id: 'skills' },
    { label: 'Awards & Credentials', href: '#awards', id: 'awards' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="navbar-wrapper">
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <a href="#" className="nav-brand" aria-label="Soumya Bhattacharya Portfolio Home">
          <img
            src="/logo.png"
            alt="Soumya B. - Senior UI/UX & Frontend"
            className="nav-logo"
            style={{ height: '50px', width: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                style={activeSection === item.id ? { color: 'var(--accent-cyan)' } : {}}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            onClick={onOpenResume}
            className="btn btn-secondary btn-sm"
            title="View complete resume"
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="btn btn-primary btn-sm"
          >
            <Mail size={15} />
            <span>Let's Talk</span>
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div 
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Right-Side Slide-in Drawer */}
      <aside 
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer-header">
          <img 
            src="/logo.png" 
            alt="Soumya B. - Senior UI/UX & Frontend" 
            style={{ height: '36px', width: 'auto', display: 'block', objectFit: 'contain' }}
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-drawer-close"
            aria-label="Close navigation menu"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mobile-drawer-body">
          <nav className="mobile-drawer-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={15} className="mobile-link-arrow" />
              </a>
            ))}
          </nav>
        </div>

        <div className="mobile-drawer-footer">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <FileText size={15} />
            <span>Full Resume & Credentials</span>
          </button>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Mail size={15} />
            <span>Initiate Contact</span>
          </a>
        </div>
      </aside>
    </header>
  );
}
