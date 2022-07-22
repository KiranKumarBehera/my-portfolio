import React from "react";
import "./portfolio.css";
import data from "../../data/projects.json";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((p) => {
          return (
            <article key={p.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={p.image} alt={p.title} />
              </div>
              <h3>{p.title}</h3>
              <div className="portfolio__item-cta">
                <a href={p.github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={p.demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
