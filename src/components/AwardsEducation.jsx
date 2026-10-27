import React from 'react';
import { Award, GraduationCap, CheckCircle2, BookOpen, ShieldCheck, Calendar, MapPin } from 'lucide-react';
import { awardHighlight, education, certifications } from '../data/portfolioData';

export default function AwardsEducation() {
  return (
    <section className="section" id="awards" style={{ background: 'rgba(9, 13, 21, 0.4)' }}>
      <div className="container">
        {/* Award Spotlight Banner */}
        <div className="award-spotlight-card">
          <div className="award-content">
            <div className="award-badge-pill">
              <Award size={14} />
              <span>ANNUAL RECOGNITION</span>
            </div>
            <h2 className="award-title">{awardHighlight.title}</h2>
            <div className="award-meta">
              <strong>{awardHighlight.company}</strong> · Awarded in {awardHighlight.date}
            </div>
            <p className="award-desc">
              {awardHighlight.description}
            </p>
          </div>

          <div className="award-graphic" aria-hidden="true">
            <Award size={56} />
          </div>
        </div>

        {/* Education & Academic Credentials */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
            <GraduationCap size={20} style={{ color: 'var(--accent-cyan)' }} />
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>Academic Foundation</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {education.map((edu, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.75rem' }}>
                <span className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
                  {edu.year}
                </span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  {edu.degree}
                </h4>
                <div style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {edu.institution}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  <MapPin size={13} />
                  <span>{edu.location}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {edu.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Certifications */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ShieldCheck size={20} style={{ color: 'var(--accent-emerald)' }} />
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>Continuous Professional Certifications</h3>
            </div>
            <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              8+ INDUSTRY CREDENTIALS
            </span>
          </div>

          <div className="cred-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cred-card">
                <div>
                  <span className="badge" style={{ marginBottom: '0.6rem', fontSize: '0.7rem' }}>
                    {cert.tag}
                  </span>
                  <div className="cred-title">{cert.title}</div>
                </div>

                <div className="cred-meta">
                  <span style={{ color: 'var(--accent-cyan)' }}>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
