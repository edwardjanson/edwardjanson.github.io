import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';


const Header = ({handleScroll, buttonScroll}) => {

    const [headerState, setHeaderState] = useState("show");
    const [burgerOpen, updateBurgerOpen] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);

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
        <Section className={"section " + headerState} id="header">
            <Name>EdwardJanson</Name>
            <Burger className={burgerOpen ? "change" : ""} onClick={() => {
                updateBurgerOpen(!burgerOpen);
                setInitialLoad(false);
                }
            }>
                <BurgerBar/>
            </Burger>

            <BurgerMenu className={(burgerOpen ? "opened" : "closed") + (initialLoad ? " initial": "")}>
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
    width: 100%;
    max-width: inherit !important;
    transition: 0.5s;
    
    &.hide {
        top: -3.5rem;
    }
    
    &.show {
        top: 0;
    }
`

const Name = styled.span`
    z-index: 4;
    position: absolute;
    top: 0.75rem;
    left: 1rem;
`

// Inspired from: https://codepen.io/Bilal1909/pen/KKdrmRP
const Burger = styled.div`
    z-index: 4;
    top: 1.5rem;
    right: 1rem;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 30px;
    cursor: pointer;

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
        transform: translateY(-79%);
    }
    100% { 
        transform: translateY(0);
    }
`

const collapseBurger = keyframes`
    0% { 
        transform: translateY(0);
    }
    100% { 
        transform: translateY(-79%);
    }
`

const BurgerMenu = styled.div`
    display: none;
    position: absolute;
    padding-right: 5rem;
    right: 0;
    top: 0;
    gap: 1.5em;
    background-color: rgba(25, 28, 41, 0.98);
    width: 100%;
    height: 15rem;

    &.initial {
        animation-duration: 0s !important;
    }

    &.opened {
        animation: ${expandBurger} 0.75s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        
    }

    &.closed {
        animation: ${collapseBurger} 0.75s;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
    justify-content: flex-end;
    padding-left: 1rem;
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