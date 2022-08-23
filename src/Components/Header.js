import React from "react";
import programação from "../img/programação.jpg";
import styled from "styled-components";

const Imagem = styled.img`
  width: 400px;
  height: 300px;
  padding: 10px;
`;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Imagem src={programação} alt="tecnologia" />
      </div>
    );
  }
}
