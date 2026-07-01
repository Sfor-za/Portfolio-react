import React from 'react';
import './Cardgrid.css';

const projects = [
  {
    title: 'ListifyAI',
    subtitle: 'Etsy Listing Optimizer · Full-stack AI SaaS',
    description: 'Built and deployed a full-stack AI SaaS tool generating SEO-optimized Etsy listings using Groq API (Llama 3.3 70b), with ReactJS + Vite frontend, FastAPI backend, Supabase PostgreSQL, and Google OAuth authentication.',
    tags: ['ReactJS', 'FastAPI', 'Groq API', 'Supabase', 'Python', 'Vercel'],
    github: 'https://github.com/Sfor-za',
    live: 'https://listify-ai-brown.vercel.app/',
    color: '#c1521f',
  },
  {
    title: 'Time Series Forecasting',
    subtitle: 'CEEMDAN-VMD-LSTM · 8% MAPE',
    description: 'Built a hybrid deep learning model combining CEEMDAN and VMD signal decompositions with an LSTM backbone to forecast vegetable prices from UK Government data. Achieved 8% MAPE.',
    tags: ['Python', 'TensorFlow', 'LSTM', 'Signal Processing', 'NumPy'],
    github: 'https://github.com/Sfor-za',
    live: null,
    color: '#b8860b',
  },
  {
    title: 'Timetable & Assignment Manager',
    subtitle: 'Full-stack Web App · Role-based Access',
    description: 'Full-stack web application with role-based access for teachers and students, supporting class enrolment, PDF assignment distribution, submission management, and grade tracking.',
    tags: ['Full-stack', 'Role-based Auth', 'PDF Management'],
    github: 'https://github.com/Sfor-za',
    live: null,
    color: '#5f7a5f',
  },
];

export default function Cardgrid() {
  return (
    <section className="section" id="Projects">
      <div className="section-inner">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>
              <div
                className="project-card-header"
                style={{
                  background: `linear-gradient(135deg, ${project.color}18, transparent)`,
                  borderBottom: `1px solid ${project.color}25`,
                }}
              >
                <div className="project-dot" style={{ background: project.color, boxShadow: `0 0 10px ${project.color}80` }}></div>
              </div>
              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fa-brands fa-github"></i> GitHub
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link accent">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
