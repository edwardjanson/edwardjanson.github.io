import userEvent from '@testing-library/user-event';
import { useEffect, useState } from 'react';
import styled from 'styled-components'


const MediaCarousel = ({media}) => {

    const MediaItems = media.map((type) => {
        const mediaFound = []

        if (Object.keys(type)[0] === "videos") {
            const videosFound = type.videos.map((video, index) => {
                    return <Iframe key={index} src={video} />
            })
            mediaFound.push(videosFound)
        }

        if (Object.keys(type)[0] === "images") {
            const ImagesFound = type.images.map((image, index) => {
                return <Image key={index + 100} src={process.env.PUBLIC_URL + image} />
            })
            mediaFound.push(ImagesFound)
        }

        return mediaFound
    })

    return (
        <Section className="section" id="media-carousel">
            {MediaItems}
        </Section>
    );
};


const Section = styled.div`
    width: 80%;
    height: 20%;
    margin: 3rem auto 2rem;
    border: 1px solid black;
`

const Iframe = styled.iframe`
    max-width: 100%;
`

const Image = styled.img`
    max-height: 100%;
    max-width: 100%;
`

export default MediaCarousel;