import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Modal } from 'react-responsive-modal';


const MediaCarousel = ({media, activeMedia, changeActiveMedia}) => {

    const videoCount = useRef(0);
    const [open, setOpen] = useState(false);

    const closeIcon = (
        <ModalButton className="close"><sup>&#8690;</sup><sub>&#8689;</sub></ModalButton>
      );

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
        if (activeMedia + 1 < (media[0].videos.length + media[1].images.length)) {
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
                    <SmallButton className={activeMedia === 0 ? "side disable" : "side"} onClick={decreaseOne}>&#8249;</SmallButton>
                </SmallNav>
                <SmallMedia>
                    {mediaItems}
                </SmallMedia>
                <SmallNav>
                    <SmallButton className="open" onClick={onOpenModal}><sup>&#8689;</sup><sub>&#8690;</sub></SmallButton>
                    <SmallButton className={activeMedia === media[0].videos.length + media[1].images.length - 1 ? "side disable" : "side"} onClick={increaseOne}>&#8250;</SmallButton>
                </SmallNav>
            </Section>
            <Modal open={open} onClose={onCloseModal} closeIcon={closeIcon}>
                <ModalNav>
                    <ModalButton className={activeMedia === 0 ? "left disable" : "left"} onClick={decreaseOne}>&#8249;</ModalButton>
                </ModalNav>
                <ModalMedia>
                    {mediaItems}
                </ModalMedia>
                <ModalNav>
                    <ModalButton className={activeMedia === media[0].videos.length + media[1].images.length - 1 ? "right disable" : "right"} onClick={increaseOne}>&#8250;</ModalButton>
                </ModalNav>
            </Modal>
        </Container>
    );
};

const Container = styled.div`
`

const Section = styled.div`
    display: flex;
    justify-content: center;
    width: 15rem;
    height: 10.25rem;
    margin: 3rem auto 2rem;

    @media (min-width: 375px) {
        width: 19.5rem;
        height: 13.3rem;
    }

    @media (min-width: 423px) {
        width: 22rem;
        height: 15rem;
    }

    @media (min-width: 521px) {
        width: 28.5rem;
        height: 19.4rem;
    }

    @media (min-width: 591px) {
        width: 31rem;
        height: 21.2rem;
    }

    @media (min-width: 751px) {
        width: 36rem;
        height: 24.6rem;
    }

    & .side {
        text-shadow: 1px 1px 3px black;
        z-index: 1;
        height: 100%;
        font-size: 3rem;
        background-color: transparent;
        color: white;
        border: 0;
    }

    & .open {
        text-shadow: 1px 1px 3px black;
        margin-bottom: -145%;
        z-index: 2;
        top: 0;
        right: 0;
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
    width: 100%;
    margin: 0 -2.1rem;
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
    padding: 0;

    &.disable {
        color: #b0b0b0;
        pointer-events: none;
    }

    &:active {
        color: #f49f1c;
    }

    @media (hover:hover) {
        &:hover {
            color: #f49f1c !important;
            cursor: pointer;

            &.disable {
            color: grey;
            }

        }
    }
`

const ModalButton = styled.button`
    font-family: "Space Mono", Arial, Helvetica, sans-serif;
    z-index: 1;
    position: absolute;
    background: transparent;
    color: white;
    border: 0;
    text-shadow: 1px 1px 3px black;

    &.left, &.right {
        font-size: 3rem;

        @media (min-width: 421px) {
            font-size: 4rem;
        }
    }

    &.left {
        top: 45%;
    }

    &.right {
        top: 45%;
        right: 0;
    }

    &.close {
        top: 0;
        right: 0;
        font-size: 1.5rem;
    }

    &.disable {
        color: #b0b0b0;
        pointer-events: none;
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