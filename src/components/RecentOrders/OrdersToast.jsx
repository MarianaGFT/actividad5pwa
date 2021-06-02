import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Toast, Button, Modal } from "react-bootstrap";
import Wait from "../../assets/icon/wait.png";
import Check from "../../assets/icon/check.png";
import Arrow from "../../assets/icon/circle-arrow.png";
import Stars from "../../assets/img/stars.png";

const OrdersContainer = styled.section`
  padding: 100px 0 112px 0;
  h3 {
    margin: 0;
    text-align: initial;
    margin: 0 1rem;
  }
`;

const OrderCard = styled.div`
  width: 340px;
  height: 115px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .information-container {
    height: -webkit-fill-available;
    justify-content: space-around;
  }
  b {
    font-size: 12px;
  }

  h5 {
    font-weight: 400;
    margin: 0;
    font-size: 12px;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .process-state {
    color: #ffc42e;
    font-weight: 600;
  }
  .delivered-state {
    color: var(--color-green);
    font-weight: 600;
  }
  button {
    background: transparent;
    border: none;
  }
`;

function OrdersToast() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <OrdersContainer>
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
      <h3>PEDIDOS RECIENTES</h3>

      <OrderCard onClick={toggleShowA}>
        <img src={Wait} alt="wait icon"></img>
        <div className="information-container">
          <div className="text-container">
            <b>NO.PEDIDO:</b>
            <h5>00592</h5>
          </div>
          <div className="text-container">
            <b>FECHA:</b>
            <h5>25/MAY/2021</h5>
          </div>
        </div>
        <div className="information-container">
          <div className="text-container">
            <b>ESTADO:</b>
            <h5 className="process-state">EN PROCESO...</h5>
          </div>
          <div className="text-container">
            <b>TOTAL:</b>
            <h5>$56.00</h5>
          </div>
        </div>
        <button>
          <img src={Arrow} alt="Arrow icon"></img>
        </button>
      </OrderCard>
      <OrderCard onClick={toggleShowA}>
        <img src={Check} alt="Check icon"></img>
        <div className="information-container">
          <div className="text-container">
            <b>NO.PEDIDO:</b>
            <h5>00592</h5>
          </div>
          <div className="text-container">
            <b>FECHA:</b>
            <h5>25/MAY/2021</h5>
          </div>
        </div>
        <div className="information-container">
          <div className="text-container">
            <b>ESTADO:</b>
            <h5 className="delivered-state">ENTREGADO</h5>
          </div>
          <div className="text-container">
            <b>TOTAL:</b>
            <h5>$56.00</h5>
          </div>
        </div>
        <button>
          <img src={Arrow} alt="Arrow icon"></img>
        </button>
      </OrderCard>
      <OrderCard onClick={toggleShowA}>
        <img src={Check} alt="Check icon"></img>
        <div className="information-container">
          <div className="text-container">
            <b>NO.PEDIDO:</b>
            <h5>00592</h5>
          </div>
          <div className="text-container">
            <b>FECHA:</b>
            <h5>25/MAY/2021</h5>
          </div>
        </div>
        <div className="information-container">
          <div className="text-container">
            <b>ESTADO:</b>
            <h5 className="delivered-state">ENTREGADO</h5>
          </div>
          <div className="text-container">
            <b>TOTAL:</b>
            <h5>$56.00</h5>
          </div>
        </div>
        <button>
          <img src={Arrow} alt="Arrow icon"></img>
        </button>
      </OrderCard>
      <OrderCard onClick={toggleShowA}>
        <img src={Check} alt="Check icon"></img>
        <div className="information-container">
          <div className="text-container">
            <b>NO.PEDIDO:</b>
            <h5>00592</h5>
          </div>
          <div className="text-container">
            <b>FECHA:</b>
            <h5>25/MAY/2021</h5>
          </div>
        </div>
        <div className="information-container">
          <div className="text-container">
            <b>ESTADO:</b>
            <h5 className="delivered-state">ENTREGADO</h5>
          </div>
          <div className="text-container">
            <b>TOTAL:</b>
            <h5>$56.00</h5>
          </div>
        </div>
        <button>
          <img src={Arrow} alt="Arrow icon"></img>
        </button>
      </OrderCard>
    </OrdersContainer>
  );
}

export default OrdersToast;
