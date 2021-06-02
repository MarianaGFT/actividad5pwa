import React, { useState } from "react";
import styled from "styled-components";
import PhoneBackgroundImg from "../assets/img/phone-background.png";
import { Row, Col, Toast, Button, Modal } from "react-bootstrap";
import Stars from "../assets/img/stars.png";

const PhoneBackgroundContainer = styled.section`
  padding: 60px 0 67px 0;
  background-image: url("../assets/img/phone-background.png");

  img {
    z-index: 1;
    position: absolute;
    left: 1px;
  }
`;

function PhoneBackground() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <PhoneBackgroundContainer>
      <img src={PhoneBackgroundImg}></img>
      <Row>
        <Col xs={6} onClick={handleShow}>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Body closeButton>¿Te entregaron tu pedido?</Modal.Body>
        <Modal.Body>Califica tu pedido</Modal.Body>
        <img src={Stars} alt="stars img"></img>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            SI
          </Button>
          <Button variant="danger" onClick={handleClose}>
            NO
          </Button>
        </Modal.Footer>
      </Modal>
    </PhoneBackgroundContainer>
  );
}

export default PhoneBackground;
