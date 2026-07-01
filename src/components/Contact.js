import React from 'react';
import './Contact.css';
import resume from './Resume.pdf';

const socials = [
  { label: 'GitHub', href: 'https://github.com/Sfor-za', icon: 'fa-brands fa-github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-antony-thomas/', icon: 'fa-brands fa-linkedin' },
  { label: 'Resume', href: resume, icon: 'fa-solid fa-file-pdf' },
  { label: 'Gmail', href: 'mailto:adityaantonythomas@gmail.com', icon: 'fa-solid fa-envelope' },
  { label: 'Instagram', href: 'https://www.instagram.com/adii__aditya/', icon: 'fa-brands fa-instagram' },
];

export default function Contact() {
  return (
    <section className="section" id="Contact">
      <div className="section-inner contact-inner">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-tagline">
          Open to AI/Data engineering roles and interesting collaborations.
        </p>
        <div className="socials-grid">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="social-card"
            >
              <i className={s.icon}></i>
              <span>{s.label}</span>
            </a>
          ))}
        </div>
        <p className="contact-email">adityaantonythomas@gmail.com</p>
      </div>
    </section>
  );
}
