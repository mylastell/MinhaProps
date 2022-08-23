import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: purple;
  color: white;
  padding:10px;
}

`;
export default class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>Mylena</h1>
        <h2>23 anos</h2>
        <h3>Estudante de Programação</h3>
        <Header />
      </div>
    );
  }
}
