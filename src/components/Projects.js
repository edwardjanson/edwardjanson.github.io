import styled from 'styled-components'

import Project from './Project';
import ProjectList from './ProjectList';


const Projects = () => {

const Section = styled.div`
    justify-content: space-around;
    max-width: 40rem;
`

const ProjectSection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`

const Heading = styled.h1`
    font-family: "Kadwa";
    font-weight: 900;
    font-size: 2rem;
    color: #1de0a3;
`

const Paragraph = styled.p`
`

    return (
        <Section className="section" id="projects">
            <Heading>My Projects</Heading>
            <ProjectSection>
                <ProjectList />
                <Project />
            </ProjectSection>
        </Section>
    );
};
export default Projects;