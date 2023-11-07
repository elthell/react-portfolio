import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="d-flex justify-content-center align-items-center mt-4">
        <p className="fs-3 fw-bold me-2">Look me up:</p>
        <a
          href="https://www.linkedin.com/in/eleanor-thell-b86bb6217/"
          className="mx-3 link"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a href="https://github.com/elthell" className="mx-3 link">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a href="https://codepen.io/elthell" className="mx-3 link">
          <FontAwesomeIcon icon={faCodepen} size="3x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
