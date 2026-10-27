import React from 'react';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section" id="experience" style={{ background: 'rgba(9, 13, 21, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <Briefcase size={14} />
            <span>Career Milestones</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="section-subtitle">
            9+ years leading design systems, conversion-rate optimization initiatives, and engineering teams across enterprise and agency environments.
          </p>
        </div>

        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-node" />
              <div className="timeline-content">
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-company">{exp.company}</div>

                <div className="timeline-meta">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </span>
                </div>

                {exp.highlight && (
                  <div className="timeline-award-pill">
                    <Award size={14} />
                    <span>{exp.highlight}</span>
                  </div>
                )}

                <ul className="timeline-achievements">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="timeline-badges">
                  {exp.badges.map((badge, idx) => (
                    <span key={idx} className="badge">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
