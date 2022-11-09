import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <header id="welcome-section">
    <div className="forest" />
    <div className="silhouette" />
    <div className="moon" />
    <div className="container">
      <h1>
        <span className="line">Web</span>
        <span className="line">Development</span>
        <span className="line">
          <span className="color">A</span>gency
        </span>
      </h1>
      <div className="buttons">
        <a href="#projects">Our Works</a>
        <a href="#contact" className="cta">
          get in touch
        </a>
      </div>
    </div>
  </header>
  )
}
