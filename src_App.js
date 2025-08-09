import React from "react";
import Gallery from "./Gallery";

export default function App() {
  return (
    <div className="portfolio-app">
      <header>
        <h1>Lesama96</h1>
        <p className="subtitle">Web Developer • Designer • Creator</p>
      </header>
      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi! I'm Lesama96. I create elegant, modern web experiences with a focus on usability and style.
          Below you can find some of my featured projects.
        </p>
      </section>
      <section className="gallery-section">
        <h2>Gallery</h2>
        <Gallery />
      </section>
      <footer>
        <p>
          © {new Date().getFullYear()} Lesama96 &mdash; 
          <a href="mailto:youremail@example.com"> Contact Me</a>
        </p>
      </footer>
    </div>
  );
}