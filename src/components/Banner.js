import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

import { profile } from "../data/resume";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = profile.roles;
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(100);
      }
    };

    let ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum, toRotate]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">{profile.location}</span>
                  <h1>
                    Hi, I am <span className="different">Naina</span>
                  </h1>
                  <p className="banner__rotate">
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </p>
                  <p className="banner__summary">{profile.summary}</p>

                  <div className="banner__actions">
                    <a href="#experience" className="banner__cta">
                      <span>See my work</span>
                      <ArrowRightCircle size={22} />
                    </a>
                    <a
                      href={profile.resume}
                      target="_blank"
                      rel="noreferrer"
                      className="banner__cta banner__cta--ghost"
                    >
                      <span>Resume</span>
                    </a>
                  </div>

                  <ul className="banner__stats">
                    {profile.stats.map((stat) => (
                      <li key={stat.label}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={5} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`banner__portrait ${
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }`}
                >
                  <img src={profile.photo} alt="Naina Premani" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
