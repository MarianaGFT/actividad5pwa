import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const OrderDetailsContainer = styled.section`
  padding: 100px 0 112px 0;

  h2 {
    font-size: 30px;
    width: 228px;
    margin: 0 auto;
    color: var(--color-green);
  }
`;

const PedidoContainer = styled.div`
  width: 340px;
  height: auto;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 0 auto;

  .order-details__information-container {
    display: flex;
  }
  .order-details__information-container div {
    width: 100%;
  }
  .order-details__information-container p {
    margin: 0.5rem;
    padding: 0.5rem 1rem;
  }
  .order-details__information-container h5 {
    margin: 0;
    text-align: initial;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }
  .order-details__information-container h6 {
    margin: 0;
    font-weight: 400;
    text-align: initial;
  }
  .text-deliver {
    color: var(--color-green);
    font-weight: 700 !important;
  }
  .order-details__order-information h5 {
    text-align: initial;
    padding: 0 2rem;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }

  .order-details__order-information p {
    display: flex;
    justify-content: space-evenly;
  }
  .order-details__order-information h6 {
    margin: 0;
    font-weight: 500;
    font-weight: normal;
    font-size: 14px;
  }
  .btn-success {
    background-color: var(--color-green);
    border-color: var(--color-green);
    width: 81px;
    height: 37px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin: 1rem 0;
  }

  img {
    width: 13rem;
    margin: 0 auto;
  }
`;

function OrderDetails() {
  return (
    <OrderDetailsContainer>
      <h3>¡TU PEDIDO ESTÁ LISTO!</h3>
      <h2>RECÓGELO EN CUANTO ANTES</h2>
      <h3>DETALLES DEL PEDIDO</h3>
      <PedidoContainer>
        <div className="order-details__information-container">
          <div>
            <p>
              <h5>NO. PEDIDO:</h5>
              <h6>000592</h6>
            </p>
            <p>
              <h5>ESTADO:</h5>
              <h6 className="text-deliver">Listo para entregar</h6>
            </p>
          </div>
          <div>
            <p>
              <h5>FECHA:</h5>
              <h6>25/MAY/2021</h6>
            </p>
            <p>
              <h5>TOTAL:</h5>
              <h6>$56.00</h6>
            </p>
          </div>
        </div>
        <div className="order-details__order-information">
          <h5>PRODUCTOS:</h5>
          <p>
            <h6>CHILAQUILES</h6>
            <h6>AGUA FRESCA</h6>
            <h6>GALLETAS</h6>
          </p>
          <a href="/seleccionar-vista">
            <Button variant="success">OK</Button>
          </a>
        </div>
      </PedidoContainer>
    </OrderDetailsContainer>
  );
}

export default OrderDetails;
