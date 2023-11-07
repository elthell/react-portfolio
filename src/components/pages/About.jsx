import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faFan } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section
      id="about"
      className="d-flex justify-content-center align-items-center m-3"
    >
      <div className="section-text p-3 shadow">
        <p className="section-title fs-3 fw-bold text-center">
          <div className="flower d-inline">
            <FontAwesomeIcon icon={faFan} />
          </div>
          About
        </p>
        <div className="row">
          <div className="dk-leaf col-2 text-center">
            <FontAwesomeIcon icon={faLeaf} size="5x" flip="horizontal" />
          </div>
          <p className="col-8 fs-6">
            Hi, I'm Eleanor!
            <br />
            Data-driven, life-long learner looking to bring a History B.A.'s
            love of documentation and presenting information to a career shift
            into tech.
            <br />• skilled in customer service and data entry with growing
            skills in full stack web development.
          </p>
          <div className="dk-leaf col-2 text-center">
            <FontAwesomeIcon icon={faLeaf} size="5x" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
