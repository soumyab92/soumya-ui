import React from 'react';
import { 
  Code2, 
  ShoppingBag, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Cpu 
} from 'lucide-react';
import { FigmaIcon } from './Icons';
import { technicalSkills } from '../data/portfolioData';

export default function SkillsMatrix() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0: return <FigmaIcon size={22} />;
      case 1: return <Code2 size={22} />;
      case 2: return <ShoppingBag size={22} />;
      case 3: return <Sparkles size={22} />;
      default: return <Layers size={22} />;
    }
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Design Systems & <span className="gradient-text">Engineering Matrix</span>
          </h2>
          <p className="section-subtitle">
            A battle-tested skill set bridging product design strategy, component engineering, and performance optimization.
          </p>
        </div>

        <div className="skills-grid">
          {technicalSkills.map((category, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-cat-header">
                <div className="skill-icon-bubble">
                  {getIcon(idx)}
                </div>
                <div>
                  <h3 className="skill-cat-title">{category.category}</h3>
                  <p className="skill-cat-desc">{category.description}</p>
                </div>
              </div>

              <div className="skill-bars-list">
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-bar-item">
                    <div className="skill-bar-labels">
                      <span style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
                      <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-progress"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional specialized competencies pill rail */}
        <div style={{
          marginTop: '3rem',
          padding: '1.75rem',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.25rem'
        }}>
          <div>
            <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', marginBottom: '0.2rem' }}>
              SPECIALIZED HIGHLIGHTS
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700 }}>
              Conversion Rate Optimization (CRO) & Cross-Browser A11y
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span className="badge badge-emerald">Shopify Dawn 2.0</span>
            <span className="badge badge-emerald">Replo Builder</span>
            <span className="badge badge-emerald">Checkout Champ Funnels</span>
            <span className="badge badge-cyan">WCAG 2.1 AA Compliance</span>
            <span className="badge badge-violet">Claude AI Workflows</span>
            <span className="badge">Lighthouse 90+ Scores</span>
            <span className="badge">Git / Version Control</span>
          </div>
        </div>
      </div>
    </section>
  );
}
