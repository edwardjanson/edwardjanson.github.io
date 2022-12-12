import styled from 'styled-components'
import Typewriter from 'typewriter-effect';


const About = () => {

    return (
        <Section className="section" id="about">
            <HeadingImage>
                <Heading>
                <Typewriter
                options={{
                    delay: "natural",
                    changeDeleteSpeed: 800
                }}
                onInit={(typewriter) => {
                    typewriter
                    .start()
                    .pauseFor(200)
                    .typeString("Hi,")
                    .pauseFor(200)
                    .typeString(" I'm Edward")
                    .pauseFor(200)
                    .deleteChars(4)
                    .pauseFor(100)
                    .typeString(".")
                    .callFunction(() => document.getElementsByClassName("Typewriter__cursor")[0].innerHTML = "");	
                }}
            />
                </Heading>
                <Image src={process.env.PUBLIC_URL + "/intro.gif"}/>
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
    max-width: 10rem;
    max-height: 7rem;
    border-radius: 50%;
    border: 0.1rem solid #2f344a;

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
    color: #f49f1c;
    width: 15rem;
    height: 2rem;
    width: 100%;

    @media (min-width: 410px) {
        white-space: nowrap;
    }

    &:after {
        content: "";
        display: inline-block;
        vertical-align: middle;
        margin-right: 1rem;
        border-bottom: 0.1rem solid #2f344a;
        
        @media (min-width: 447px) {
            margin: 0 2rem 0 1.5rem;
            width: 100%;
        }
    }
`

const Paragraph = styled.p`
`

const HeadingImage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`

export default About;