import React, { useState, useMemo } from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  Code2, 
  ShoppingBag, 
  Globe, 
  FileCode,
  Layers
} from 'lucide-react';
import { FigmaIcon, GithubIcon } from './Icons';
import { showcaseCategories } from '../data/portfolioData';

export default function Showcase({ 
  projects, 
  onSelectProject 
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return selectedCategory === 'all' || project.category === selectedCategory;
    });
  }, [projects, selectedCategory]);

  // Helper icon for category
  const getCategoryIcon = (catId) => {
    switch (catId) {
      case 'figma':
        return <FigmaIcon size={14} />;
      case 'react':
        return <Code2 size={14} />;
      case 'shopify':
        return <ShoppingBag size={14} />;
      case 'frontend':
        return <Globe size={14} />;
      default:
        return <Layers size={14} />;
    }
  };

  return (
    <section className="section" id="showcase">
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <Layers size={14} />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Showcase Works</span>
          </h2>
          <p className="section-subtitle">
            Categorized across design systems, bespoke Shopify storefronts, accessible React architectures, and CRO initiatives.
          </p>
        </div>

        {/* Filter Tabs - Centered */}
        <div className="filter-container" style={{ justifyContent: 'center' }}>
          <div className="category-tabs" role="tablist" aria-label="Showcase categories">
            {showcaseCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={`category-tab ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.name}</span>
                <span style={{ 
                  fontSize: '0.72rem', 
                  opacity: 0.75, 
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-mono)'
                }}>
                  {cat.id === 'all' 
                    ? projects.length 
                    : projects.filter(p => p.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid Display */}
        {filteredProjects.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)'
          }}>
            <Layers size={36} style={{ color: 'var(--text-muted)', marginBottom: '1rem', opacity: 0.6 }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.4rem' }}>
              {projects.length === 0 ? 'Projects Coming Soon' : 'No projects match this filter'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto', fontSize: '0.9rem' }}>
              {projects.length === 0
                ? 'Curated case studies across Figma Design, React, and Shopify are being added.'
                : 'Try selecting a different category or clearing your search term.'}
            </p>
            {projects.length > 0 && (
              <button
                onClick={() => setSelectedCategory('all')}
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '1.25rem' }}
              >
                Reset Filter
              </button>
            )}
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                {/* Visual Header / Cover */}
                <div className="project-card-header">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        opacity: 1,
                        transition: 'transform 0.4s ease, opacity 0.4s ease'
                      }}
                      className="project-cover-image"
                    />
                  ) : (
                    <div 
                      className="project-card-art"
                      style={{
                        backgroundImage: project.category === 'figma'
                          ? 'radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.2) 0%, transparent 60%)'
                          : project.category === 'shopify'
                          ? 'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(52, 211, 153, 0.15) 0%, transparent 60%)'
                          : 'radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 60%)'
                      }}
                    />
                  )}
                  {/* <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(10, 15, 25, 0.65) 0%, rgba(10, 15, 25, 0.9) 100%)',
                    pointerEvents: 'none'
                  }} /> */}

                  <div className="card-top-meta">
                    <span className="card-category-tag">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="project-card-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>

                  <div className="project-tags">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <span key={i} className="badge">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="badge" style={{ opacity: 0.7 }}>
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="project-card-footer">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="btn btn-secondary btn-sm"
                      style={{ flex: 1 }}
                    >
                      <span>Case Study Details</span>
                      <ArrowUpRight size={14} />
                    </button>

                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost btn-sm"
                          title="View Source on GitHub"
                          style={{ padding: '0.45rem' }}
                        >
                          <GithubIcon size={16} />
                        </a>
                      )}
                      {project.figmaUrl && (
                        <a
                          href={project.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost btn-sm"
                          title="Open in Figma"
                          style={{ padding: '0.45rem' }}
                        >
                          <FigmaIcon size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost btn-sm"
                          title="View Live Site"
                          style={{ padding: '0.45rem' }}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
