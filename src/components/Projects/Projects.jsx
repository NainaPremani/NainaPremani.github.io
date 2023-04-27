import React from "react";
import "./Projects.css";
import grocery_store from "../../assets/img/GroceryStore.png";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiMaterialui,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";

export const Projects = () => {
  return (
    <>
      <div className="section" id="project">
        <h2
          className="section__title different"
          style={{ textAlign: "center" }}
        >
          Projects
        </h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={grocery_store} alt="Grocery Store" />
                </div>
              </div>
              <div className="project_information">
                <h2>Grocery Store</h2>
                <p>
                  A web application to buy groceries online. The name of the
                  project is Grocery Store.
                </p>
                <div>
                  {/* <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiMaterialui /> */}
                </div>
                <div>
                  <a
                    href="https://taupe-youtiao-44feae.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/NainaPremani/abounding-iron-5249"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
