import React from "react";
import "./About.css";
import { Type } from "./Type";

import { Introduction } from "./Introduction";

export const About = () => {
  return (
    <>
      <div className="about center" id="about">
        {/* <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Naina Premani</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Full Stack Developer having proficiency in
          MERN Stack. Attired with a variety of tools & technologies and keen to
          learn new one.
        </p>

        <br />

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1O7O6dgBNriadNFoYRj8kHr6-dyPyoG4n/view?usp=sharing"
            );
          }}
        >
          Resume
        </button> */}
        <Introduction />
      </div>
    </>
  );
};
