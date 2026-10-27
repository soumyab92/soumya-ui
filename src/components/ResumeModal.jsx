import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  Briefcase, 
  GraduationCap, 
  ExternalLink 
} from 'lucide-react';
import { 
  personalInfo, 
  experienceData, 
  technicalSkills, 
  certifications, 
  education, 
  awardHighlight 
} from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '920px' }}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="badge badge-cyan">Curriculum Vitae</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Verified Profile
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={handlePrint}
              className="btn btn-secondary btn-sm"
              title="Print or Save as PDF"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="modal-close-btn"
              aria-label="Close resume modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="modal-body" style={{ padding: '2.5rem' }}>
          {/* Header */}
          <div style={{ borderBottom: '2px solid var(--border-medium)', paddingBottom: '1.5rem', marginBottom: '1.75rem' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>
              {personalInfo.name}
            </h1>
            <div style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.75rem' }}>
              {personalInfo.role}
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Phone size={14} style={{ color: 'var(--accent-cyan)' }} />
                <span>{personalInfo.phone}</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Mail size={14} style={{ color: 'var(--accent-cyan)' }} />
                <span>{personalInfo.email}</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={14} style={{ color: 'var(--accent-cyan)' }} />
                <span>{personalInfo.location} · Open to Remote</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-cyan)', marginBottom: '0.6rem' }}>
              Professional Summary
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.92rem' }}>
              {personalInfo.summary}
            </p>
          </div>

          {/* Award Spotlight */}
          <div style={{
            padding: '1rem 1.25rem',
            background: 'rgba(245, 158, 11, 0.08)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <Award size={22} style={{ color: '#fbbf24', flexShrink: 0 }} />
            <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>
              <strong>Best Performance in Design Award (2024)</strong> — Codeclouds IT Solutions. Recognized for leading design systems across 20+ accounts and mentoring engineering workflows.
            </div>
          </div>

          {/* Work Experience */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-cyan)', marginBottom: '1.25rem' }}>
              Work Experience
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {experienceData.map((exp, idx) => (
                <div key={idx} style={{ borderLeft: '2px solid var(--border-medium)', paddingLeft: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.2rem' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                      {exp.role} <span style={{ color: 'var(--accent-cyan)' }}>| {exp.company}</span>
                    </h4>
                    <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      {exp.period} · {exp.location}
                    </span>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', marginTop: '0.6rem' }}>
                    {exp.achievements.map((item, aIdx) => (
                      <li key={aIdx} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', position: 'relative', paddingLeft: '1rem', lineHeight: 1.5 }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent-cyan)' }}>›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-cyan)', marginBottom: '0.8rem' }}>
                Education
              </h3>
              {education.map((edu, idx) => (
                <div key={idx} style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>{edu.degree}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{edu.institution} · {edu.year}</div>
                </div>
              ))}
            </div>

            <div>
              <h3 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-cyan)', marginBottom: '0.8rem' }}>
                Key Certifications
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {certifications.slice(0, 5).map((cert, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={13} style={{ color: 'var(--accent-cyan)' }} />
                    <span>{cert.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
