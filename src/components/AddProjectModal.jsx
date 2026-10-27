import React, { useState } from 'react';
import { X, Plus, Copy, Check, Info, Code2, ShoppingBag, Globe } from 'lucide-react';
import { FigmaIcon } from './Icons';

export default function AddProjectModal({ isOpen, onClose, onAddProject }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'figma',
    tagline: '',
    client: '',
    role: 'Senior UI/UX Designer',
    year: '2024',
    metrics: '',
    tags: 'Figma, Design System, UI/UX',
    overview: '',
    problem: '',
    solution: '',
    liveUrl: '',
    figmaUrl: '',
    githubUrl: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getCategoryLabel = (cat) => {
    switch (cat) {
      case 'figma': return 'Figma Design';
      case 'react': return 'React Project';
      case 'shopify': return 'Shopify Project';
      case 'frontend': return 'Frontend & Web';
      default: return 'Showcase Project';
    }
  };

  const generatedObject = {
    id: `proj-${Date.now().toString().slice(-4)}`,
    title: formData.title || 'Project Title',
    category: formData.category,
    categoryLabel: getCategoryLabel(formData.category),
    featured: false,
    tagline: formData.tagline || 'Concise project summary detailing value proposition.',
    client: formData.client || 'Client Name / Sector',
    year: formData.year || '2024',
    role: formData.role || 'Senior Designer & Developer',
    metrics: formData.metrics || '',
    tags: formData.tags ? formData.tags.split(',').map((t) => t.trim()).filter(Boolean) : ['UI/UX', 'Web'],
    overview: formData.overview || 'Overview of project scope and execution.',
    problem: formData.problem || 'Core challenges faced prior to implementation.',
    solution: formData.solution || 'Strategic design and technical solutions deployed.',
    deliverables: ['Production deliverables and assets'],
    liveUrl: formData.liveUrl || null,
    figmaUrl: formData.figmaUrl || null,
    githubUrl: formData.githubUrl || null
  };

  const jsonSnippet = JSON.stringify(generatedObject, null, 2);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(jsonSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return;
    onAddProject(generatedObject);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '820px' }}
      >
        <div className="modal-header">
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Upload & Add Showcase Item</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Add a new showcase item to test live in the interface or copy its JSON directly to portfolioData.js
            </p>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Project Title *</label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="e.g. NovaPay Checkout Redesign"
                  value={formData.title}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="form-input"
                  style={{ cursor: 'pointer' }}
                >
                  <option value="figma">Figma Design</option>
                  <option value="react">React Project</option>
                  <option value="shopify">Shopify Project</option>
                  <option value="frontend">Frontend & Web</option>
                </select>
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label className="form-label">One-Line Tagline *</label>
              <input
                type="text"
                name="tagline"
                placeholder="Brief summary of what this project accomplished..."
                value={formData.tagline}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Client / Industry</label>
                <input
                  type="text"
                  name="client"
                  placeholder="e.g. E-Commerce SaaS"
                  value={formData.client}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Role</label>
                <input
                  type="text"
                  name="role"
                  placeholder="e.g. Senior UI/UX Designer"
                  value={formData.role}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Key Metric / Result</label>
                <input
                  type="text"
                  name="metrics"
                  placeholder="e.g. +22% Checkout Conversion"
                  value={formData.metrics}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label className="form-label">Tech Stack Tags (comma separated)</label>
              <input
                type="text"
                name="tags"
                placeholder="Figma, Shopify Liquid, Replo, Tailwind CSS"
                value={formData.tags}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="form-group">
                <label className="form-label">Live Website URL</label>
                <input
                  type="url"
                  name="liveUrl"
                  placeholder="https://..."
                  value={formData.liveUrl}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Figma Link (if applicable)</label>
                <input
                  type="url"
                  name="figmaUrl"
                  placeholder="https://figma.com/..."
                  value={formData.figmaUrl}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">GitHub Link (if code)</label>
                <input
                  type="url"
                  name="githubUrl"
                  placeholder="https://github.com/..."
                  value={formData.githubUrl}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              <button
                type="button"
                onClick={handleCopyCode}
                className="btn btn-secondary btn-sm"
              >
                {copied ? <Check size={15} style={{ color: '#34d399' }} /> : <Copy size={15} />}
                <span>{copied ? 'Copied Data JSON!' : 'Copy Code for portfolioData.js'}</span>
              </button>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button type="button" onClick={onClose} className="btn btn-ghost btn-sm">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary btn-sm">
                  <Plus size={15} />
                  <span>Add To Live Showcase</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
