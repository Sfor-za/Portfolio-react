import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'AI Engineer',
    company: 'tsworks',
    location: 'Bangalore',
    period: 'Dec 2025 – Ongoing',
    current: true,
    bullets: [
      'Engineered an end-to-end data pipeline ingesting Shopify inventory and transactional data from AWS S3 into Snowflake, independently delivering 62 of 90 tables and stored procedures.',
      'Designed SQL transformations and aggregation stored procedures to compute retail KPIs including sales summary, stockout loss, and deadstock for a downstream BI dashboard.',
      'Rebuilt SCD Type 2 implementation from scratch, resolving critical data integrity issues and ensuring accurate historical tracking of inventory and transactional records.',
      'Collaborated on architecture of an internal agentic AI system, gaining exposure to LLM-based workflow design and multi-step agent development.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Ideas to Impact Foundation',
    location: 'Delhi',
    period: 'Aug 2025 – Dec 2025',
    bullets: [
      'Validated 10,000+ MSME records by cross-matching reported data against confirmed client records, identifying widespread data falsification.',
      'Detected fraudulent submissions by identifying temp email domain patterns across vendor data, leading to disciplinary action against a third-party agency.',
      'Wrote Python scripts to automate data splitting for Airtable uploads and to fuzzy-match incorrectly recorded emails against confirmed client emails.',
      'Reconciled discrepancies between Looker-reported metrics and internal reporting figures using Excel and Python, uncovering data handling issues in existing pipelines.',
    ],
  },
  {
    role: 'Quant Researcher Intern',
    company: 'FounderGraphy',
    location: 'Remote',
    period: 'Jan 2025 – Apr 2025',
    bullets: [
      'Scraped and classified ~6,000 news articles across 50 companies using ChatGPT API, enriching trading signal datasets for downstream analysis.',
      'Built a backtesting algorithm to optimize trading signals, evaluating strategy effectiveness using win rate and total return metrics.',
      'Automated daily Upstox API login using Selenium and designed an algorithm to retrieve option chain data, eliminating manual intervention.',
      'Implemented RSI, Moving Averages, MACD and optimized strategies using heatmaps and performance metrics.',
    ],
  },
  {
    role: 'Data Preprocessor Intern',
    company: 'KonectU',
    location: 'Remote',
    period: 'Jun 2024 – Aug 2024',
    bullets: [
      'Built a Python preprocessing pipeline that cleaned and structured 20,000+ lines of raw text into training-ready format in under 3 minutes, enabling faster model iteration.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="Experience">
      <div className="section-inner">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-marker">
                <div className={`timeline-dot ${exp.current ? 'current' : ''}`}></div>
                {i < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company} · {exp.location}</p>
                  </div>
                  <span className={`exp-period ${exp.current ? 'current-badge' : ''}`}>
                    {exp.period}
                  </span>
                </div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
