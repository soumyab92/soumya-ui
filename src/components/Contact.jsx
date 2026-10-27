import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <Mail size={14} />
            <span>Direct Channels</span>
          </div>
          <h2 className="section-title">
            Let's Connect & <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="section-subtitle">
            Available for Senior UI/UX Designer & Frontend Developer opportunities, design system architecture, and conversion-focused projects.
          </p>
        </div>

        {/* Executive Direct Contact Hub */}
        <div style={{
          maxWidth: '960px',
          margin: '0 auto',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-card)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}>
            {/* Email Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'border-color 0.2s ease, transform 0.2s ease'
            }}>
              <div>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(56, 189, 248, 0.1)',
                  color: 'var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <Mail size={20} />
                </div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  Email Address
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', wordBreak: 'break-all', marginBottom: '1.25rem' }}>
                  {personalInfo.email}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn btn-primary btn-sm"
                  style={{ flex: 1 }}
                >
                  <Mail size={14} />
                  <span>Send Email</span>
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="btn btn-secondary btn-sm"
                  title="Copy email to clipboard"
                  style={{ padding: '0.45rem 0.75rem' }}
                >
                  {copiedEmail ? <Check size={15} style={{ color: '#34d399' }} /> : <Copy size={15} />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'border-color 0.2s ease, transform 0.2s ease'
            }}>
              <div>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: '#34d399',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <Phone size={20} />
                </div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  Phone / WhatsApp
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                  {personalInfo.phone}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1 }}
                >
                  <Phone size={14} />
                  <span>Call Directly</span>
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="btn btn-secondary btn-sm"
                  title="Copy phone to clipboard"
                  style={{ padding: '0.45rem 0.75rem' }}
                >
                  {copiedPhone ? <Check size={15} style={{ color: '#34d399' }} /> : <Copy size={15} />}
                </button>
              </div>
            </div>

            {/* Location & Availability */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'border-color 0.2s ease, transform 0.2s ease'
            }}>
              <div>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(139, 92, 246, 0.1)',
                  color: '#a78bfa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <MapPin size={20} />
                </div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  Location & Mobility
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  {personalInfo.location}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#34d399', fontWeight: 600 }}>
                  Open to Remote & Global Relocation
                </div>
              </div>

              <div style={{ marginTop: '1.25rem' }}>
                <span className="badge badge-emerald" style={{ width: '100%', justifyContent: 'center', padding: '0.45rem' }}>
                  Immediate Availability
                </span>
              </div>
            </div>
          </div>

          {/* Quick Note */}
          <div style={{
            textAlign: 'center',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '0.88rem',
            color: 'var(--text-muted)'
          }}>
            Reach out directly via email or phone for design system audits, enterprise UI/UX consulting, or full-time opportunities.
          </div>
        </div>
      </div>
    </section>
  );
}
