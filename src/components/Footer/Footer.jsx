import React from 'react'
import Socials from '../Socials/Socials'
import "./Footer.css"

export default function Footer() {
  return (
    <footer>
    <div className="wrapper">
      <h3>THANKS FOR VISITING</h3>
      <p>© {new Date().getFullYear()} ShivShaktiWebSolutions</p>
      <Socials />
    </div>
  </footer>
  )
}
