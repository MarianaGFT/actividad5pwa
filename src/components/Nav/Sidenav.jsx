import React from "react";
import styled from "styled-components";

const Ul = styled.div`
  width: 246px;
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
  /* opacity: 0.85; */
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  top: 0;
  left: 0;
  height: 100vh;
  ${"" /* width: 350px; */}
  padding-top: 4rem;
  transition: transform 0.3s ease-in-out;
  z-index: 3;
  overflow: auto !important;
  color: #000;

  ::-webkit-scrollbar {
    display: none;
  }

  .sidenav__section-logo {
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .sidenav__section-links {
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem 0;
  }

  .sidenav__section-links a {
    color: #000;
    text-decoration: none;
    font-size: 1.5rem;
    margin: 1rem auto;
    font-weight: 700;
  }

  /************ 320 ************/
  @media screen and (min-width: 320px) {
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    width: 100%;
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    width: 50%;
  }

  /************ 1024 ************/
  @media screen and (min-width: 1024px) {
    width: 27%;
  }
`;

function Sidenav({ open, setOpen }) {
  return (
    <Ul open={open}>
      <section className="sidenav__section-links">
        <a href="/#inicio" onClick={() => setOpen(!open)}>
          PERFIL
        </a>
        <a href="/" onClick={() => setOpen(!open)}>
          MENÚ
        </a>
        <a href="/pedidos-recientes" onClick={() => setOpen(!open)}>
          TUS PEDIDOS
        </a>
        <a href="/#contacto" onClick={() => setOpen(!open)}>
          POLÍTICAS DE PRIVACIDAD
        </a>
        <a href="/#contacto" onClick={() => setOpen(!open)}>
          AYUDA
        </a>
      </section>
      <section></section>
    </Ul>
  );
}

export default Sidenav;
