const Resume = () => {
  return (
    <section
      id="resume"
      className="d-flex justify-content-center align-items-center m-3"
    >
      <div className="section-text p-4 shadow">
        <p className="section-title fs-3 fw-bold text-center">
          <i className="flower fa-solid fa-fan"></i>
          Skills
        </p>
        <div className="skill-list container text-center pt-3 border border-3 rounded-2">
          <div className="row row-cols-3">
            <p className="skill">HTML</p>
            <p className="skill">CSS</p>
            <p className="skill">Bootstrap</p>
            <p className="skill">JavaScript</p>
            <p className="skill">jQuery</p>
            <p className="skill">Node.js</p>
            <p className="skill">Handlebars.js</p>
            <p className="skill">SQL</p>
            <p className="skill">MySQL</p>
            <p className="skill">MVC</p>
            <p className="skill">MongoDB</p>
            <p className="skill">PWAs</p>
            <p className="skill">React.js</p>
            <p className="skill">Git</p>
            <p className="skill">Heroku</p>
          </div>
        </div>
        <p className="fs-5 mb-4 fst-italic text-center mt-3">
          Click below to see my full resume!
        </p>
        <div className="d-grid col-6 mx-auto">
          <a href="" className="card-link p-3 mx-auto">
            <i className="fa-solid fa-file"></i> Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume
