import React from "react";
import styled from "styled-components";
import Add from "../../assets/icon/add.png";
import Checklist from "../../assets/icon/checklist.png";
import Menu from "../../assets/icon/menu.png";

const FooterContainer = styled.footer`
  width: 100%;
  height: 68px;
  z-index: 5;
  bottom: -1px;
  position: fixed;
  display: flex;
  align-items: center;
  background-color: var(--color-green);
  font-size: 28px;
  justify-content: space-around;
  padding: 0.5rem;
  color: #fff;

  h4 {
    margin: 0;
    font-size: 10px;
    width: 50px;
  }

  .footer__add-icon {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: -26px;
  }

  .footer__add-icon img {
    border: 4px solid #fff;
    border-radius: 50px;
    margin-bottom: 0.5rem;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <section>
        <a href="/">
          <img src={Menu} alt="Menu icon"></img>
        </a>
        <h4> MENU</h4>
      </section>
      <section className="footer__add-icon">
        <img src={Add} alt="Add icon" className="add-icon"></img>

        <h4>HACER PEDIDO</h4>
      </section>
      <section>
        <a href="/pedidos-recientes">
          <img src={Checklist} alt="Checklist icon"></img>
        </a>
        <h4>PEDIDOS RECIENTES</h4>
      </section>
    </FooterContainer>
  );
}

export default Footer;
