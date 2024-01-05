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
            <p>Fullstack developer with a background in logistics and history - bringing a deep understanding of the research process and presenting data to coding.</p>
            <p>Earned a certificate in Fullstack Web Development from edX in partnership with the University of Minnesota. 
              Skilled in front end development but growing in server-side knowledge and seeking a position that will utilize and develop this experience</p>
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
