import { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components'

import MediaCarousel from './MediaCarousel';


const Projects = () => {

    const projectsInfo = [
        {
            name: "Budgissimo",
            description: [`My first solo capstone project at CodeClan. We were tasked to deliver a Python app with CRUD operations and RESTful routes in seven days. 
                        I decided to build a mobile-first web application that allows users to keep track of their online advertising budgets and spending across multiple platforms and campaigns. 
                        Tags can also be added to campaigns that share a common targeting location e.g., UK, a promotion e.g. 'Christmas Offer', and more. 
                        With tags, budget and spend can be viewed across multiple platforms in a single table.`,
                        `The app currently requires users to update budgets and spend manually. 
                        To improve usability, I am currently in the process of integrating a solution using the Google Sheets API.`],
            links: [["GitHub", "https://github.com/edwardjanson/budgissimo"]],
            media: [{videos: [
                        "https://www.youtube.com/embed/VetSbRSZAFE"
                    ]},
                    {images:[
                        "/media/budgissimo-platforms.png",
                        "/media/budgissimo-edit.png"
                    ]}]
        },
        {
            name: "Trivimon Duel",
            description: [`This app was developed for a weekend project after week 1 of React at CodeClan. 
                            We were tasked to deliver an app that made use of an API.`,
                        `The gameplay:`,
                        `➭ Win a duel against the computer. The player and computer start with a randomly selected 'Trivimon' with different health points (HP) and moves.`,
                        `➭ The starting Trivimon is decided on the pace characteristic.`,
                        `➭ At the start of each round, the player answers a random multiple choice trivia question. 
                        On the player's round, an ability damage multiplier is set to x3 if answered correctly or x0.5 if answered incorrectly, and vice versa on the computer's round.`,
                        `➭ Once a Trivimon loses all HP, the winner is decided.`],
            links: [["GitHub", "https://github.com/edwardjanson/trivimon-duel"],
                    ["Website", "https://edwardjanson.github.io/trivimon-duel/"]],
                    media: [{videos: [
                        "https://www.youtube.com/embed/VetSbRSZAFE"
                    ]},
                    {images:[
                        "/media/budgissimo-platforms.png",
                        "/media/budgissimo-edit.png"
                    ]}]
        },
        {
            name: "CWV Checker",
            description: [`My capstone project for Harvard's CS50 Introduction to Computer Science course. 
                            With Core Web Vitals (CWV) becoming an increasing ranking factor in Google's search engine algorithm, it is important to stay on top of the performance of all pages on a website.`,
                        `Google's PageSpeed Insights report contains CWV metric stats, but requires individual checks to review multiple pages. 
                        Search Console provides an overview of CWV issues on a website per page, and this project aims to provide an alternative outwith Search Console.`,
                        `Google provides CWV metrics via the CrUX API and allows to get data at origin (homepage) and page level. 
                        This project uses the CrUX API and is currently deployed on Heroku.`,
                        `The process that this tool follows is as per the below:`,
        `➭ A user inputs a website to investigate with the option to include and/or exclude specific URLs.`,
        `➭ Website URLs are collected using internal links.`,
        `➭ The CrUX API fetches CWV metrics for the collected URLs.`,
        `➭ The metrics are displayed in a table at page level with a score of 'good', 'needs improvement' or 'poor'.`],
            links: [["GitHub", "https://github.com/edwardjanson/cs50_final_project"],
                    ["Website", "https://core-web-vitals-checker.herokuapp.com/"],
                    ["Video", "https://www.youtube.com/watch?v=VetSbRSZAFE"]],
            media: [{videos: [
            ]},
            {images:[
            ]}]
        },
        {
            name: "Metronome",
            description: ["Half-day duo project (with https://github.com/bsmith/) project building a metronome using React."],
            links: [["GitHub", "https://github.com/edwardjanson/metronome"],
                    ["Website", "https://edwardjanson.github.io/metronome/"]],
            media: [{videos: [
            ]},
            {images:[
            ]}]
        }
    ]

    const [selectedProjectIndex, handleProjectSelection] = useState(0);
    const [projectDetailsState, changeProjectDetailsState] = useState("transitionIn");
    const [initialRender, changeInitialRender] = useState(true);
    const touchStart = useRef({x: null, y: null});
    const touchEnd = useRef({x: null, y: null});

    useEffect( () => {
        if (initialRender) {
            changeInitialRender(false);
          } else {            
            changeProjectDetailsState("loadNew");
            setTimeout(() => {
                changeProjectDetailsState("transitionIn");
            }, 100);

            const project = document.getElementById(selectedProjectIndex);
            if (project) {
                project.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
            }
        }
    }, [selectedProjectIndex]);

    const changeSelectedProject = (index) => {
        if (index < 0 || index === projectsInfo.length || index === selectedProjectIndex) {
            return;
        } else {
            changeProjectDetailsState("transitionOut");
            setTimeout(() => {
                handleProjectSelection(index);
                changeProjectDetailsState("hide");
            }, 400);
        }
    }

    // Swipe logic taken from: https://stackoverflow.com/questions/70612769/how-do-i-recognize-swipe-events-in-react
    const minSwipeDistance = 50 

    const onTouchStart = (e) => {
        touchEnd.current.x = null;
        touchEnd.current.y = null;
        touchStart.current.x = e.targetTouches[0].clientX;
        touchStart.current.y = e.targetTouches[0].clientY;
    }

    const onTouchMove = (e) => {
        touchEnd.current.x = e.targetTouches[0].clientX;
        touchEnd.current.y = e.targetTouches[0].clientY;
    }

    const onTouchEnd = () => {
        if (!touchStart.current.x || !touchEnd.current.x) return;
        const distanceX = touchStart.current.x - touchEnd.current.x;
        const distanceY = touchStart.current.y - touchEnd.current.y;
        const isLeftSwipe = distanceX > minSwipeDistance;
        const isRightSwipe = distanceX < -minSwipeDistance;
        
        if (isRightSwipe && Math.abs(distanceX) > distanceY) {
            changeSelectedProject(selectedProjectIndex - 1);
        }
        if (isLeftSwipe && distanceX > distanceY) {
            changeSelectedProject(selectedProjectIndex + 1);
        }
    }

    const projectNameList = projectsInfo.map((project, index) => {
        return ( 
                index === selectedProjectIndex ?
                <Li key={index}><Button key={index}
                            id={index}
                            onClick={() => changeSelectedProject(index)} 
                            active >
                            {project.name}
                </Button></Li>
                :
                <Li key={index}><Button key={index} 
                onClick={() => changeSelectedProject(index)} >
                {project.name}
                </Button></Li>
        );
    });

    const projectDetails = projectsInfo.map((project, projectIndex) => {
        const projectParagraphs = project.description.map((paragraph, paragraphIndex) => {
            return ( 
                <Paragraph key={paragraphIndex + 100}>{paragraph}</Paragraph>
        )})

        const projectLinks = project.links.map((link, linkIndex) => {
            return ( 
                <Link key={linkIndex + 200} href={link[1]} target="blank">&#10157; {link[0]}</Link>
        )})

        return (
                projectIndex === selectedProjectIndex ?
                <ProjectDetails className={projectDetailsState} key={projectIndex}
                onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                    <MediaCarousel media={project.media} />
                    <Paragraphs className={projectDetailsState}>
                        {projectParagraphs}
                    </Paragraphs>
                    <Links className={projectDetailsState}>
                        {projectLinks}
                    </Links>
                </ProjectDetails>
                :
                <ProjectDetails className="hide" key={projectIndex}
                onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                    <MediaCarousel media={project.media} />
                    <Paragraphs>
                        {projectParagraphs}
                    </Paragraphs>
                    <Links>
                        {projectLinks}
                    </Links>
                </ProjectDetails>
        );
    });

    return (
        <Section className="section" id="projects">
            <Heading>Projects</Heading>
            <ProjectSection>
                <Navigation>
                    <Sidescroll onClick={() => changeSelectedProject(selectedProjectIndex - 1)}>&#8249;</Sidescroll>
                    <List>
                        {projectNameList}
                    </List>
                    <Sidescroll onClick={() => changeSelectedProject(selectedProjectIndex + 1)}>&#8250;</Sidescroll>
                </Navigation>
                {projectDetails}
            </ProjectSection>
        </Section>
    );
};


const Section = styled.div`
    margin-top: 4rem;
    justify-content: space-around;
`

const ProjectSection = styled.div`
    display: flex;
    flex-direction: column;
    height: 115rem;

    @media (min-width: 350px) {
        height: 110rem;
    }

    @media (min-width: 400px) {
        height: 105rem;
    }

    @media (min-width: 500px) {
        height: 100rem;
    }

    @media (min-width: 600px) {
        height: 90rem;
    }

    @media (min-width: 700px) {
        height: 85rem;
    }
`

const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

const fadeOut = keyframes`
    0% { opacity: 1; }
    100% { opacity: 0; }
`

const ProjectDetails = styled.div`
    margin-bottom: 3rem;
    max-width: 45rem;
    margin-top: -1.15rem;
    background: linear-gradient(to bottom, #2f344a 50%, transparent 50%);
    background-position: 100% 0%;
    background-size: 100% 200%;
    height: 120rem;

    @media (min-width: 350px) {
        height: 115rem;
    }

    @media (min-width: 400px) {
        height: 100rem;
    }

    @media (min-width: 500px) {
        height: 95rem;
    }

    @media (min-width: 600px) {
        height: 85rem;
    }

    @media (min-width: 700px) {
        height: 80rem;
    }

    &.hide {
        display: none;
    }

    &.transitionIn {
        transition: all 0.4s ease;
        background-position: 100% 0%;
    }

    &.loadNew {
        background: linear-gradient(to top, transparent 50%, #2f344a 50%);
        background-position: 0 100%;
        background-size: 100% 200%;
    }

    &.transitionOut {
        transition: all 0.4s ease;
        background-position: 0% 100%;
    }

    &.transitionIn .media {
        animation: ${fadeIn} 0.4s;
    }

    &.loadNew .media {
        opacity: 0;
    }

    &.transitionOut .media {
        animation: ${fadeOut} 0.4s;
    }
`

const Navigation = styled.nav`
    display: flex;
    align-items: center;
`

const Sidescroll = styled.button`
    font-family: "Space Mono", Arial, Helvetica, sans-serif;
    background: linear-gradient(to top, #2f344a 50%, transparent 50%);
    background-position: 0% 0%;
    background-size: 100% 200%;
    transition: all .4s ease;
    color: #f5f5f5;
    border: 0;
    margin: 0;
    font-size: 1.4rem;
    padding: 0.58rem;
    text-align: center;


    @media (hover:hover) {
        &:hover {
            background-position: 0% 100%;
            cursor: pointer;
            color: #f49f1c;
        }
    }

    &:active {
        color: #f49f1c;
    }
`

const Heading = styled.h1`
    display: flex;
    align-items: center;
    font-family: "Kadwa";
    font-weight: 900;
    font-size: 2rem;
    color: #f49f1c;
    width: 100%;
    white-space: nowrap;

    &:after {
        content: "";
        display: inline-block;
        margin: 0 auto 0 1.5rem;
        width: 100%;
        vertical-align: middle;
        border-bottom: 0.1rem solid #2f344a;
    }
`

const Paragraphs = styled.div`
    padding: 1rem;
    width: 90%;
    margin: auto;

    &.transitionIn {
        animation: ${fadeIn} 0.4s;
    }

    &.loadNew {
        opacity: 0;
    }

    &.transitionOut {
        animation: ${fadeOut} 0.4s;
    }
`

const Paragraph = styled.p`
`

const List = styled.ul`
    padding: 0;
    display: flex;
    align-items: center;
    width: 100%;
    overflow: auto;
`

const Li = styled.li`
    display: flex;
    list-style: none;
    margin: 0;
    width: 100%;
`

const Button = styled.button`
    font-family: "Space Mono", Arial, Helvetica, sans-serif;
    background: linear-gradient(to top, #2f344a 50%, transparent 50%);
    background-position: ${props => props.active ? "0% 100%" : "0% 0%"};
    background-size: 100% 200%;
    transition: all .4s ease;
    color: ${props => props.active ? "#f49f1c" : "#f5f5f5"};
    border: 0;
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 0.8rem;
    white-space: nowrap; 

    &:hover {
        color: #f49f1c;
        cursor: pointer;
    }
`

const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    width: 90%;
    margin: auto;

    &.transitionIn {
        animation: ${fadeIn} 0.4s;
    }

    &.loadNew {
        opacity: 0;
    }

    &.transitionOut {
        animation: ${fadeOut} 0.4s;
    }
`

const Link = styled.a`
    font-size: 1rem;
    color: #f49f1c;
    text-decoration: none;
    word-spacing: -0.3rem;


    @media (hover:hover) {
        &:hover {
            font-weight: bold;
            cursor: pointer;
        }
    }
`

export default Projects;