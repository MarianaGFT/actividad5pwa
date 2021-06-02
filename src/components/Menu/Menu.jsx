import React from "react";
import styled from "styled-components";

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

function Menu() {
  return (
    <ContainerMenu>
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

export default Menu;
