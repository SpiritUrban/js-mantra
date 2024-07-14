import styled from 'styled-components';
import Source from '@/components/organisms/Source';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

export default function Other() {

    const data = [{
        title: "{JSON} Placeholder",
        imageUrl: "https://avatars.githubusercontent.com/u/5502029?v=4",
        sourceLink: "https://jsonplaceholder.typicode.com/guide/",
        description: "Free fake and reliable API for testing and prototyping."
    }];

    return (
        <Container>
            <h1>Other sources</h1>

            {data.map(item => (<Source
                key={item.title}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                sourceLink={item.sourceLink}
            />)
            )}

        </Container>
    );
}
