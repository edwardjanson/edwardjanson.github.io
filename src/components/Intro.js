import styled from 'styled-components';
import Typewriter from 'typewriter-effect';


const Intro = ({updateIntro}) => {

    return (
        <Section className="section" id="intro">
            <HeadingImage>
                <Image src={process.env.PUBLIC_URL + "/media/intro.gif"}/>
                <Heading>
                    <Typewriter
                    options={{
                        delay: "natural",
                        changeDeleteSpeed: 800
                    }}
                    onInit={(typewriter) => {
                        typewriter
                        .start()
                        .pauseFor(500)
                        .typeString("Hi,")
                        .pauseFor(200)
                        .typeString(" I'm Edward")
                        .pauseFor(200)
                        .deleteChars(4)
                        .pauseFor(100)
                        .typeString(".")
                        .callFunction(() => {
                            updateIntro();
                        });	
                    }}
                    />
                </Heading>
            </HeadingImage>
        </Section>
    );
};

const Image = styled.img`
    max-width: 10rem;
    max-height: 7rem;
    border-radius: 50%;
    border: 0.1rem solid #2f344a;
`

const Section = styled.div`
    margin-top: 5rem;
`

const Heading = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    font-size: 2rem;
    width: 15rem;
    height: 2rem;
    width: 100%;

    @media (min-width: 410px) {
        white-space: nowrap;
    }
`

const HeadingImage = styled.div`
    margin-top: -5rem;
    padding-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    gap: 3rem;
`

export default Intro;