import { useEffect, useState, useRef } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import styled from 'styled-components'


const MediaCarousel = ({media}) => {

    const [activeMedia, changeActiveMedia] = useState(0);
    const [fullScreen, changeViewType] = useState(false);
    const videoCount = useRef(0);

    useEffect(() => {

    }, [activeMedia])

    const mediaItems = media.map((type) => {
        const mediaFound = []

        if (Object.keys(type)[0] === "videos") {
            videoCount.current = type.videos.length;
            const videosFound = type.videos.map((video, videoIndex) => {
                return <Iframe allow="fullscreen;" className={videoIndex === activeMedia? "show" : "hide"} src={video} key={videoIndex}/>
            })
            mediaFound.push(videosFound)
        }

        if (Object.keys(type)[0] === "images") {
            const ImagesFound = type.images.map((image, imageIndex) => {
                return <Image className={videoCount.current + imageIndex === activeMedia? "show" : "hide"} src={process.env.PUBLIC_URL + image} key={videoCount.current + imageIndex}/>
            })
            mediaFound.push(ImagesFound)
        }

        return mediaFound;
    })

    const increaseOne = () => {
        console.log(mediaItems[0].length + mediaItems[1].length)
        if (activeMedia + 1 <= (mediaItems[0].length + mediaItems[1].length)) {
            changeActiveMedia(activeMedia + 1)
        }
    }

    const decreaseOne = () => {
        if (activeMedia - 1 !== -1) {
            changeActiveMedia(activeMedia - 1)
        }
    }

    const fullScreenHandle = useFullScreenHandle();

    return (
        <Container>
            <Section className="smallscreen">
                <MediaNav>
                    <Button className="side" onClick={decreaseOne}>&#8249;</Button>
                </MediaNav>
                <Media>
                    {mediaItems}
                </Media>
                <MediaNav>
                    <Button className="open" onClick={fullScreenHandle.enter}><sup>&#8689;</sup><sub>&#8690;</sub></Button>
                    <Button className="side" onClick={increaseOne}>&#8250;</Button>
                </MediaNav>
            </Section>
            <FullScreen handle={fullScreenHandle}>
                <MediaNav>
                    <Button className="side" onClick={decreaseOne}>&#8249;</Button>
                </MediaNav>
                <Media>
                    {mediaItems}
                </Media>
                <MediaNav>
                    <Button className="close" onClick={fullScreenHandle.exit}><sup>&#8690;</sup><sub>&#8689;</sub></Button>
                    <Button className="side" onClick={increaseOne}>&#8250;</Button>
                </MediaNav>
            </FullScreen>
        </Container>
    );
};


const Container = styled.div`
    & .fullscreen {
        display: none;
    }

    & .fullscreen-enabled {
        display: flex;
        justify-content: center;
    }

    & .fullscreen .side {
        height: 100%;
        font-size: 2rem;
        padding: 0.5rem;
        background-color: transparent;
        color: white;
        border: 0;

        @media (min-width: 421px) {
            padding: 1rem;
            font-size: 3rem;
        }
    }

    & .fullscreen .close {
        height: 0;
        z-index: 2;
        top: 0%;
        right: 0%;
        font-size: 1.5rem;
        background-color: transparent;
        color: white;
        border: 0;
    }
`

const Section = styled.div`
    display: flex;
    justify-content: center;
    width: 75%;
    height: 8rem;
    margin: 3rem auto 2rem;
    border: 0;

    @media (min-width: 423px) {
        height: 10rem;
    }

    @media (min-width: 521px) {
        height: 13rem;
    }

    @media (min-width: 591px) {
        height: 15rem;
    }

    @media (min-width: 751px) {
        height: 20rem;
    }

    & .side {
        z-index: 1;
        width: 5%;
        height: 100%;
        font-size: 2rem;
        background-color: transparent;
        color: white;
        border: 0;
    }

    & .open {
        height: 0;
        z-index: 2;
        top: 0%;
        right: 0%;
        font-size: 1rem;
        background-color: transparent;
        color: white;
        border: 0;
    }
`

const MediaNav = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #191c29;

    & .button {
        font-family: "Space Mono", Arial, Helvetica, sans-serif;
    }
`

const Media = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    background-color: #191c29;
`

const Iframe = styled.iframe`
    width: 10rem;
    object-fit: contain;
    border: 0;

    &.hide {
        display: none;
    }

    @media (min-width: 423px) {
        width: 15rem;
    }

    @media (min-width: 521px) {
        width: 30rem;
    }

    @media (min-width: 591px) {
        width: 40rem;
    }

    @media (min-width: 751px) {
        width: 100rem;
    }
`

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;

    &.hide {
        display: none;
    }
`

const Button = styled.button`
    font-family: "Space Mono", Arial, Helvetica, sans-serif;
    z-index: 1;

    &:active {
        color: #f49f1c;
    }

    @media (hover:hover) {
        &:hover {
            color: #f49f1c !important;
            cursor: pointer;
        }
    }
`

export default MediaCarousel;