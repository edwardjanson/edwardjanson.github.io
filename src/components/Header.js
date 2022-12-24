import styled from 'styled-components'


const Header = ({handleScroll}) => {

    return (
        <Section className="section" id="header">
            <ExternalLinks>
                <Link href="https://github.com/edwardjanson" target="_blank"><Icon src={process.env.PUBLIC_URL + "/media/github-icon.png"}></Icon></Link>
                <Link href="https://www.linkedin.com/in/edwardjanson/" target="_blank"><Icon src={process.env.PUBLIC_URL + "/media/linkedin-icon.png"}></Icon></Link>
            </ExternalLinks>
            <AnchorLinks>
                <Button onClick={(event) => handleScroll(event)} value="about">About</Button>
                <Button onClick={(event) => handleScroll(event)} value="skills">Skills</Button>
                <Button onClick={(event) => handleScroll(event)} value="projects">Projects</Button>
            </AnchorLinks>
        </Section>
    );
};

const Section = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #191c29;
    height: 3rem;
    width: 100%;
    margin-bottom: 4rem;
    max-width: inherit !important;
`

const ExternalLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 600px) {
        position: absolute;
        left: 0;
    }
`

const AnchorLinks = styled.div`
    position: absolute;
    right: 0;
`

const Link = styled.a`
`

const Button = styled.button`
    font-family: "Space Mono", Arial, Helvetica, sans-serif;
    background: transparent;
    border: 0;
    color: white;
    font-size: 0.9rem;

    &:hover {
        color: #f49f1c;
        cursor: pointer;
    }
`

const Icon = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1.4rem;
    max-height: 1.4rem;
    filter: brightness(0) invert(1);

    @media (hover:hover) {
        &:hover {
            filter: invert(70%) saturate(70%) sepia(1) hue-rotate(-10deg);
        }
    }
`

export default Header;