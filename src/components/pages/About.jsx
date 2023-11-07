import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faFan } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section
      id="about"
      className="m-3"
    >
      <div className="section-text p-3 shadow">
        <p className="section-title fs-3 fw-bold text-center">
          <div className="flower d-inline">
            <FontAwesomeIcon icon={faFan} />
          </div>
          About
        </p>
        <div className="d-flex flex-row justify-content-center align-items-center mb-4">
          <div className="dk-leaf mx-5">
            <FontAwesomeIcon icon={faLeaf} size="5x" flip="horizontal" />
          </div>
          <img src="/20230923_142259.jpg" className="about-img mx-3"></img>
          <div className="mx-3 fs-6">
            <p>Hi, I'm Eleanor!</p>
            <p>Data-driven, life-long learner looking to bring a History B.A.'s
            love of documentation and presenting information to a career shift
            into tech.</p>
            <p> • Skilled in customer service and data entry with growing
            skills in full stack web development.</p>
          </div>
          <div className="mx-5 dk-leaf">
            <FontAwesomeIcon icon={faLeaf} size="5x" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
