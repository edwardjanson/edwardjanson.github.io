import React from "react";
import { useState } from "react";
import { createGlobalStyle } from 'styled-components';
import styled, { keyframes } from 'styled-components';

import Intro from "./components/Intro";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


const App = () => {

  const [introFinished, updateIntroFinished] = useState(false);
  const [transitionStart, updateTransitionStart] = useState(false);
  const [buttonScroll, updateButtonScroll] = useState(false);

  const updateIntro = () => {
    setTimeout(() => {
      updateIntroFinished(true);
      setTimeout(() => {
        updateTransitionStart(true);
      }, 300);
    }, 500);
  }

  const handleScroll = (event) => {
    const element = document.getElementById(event.target.value);
    if (element) {
      updateButtonScroll(true);
      element.scrollIntoView({behavior: "smooth"});

      setTimeout(() => {
          updateButtonScroll(false);
      }, 1000);
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
      <Section className={transitionStart ? "start" : "display"}>
        <Header handleScroll={handleScroll} buttonScroll={buttonScroll} />
        <About />
        <Skills />
        <Projects handleScroll={handleScroll} updateButtonScroll={updateButtonScroll} />
        <Footer id="footer"><Copyright>©</Copyright> Edward Janson 2022</Footer>
      </Section>
      }
    </Main>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  p {
    padding: 0.6rem;
  }

  h1, h2, h3 {
    margin: 1rem 0;
  }

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
    transform: scale(1, 1);
  }
  60% {
    opacity: 1;
    transform: scale(1.1, 1.1);
  }
  100% {         
    opacity: 0;
    transform: scale(0.5, 0.5);
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-5rem);
  }
  100% {         
    opacity: 1;
    transform: translateY(0rem);
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
  margin-top: 20vh;

  &.start {
      animation: ${fadeOut} 0.3s;
  }
`

const Section = styled.div`
  max-width: 45rem;
  margin: 2rem auto 4rem auto;

  &.start #header {
    opacity: 0;
    animation: ${fadeIn} 0.5s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
  }

  &.start #about {
    opacity: 0;
    animation: ${fadeIn} 0.5s;
    animation-delay: 0.4s;
    animation-fill-mode: forwards;
  }

  &.start #skills {
    opacity: 0;
    animation: ${fadeIn} 0.5s;
    animation-delay: 0.7s;
    animation-fill-mode: forwards;
  }

  &.start #projects {
    opacity: 0;
    animation: ${fadeIn} 0.5s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }

  &.start #footer {
    opacity: 0;
    animation: ${fadeIn} 0.5s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
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
