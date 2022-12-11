import styled from 'styled-components'


const About = () => {

    return (
        <Section className="section" id="about">
            <HeadingImage>
                <Heading>Hi, I'm Edward.</Heading>
                <Image src="./profile-picture.png"/>
            </HeadingImage>
            <Paragraph>
            I've recently started a Software Development course at CodeClan, which finishes in February 2023. 
            Before starting the course, I grew my expertise in Digital Marketing at a digital agency (80 DAYS) for seven years. 
            I thoroughly enjoyed my time there, continuously developing my skills surrounded by a great team and friends. 
            Whilst focusing more on data, usability and SEO over the years I developed a strong interest in UX, which I believe helps me develop more user-friendly apps.
            </Paragraph>
            <Paragraph>
            My passion for coding started whilst doing a Python course on Udemy.
            The ability to develop ideas and find new solutions to problems are some of the aspects of coding that drove me to take a career step change.
            </Paragraph>
            <Paragraph>
            Listed below are the main projects I've completed up until now. I hope you find them interesting and welcome any feedback/questions.
            </Paragraph>
        </Section>
    );
};

const Image = styled.img`
    max-width: 7rem;
    max-height: 7rem;
    padding-right: 2rem;

    @media (min-width: 769px) {
    }

    @media (min-width: 1025px) {
    }
`

const Section = styled.div`
    margin-top: 2rem;
`

const Heading = styled.h1`
    display: flex;
    align-items: center;
    font-family: "Kadwa";
    font-weight: 900;
    font-size: 2rem;
    color: #1de0a3;
    width: 100%;

    @media (min-width: 481px) {
        white-space: nowrap;
    }
    

    &:after {
        content: "";
        display: inline-block;
        margin: 0 1.5rem 0 1.5rem;
        width: 100%;
        vertical-align: middle;
        border-bottom: 0.1rem solid #2f344a;
    }
`

const Paragraph = styled.p`
    font-size: 1rem;
`

const HeadingImage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`

export default About;