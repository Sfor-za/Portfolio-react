import React from 'react';
import './Education.css';

const education = [
  {
    degree: 'Masters in Data Science',
    institution: 'Vellore Institute of Technology, AP',
    period: 'Apr 2025',
    gpa: 'CGPA: 8.45',
    coursework: 'Machine Learning, Deep Learning, Statistics, Data Visualization, DBMS',
  },
  {
    degree: 'Bachelors in Physics',
    institution: 'Loyola College, Chennai',
    period: '2019 – 2022',
    gpa: 'CGPA: 8.44',
  },
];

const certificates = [
  { name: 'Azure AI Fundamentals', org: 'Microsoft', date: 'Mar 2026' },
  { name: 'Foundations of AI and Machine Learning', org: 'Microsoft · Coursera', date: 'Jul 2025' },
];

const achievements = [
  {
    name: 'Special Team Award',
    org: 'tsworks · May 2026',
    desc: 'Received for successfully creating and deploying an internal application to Shopify Marketplace.',
  },
  {
    name: 'Best Paper Presentation — Finance Category',
    org: 'Asian Business School International Conference · Nov 2024',
    desc: 'Presented on the impact of sentiment analysis on stock price prediction.',
  },
];

export default function Education() {
  return (
    <section className="section" id="Education">
      <div className="section-inner">
        <h2 className="section-title">Education</h2>
        <div className="edu-grid">
          {education.map((edu, i) => (
            <div className="edu-card" key={i}>
              <div className="edu-period">{edu.period}</div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-gpa">{edu.gpa}</p>
              {edu.coursework && (
                <p className="edu-coursework">
                  <span>Coursework: </span>{edu.coursework}
                </p>
              )}
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Certificates</h3>
        <div className="certs-list">
          {certificates.map((cert, i) => (
            <div className="cert-card" key={i}>
              <i className="fa-solid fa-certificate cert-icon"></i>
              <div>
                <p className="cert-name">{cert.name}</p>
                <p className="cert-org">{cert.org} · {cert.date}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Achievements</h3>
        <div className="achievements-list">
          {achievements.map((ach, i) => (
            <div className="achievement-card" key={i}>
              <i className="fa-solid fa-trophy achievement-icon"></i>
              <div>
                <p className="achievement-name">{ach.name}</p>
                <p className="achievement-org">{ach.org}</p>
                <p className="achievement-desc">{ach.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
