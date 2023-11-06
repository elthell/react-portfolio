const ProjectCard = ({ project }) => {
  return (
    <div class="card text-center shadow">
      <div class="card-header">{project.stack}</div>
      <img src={project.img} class="card-img-top" alt={project.imgAlt} />
      <div class="card-body">
        <h5 class="card-title">{project.title}</h5>
        <p class="card-text pb-2">{project.description}</p>
        <a href={project.codeLink} class="card-link p-3">
          <i class="fa-solid fa-code"></i> Code
        </a>
        <a href={project.liveLink} class="card-link p-3">
          <i class="fa-solid fa-window-restore"></i> Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
