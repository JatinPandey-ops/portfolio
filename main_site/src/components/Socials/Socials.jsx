import React from 'react'
import "./Socials.css"

export default function Socials({type,Tlink,Glink}) {
  
 return (
    <div className="social">
    <a
      href={type === "dev"? Tlink : "https://twitter.com/websolutionns"}
      target="_blank"
      rel="noopener noreferrer"
      title="Link to author's Twitter profile"
    >
      {' '}
      <i className="fab fa-twitter" />
    </a>
    <a
      id="profile-link"
      href={type === "dev"? Glink : ""}
      target="_blank"
      rel="noopener noreferrer"
      title="Link to author's GitHub Profile"
    >
      {' '}
      <i className="fab fa-github" />
    </a>
  </div>
  )
}
