import React from "react";
import "./styles.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <p>© 2023 Tu Nombre</p>
      <ul className="social-links">
        <li>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        {/* Agrega más enlaces a tus redes sociales */}
      </ul>
    </footer>
  );
}

export default Footer;
