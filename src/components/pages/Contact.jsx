import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="d-flex justify-content-center align-items-center m-3"
    >
      <div className="section-text p-4 shadow">
        <p className="section-title fs-3 fw-bold text-center">
          <div className="flower d-inline">
            <FontAwesomeIcon icon={faFan} />
          </div>
          Contact
        </p>
        <p className="fs-5 mb-4 fst-italic">
          Reach out to me, I would love to hear from you!
        </p>
        <form>
          <div className="mb-3">
            <label for="contact-name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="contact-name"
              placeholder="Your name"
            ></input>
          </div>
          <div className="mb-3">
            <label for="contact-email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="contact-email"
              placeholder="Your name"
            ></input>
            <div className="mb-3">
              <label for="contact-comment" className="form-label">
                Comments
              </label>
              <textarea
                className="form-control"
                id="contact-comment"
                rows="3"
              ></textarea>
            </div>
            <div className="d-grid col-6 mx-auto">
              <a
                href="mailto:eleanor.thell@gmail.com"
                className="card-link p-3"
              >
                <FontAwesomeIcon icon={faEnvelope} /> Email me!
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
