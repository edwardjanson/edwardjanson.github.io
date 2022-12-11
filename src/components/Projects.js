import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components'


const Projects = () => {

    const projectsInfo = [
        {
            name: "Budgissimo",
            description: `My first solo capstone project at CodeClan which needed to be built in seven days.
                            A mobile-first web application with CRUD operations and RESTful routes that allows users
                            to keep track of their online advertising budgets and spending across multiple platforms and campaigns.`,
            links: [["GitHub", "https://github.com/edwardjanson/budgissimo"]]
        },
        {
            name: "Trivimon Duel",
            description: "This is the description for 2",
            links: [["GitHub", "https://github.com/edwardjanson/trivimon-duel"],
                    ["Website", "https://edwardjanson.github.io/trivimon-duel/"]]
        },
        {
            name: "CWV Checker",
            description: "This is the description for 3",
            links: [["GitHub", "https://github.com/edwardjanson/cs50_final_project"],
                    ["Website", "https://core-web-vitals-checker.herokuapp.com/"],
                    ["Video", "https://www.youtube.com/watch?v=VetSbRSZAFE"]]
        },
        {
            name: "Metronome",
            description: "This is the description for 4",
            links: [["GitHub", "https://github.com/edwardjanson/metronome"],
                    ["Website", "https://edwardjanson.github.io/metronome/"]]
        }
    ]

    const [selectedProject, handleProjectSelection] = useState(projectsInfo[0]);
    const [initialRender, changeInitialRender] = useState(true);

    useEffect( () => {
        if (initialRender) {
            changeInitialRender(false);
          } else {
            const project = document.getElementById(projectsInfo.map(project => project.name).indexOf(selectedProject.name));
            if (project) {
            project.scrollIntoView({behavior: "smooth"})
        }
        }
    }, [selectedProject])
    
    const changeSelectedProject = (index) => {
        const currentProjectIndex = projectsInfo.map(project => project.name).indexOf(selectedProject.name)

        if (typeof index === "number") {
            handleProjectSelection(projectsInfo[index])
        } else {
            if (index === "+1") {
                if (currentProjectIndex + 1 !== projectsInfo.length) {
                    handleProjectSelection(projectsInfo[currentProjectIndex + 1])
                }
            } else {
                if (currentProjectIndex - 1 !== -1) {
                    handleProjectSelection(projectsInfo[currentProjectIndex - 1])
                }
            }
        }
    }

    const projectNameList = projectsInfo.map((project, index) => {
        return ( 
                project.name === selectedProject.name ?
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
    })

    const projectLinkList = selectedProject.links.map((link, index) => {
        return ( 
                <Link key={index} href={link[1]} target="blank">&#10157; {link[0]}</Link>
        );
    })

    return (
        <Section className="section" id="projects">
            <Heading>My Projects</Heading>
            <ProjectSection>
                <Navigation>
                    <Sidescroll onClick={() => changeSelectedProject("-1")}>&#8249;</Sidescroll>
                    <List>
                        {projectNameList}
                    </List>
                    <Sidescroll onClick={() => changeSelectedProject("+1")}>&#8250;</Sidescroll>
                </Navigation>
                <Paragraph>{selectedProject.description}</Paragraph>
                <Links>
                    {projectLinkList}
                </Links>
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
    transition: all .3s ease;
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
            color: #1de0a3;
        }
    }

    &:active {
        color: #1de0a3;
    }
`

const Heading = styled.h1`
    display: flex;
    align-items: center;
    font-family: "Kadwa";
    font-weight: 900;
    font-size: 2rem;
    color: #1de0a3;
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
    transition: all .3s ease;
    color: ${props => props.active ? "#1de0a3" : "#f5f5f5"};
    border: 0;
    border-bottom: 0.1rem solid #2f344a;
    padding: 1rem 1.5rem;
    font-size: 0.8rem;
    white-space: nowrap; 

    &:hover {
        background-position: 0% 100%;
        color: #1de0a3;
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
`

const Link = styled.a`
    font-size: 1rem;
    color: #1de0a3;
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