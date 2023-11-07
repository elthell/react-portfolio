import ProjectCard from "../cards/Project";
import { projects } from "../../assets/portfolioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan } from "@fortawesome/free-solid-svg-icons";

const ProjectList = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="mx-auto">
      <p className="section-title fs-3 fw-bold text-center py-2 my-2">
        <div className="flower d-inline">
          <FontAwesomeIcon icon={faFan} />
        </div>
        Projects
      </p>
      <div className="card-row row">
        {projects.map((project) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
