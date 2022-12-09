import styled from 'styled-components'


const Project = () => {

const Section = styled.div`
    justify-content: space-around;
    max-width: 40rem;
`

const Heading = styled.h1`
    font-family: "Kadwa";
    font-weight: 900;
    font-size: 1.5rem;
    color: #1de0a3;
`

const Paragraph = styled.p`
`

    return (
        <Section className="section" id="project">
            <Heading>My Project Name</Heading>
            <Paragraph>bla</Paragraph>
        </Section>
    );
};
export default Project;