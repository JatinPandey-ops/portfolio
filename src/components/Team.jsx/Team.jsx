import React from 'react'
import Socials from "../Socials/Socials"
import "./Team.css"

export default function Team() {
  return (
		<div class="container">
			<div class="card">
				<div class="content">
					<div class="imgBx">
						<img src="https://image.flaticon.com/icons/png/256/4213/4213732.png"/>
					</div>
					<div class="contentBx">
						<h3>Jatin<br/><span>Full stack dev</span></h3>
					</div>
				</div>
                <div class="sci">
                    <div><Socials type="dev" Tlink="https://twitter.com/ghoul_7788" gLink="https://github.com/JatinPandey-ops"/></div>
				</div>
			</div>
			<div class="card">
				<div class="content">
					<div class="imgBx">
						<img src="https://image.flaticon.com/icons/png/256/4213/4213736.png"/>
					</div>
					<div class="contentBx">
						<h3>Jizelle<br/><span>Front-end designer</span></h3>
					</div>
				</div>
                <div class="sci">
                    <div><Socials type="dev" Tlink="https://twitter.com/ghoul_7788" gLink="https://github.com/JatinPandey-ops"/></div>
				</div>
			</div>
		</div>
  )
}
