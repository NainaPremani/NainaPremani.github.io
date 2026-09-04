import React from "react";
import "./Projects.css";
import { BoxArrowUpRight, Github } from "react-bootstrap-icons";
import { work, projects } from "../../data/resume";

export const Projects = () => {
  return (
    <section className="section projects" id="project">
      <h2 className="section__title" style={{ textAlign: "center" }}>
        Selected <span className="different">Work</span>
      </h2>
      <p className="section__lead">
        Features I owned end to end on production platforms. The code lives in
        private company repositories, so these are written up as case studies.
      </p>

      <div className="work-grid">
        {work.map((item) => (
          <article className="work-card" key={item.title}>
            <span className="work-card__context">{item.context}</span>
            <h3 className="work-card__title">
              {item.live ? (
                <a href={item.live} target="_blank" rel="noreferrer">
                  {item.title}
                  <BoxArrowUpRight size={13} />
                </a>
              ) : (
                item.title
              )}
            </h3>
            <p className="work-card__desc">{item.description}</p>
            <div className="tag-row">
              {item.stack.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <h3 className="projects__subtitle">
        Open Source & <span className="different">Side Projects</span>
      </h3>

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
