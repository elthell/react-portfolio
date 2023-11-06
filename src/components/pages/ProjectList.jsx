import ProjectCard from "../cards/Project";
import { projects } from "../../assets/portfolioData";

const ProjectList = () => {
  const renderedList = projects.map(({ id, ...project }) => {
    return <ProjectCard key={id} project={project} />;
  });

  return (
    <section id="projects" class="mx-auto">
      <p class="section-title fs-3 fw-bold text-center py-2 my-2">
        <i class="flower fa-solid fa-fan"></i>
        Projects
      </p>
      <div class="card-row row">{renderedList}</div>
    </section>
  );
};

export default ProjectList;
