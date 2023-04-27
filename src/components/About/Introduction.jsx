import React from "react";
import "./Introduction.css";

import profilePic from "../../assets/img/header-img.png";

export const Introduction = () => {
  return (
    <>
      <section id="about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title" style={{ textAlign: "center" }}>
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction "}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Naina Premani </span> and I am from{" "}
                <span className="different"> Shirdi, Maharashtra (India)</span>.
                I have completed my graduation in Bachelor of Computer Science
                from{" "}
                <span className="different">Fergusson College, Pune (MH)</span>.
                Then I joined full stack development course by{" "}
                <span className="different">Masai School</span> a military type
                coding school.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
