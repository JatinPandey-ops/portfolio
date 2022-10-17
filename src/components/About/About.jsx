import React from "react";
import Team from "../Team.jsx/Team";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>About us</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">We solve your challenges.</h4>
            <p>
            We see the essence and find bright solutions for each project
            </p>
            <p>
               We
              are proud of our work and guarantee unrivaled standards in
              everything we do. Take a look at our portfolio to see the latest
              projects that we have worked on.
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Best Team ✌</h4>
            <p>
              Our team provides personal, professional and friendly service
              which carefully considers your business goals and requirements. We
              transform innovative visions into brilliant realities. Got one?
              Let’s make outstanding work together!
            </p>
            <p>
              We create highly-usable websites that are powered by an array of
              technologies and then we analyze performance data to optimize and
              refine.
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">We love our services ❤</h4>
            <p>
              Our approach to the work process, from sketch to development, is
              focused on creating an unforgettable user impression. It’s true
              magic when the concept comes to life in a pixel-perfect design and
              fully functional website.
            </p>
            <p>
            Take a look at our portfolio to see just
              a few recent projects that we have worked on.
            </p>
          </div>
        </article>
        <Team/>
      </div>
    </section>
  );
}
