import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className="nav-bar">
    <ul className="nav-list">
      <li className="nav-items" ><a href="#About-section" className="nav-link navbar-brand" >About</a></li>
      <li className="nav-items" ><a href="#Projects-section" className="nav-link navbar-brand" >Projects</a></li>
      <li className="nav-items" ><a href="#Contact-section" className="nav-link navbar-brand">Connect</a></li>
    </ul>
  </div>
  )
}
