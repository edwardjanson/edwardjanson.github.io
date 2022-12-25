import React from "react";
import { useState } from "react";
import { createGlobalStyle } from 'styled-components'
import styled, { keyframes } from 'styled-components'

import Intro from "./components/Intro";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


const App = () => {

  const [introFinished, updateIntroFinished] = useState(false);
  const [transitionStart, updateTransitionStart] = useState(false);

  const updateIntro = () => {
      updateIntroFinished(true);
      setTimeout(() => {
        updateTransitionStart(true);
  }, 1000);
  }

  const handleScroll = (event) => {
    const element = document.getElementById(event.target.value);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  }

  return (
    <Main>
      <GlobalStyle />
      {!transitionStart ?
      <IntroAnimation className={introFinished ? "start" : "hold"}>
        <Intro updateIntro={updateIntro}/>
      </IntroAnimation>
      :
      <Section className={introFinished ? "start" : "display"}>
        <Header handleScroll={handleScroll} />
        <About />
        <Skills />
        <Projects />
        <Footer><Copyright>©</Copyright> Edward Janson 2022</Footer>
      </Section>
      }
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
      background: black;
    }

    .react-responsive-modal-overlay,
    .react-responsive-modal-container,
    .react-responsive-modal-modal {
      background-color: black;
      animation-fill-mode: forwards !important;
    }
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {         
    opacity: 0;
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {         
    opacity: 1;
  }
`

const Main = styled.div`
  max-width: 45rem;
  margin: 2rem auto 4rem auto;
`

const IntroAnimation = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin-top: 40vh;

  &.start {
      animation: ${fadeOut} 1s;
  }
`

const Section = styled.div`
  max-width: 45rem;
  margin: 2rem auto 4rem auto;

  &.start {
    animation: ${fadeIn} 1s;
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
