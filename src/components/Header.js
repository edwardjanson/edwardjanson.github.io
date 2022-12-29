import { useState, useEffect } from 'react';
import styled from 'styled-components';


const Header = ({handleScroll, buttonScroll}) => {

    const [headerState, setHeaderState] = useState("show");
    const [burgerOpen, updateBurgerOpen] = useState(false);

    useEffect(() => {
        if (window.scrollY === 0) setHeaderState("show");
        let lastY = 0;
        window.onscroll = () => {
            let y = window.scrollY;
            if (y > lastY) setHeaderState("hide");
            if (y < lastY) setHeaderState("show");
            if (buttonScroll) setHeaderState("hide");
            lastY = y;
        }      
    }, [buttonScroll]);

    return (
        <Section className={"section " + headerState} id="header">
                <>
                <Name>EdwardJanson</Name>
                <Burger className={burgerOpen ? "change" : ""} onClick={() => updateBurgerOpen(!burgerOpen)}>
                    <BurgerBar/>
                </Burger>
                </>

                {/* <>
                <ExternalLinks>
                    <Link href="https://github.com/edwardjanson" target="_blank"><Icon src={process.env.PUBLIC_URL + "/media/github-icon-hover.png"}></Icon></Link>
                    <Link href="https://www.linkedin.com/in/edwardjanson/" target="_blank"><Icon src={process.env.PUBLIC_URL + "/media/linkedin-icon-hover.png"}></Icon></Link>
                </ExternalLinks>
                <AnchorLinks>
                    <Button onClick={(event) => handleScroll(event)} value="about">About</Button>
                    <Button onClick={(event) => handleScroll(event)} value="skills">Skills</Button>
                    <Button onClick={(event) => handleScroll(event)} value="projects">Projects</Button>
                </AnchorLinks>
                </> */}

        </Section>
    );
};

const Section = styled.div`
    z-index: 3;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(25, 28, 41, 0.95);
    height: 3rem;
    width: 100%;
    margin-bottom: 4rem;
    max-width: inherit !important;
    transition: all 0.3s ease;
    
    &.hide {
        top: -3rem;
    }
    
    &.show {
        top: 0;
    }
`

const Name = styled.span`
`

// Inspired from: https://codepen.io/Bilal1909/pen/KKdrmRP
const Burger = styled.div`
  top: 50%;
  right: 5%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 30px;

  &:before, :after, div {
    background: #fff;
    content: "";
    display: block;
    height: 2px;
    margin: 6px 0;
    transition: 0.5s;
  }

  &.change:before {
    transform: translateY(8px) rotate(135deg);
  }

  &.change:after {
    transform: translateY(-8px) rotate(-135deg);
  }

  &.change div {
    transform: scale(0);
  }
`

const BurgerBar = styled.div`
`

const ExternalLinks = styled.div`
    opacity: 1;
    position: absolute;
    left: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;
`

const AnchorLinks = styled.div`
    opacity: 1;
    position: absolute;
    right: 5%;
    display: flex;
    gap: 0.8rem;
`

const Link = styled.a`
`

const Button = styled.button`
    font-family: "Space Mono", Arial, Helvetica, sans-serif;
    background: transparent;
    border: 0;
    color: white;
    font-size: 0.9rem;

    &:active {
        color: #f49f1c;
    }

    @media (hover:hover) {
        &:hover {
            color: #f49f1c;
            cursor: pointer;
        }
    }
`

const Icon = styled.img`
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.4rem;
    height: 1.4rem;
    object-fit: cover;
    object-position: left;

    &:active {
        object-position: right;
    }

    @media (hover:hover) {
        &:hover {
            object-position: right;
        }
    }
`

export default Header;