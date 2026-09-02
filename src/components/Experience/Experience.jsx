import React from "react";
import "./Experience.css";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import { experience, education } from "../../data/resume";

export const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <h2 className="section__title" style={{ textAlign: "center" }}>
        Where I have <span className="different">Worked</span>
      </h2>
      <p className="section__lead">
        Nearly three years shipping production frontends — AI-powered real
        estate, healthcare, and corporate social responsibility.
      </p>

      <ol className="timeline">
        {experience.map((job) => (
          <li className="timeline__item" key={job.company}>
            <div className="timeline__marker" aria-hidden="true" />
            <article className="timeline__card">
              <header className="timeline__head">
                <div>
                  <h3 className="timeline__role">{job.title}</h3>
                  <p className="timeline__company">
                    {job.company}
                    {job.link && (
                      <>
                        {" · "}
                        <a href={job.link} target="_blank" rel="noreferrer">
                          {job.linkLabel}
                          <BoxArrowUpRight size={11} />
                        </a>
                      </>
                    )}
                  </p>
                </div>
                <div className="timeline__meta">
                  <span className="timeline__period">{job.period}</span>
                  <span className="timeline__location">{job.location}</span>
                </div>
              </header>

              <p className="timeline__blurb">{job.blurb}</p>

              <ul className="timeline__highlights">
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="tag-row">
                {job.stack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>

      <div className="education">
        <h3 className="education__title">Education</h3>
        <div className="education__grid">
          {education.map((item) => (
            <div className="education__card" key={item.course}>
              <h4>{item.course}</h4>
              <p>{item.school}</p>
              <span>{item.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
