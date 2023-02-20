import { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import MediaCarousel from './MediaCarousel';


const Projects = ({handleScroll, updateButtonScroll}) => {

    const projectsInfo = [
        {
            name: "Group",
            description: [`My group capstone project for CodeClan. 
                        We developed this app to make planning an event with your friends easier and more convenient. 
                        We found that often it can be difficult to organise and plan an event using traditional messenger applications. 
                        Our app allows for a centralised planning platform, where users can see their upcoming events and arrange an event with ease.`,
                        `In the space of two weeks, we created brand guidelines to have a clear vision of the brand from the start, mapped class diagrams and user flows and agreed on ways of working.
                        This included 3-day sprints, daily stand-ups, taking turns with scrum master responsibilities, pair/mob programming, Trello board and GitHub conventions.
                        We also created detailed wireframes in Figma for the app's 23 screens and views and dedicated two learning days for React Native and TypeScript.`,
                        `The app allows users to:`,
                        `‣ Easily view upcoming events and polls that are still open for votes on the homepage`,
                        `‣ A groups screen with notifications to indicate an open poll`,
                        `‣ Create a new group and add members from the user's Group contact list`,
                        `‣ View a group's details including the next upcoming event and open poll`,
                        `‣ Create a new group and add members from the user's Group contact list`,
                        `‣ Create a new event, with the option to predefine information. If no information is provided polls a created in the following order of priority Date > Activity > Location`,
                        `‣ Add options to a poll and vote once per option`,
                        `‣ Use a calendar to find upcoming events by date (a dot below a date notifies the user that an event exists for that date) or use the list view to view all upcoming events`,
                        `‣ Update their details, update and remove groups, and remove events and contacts.`
                    ],
                            links: [["GitHub", "https://github.com/edwardjanson/group_app"]],
            technologies: ["Java", "Spring", "React Native", "TypeScript", "PostgreSQL"],
            media: [{videos: [
                "https://www.youtube.com/embed/BYUk4XB6sXw"
            ]},
            {images:[
                "/media/team.jpg",
            ]}]
        },
        {
            name: "CWV Checker",
            description: [`My capstone project for Harvard's CS50 Introduction to Computer Science course. 
                        With Core Web Vitals (CWV) becoming an increasing ranking factor in Google's search engine algorithm, it is important to stay on top of the performance of all pages on a website.`,
                        `Google's PageSpeed Insights report contains CWV metric stats, but requires individual checks to review multiple pages. 
                        Search Console provides an overview of CWV issues on a website per page, and this project aims to provide an alternative outwith Search Console.`,
                        `Google provides CWV metrics via the CrUX API and allows to get data at origin (homepage) and page level. 
                        This project uses the CrUX API and is currently deployed on an AWS EC2 instance.
                        I have outlined the process for this in the project's GitHub README.`,
                        `The process that this tool follows is as per the below:`,
                        `‣ A user inputs a website to investigate with the option to include and/or exclude specific URLs.`,
                        `‣ Website URLs are collected using internal links.`,
                        `‣ The CrUX API fetches CWV metrics for the collected URLs.`,
                        `‣ The metrics are displayed in a table at page level with a score of 'good', 'needs improvement' or 'poor'.`],
                            links: [["GitHub", "https://github.com/edwardjanson/cwv_checker"],
                    ["Website", "https://cwv-checker.edwardjanson.dev/"]],
            technologies: ["Python", "Flask"],
            media: [{videos: [
                "https://www.youtube.com/embed/VetSbRSZAFE"
            ]},
            {images:[
                "/media/cwv-home.png",
                "/media/cwv-report.png",
                "/media/cwv-about.png"
            ]}]
        },
        {
            name: "Budgissimo",
            description: [`My first solo capstone project at CodeClan. We were tasked to deliver a Python app with CRUD operations and RESTful routes in seven days. 
                        I decided to build a mobile-first web application that allows users to keep track of their online advertising budgets and spending across multiple platforms and campaigns. 
                        Tags can also be added to campaigns that share a common targeting location e.g., UK, a promotion e.g. 'Christmas Offer', and more. 
                        With tags, budget and spend can be viewed across multiple platforms in a single table.`,
                        `The app currently requires users to update budgets and spend manually.
                        To improve usability, I am planning to integrate a solution using the Google Sheets API.`,
                        `Features:`,
                        `‣ Create Platforms, Campaigns, Tag Categories and Tags`,
                        `‣ Set budgets and amount spent at Account, Platform, Campaign and Tag level`,
                        `‣ View recommended daily spend based on budget and amount spend in the current month`,
                        `‣ Add tags to campaigns to track spend across platforms`],
            links: [["GitHub", "https://github.com/edwardjanson/budgissimo"]],
            technologies: ["Python", "Flask", "PostgreSQL"],
            media: [{videos: [
                    ]},
                    {images:[
                        "/media/budgissimo-platforms.png",
                        "/media/budgissimo-edit.png"
                    ]}]
        },
        {
            name: "Trivimon Duel",
            description: [`This app was developed for a weekend project after week 1 of React at CodeClan. 
                            We were tasked to deliver an app that made use of an API.`,
                        `The gameplay:`,
                        `‣ Win a duel against the computer. The player and computer start with a randomly selected 'Trivimon' with different health points (HP) and moves.`,
                        `‣ The starting Trivimon is decided on the pace characteristic.`,
                        `‣ At the start of each round, the player answers a random multiple choice trivia question. 
                        On the player's round, an ability damage multiplier is set to x3 if answered correctly or x0.5 if answered incorrectly, and vice versa on the computer's round.`,
                        `‣ Once a Trivimon loses all HP, the winner is decided.`],
            links: [["GitHub", "https://github.com/edwardjanson/trivimon-duel"],
                    ["Website", "https://edwardjanson.github.io/trivimon-duel/"]],
            technologies: ["React"],
            media: [{videos: [
                    ]},
                    {images:[
                        "/media/trivimon-start.png",
                        "/media/trivimon-trivia.png",
                        "/media/trivimon-move.png",
                        "/media/trivimon-end.png"
                    ]}]
        },
        {
            name: "Shiatsu Website",
            description: [`This React website was developed for my mum, a Shiatsu practitioner. 
                        It is mobile-friendly and optimised from a technical SEO standpoint.`,
                        `Features and deployment:`,
                        `‣ Built with React`,
                        `‣ Mobile-friendly`,
                        `‣ Optimised for technical SEO: title tag, meta description, canonical tag, hreflang tags`,
                        `‣ Content available in English and German`,
                        `‣ Hosted on AWS S3`,
                        `‣ AWS Route 53 for its DNS service`,
                        `‣ CloudFront for its CDN service and to serve the website in HTTPS`],
            links: [["GitHub", "https://github.com/edwardjanson/shiatsu-website"],
                    ["Website", "https://www.shiatsutegernsee.de/"]],
            technologies: ["React"],
            media: [{videos: [
                    ]},
                    {images:[
                        "/media/shiatsu-1.png",
                        "/media/shiatsu-2.png"
                    ]}]
        },
        {
            name: "Climate Quiz",
            description: [`A group project to consolidate our learning following the CodeClan module on JavaScript and React.
                        We developed a full stack app in the form of an educational quiz on climate change and the different factors which affect it.`,
                        `Features:`,
                        `‣ A quiz that gives users feedback on their answers as well as information about the quizzed topic`,
                        `‣ The user can provide a nickname which is then saved within the database`,
                        `‣ The users receive points for answering correctly, increasing their total score`,
                        `‣ The score can be viewed in a leaderboard at the end of the game and can be removed by the user, which deletes the nickname and associated score from the database`],
            links: [["GitHub", "https://github.com/edwardjanson/climate_quiz"],
                    ["Website", "https://edwardjanson.github.io/climate_quiz/"]],
            technologies: ["React", "Express", "MongoDB"],
            media: [{videos: [
            ]},
            {images:[
                "/media/climate-quiz-1.png",
                "/media/climate-quiz-2.png",
                "/media/climate-quiz-3.png",
                "/media/climate-quiz-4.png"
            ]}]
        },
        {
            name: "Metronome",
            description: ["Half-day pair programming project with https://github.com/bsmith/ building a metronome using React."],
            technologies: ["React"],
            links: [["GitHub", "https://github.com/edwardjanson/metronome"],
                    ["Website", "https://edwardjanson.github.io/metronome/"]],
            media: [{videos: [
            ]},
            {images:[
                "/media/metronome.png"
            ]}]
        }
    ]

    const [selectedProjectIndex, handleProjectSelection] = useState(0);
    const [projectDetailsState, changeProjectDetailsState] = useState("transitionIn");
    const [initialRender, changeInitialRender] = useState(true);
    const [scrollDirection, changeScrollDirection] = useState("left");
    const [activeMedia, changeActiveMedia] = useState(0);
    const touchStart = useRef({x: null, y: null});
    const touchEnd = useRef({x: null, y: null});

    useEffect( () => {
        if (initialRender) {
            changeInitialRender(false);
          } else {            
            changeProjectDetailsState("loadNew");
            setTimeout(() => {
                changeProjectDetailsState("transitionIn");
            }, 100);

            setTimeout(() => {
            const project = document.getElementById(selectedProjectIndex);
            if (project) {
                updateButtonScroll(true);
                project.scrollIntoView({ behavior: "smooth", block: "nearest" })
          
                setTimeout(() => {
                    updateButtonScroll(false);
                }, 1000);
            }
            }, 150);
        }
    }, [selectedProjectIndex]);

    const changeSelectedProject = (index) => {
        index < selectedProjectIndex ? changeScrollDirection("right") : changeScrollDirection("left");
        if (index < 0 || index === projectsInfo.length || index === selectedProjectIndex) {
            return;
        } else {
            changeProjectDetailsState("transitionOut");
            setTimeout(() => {
                handleProjectSelection(index);
                changeProjectDetailsState("hide");
                changeActiveMedia(0);
            }, 400);
        }
    }

    // Swipe logic taken from: https://stackoverflow.com/questions/70612769/how-do-i-recognize-swipe-events-in-react
    const minSwipeDistance = 150;

    const onTouchStart = (e) => {
        touchEnd.current.x = null;
        touchEnd.current.y = null;
        touchStart.current.x = e.targetTouches[0].clientX;
        touchStart.current.y = e.targetTouches[0].clientY;
    }

    const onTouchMove = (e) => {
        touchEnd.current.x = e.targetTouches[0].clientX;
        touchEnd.current.y = e.targetTouches[0].clientY;
    }

    const onTouchEnd = () => {
        if (!touchStart.current.x || !touchEnd.current.x) return;
        const distanceX = touchStart.current.x - touchEnd.current.x;
        const distanceY = touchStart.current.y - touchEnd.current.y;
        const isLeftSwipe = distanceX > minSwipeDistance;
        const isRightSwipe = distanceX < -minSwipeDistance;
        
        if (isRightSwipe && Math.abs(distanceX) > distanceY) {
            changeSelectedProject(selectedProjectIndex - 1);
        }
        if (isLeftSwipe && distanceX > distanceY) {
            changeSelectedProject(selectedProjectIndex + 1);
        }
    }

    const projectNameList = projectsInfo.map((project, index) => {
        return ( 
                index === selectedProjectIndex && projectDetailsState === "transitionIn" ?
                <NavLi key={index} id="projectNav">
                    <Button key={index}
                            id={index}
                            onClick={(event) => {
                                    handleScroll(event);
                                    setTimeout(() => {
                                        changeSelectedProject(index);
                                    }, 500);
                                }
                            } 
                            value="projectNav"
                            active >
                            {project.name}
                    </Button>
                </NavLi>
                :
                <NavLi key={index}>
                    <Button key={index} 
                            onClick={(event) => {
                                handleScroll(event);
                                setTimeout(() => {
                                        changeSelectedProject(index);
                                    }, 100);
                                }
                            } 
                            value="projectNav" >
                            {project.name}
                    </Button>
                </NavLi>
        );
    });

    const projectDetails = projectsInfo.map((project, projectIndex) => {
        const projectParagraphs = project.description.map((paragraph, paragraphIndex) => {
            return ( 
                <Paragraph key={paragraphIndex}>{paragraph}</Paragraph>
        )})

        const projectLinks = project.links.map((link, linkIndex) => {
            return ( 
                <InfoLi key={linkIndex}>&#8227;<Link href={link[1]} target="blank">{link[0]}</Link></InfoLi>
        )})

        const projectTechs = project.technologies.map((tech, techIndex) => {
            return ( 
                <InfoLi key={techIndex}>&#8227;<Tech>{tech}</Tech></InfoLi>
        )})

        return (
                projectIndex === selectedProjectIndex ?
                <ProjectDetails key={projectIndex} scrollDirection={scrollDirection} className={projectDetailsState} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                    <MediaCarousel media={project.media} activeMedia={activeMedia} changeActiveMedia={changeActiveMedia} />
                    <Paragraphs>
                        {projectParagraphs}
                    </Paragraphs>
                    <Info>
                        <InfoBox>
                            <InfoHeading>Technologies</InfoHeading>
                            <InfoList>
                                {projectTechs}
                            </InfoList>
                        </InfoBox>
                        <InfoBox>
                            <InfoHeading>Links</InfoHeading>
                            <InfoList>
                                {projectLinks}
                            </InfoList>
                        </InfoBox>
                    </Info>
                    <Footer>
                        {selectedProjectIndex !== 0 ? 
                            <FooterNav onClick={(event) => {
                            handleScroll(event);
                            changeSelectedProject(selectedProjectIndex - 1);
                            }
                        } value="projectNav">&#8249; Previous</FooterNav>
                        :
                        ""
                        }
                        {selectedProjectIndex + 1 !== projectsInfo.length ?
                        <FooterNav onClick={(event) => {
                            handleScroll(event);
                            changeSelectedProject(selectedProjectIndex + 1);
                            }
                        } value="projectNav">Next &#8250;</FooterNav>
                        :
                        ""
                        }
                    </Footer>                
                </ProjectDetails>
                :
                <ProjectDetails key={projectIndex} className="hide" scrollDirection={scrollDirection} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                    <MediaCarousel media={project.media} activeMedia={activeMedia} changeActiveMedia={changeActiveMedia} />
                    <Paragraphs>
                        {projectParagraphs}
                    </Paragraphs>
                    <Info>
                        <InfoBox>
                            <InfoHeading>Technologies</InfoHeading>
                            <InfoList>
                                {projectTechs}
                            </InfoList>
                        </InfoBox>
                        <InfoBox>
                            <InfoHeading>Links</InfoHeading>
                            <InfoList>
                                {projectLinks}
                            </InfoList>
                        </InfoBox>
                    </Info>
                    <Footer>
                        {selectedProjectIndex !== 0 ? 
                            <FooterNav onClick={(event) => {
                            handleScroll(event);
                            changeSelectedProject(selectedProjectIndex - 1);
                            }
                        } value="projectNav">&#8249; Previous</FooterNav>
                        :
                        ""
                        }
                        {selectedProjectIndex + 1 !== projectsInfo.length ?
                        <FooterNav onClick={(event) => {
                            handleScroll(event);
                            changeSelectedProject(selectedProjectIndex + 1);
                            }
                        } value="projectNav">Next &#8250;</FooterNav>
                        :
                        ""
                        }
                    </Footer>                
                </ProjectDetails>
        );
    });

    return (
        <Section className="section" id="projects">
            <Heading>Projects</Heading>
            <ProjectSection>
                <Navigation>
                    <Sidescroll className={selectedProjectIndex === 0 ? "disable" : ""}
                                onClick={(event) => {
                                    handleScroll(event);
                                    setTimeout(() => {
                                        changeSelectedProject(selectedProjectIndex - 1);
                                        }, 100);
                                    }
                                } 
                                value="projectNav">&#8249;
                    </Sidescroll>
                    <NavList>
                        {projectNameList}
                    </NavList>
                    <Sidescroll className={selectedProjectIndex === projectsInfo.length - 1 ? "disable" : ""}
                                onClick={(event) => {
                                    handleScroll(event);
                                    setTimeout(() => {
                                        changeSelectedProject(selectedProjectIndex + 1);
                                        }, 100);
                                    }
                                } 
                                value="projectNav">&#8250;
                    </Sidescroll>
                </Navigation>
                {projectDetails}
            </ProjectSection>
        </Section>
    );
};


const Section = styled.div`
    margin-top: 4rem;
    justify-content: space-around;
`

const ProjectSection = styled.div`
    display: flex;
    flex-direction: column;
    height: 145rem;
    overflow: hidden;
    padding-bottom: 1rem;

    @media (min-width: 375px) {
        height: 136rem;
    }

    @media (min-width: 423px) {
        height: 125rem;
    }

    @media (min-width: 521px) {
        height: 121rem;
    }

    @media (min-width: 591px) {
        height: 116rem;
    }

    @media (min-width: 700px) {
        height: 108rem;
    }
`

const scrollInLeft = keyframes`
    0% { 
        transform: translateX(100%);
        opacity: 0;
    }
    100% { 
        transform: translateX(0rem);
        opacity: 1;
    }
`

const scrollOutLeft = keyframes`
    0% {
        transform: translateX(0rem);
        opacity: 1;
    }
    100% { 
        transform: translateX(-100%);
        opacity: 0;
    }
`

const scrollInRight = keyframes`
    0% { 
        transform: translateX(-100%);
        opacity: 0;
    }
    100% { 
        transform: translateX(0rem);
        opacity: 1;
    }
`

const scrollOutRight = keyframes`
    0% {
        transform: translateX(0rem);
        opacity: 1;
    }
    100% { 
        transform: translateX(100%);
        opacity: 0;
    }
`

const ProjectDetails = styled.div`
    margin-bottom: 3rem;
    margin-top: -0.1rem;
    max-width: 45rem;
    background: #2f344a;
    height: 100%;

    &.hide {
        display: none;
    }

    &.transitionIn {
        animation: ${props => props.scrollDirection === "left" ? scrollInLeft : scrollInRight} 0.4s;
    }

    &.loadNew {
        opacity: 0;
    }

    &.transitionOut {
        animation: ${props => props.scrollDirection === "left" ? scrollOutLeft : scrollOutRight} 0.4s;
    }
`

const Navigation = styled.nav`
    display: flex;
    align-items: center;
`

const Sidescroll = styled.button`
    font-family: "Rajdhani", Arial, Helvetica, sans-serif;
    background: linear-gradient(to top, #2f344a 50%, transparent 50%);
    background-position: 0% 0%;
    background-size: 100% 200%;
    transition: all .4s ease;
    color: #f5f5f5;
    border: 0;
    margin: 0;
    font-size: 1.75rem;
    padding: 0.58rem;
    text-align: center;

    &.disable {
        opacity: 0.3;
        color: #b0b0b0;
        pointer-events: none;
    }

    @media (hover:hover) {
        &:hover {
            background-position: 0% 100%;
            cursor: pointer;
            color: #f49f1c;
        }
    }

    &:active {
        color: #f49f1c;
    }
`

const Heading = styled.h2`
    margin-top: -1rem;
    padding-top: 1rem;
    display: flex;
    align-items: center;
    font-weight: 900;
    font-size: 2rem;
    width: 100%;
    white-space: nowrap;
    margin-bottom: 3rem;

    &:after {
        content: "";
        display: inline-block;
        margin: 0 auto 0 1.5rem;
        width: 100%;
        vertical-align: middle;
        border-bottom: 0.1rem solid #2f344a;
    }
`

const Paragraphs = styled.div`
    padding: 0.5rem;
    width: 90%;
    margin: auto;
`

const Paragraph = styled.p`
`

const NavList = styled.ul`
    padding: 0;
    display: flex;
    align-items: center;
    width: 100%;
    overflow: auto;
`

const NavLi = styled.li`
    display: flex;
    list-style: none;
    margin: 0;
    width: 100%;
`

const Button = styled.button`
    font-family: "Rajdhani", Arial, Helvetica, sans-serif;
    background: linear-gradient(to top, #2f344a 50%, transparent 50%);
    background-position: ${props => props.active ? "0% 100%" : "0% 0%"};
    background-size: 100% 200%;
    transition: all .4s ease;
    color: ${props => props.active ? "#f49f1c" : "#f5f5f5"};
    border: 0;
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    white-space: nowrap; 

    @media (hover:hover) {
        &:hover {
            color: #f49f1c;
            cursor: pointer;
        }
    }
`

const Info = styled.div`
    display: flex;
    gap: 2rem;
    width: 90%;
    margin-left: 10%;
    color: #c5c5c7;

    @media (min-width: 700px) {
        margin-left: 7.5%;
    }
`

const InfoBox = styled.div`
    margin-top: 1.5rem;
    border-top: 1px solid #c5c5c7;
    width: 9rem;
    padding-top: 1rem;
`

const InfoHeading = styled.span`
    font-weight: bold;
`

const InfoList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0.5rem 0;
`

const InfoLi = styled.li`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

const Tech = styled.span`
`

const Link = styled.a`
    font-size: 1.1rem;
    color: #f49f1c;
    text-decoration: none;
    word-spacing: -0.3rem;

    @media (hover:hover) {
        &:hover {
            font-weight: bold;
            cursor: pointer;
        }
    }
`

const Footer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    gap: 1rem;
`

const FooterNav = styled.button`
    font-family: "Rajdhani", Arial, Helvetica, sans-serif;
    background: transparent;
    border: 1px solid white;
    color: white;
    padding: 0.5rem;
    font-size: 1.1rem;
    width: 8rem;

    &:active {
        color: #f49f1c;
        border: 1px solid #f49f1c;
    }

    @media (hover:hover) {
        &:hover {
            border: 1px solid #f49f1c;
            color: #f49f1c;
            cursor: pointer;
        }
    }
`

export default Projects;