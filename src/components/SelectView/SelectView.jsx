import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SelectViewContainer = styled.section`
  padding: 100px 1rem 112px 1rem;
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 700;
    font-size: 20px;
    color: #000;
  }
  h4 {
    font-weight: 400;
    font-size: 20px;
    font-style: italic;
  }
  .btn-success {
    background-color: var(--color-green);
    border-color: var(--color-green);
    width: auto;
    height: 43px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin: 1rem 0;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
`;

const CardOption = styled.button`
  width: 272px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 43px;
  margin: 1rem auto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`;

function SelectView() {
  return (
    <SelectViewContainer>
      <h3>
        SELECCIONA LA VISTA PARA VER LA <h4>PUSH NOTIFICATION</h4>
      </h3>
      <a href="/menu-toast">
        <CardOption>MENU</CardOption>
      </a>
      <a href="/ordenes-toast">
        <CardOption>PEDIDOS</CardOption>
      </a>
      <a href="/phone-background">
        <CardOption>INICIO DEL TELÉFONO</CardOption>
      </a>
      <a href="/">
        <Button variant="success">REGRESAR AL INICIO DE LA APP</Button>
      </a>
    </SelectViewContainer>
  );
}

export default SelectView;
