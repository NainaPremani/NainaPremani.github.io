import { Container } from "react-bootstrap";
import { profile } from "../data/resume";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <p className="footer__name">{profile.name}</p>
          <p className="footer__note">
            Built with React. Designed and coded in {profile.location}.
          </p>
          <p className="footer__copy">
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};
