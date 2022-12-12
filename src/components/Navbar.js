import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="container">
    <ul className="nav-list">
      <li className="nav-items"><a href="/" className="nav-link navbar-brand">About</a></li>
      <li className="nav-items nav-items-active"><a href="/" className="nav-link navbar-brand active-link">Projects</a></li>
      <li className="nav-items"><a href="/" className="nav-link navbar-brand">Connect</a></li>
    </ul>
  </div>
  )
}
