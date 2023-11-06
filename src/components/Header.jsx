function Header({ currentPage, handlePageChange }) {
  return (
    <header id="header">
      <nav className="navbar p-0">
        <p className="navbar-brand text-center p-3 fs-3 fw-bold">Eleanor Thell</p>
        <ul className="navbar-nav d-flex flex-row align-items-center">
          <li id="nav-btn" className="nav-item me-3 p-4 text-center">
            <a
              id="about-btn"
              href="#about"
              onClick={() => handlePageChange("About")}
              className= {
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </a>
          </li>
          <li id="nav-btn" className="nav-item me-3 p-4 text-center">
            <a
              id="work-btn"
              href="#projects"
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "Projects" ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </a>
          </li>
          <li id="nav-btn" className="nav-item me-3 p-4 text-center">
            <a
              id="contact-btn"
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li id="nav-btn" className="nav-item me-3 p-4 text-center">
            <a
              id="contact-btn"
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
