import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
// import { ThemeContext } from "../../Context/theme";
import { FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  //   const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section" id="connect">
        <h2
          className="section__title"
          data-aos="fade-right"
          style={{ textAlign: "center" }}
        >
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactMain">
          <div className={"contactcontainer "} data-aos="fade-right">
            <a
              href="https://www.linkedin.com/in/naina-premani-974ba715b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/NainaPremani"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="mailto:nainapremani9@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a href="tel:+918055407366" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
          </div>
          <br />
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>nainapremani9@gmail.com</p>
              </span>
            </div>

            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>

              <span>
                <p>+91 8055407366</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
