const Footer = () => {
  return (
    <footer id="footer">
      <div className="d-flex justify-content-center align-items-center mt-4">
        <p className="fs-3 fw-bold">Look me up:</p>
        <a
          href="https://www.linkedin.com/in/eleanor-thell-b86bb6217/"
          className="ms-4"
        >
          <i className="link fa-brands fa-linkedin fa-3x"></i>
        </a>
        <a href="https://github.com/elthell" className="ms-4">
          <i className="link fa-brands fa-github fa-3x"></i>
        </a>
        <a href="https://codepen.io/elthell" className="ms-4">
          <i className="link fa-brands fa-codepen fa-3x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
