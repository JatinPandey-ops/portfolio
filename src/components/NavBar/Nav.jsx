import React from 'react'
import "./Nav.css"

export default function Nav({toggleMenu,open}) {
  return (
    <div>
         <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            Ja
            <strong>tin</strong>
          </p>
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
