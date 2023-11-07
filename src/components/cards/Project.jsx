import "./Project.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faWindowRestore } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project }) => {
  return (
    <div className="card text-center shadow">
      <div className="card-header">
        {project.stack}
      </div>
      <img src={project.img} className="card-img-top" alt={project.imgAlt} />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text pb-2">{project.description}</p>
        <a href={project.codeLink} className="card-link p-3">
          <FontAwesomeIcon icon={faCode} /> Code
        </a>
        <a href={project.liveLink} className="card-link p-3">
          <FontAwesomeIcon icon={faWindowRestore} /> Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
