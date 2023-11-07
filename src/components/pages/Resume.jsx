import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan, faFile } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  return (
    <section
      id="resume"
      className="d-flex justify-content-center align-items-center m-3"
    >
      <div className="section-text p-4 shadow">
        <p className="section-title fs-3 fw-bold text-center">
          <div className="flower d-inline">
            <FontAwesomeIcon icon={faFan} />
          </div>
          Skills
        </p>
        <div className="skill-list container text-center p-3">
          <div className="row row-cols-4">
            <p className="skill border rounded-2 mx-4">HTML</p>
            <p className="skill border rounded-2 mx-4">CSS</p>
            <p className="skill border rounded-2 mx-4">Bootstrap</p>
            <p className="skill border rounded-2 mx-4">JavaScript</p>
            <p className="skill border rounded-2 mx-4">jQuery</p>
            <p className="skill border rounded-2 mx-4">Node.js</p>
            <p className="skill border rounded-2 mx-4">Handlebars.js</p>
            <p className="skill border rounded-2 mx-4">SQL</p>
            <p className="skill border rounded-2 mx-4">MySQL</p>
            <p className="skill border rounded-2 mx-4">MVC</p>
            <p className="skill border rounded-2 mx-4">MongoDB</p>
            <p className="skill border rounded-2 mx-4">PWAs</p>
            <p className="skill border rounded-2 mx-4">React.js</p>
            <p className="skill border rounded-2 mx-4">Git</p>
            <p className="skill border rounded-2 mx-4">Heroku</p>
          </div>
        </div>
        <p className="fs-5 mb-4 fst-italic text-center mt-3">
          Click below to see my full resume!
        </p>
        <div className="d-grid col-4 mx-auto">
          <a href="/Eleanor Resume.pdf" className="card-link p-3 mx-auto" download="eleanor-thell-resume.pdf">
            <FontAwesomeIcon icon={faFile} /> Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
