const About = () => {
  return (
    <section
      id="about"
      class="d-flex justify-content-center align-items-center m-3"
    >
      <div class="section-text p-3 shadow">
        <p class="section-title fs-3 fw-bold text-center">
          <i class="flower fa-solid fa-fan"></i>
          About
        </p>
        <div class="row">
          <i class="dk-leaf col-2 fa-solid fa-leaf fa-flip-horizontal fa-5x text-center"></i>
          <p class="col-8 fs-6">
            Hi, I'm Eleanor!
            <br />
            Data-driven, life-long learner looking to bring a History B.A.'s
            love of documentation and presenting information to a career shift
            into tech.
            <br />• skilled in customer service and data entry with growing
            skills in full stack web development.
          </p>
          <i class="dk-leaf col-2 fa-solid fa-leaf fa-5x text-center"></i>
        </div>
      </div>
    </section>
  );
};

export default About;
