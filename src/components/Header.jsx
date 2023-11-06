function Header({ currentPage, handlePageChange }) {
  return (
    <header id="header">
      <nav class="navbar">
        <p class="navbar-brand text-center p-3 fs-3 fw-bold">Eleanor Thell</p>
        <ul class="navbar-nav d-flex flex-row align-items-center">
          <li id="nav-btn" class="nav-item me-3 p-4">
            <a
              id="about-btn"
              class="nav-link text-center"
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </a>
          </li>
          <li id="nav-btn" class="nav-item me-3 p-4">
            <a
              id="work-btn"
              class="nav-link text-center"
              href="#projects"
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "Projects" ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </a>
          </li>
          <li id="nav-btn" class="nav-item me-3 p-4">
            <a
              id="contact-btn"
              class="nav-link text-center"
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li id="nav-btn" class="nav-item me-3 p-4">
            <a
              id="contact-btn"
              class="nav-link text-center"
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
