import React from "react";
import "./Introduction.css";
import { profile } from "../../data/resume";

export const Introduction = () => {
  return (
    <section id="about" className="section about-section">
      <h2 className="section__title" style={{ textAlign: "center" }}>
        About <span className="different">Me</span>
      </h2>

      <div className="introduction">
        <div className="introduction_logocontainer">
          <img src={profile.photo} alt="Naina Premani" />
        </div>
        <div className="introduction_datacontainer">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <dl className="about-facts">
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Next.js · Node.js · SEO</dd>
            </div>
            <div>
              <dt>Currently</dt>
              <dd>Software Engineer at Altrr</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};
