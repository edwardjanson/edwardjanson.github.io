import styled from 'styled-components'


const About = () => {

    return (
        <Section className="section" id="about">
            <HeadingImage>
                <Heading>Hi, I'm Edward <br/>
                And ................</Heading>
                <Image src="./profile-picture.png"/>
            </HeadingImage>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed vulputate mi sit amet. Odio ut sem nulla pharetra diam sit amet nisl. Diam vel quam elementum pulvinar etiam non quam.</Paragraph>
        </Section>
    );
};

const Image = styled.img`
    max-width: 10rem;
    max-height: 10rem;

    @media (min-width: 769px) {
    }

    @media (min-width: 1025px) {
    }
`

const Section = styled.div`
    justify-content: space-around;
    max-width: 40rem;
`

const Heading = styled.h1`
    font-family: "Kadwa";
    font-weight: 900;
    font-size: 2rem;
    color: #1de0a3;
`

const Paragraph = styled.p`
`

const HeadingImage = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export default About;