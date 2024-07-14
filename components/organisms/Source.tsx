import React from 'react';
import styled from 'styled-components';

interface IllustrationProps {
    $backgroundImage: string;
}

const Section = styled.section`
    display: flex;
    gap: 1rem;

    img {
        width: 10rem;
        border-radius: 5rem;
    }
`;

const Illustration = styled.div<IllustrationProps>`
    flex: 15;
    height: 10rem;
    border-radius: 2rem;
    background-image: url(${props => props.$backgroundImage});
    background-size: cover;
    background-position: left;
    margin-top: 1rem;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    transform: perspective(200px) rotateX(20deg) rotateY(20deg);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.23);
    border: black solid 4px;

    &:hover {
        transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`;

const ImageSourceContainer = styled.div`
    flex: 15;
     height: 10rem;
    border-radius: 2rem;
     margin-top: 1rem;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    transform: perspective(200px) rotateX(20deg) rotateY(20deg);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.23);
    border: black solid 4px;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 1rem;
    background: darkgray;

    &:hover {
        transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`;

const Content = styled.div`
    flex: 80;
`;

const LinkContainer = styled.div`
    flex: 5;
    display: flex;
    align-items: center;
`;

interface SourceProps {
    title: string;
    description: string;
    imageUrl?: string;
    imageSource?: string;
    sourceLink: string;
}

const Source: React.FC<SourceProps> = ({ title, description, imageUrl, imageSource, sourceLink }) => {
    return (
        <Section>
            {imageUrl && (<Illustration $backgroundImage={imageUrl} />)}
            {imageSource && (<ImageSourceContainer dangerouslySetInnerHTML={{ __html: imageSource }} />)}
            <Content>
                <h1>{title}</h1>
                <p>{description}</p>
            </Content>
            <LinkContainer>
                <a target="_blank" href={sourceLink}>Link</a>
            </LinkContainer>
        </Section>
    );
};

export default Source;
