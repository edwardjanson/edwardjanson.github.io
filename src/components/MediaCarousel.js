import userEvent from '@testing-library/user-event';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components'


const MediaCarousel = ({media}) => {

    const [activeMedia, changeActiveMedia] = useState(0);
    const videoCount = useRef(0);

    useEffect(() => {

    }, [activeMedia])

    const mediaItems = media.map((type) => {
        const mediaFound = []

        if (Object.keys(type)[0] === "videos") {
            videoCount.current = type.videos.length;
            const videosFound = type.videos.map((video, videoIndex) => {
                return <Iframe className={videoIndex === activeMedia? "show" : "hide"} src={video} key={videoIndex}/>
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
        changeActiveMedia(activeMedia + 1)
    }

    return (
        <Section className="section" id="media-carousel">
            {mediaItems}
            <button onClick={increaseOne}>next</button>
        </Section>
    );
};


const Section = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    height: 15rem;
    margin: 3rem auto 2rem;
    border: 1px solid black;
`

const Iframe = styled.iframe`
    max-width: 100%;

    &.hide {
        display: none;
    }
`

const Image = styled.img`
    max-height: 100%;
    max-width: 100%;

    &.hide {
        display: none;
    }
`

export default MediaCarousel;