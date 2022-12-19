import React from "react";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'


const App = () => {

  return (
    <Main>
      <GlobalStyle />
      <Header />
      <About />
      <Projects />
      <Footer><Copyright>©</Copyright> Edward Janson 2022</Footer>
    </Main>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    position: relative;
    font-family: "Space Mono", Arial, Helvetica, sans-serif;
    background-color: #191c29;
    font-size: 1rem;
    color: #f5f5f5;
    margin: 1rem;
    margin-bottom:50px;

    .react-responsive-modal-modal {
      width: 100%;
      height: 100%;
      margin: auto;
      padding: 0;
      background: #191c29;
    }

    .react-responsive-modal-overlay,
    .react-responsive-modal-container,
    .react-responsive-modal-modal {
      animation-fill-mode: forwards !important;
    }
  }
`

const Main = styled.div`
  max-width: 45rem;
  margin: 2rem auto 4rem auto;

  & .customOverlay {
  background: rgba(36, 123, 160, 0.7);
  }
  & .customModal {
  background: #b2dbbf;
  max-width: 500px;
  width: 100%;
}
`

const Copyright = styled.span`
  font-family: sans-serif;
`

const Footer = styled.span`
  position: absolute;
  bottom: -2rem;
  left: 0;
  right: 0;
  text-align: center;
`

export default App;
