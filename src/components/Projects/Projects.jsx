import React from "react";
import "./Projects.css";
import { BoxArrowUpRight, Github } from "react-bootstrap-icons";
import { projects } from "../../data/resume";

export const Projects = () => {
  return (
    <section className="section projects" id="project">
      <h2 className="section__title" style={{ textAlign: "center" }}>
        Side <span className="different">Projects</span>
      </h2>
      <p className="section__lead">
        Full stack builds with live demos and public code. Work from company
        products is covered under Professional Experience.
      </p>

      <div className="repo-grid">
        {projects.map((item) => (
          <article className="repo-card" key={item.title}>
            <h4 className="repo-card__title">{item.title}</h4>
            {item.note && <span className="repo-card__note">{item.note}</span>}
            <p className="repo-card__desc">{item.description}</p>
            <div className="tag-row">
              {item.stack.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="repo-card__links">
              {item.live && (
                <a href={item.live} target="_blank" rel="noreferrer">
                  <BoxArrowUpRight size={14} />
                  Live demo
                </a>
              )}
              {item.code && (
                <a href={item.code} target="_blank" rel="noreferrer">
                  <Github size={14} />
                  View code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
