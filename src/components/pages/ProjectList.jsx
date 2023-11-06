import ProjectCard from "../cards/Project";
import { projects } from "../../assets/portfolioData";

const ProjectList = () => {
  const renderedList = projects.map(({ id, ...project }) => {
    return <ProjectCard key={id} project={project} />;
  });

  return (
    <section id="projects" className="mx-auto">
      <p className="section-title fs-3 fw-bold text-center py-2 my-2">
        <i className="flower fa-solid fa-fan"></i>
        Projects
      </p>
      <div className="card-row row">{renderedList}</div>
    </section>
  );
};

export default ProjectList;
