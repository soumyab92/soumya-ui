import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Experience from './components/Experience';
import SkillsMatrix from './components/SkillsMatrix';
import AwardsEducation from './components/AwardsEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import { initialProjects } from './data/portfolioData';

export default function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    setProjects(initialProjects);
  }, []);

  const handleAddProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
    showToast(`Added "${newProject.title}" to ${newProject.categoryLabel}`);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="portfolio-app">
      <div className="bg-grid-overlay" />

      {/* Floating Header */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <Showcase
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        <Experience />

        <SkillsMatrix />

        <AwardsEducation />

        <Contact />
      </main>

      <Footer />

      {/* Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Notification Toast */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: 'rgba(19, 26, 41, 0.95)',
          border: '1px solid var(--accent-cyan)',
          borderRadius: 'var(--radius-md)',
          padding: '0.85rem 1.4rem',
          color: 'var(--text-primary)',
          fontSize: '0.88rem',
          fontWeight: 600,
          boxShadow: 'var(--shadow-card)',
          zIndex: 300,
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          animation: 'fadeIn 0.2s ease'
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
