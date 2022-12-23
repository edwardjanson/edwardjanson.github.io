import styled from 'styled-components'
import Typewriter from 'typewriter-effect';


const Skills = () => {

    return (
        <Section className="section" id="skills">
            <Heading>Skills</Heading>
            <Boxes>
                <Box>
                    <BoxHeading>Technologies</BoxHeading>
                    <Paragraph>
                    </Paragraph>
                </Box>
                <Box>
                    <BoxHeading>Frameworks</BoxHeading>
                    <Paragraph>
                    </Paragraph>
                </Box>
                <Box>
                    <BoxHeading>Agile Development</BoxHeading>
                    <Paragraph>
                    </Paragraph>
                </Box>
            </Boxes>
        </Section>
    );
};


const Section = styled.div`
    margin-top: 4rem;
`

const Heading = styled.h2`
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

const Boxes = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 3rem;
`

const Box = styled.div`
    width: 30%;
    padding: 0.5rem 1rem;
    border: 0.1rem solid #2f344a;
`

const BoxHeading = styled.h3`
`

const Paragraph = styled.p`
`

export default Skills;