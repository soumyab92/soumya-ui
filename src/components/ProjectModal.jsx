import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  TrendingUp, 
  CheckCircle2, 
  Layers, 
  Calendar, 
  User, 
  Briefcase 
} from 'lucide-react';
import { FigmaIcon, GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const [showFullPage, setShowFullPage] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '850px' }}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="badge badge-cyan">{project.categoryLabel}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close case study modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.25 }}>
            {project.title}
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
            {project.tagline}
          </p>

          {project.image && (
            <div style={{
              width: '100%',
              maxHeight: showFullPage ? 'none' : '340px',
              overflow: showFullPage ? 'visible' : 'hidden',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-medium)',
              marginBottom: '2rem',
              background: '#0d121c',
              position: 'relative',
              transition: 'max-height 0.3s ease'
            }}>
              <img 
                src={showFullPage && project.fullImage ? project.fullImage : project.image} 
                alt={project.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: showFullPage ? 'contain' : 'cover',
                  objectPosition: 'top center'
                }}
              />
              <div style={{
                position: showFullPage ? 'sticky' : 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1rem',
                background: 'linear-gradient(to top, rgba(13, 18, 28, 0.95) 0%, rgba(13, 18, 28, 0.7) 70%, transparent 100%)',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.6rem'
              }}>
                {project.storePassword && (
                  <div style={{
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#facc15',
                    background: 'rgba(250, 204, 21, 0.12)',
                    border: '1px solid rgba(250, 204, 21, 0.3)',
                    padding: '0.35rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    marginRight: 'auto'
                  }}>
                    Store Password: <strong>{project.storePassword}</strong>
                  </div>
                )}

                {project.fullImage && (
                  <button
                    onClick={() => setShowFullPage(!showFullPage)}
                    className="btn btn-secondary btn-sm"
                    style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <span>{showFullPage ? 'Collapse Preview' : 'View Full Page Layout'}</span>
                  </button>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <GithubIcon size={14} />
                    <span>View GitHub</span>
                  </a>
                )}

                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <FigmaIcon size={14} />
                    <span>Inspect Figma</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <ExternalLink size={14} />
                    <span>{project.category === 'shopify' ? 'Visit Live Store' : 'Visit Live Site'}</span>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Quick Meta Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            padding: '1.25rem',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '2rem'
          }}>
            <div>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>CLIENT / INDUSTRY</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>{project.client}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>MY ROLE</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>{project.role}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>MEASURABLE IMPACT</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#34d399' }}>{project.metrics || 'Production Delivered'}</div>
            </div>
          </div>

          {/* Overview */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Project Overview
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {project.overview}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              padding: '1.25rem',
              background: 'rgba(239, 68, 68, 0.04)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: 'var(--radius-md)'
            }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f87171', marginBottom: '0.5rem' }}>
                The Challenge
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {project.problem}
              </p>
            </div>

            <div style={{
              padding: '1.25rem',
              background: 'rgba(16, 185, 129, 0.04)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: 'var(--radius-md)'
            }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#34d399', marginBottom: '0.5rem' }}>
                The Solution & Architecture
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Deliverables */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Key Deliverables & Specifications
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.deliverables.map((item, idx) => (
                  <li key={idx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)', marginTop: '2px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
              TECHNOLOGY & TOOLS EMPLOYED
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tags.map((tag, idx) => (
                <span key={idx} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '0.75rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={15} />
                <span>Source Code</span>
              </a>
            )}

            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <FigmaIcon size={15} />
                <span>Open Figma File</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <ExternalLink size={15} />
                <span>Visit Live Experience</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
