import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className="nav-bar" id="navigation">
    <ul className="nav-list">
      <li className="nav-items" ><a href="#About" className="nav-link navbar-brand" >About</a></li>
      <li className="nav-items" ><a href="#Projects" className="nav-link navbar-brand" >Projects</a></li>
      <li className="nav-items" ><a href="#Contact" className="nav-link navbar-brand">Connect</a></li>
    </ul>
  </div>
  )
}
