const Contact = () => {
  return (
    <section
      id="contact"
      class="vh-100 d-flex justify-content-center align-items-center m-3"
    >
      <div class="section-text p-4 shadow">
        <p class="section-title fs-3 fw-bold text-center">
          <i class="flower fa-solid fa-fan"></i>
          Contact
        </p>
        <p class="fs-5 mb-4 fst-italic">
          Reach out to me, I would love to hear from you!
        </p>
        <form>
          <div class="mb-3">
            <label for="contact-name" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="contact-name"
              placeholder="Your name"
            ></input>
          </div>
          <div class="mb-3">
            <label for="contact-email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="contact-email"
              placeholder="Your name"
            ></input>
            <div class="mb-3">
              <label for="contact-comment" class="form-label">
                Comments
              </label>
              <textarea
                class="form-control"
                id="contact-comment"
                rows="3"
              ></textarea>
            </div>
            <a
              href="mailto:eleanor.thell@gmail.com"
              class="card-link p-3"
            >
              <i class="fa-solid fa-envelope"></i> Email me!
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
