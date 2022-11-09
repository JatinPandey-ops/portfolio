import React from 'react'
import "./Nav.css"

export default function Nav({toggleMenu,open}) {
  return (
    <div>
         <nav id="navbar">
        <div className="nav-wrapper">
          <div className="brand">
            <div>
            <span className="highlight"><strong>S</strong></span>hiv 
            <span  className="highlight"><strong>S</strong></span>hakti

            <span id="websolution">websolutions</span>
            </div>
            
          </div>
          <a
            onClick={toggleMenu}
            className={open === 'active' ? 'menu-button active' : 'menu-button'}
          >
            <span />
          </a>
        </div>
      </nav>
    </div>
  )
}
