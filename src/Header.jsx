import React from "react";
import "./styles.css";
import { Header, NavLink, Title } from "@mantine/core";

function HeaderBase() {
  return (
    <Header className="header">
      <Title></Title>
      <Title order={4}>Portafolio</Title>
      <nav>
        <ul className="nav-links">
          <li>
            <a style={{ color: "white" }} href="#about">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="https://github.com/Luis02k" target="_blank">
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#https://www.linkedin.com/in/luisjoseavilesdeveloper/"
              target="_blank"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </Header>
  );
}

export default HeaderBase;
