import React from 'react';
import './Skills.css';

const skills = {
  'Languages': ['Python', 'SQL'],
  'Frameworks & Libraries': ['TensorFlow', 'Scikit-Learn', 'Pandas', 'NumPy', 'FastAPI', 'ReactJS', 'Matplotlib', 'Seaborn', 'VectorBT'],
  'Tools & Platforms': ['Snowflake', 'AWS S3', 'Tableau', 'Selenium', 'Supabase'],
};

export default function Skills() {
  return (
    <section className="section" id="Skills">
      <div className="section-inner">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skills-card" key={category}>
              <h3 className="skills-category">{category}</h3>
              <div className="skills-tags">
                {items.map(skill => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
