import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = [
  { label: 'About', href: '#About' },
  { label: 'Skills', href: '#Skills' },
  { label: 'Experience', href: '#Experience' },
  { label: 'Projects', href: '#Projects' },
  { label: 'Publication', href: '#Publication' },
  { label: 'Education', href: '#Education' },
  { label: 'Contact', href: '#Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#About" className="navbar-logo">AT</a>
        <ul className="navbar-links">
          {navItems.map(item => (
            <li key={item.label}>
              <a href={item.href} className="navbar-link">{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
