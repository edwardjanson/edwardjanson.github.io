import styled from 'styled-components'


const ProjectList = () => {

const Section = styled.div`
    justify-content: space-around;
    max-width: 40rem;
`

const List = styled.ul`
    justify-content: space-around;
    max-width: 40rem;
`

const Li = styled.li`
    justify-content: space-around;
    max-width: 40rem;
    list-style: none;
`

    return (
        <Section className="section" id="project-list">
            <List>
                <Li>project 1</Li>
                <Li>project 2</Li>
                <Li>project 3</Li>
                <Li>project 4</Li>
            </List>
        </Section>
    );
};

export default ProjectList;