import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="hero" id="About">
      <span className="hero-mark" aria-hidden="true">Aa</span>
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">
          <span className="hero-name-first">Aditya</span>
          <span className="hero-name-last">Antony Thomas</span>
        </h1>
        <p className="hero-role">AI / Data Engineer</p>
        <p className="hero-bio">
          AI and Data Engineer with a Master's in Data Science, a peer-reviewed publication cited 7 times,
          and hands-on experience building production Snowflake pipelines, ML models, and full-stack AI tools.
          Physics grad from Loyola College, Chennai — and an average table tennis enjoyer.
        </p>
        <div className="hero-cta">
          <a href="#Experience" className="btn-primary">View Experience</a>
          <a href="#Projects" className="btn-secondary">See Projects</a>
        </div>
      </div>
    </section>
  );
}
