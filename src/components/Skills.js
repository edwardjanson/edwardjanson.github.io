import styled from 'styled-components'
import Typewriter from 'typewriter-effect';


const Skills = () => {

    return (
        <Section className="section" id="skills">
            <Heading>Skills</Heading>
            <Boxes>
                <Box>
                    <BoxHeading>
                        <Icon src={process.env.PUBLIC_URL + "/media/code-icon.png"} />
                        Languages
                    </BoxHeading>
                    <Paragraph>
                        Python, Node.js, Java, SQL
                    </Paragraph>
                </Box>
                <Box>
                    <BoxHeading>
                    <Icon src={process.env.PUBLIC_URL + "/media/library-framework-icon.png"} />
                        Frameworks & Libraries
                    </BoxHeading>
                    <Paragraph>
                        Flask, React, Express, Spring Boot
                    </Paragraph>
                </Box>
                <Box>
                    <BoxHeading>
                        <Icon src={process.env.PUBLIC_URL + "/media/software-icon.png"} />
                        Technologies
                    </BoxHeading>
                    <Paragraph>
                        Git, GitHub, MongoDB, PostgreSQL, AWS  
                    </Paragraph>
                </Box>
                <Box>
                    <BoxHeading>
                        <Icon src={process.env.PUBLIC_URL + "/media/testing-icon.png"} />
                        Test Driven Development
                    </BoxHeading>
                    <Paragraph>
                        UnitTest, Mocha, Junit, Selenium, Cypress 
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

const Icon = styled.img`
    height: 1.5rem;
`

const Boxes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;
`

const Box = styled.div`
    width: 85%;
    padding: 0.5rem 1rem;
    border: 0.1rem solid #2f344a;
    min-height: 6.5rem;

    @media (min-width: 700px) {
        height: 7rem;
        width: 39%;
    }
`

const BoxHeading = styled.h3`
    display: flex;
    gap: 0.6rem;
    align-items: center;
    font-size: 1rem;
    height: 1rem;
`

const Paragraph = styled.p`
    display: flex;
    align-items: center;
    height: 50%;
    margin-left: 0.7rem;
    padding-left: 1rem;
    border-left: 0.1rem solid #f49f1c;
`

export default Skills;