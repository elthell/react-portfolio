import Project from "../cards/Project";

const ProjectList = ({ projects }) => {
  const renderedList = projects.map(({ id, ...project }) => {
    return <Project key={id} project={project} />;
  });

  return (
    <section id="work" class="mx-auto">
      <p class="section-title fs-3 fw-bold text-center py-2 my-2">
        <i class="flower fa-solid fa-fan"></i>
        Work
      </p>
      <div class="card-row row">{renderedList}</div>
    </section>
  );
};

export default ProjectList;
