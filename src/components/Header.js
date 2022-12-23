import styled from 'styled-components'


const Header = () => {

    return (
        <Section className="section" id="header">
            <a href="https://github.com/edwardjanson" target="_blank"><Icon src={process.env.PUBLIC_URL + "/media/github-icon.png"}></Icon></a>
            <a href="https://www.linkedin.com/in/edwardjanson/" target="_blank"><Icon src={process.env.PUBLIC_URL + "/media/linkedin-icon.png"}></Icon></a>
        </Section>
    );
};

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    gap: 1.5rem;
`
const Icon = styled.img`
    max-width: 1.5rem;
    max-height: 1.5rem;
    filter: brightness(0) invert(1);

    @media (hover:hover) {
        &:hover {
            filter: invert(70%) saturate(70%) sepia(1) hue-rotate(-10deg);
        }
    }
`

export default Header;