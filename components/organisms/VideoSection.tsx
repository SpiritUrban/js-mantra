import React from 'react';
import styled from 'styled-components';
import YouTubeFrame from './YouTubeFrame';
import Button from "react-bootstrap/Button";
import Link from 'next/link';


interface VideoData {
    title: string;
    video_id: string;
    key_points: {
        [key: string]: {
            description: string;
        } | undefined;
    };
}

interface VideoSectionProps {
    videoData: VideoData;
}

const Section = styled.section`
    padding: 1rem;
    border: 1px solid black;
    border-radius: 1rem;
    background-color: #202020;
    max-width: 35rem;
`;

const VideoSection: React.FC<VideoSectionProps> = ({ videoData }) => {
    return (
        <Section>
            <h2>{videoData.title}</h2>
            <YouTubeFrame
                style={{ width: '100%', aspectRatio: '16/9' }}
                title={videoData.title}
                src={`https://www.youtube.com/embed/${videoData.video_id}`}
            />
            {Object.values(videoData.key_points).map((key_point, index) => (
                key_point ? <p key={index}>{key_point.description}</p> : null
            ))}

            {/* <Button variant="secondary" onClick={() => console.log('clicked')}>
                Go to
            </Button> */}

            <Link href={'./topic/' + videoData.video_id} passHref > Go to  </Link>
        </Section>
    );
};

export default VideoSection;
