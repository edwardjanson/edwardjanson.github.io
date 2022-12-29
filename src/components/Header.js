import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';


const Header = ({handleScroll, buttonScroll}) => {

    const [headerState, setHeaderState] = useState("show");
    const [burgerOpen, updateBurgerOpen] = useState(false);

    useEffect(() => {
        if (window.scrollY === 0) setHeaderState("show");
        let lastY = 0;
        window.onscroll = () => {
            let y = window.scrollY;
            if (y > lastY) {
                setHeaderState("hide");
                updateBurgerOpen(false);
            }
            if (y < lastY) setHeaderState("show");
            if (buttonScroll) {
                setHeaderState("hide");
                updateBurgerOpen(false);
            }
            lastY = y;
        }      
    }, [buttonScroll]);

    return (
        <Section className={"section " + headerState + (burgerOpen ? " opened" : " closed")} id="header">
            <Name>EdwardJanson</Name>
            <Burger className={burgerOpen ? "change" : ""} onClick={() => updateBurgerOpen(!burgerOpen)}>
                <BurgerBar/>
            </Burger>

            <BurgerMenu className={burgerOpen ? " opened" : " closed"}>
                <AnchorLinks>
                    <Button onClick={(event) => handleScroll(event)} value="about">About</Button>
                    <Button onClick={(event) => handleScroll(event)} value="skills">Skills</Button>
                    <Button onClick={(event) => handleScroll(event)} value="projects">Projects</Button>
                </AnchorLinks>
                <ExternalLinks>
                    <Link href="https://github.com/edwardjanson" target="_blank"><Icon src={process.env.PUBLIC_URL + "/media/github-icon-hover.png"}></Icon></Link>
                    <Link href="https://www.linkedin.com/in/edwardjanson/" target="_blank"><Icon src={process.env.PUBLIC_URL + "/media/linkedin-icon-hover.png"}></Icon></Link>
                </ExternalLinks>
            </BurgerMenu>
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
    transition: 0.5s;

    &.opened {
        height: 15rem;
    }
    
    &.hide {
        top: -3rem;
    }
    
    &.show {
        top: 0;
    }
`

const Name = styled.span`
    position: absolute;
    top: 0.75rem;
    left: 1rem;
`

// Inspired from: https://codepen.io/Bilal1909/pen/KKdrmRP
const Burger = styled.div`
    top: 1.5rem;
    right: 1rem;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 30px;

    &:before, :after, div {
        background: #fff;
        content: "";
        display: block;
        height: 2px;
        margin: 6px 0;
        transition: 0.75s;
    }

    &.change:before {
        transform: translateY(8px) rotate(-45deg);
    }

    &.change:after {
        transform: translateY(-8px) rotate(45deg);
    }

    &.change div {
        transform: scale(0);
    }
`

const BurgerBar = styled.div`
`

const expandBurger = keyframes`
    0% {
        transform: translateY(-100%);
    }
    100% { 
        transform: translateY(0rem);
    }
`

const collapseBurger = keyframes`
    0% { 
        transform: translateY(0rem);
    }
    100% { 
        transform: translateY(-200%);
    }
`

const BurgerMenu = styled.div`
    display: none;
    position: absolute;
    right: 5rem;
    top: 4rem;
    gap: 1.5em;

    &.opened {
        animation: ${expandBurger} 0.75s;
        display: flex;
        flex-direction: column;
    }

    &.closed {
        animation: ${collapseBurger} 0.75s;
        display: flex;
        flex-direction: column;
        animation-fill-mode: forwards;
    }
`

const AnchorLinks = styled.div`
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.8rem;
`

const ExternalLinks = styled.div`
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;
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