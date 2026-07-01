import React from 'react';
import './Publication.css';

export default function Publication() {
  return (
    <section className="section" id="Publication">
      <div className="section-inner">
        <h2 className="section-title">Publication</h2>
        <div className="publication-card">
          <div className="pub-badge">Peer-reviewed · Cited 7 times · In press</div>
          <h3 className="pub-title">
            Enhancing agricultural sustainability: Time series forecasting with ICEEMDAN-VMD-GRU for economic-resilience
          </h3>
          <p className="pub-journal">Results in Engineering</p>
          <p className="pub-authors">
            Aastha M. Sathe, Supraja R, <strong>Aditya Antony Thomas</strong>
          </p>
          <a
            href="https://doi.org/10.1016/j.rineng.2025.106423"
            target="_blank"
            rel="noopener noreferrer"
            className="pub-link"
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            View Publication
          </a>
        </div>
      </div>
    </section>
  );
}
