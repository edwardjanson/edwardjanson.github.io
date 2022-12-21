import { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components'
import { Modal } from 'react-responsive-modal';


const MediaCarousel = ({media}) => {

    const [activeMedia, changeActiveMedia] = useState(0);
    const videoCount = useRef(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {

    }, [activeMedia])

    const mediaItems = media.map((type) => {
        const mediaFound = []

        if (Object.keys(type)[0] === "videos") {
            videoCount.current = type.videos.length;
            const videosFound = type.videos.map((video, videoIndex) => {
                return <Iframe allow="fullscreen;" className={videoIndex === activeMedia? "show" : "hide"} src={video} key={videoIndex + "?rel=0&modestbranding=1"} width="1120" height="630"/>
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

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <Container>
            <Section className="media">
                <SmallNav>
                    <SmallButton className="side" onClick={decreaseOne}>&#8249;</SmallButton>
                </SmallNav>
                <SmallMedia>
                    {mediaItems}
                </SmallMedia>
                <SmallNav>
                    <SmallButton className="open" onClick={onOpenModal}><sup>&#8689;</sup><sub>&#8690;</sub></SmallButton>
                    <SmallButton className="side" onClick={increaseOne}>&#8250;</SmallButton>
                </SmallNav>
            </Section>
            <Modal open={open} onClose={onCloseModal} animationIn="fadeIn" animationOut="fadeOut">
                <ModalNav>
                    <ModalButton className="left" onClick={decreaseOne}>&#8249;</ModalButton>
                </ModalNav>
                <ModalMedia>
                    {mediaItems}
                </ModalMedia>
                <ModalNav>
                    <ModalButton className="close" onClick={onCloseModal}><sup>&#8690;</sup><sub>&#8689;</sub></ModalButton>
                    <ModalButton className="right" onClick={increaseOne}>&#8250;</ModalButton>
                </ModalNav>
            </Modal>
        </Container>
    );
};

const Container = styled.div`

    & .react-responsive-modal-modal {
        background: blue;
    }

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
    width: 15rem;
    height: 7.6rem;
    margin: 3rem auto 2rem;
    border: 0;

    @media (min-width: 375px) {
        width: 18rem;
        height: 9.5rem;
    }

    @media (min-width: 423px) {
        width: 20rem;
        height: 11rem;
    }

    @media (min-width: 521px) {
        width: 26rem;
        height: 15rem;
    }

    @media (min-width: 591px) {
        width: 30rem;
        height: 18rem;
    }

    @media (min-width: 751px) {
        width: 38rem;
        height: 23rem;
    }

    & .side {
        z-index: 1;
        height: 100%;
        font-size: 3rem;
        background-color: transparent;
        color: white;
        border: 0;
    }

    & .open {
        margin-bottom: -110%;
        z-index: 2;
        top: 0%;
        right: 0%;
        font-size: 1.5rem;
        background-color: transparent;
        color: white;
        border: 0;
    }
`

const SmallNav = styled.div`
    display: flex;
    flex-direction: column;

    & .button {
        font-family: "Space Mono", Arial, Helvetica, sans-serif;
    }
`

const ModalNav = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #191c29;

    & .button {
        font-family: "Space Mono", Arial, Helvetica, sans-serif;
    }
`

const SmallMedia = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
`

const ModalMedia = styled.div`
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 75vh;
    background-color: transparent;
    position: absolute;

    & img, iframe {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
`

const Iframe = styled.iframe`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border: 0;

    &.hide {
        display: none;
    }

    & .ytp-swatch-background-color { background-color: green !important; }
`

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;

    &.hide {
        display: none;
    }
`

const SmallButton = styled.button`
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

const ModalButton = styled.button`
    font-family: "Space Mono", Arial, Helvetica, sans-serif;
    z-index: 1;
    position: absolute;

    &.left {
        top: 50%;
    }

    &.right {
        top: 50%;
        left: 90%;
    }

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