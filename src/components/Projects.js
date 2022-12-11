import { useEffect, useState } from 'react';
import styled from 'styled-components'


const Projects = () => {

    const projectsInfo = [
        {
            name: "Budgissimo",
            description: "This is the description for 1",
            link: "link.com"
        },
        {
            name: "Trivimon Duel",
            description: "This is the description for 2",
            link: "link.com"
        },
        {
            name: "CWV Checker",
            description: "This is the description for 3",
            link: "link.com"
        },
        {
            name: "Project 4",
            description: "This is the description for 4",
            link: "link.com"
        },
        {
            name: "Project 5",
            description: "This is the description for 5",
            link: "link.com"
        }
    ]

    const [selectedProject, handleProjectSelection] = useState(projectsInfo[0]);

    useEffect( () => {
        const project = document.getElementById(projectsInfo.map(project => project.name).indexOf(selectedProject.name));
        if (project) {
          project.scrollIntoView({behavior: "smooth"})
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
                <Li><Button key={index}
                            id={index}
                            onClick={() => changeSelectedProject(index)} 
                            active >
                            {project.name}
                </Button></Li>
                :
                <Li><Button key={index} 
                onClick={() => changeSelectedProject(index)} >
                {project.name}
                </Button></Li>
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
                <Link>{selectedProject.link}</Link>
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

    &:hover {
        background-position: 0% 100%;
        color: #1de0a3;
    }

    &:active {
        font-weight: bold;
        background-color: #2f344a;
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
    padding: 1rem 1.6rem;
    font-size: 0.8rem;
    white-space: nowrap; 

    &:hover {
        background-position: 0% 100%;
        color: #1de0a3;
        cursor: pointer;
    }

    &:active {
        font-weight: bold;
    }
`

const Link = styled.a`
    font-size: 1.5rem;
    color: #1de0a3;
`

export default Projects;