import React from 'react';
import styled from 'styled-components';

interface IllustrationProps {
    $backgroundImage: string;
}

const Section = styled.section`
position: relative;
    height: 15rem;
    width: 15rem;
    border-radius: 2rem;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    transform: perspective(350px) rotateX(20deg) rotateY(20deg);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.23);
    border: black solid 4px;
        box-sizing: content-box;

    &:hover {
        transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.5);
            box-shadow: 0 0 189px rgb(0 0 0), 0 0 124px rgb(0 0 0);
        z-index: 111;
    }
`;

const Illustration = styled.div<IllustrationProps>`
  position: absolute;
    left:0;
    top:0;
    height: 15rem;
    width: 15rem;
    background-image: url(${props => props.$backgroundImage});
    background-size: cover;
    background-position: left;
    border-radius: 2rem;

`;

const ImageSourceContainer = styled.div`
    position: absolute;
    left:0;
    top:0;
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

  
`;

const Content = styled.div`
    position: absolute;
     right:0;
        bottom: 0rem;
    background: #000000a6;
    border-radius: 1rem;
    padding: .5rem 1rem 0rem 1rem;
    h1 {
        font-size: 1.3rem;
    }
`;

const LinkContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    right: -3rem;
    top: -1rem;
    background: #000000a6;
    border-radius: 5rem;
    padding: .5rem;
    a {
        padding: 1rem;
    }
 
`;

interface SourceProps {
    title?: string;
    description?: string;
    imageUrl?: string;
    imageSource?: string;
    sourceLink?: string;
}

const SourceCard: React.FC<SourceProps> = ({ title, description, imageUrl, imageSource, sourceLink }) => {
    return (
        <Section>
            {imageUrl && (<Illustration $backgroundImage={imageUrl} />)}
            {imageSource && (<ImageSourceContainer dangerouslySetInnerHTML={{ __html: imageSource }} />)}
            {(title || description) && (<Content>
                <h1>{title}</h1>
                <p>{description}</p>
            </Content>)}
            <LinkContainer>
                <a target="_blank" href={sourceLink || imageUrl || imageSource}>Link</a>
            </LinkContainer>
        </Section>
    );
};

export default SourceCard;
