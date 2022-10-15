import React from 'react'
import './Menu.css'
export default function Menu({toggleMenu,open}) {
  return (
    <div className={`menu-container ${open}`}>
    <div className="overlay" />
    <div className="menu-items">
      <ul>
        <li>
          <a href="#welcome-section" onClick={toggleMenu}>
            HOME
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggleMenu}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="#projects" onClick={toggleMenu}>
            PORTFOLIO
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>
            CONTACT
          </a>
        </li>
      </ul>
      {/* <SocialLinks /> */}
    </div>
  </div>
  )
}
