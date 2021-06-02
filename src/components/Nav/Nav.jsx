import React, { useEffect } from "react";
import styled from "styled-components";
import Burger from "./Burger";

import User from "../../assets/icon/user.png";

const Navbar = styled.nav`
  width: 100%;
  height: 60px;
  z-index: 4;
  position: fixed;
  display: flex;
  align-items: center;
  background-color: var(--color-green);
  font-size: 28px;
  justify-content: space-between;
  padding: 0.5rem;
  color: #fff;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 15px;
    font-weight: 700;
  }

  h3 {
    margin: 0;
    font-size: 10px;
    font-weight: 600;
  }

  ${
    "" /* span {
    display: inline-block;
    height: 70px;
    min-width: 70px;
    max-width: 79px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("../../assets/icon/user.png")
      ${"" /* background: #fff; */
  };
  } */}

  img{
    margin-right:2rem;
  }

  /************ 580 ************/
  @media screen and (max-width: 580px) {
  }

  /************ 768 ************/
  @media screen and (max-width: 768px) {
  }

  /************ 1024 ************/
  @media screen and (max-width: 1024px) {
  }
`;

function Nav({ open, setOpen }) {
  return (
    <Navbar id="navbar">
      <Burger open={open} setOpen={setOpen} />
      <section>
        <h2>CAFETERIA UNIVERSITARIA</h2>
        <h3>PLAZA UNIVERSITARIA</h3>
      </section>
      <img src={User} alt="User icon"></img>
    </Navbar>
  );
}

export default Nav;
