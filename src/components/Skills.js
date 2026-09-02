import { skills } from "../data/resume";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="section">
        <h2 className="section__title" style={{ textAlign: "center" }}>
          Skills & <span className="different">Tooling</span>
        </h2>
        <p className="section__lead">
          The stack I reach for day to day — component architecture, typed
          React, and the build tooling that holds a monorepo together.
        </p>

        <div className="skill-grid">
          {skills.map((group) => (
            <div className="skill-card" key={group.group}>
              <h3 className="skill-card__title">{group.group}</h3>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
