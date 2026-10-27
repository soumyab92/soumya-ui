import React from 'react';
import { ArrowDown, FileText, Sparkles, Layers, CheckCircle2, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-glow-blob" />
      
      <div className="container">
        <div className="hero-content">
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>{personalInfo.availability}</span>
          </div>

          <h1 className="hero-title">
            <span className="gradient-text">Architecting Scalable Design Systems</span>{' '}
            <span className="gradient-accent">& High-Impact Web Applications</span>
          </h1>

          <p className="hero-subtitle">
            Senior UI/UX Designer & Frontend Developer with <strong>9+ years of expertise</strong>. 
            Translating complex user journeys and business logic into conversion-engineered Shopify storefronts, 
            enterprise React applications, and unified Figma component architectures.
          </p>

          <div className="hero-cta-group">
            <a href="#showcase" className="btn btn-primary">
              <Layers size={17} />
              <span>Explore Showcase</span>
            </a>
            <button onClick={onOpenResume} className="btn btn-secondary">
              <FileText size={17} />
              <span>Review CV & Qualifications</span>
            </button>
            <a href="#contact" className="btn btn-ghost">
              <span>Initiate Conversation</span>
              <ArrowDown size={15} />
            </a>
          </div>

          {/* Key Metric Highlights */}
          <div className="stats-grid">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-detail">{stat.detail}</div>
              </div>
            ))}
          </div>

          {/* Tech stack rail */}
          <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0.6rem' }}>
            <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginRight: '0.5rem' }}>
              PRIMARY STACK:
            </span>
            <span className="badge badge-cyan">Figma Design Systems & Tokens</span>
            <span className="badge badge-cyan">React JS</span>
            <span className="badge badge-emerald">Shopify Liquid & Dawn</span>
            <span className="badge badge-violet">Replo & Checkout Champ</span>
            <span className="badge">Tailwind & Bootstrap 5</span>
            <span className="badge">WCAG 2.1 A11y</span>
            <span className="badge">AI Workflows</span>
          </div>
        </div>
      </div>
    </section>
  );
}
