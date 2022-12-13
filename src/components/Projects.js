import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import styled, { keyframes } from 'styled-components'


const Projects = () => {

    const projectsInfo = [
        {
            name: "Budgissimo",
            description: [`My first solo capstone project at CodeClan. We were tasked to deliver a Python app with CRUD operations and RESTful routes in seven days. 
                        I decided to build a mobile-first web application that allows users to keep track of their online advertising budgets and spending across multiple platforms and campaigns. 
                        Tags can also be added to campaigns that share a common targeting location e.g., UK, a promotion e.g. "Christmas Offer", and more. 
                        With tags, budget and spend can be viewed across multiple platforms in a single table.`,
                        `The app currently requires users to update budgets and spend manually. 
                        To improve usability, I am currently in the process of integrating a solution using the Google Sheets API.`],
            links: [["GitHub", "https://github.com/edwardjanson/budgissimo"]]
        },
        {
            name: "Trivimon Duel",
            description: ["This is the description for 2"],
            links: [["GitHub", "https://github.com/edwardjanson/trivimon-duel"],
                    ["Website", "https://edwardjanson.github.io/trivimon-duel/"]]
        },
        {
            name: "CWV Checker",
            description: ["This is the description for 3"],
            links: [["GitHub", "https://github.com/edwardjanson/cs50_final_project"],
                    ["Website", "https://core-web-vitals-checker.herokuapp.com/"],
                    ["Video", "https://www.youtube.com/watch?v=VetSbRSZAFE"]]
        },
        {
            name: "Metronome",
            description: ["This is the description for 4"],
            links: [["GitHub", "https://github.com/edwardjanson/metronome"],
                    ["Website", "https://edwardjanson.github.io/metronome/"]]
        }
    ]

    const [selectedProjectIndex, handleProjectSelection] = useState(0);
    const [projectDetailsState, changeProjectDetailsState] = useState("transitionIn");
    const [initialRender, changeInitialRender] = useState(true);
    // const targetDiv = useRef();
    // const [divHeight, setDivHeight] = useState(null);

    // useLayoutEffect(() => {
    //     if (targetDiv.current) {
    //         if (targetDiv.current.offsetHeight > divHeight) {
    //             setDivHeight(targetDiv.current.offsetHeight);
    //         }
    //     }
    //   }, []);

    useEffect( () => {
        if (initialRender) {
            changeInitialRender(false);
          } else {            
            changeProjectDetailsState("loadNew");
            
            setTimeout(() => {
                changeProjectDetailsState("transitionIn");
            }, 300);

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
                changeProjectDetailsState("hide");
                handleProjectSelection(index);
            }, 300);
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
                <ProjectDetails className={projectDetailsState} key={projectIndex}>
                    <Paragraphs className={projectDetailsState}>
                        {projectParagraphs}
                    </Paragraphs>
                    <Links className={projectDetailsState}>
                        {projectLinks}
                    </Links>
                </ProjectDetails>
                :
                <ProjectDetails className="hide" key={projectIndex}>
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
            <Heading>My Projects</Heading>
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

    @media (min-width: 769px) {
    }

    @media (min-width: 1025px) {
    }
`

const ProjectSection = styled.div`
    display: flex;
    flex-direction: column;
    height: 60rem;

    @media (min-width: 769px) {
    }

    @media (min-width: 1025px) {
    }
`

const ProjectDetails = styled.div`
    height: 55rem;
    margin-bottom: 3rem;
    max-width: 45rem;
    margin-top: -1rem;
    background: linear-gradient(to top, transparent 50%, #2f344a 50%);
    background-position: 0% 100%;
    background-size: 100% 200%;

    @media (min-width: 769px) {
    }

    @media (min-width: 1025px) {
    }

    &.hide {
        display: none;
    }

    &.transitionIn {
        transition: all .2s ease;
        background-position: 0 100%;
    }

    &.loadNew {
        background: linear-gradient(to top, transparent 50%, #2f344a 50%);
        background-position: 100% 0%;
        background-size: 100% 200%;
    }

    &.transitionOut {
        transition: all .3s ease;
        background-position: 100% 0%;
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
    transition: all .5s ease;
    color: #f5f5f5;
    border: 0;
    margin: 0;
    border-bottom: 0.1rem solid #2f344a;
    font-size: 1.4rem;
    padding: 0.56rem;
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

const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

const fadeOut = keyframes`
    0% { opacity: 1; }
    100% { opacity: 0; }
`

const Paragraphs = styled.div`
    padding: 1rem;

    &.transitionIn {
        animation: ${fadeIn} 1s;
    }

    &.loadNew {
        opacity: 0;
    }

    &.transitionOut {
        animation: ${fadeOut} 0.35s;
    }
`

const Paragraph = styled.p`
`

const List = styled.ul`
    padding: 0;
    display: flex;
    align-items: center;
    white-space: nowrap;
    width: 100%;
    overflow: auto;
`

const Li = styled.li`
    list-style: none;
    margin: 0;
    width: 100%;
    display:inline;
`

const Button = styled.button`
    font-family: "Space Mono", Arial, Helvetica, sans-serif;
    background: linear-gradient(to top, #2f344a 50%, transparent 50%);
    background-position: ${props => props.active ? "0% 100%" : "0% 0%"};
    background-size: 100% 200%;
    transition: all .5s ease;
    color: ${props => props.active ? "#f49f1c" : "#f5f5f5"};
    border: 0;
    border-bottom: 0.1rem solid #2f344a;
    padding: 1rem 1.5rem;
    font-size: 0.8rem;
    white-space: nowrap; 

    &:hover {
        color: #f49f1c;
        cursor: pointer;
    }

    @media (min-width: 769px) {
        padding: 1rem 2.5rem;
    }

    @media (min-width: 1025px) {
    }
`

const Links = styled.div`
    display: flex;
    gap: 1.5rem;
    word-spacing: 0.5em;

    &.transitionIn {
        animation: ${fadeIn} 1s;
    }

    &.loadNew {
        opacity: 0;
    }

    &.transitionOut {
        animation: ${fadeOut} 0.35s;
    }
`

const Link = styled.a`
    padding: 1rem;
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