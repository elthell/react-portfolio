const Resume = () => {
  return (
    <section
      id="resume"
      class="d-flex justify-content-center align-items-center m-3"
    >
      <div class="section-text p-4 shadow">
        <p class="section-title fs-3 fw-bold text-center">
          <i class="flower fa-solid fa-fan"></i>
          Skills
        </p>
        <div class="skill-list container text-center pt-3 border border-3 rounded-2">
          <div class="row row-cols-3">
            <p class="skill">HTML</p>
            <p class="skill">CSS</p>
            <p class="skill">Bootstrap</p>
            <p class="skill">JavaScript</p>
            <p class="skill">jQuery</p>
            <p class="skill">Node.js</p>
            <p class="skill">Handlebars.js</p>
            <p class="skill">SQL</p>
            <p class="skill">MySQL</p>
            <p class="skill">MVC</p>
            <p class="skill">MongoDB</p>
            <p class="skill">PWAs</p>
            <p class="skill">React.js</p>
            <p class="skill">Git</p>
            <p class="skill">Heroku</p>
          </div>
        </div>
        <p class="fs-5 mb-4 fst-italic text-center mt-3">
          Click below to see my full resume!
        </p>
        <div class="d-grid col-6 mx-auto">
          <a href="" class="card-link p-3 mx-auto">
            <i class="fa-solid fa-file"></i> Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume
