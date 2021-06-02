import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Toast, Button } from "react-bootstrap";

const ContainerMenu = styled.section`
  padding: 100px 0 112px 0;

  h3 {
    margin: 0.7rem 1rem;
    font-size: 10px;
    line-height: 11.72px;
    font-weight: 700;
    text-align: start;
  }
  .toast.show {
    margin: 0 auto;
  }
`;

const ScrollContainer = styled.div`
  background-color: #c4c4c4;
  width: auto;
  padding: 10px;
  overflow-x: auto;
  white-space: nowrap;
  overflow-y: hidden;
  min-height: 132px;
  display: flex;
  align-items: center;
  overflow: auto;
  margin-bottom: 2rem;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }

  div {
    display: inline-block;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 115px;
    height: 115px;
    margin: 0 0.5rem;
  }
`;

function MenuToast() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  return (
    <ContainerMenu>
      <Row>
        <Col xs={6}>
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <strong className="me-auto">🔔NOTIFICACIÓN - CAFETERÍA</strong>
            </Toast.Header>
            <Toast.Body>
              ¡TU PEDIDO ESTÁ LISTO!
              <p>CHILAQUILES, AGUA FRESCA, GALLETA</p>
              <h3>
                TOTAL A PAGAR: <h4>$57.00</h4>
              </h3>
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
      <h3>MÁS POPULARES</h3>
      <ScrollContainer>
        <section>
          <div>a</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </ScrollContainer>
      <h3>DESAYUNOS</h3>
      <ScrollContainer>
        <section>
          <div>a</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </ScrollContainer>
      <h3>COMIDAS</h3>
      <ScrollContainer>
        <section>
          <div>a</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </ScrollContainer>
      <h3>BEBIDAS</h3>
      <ScrollContainer>
        <section>
          <div>a</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </ScrollContainer>
    </ContainerMenu>
  );
}

export default MenuToast;
