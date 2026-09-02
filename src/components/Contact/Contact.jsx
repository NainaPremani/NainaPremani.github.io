import React from "react";
import "./Contact.css";
import {
  Github,
  Linkedin,
  EnvelopeFill,
  TelephoneFill,
  GeoAltFill,
} from "react-bootstrap-icons";
import { profile } from "../../data/resume";

export const Contact = () => {
  return (
    <section className="section contact" id="connect">
      <h2 className="section__title" style={{ textAlign: "center" }}>
        Get in <span className="different">Touch</span>
      </h2>
      <p className="section__lead">
        I am open to frontend engineering roles and interesting product work.
        The fastest way to reach me is email.
      </p>

      <div className="contact__actions">
        <a className="contact__primary" href={`mailto:${profile.email}`}>
          <EnvelopeFill size={16} />
          {profile.email}
        </a>
      </div>

      <div className="contact__grid">
        <a
          className="contact__card"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={20} />
          <span className="contact__label">LinkedIn</span>
          <span className="contact__value">naina-premani</span>
        </a>

        <a
          className="contact__card"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          <Github size={20} />
          <span className="contact__label">GitHub</span>
          <span className="contact__value">NainaPremani</span>
        </a>

        <a className="contact__card" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
          <TelephoneFill size={18} />
          <span className="contact__label">Phone</span>
          <span className="contact__value">{profile.phone}</span>
        </a>

        <div className="contact__card contact__card--static">
          <GeoAltFill size={19} />
          <span className="contact__label">Location</span>
          <span className="contact__value">{profile.location}</span>
        </div>
      </div>
    </section>
  );
};
