function Header({ currentPage, handlePageChange }) {
  return (
    <header id="header">
      <nav className="navbar p-0">
        <p className="navbar-brand text-center p-3 fs-3 fw-bold">Eleanor Thell</p>
        <ul className="navbar-nav d-flex flex-row align-items-center">
          <li id="nav-btn" className="nav-item text-center">
            <a
              id="about-btn"
              href="#about"
              onClick={() => handlePageChange("About")}
              className= {
                currentPage === "About" ? "nav-btn active me-3 p-4" : "nav-btn me-3 p-4"
              }
            >
              About
            </a>
          </li>
          <li id="nav-btn" className="nav-item text-center">
            <a
              id="work-btn"
              href="#projects"
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "Projects" ? "nav-btn active me-3 p-4" : "nav-btn me-3 p-4"
              }
            >
              Projects
            </a>
          </li>
          <li id="nav-btn" className="nav-item text-center">
            <a
              id="contact-btn"
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-btn active me-3 p-4" : "nav-btn me-3 p-4"
              }
            >
              Resume
            </a>
          </li>
          <li id="nav-btn" className="nav-item text-center">
            <a
              id="contact-btn"
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-btn active me-3 p-4" : "nav-btn me-3 p-4"
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
