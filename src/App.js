import React from "react";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Space Mono", Arial, Helvetica, sans-serif;
    background-color: #191c29;
    font-size: 1.2rem;
    color: #f5f5f5;
    margin: 1rem;
  }
`

const App = () => {

  const handleScroll = (event) => {
    const element = document.getElementById(event.target.value)
    if (element) {
      element.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header handleScroll={handleScroll} />
      <About />
      <Projects />
    </>
  );
}

export default App;
