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

export default function Anonymous() {

  interface Sourcs {
    title: string;
    imageUrl?: string;
    imageSource?: string;
    sourceLink: string;
    description: string;
  }

  const data: Sourcs[] = [{
    title: "Anonymous posting",
    // imageUrl: "https://justpaste.it/static/img/jp_logo_v3.svg",
    imageSource: `<img src="https://justpaste.it/static/img/jp_logo_v3.svg" alt="" />`,
    sourceLink: "https://justpaste.it/",
    description: "Share Text & Images the Easy Way"
}];

return (
    <Container>
        <h1>Anonymous Capabilities</h1>

        {data.map(item => (<Source
            key={item.title}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            imageSource={item.imageSource}
            sourceLink={item.sourceLink}
        />)
        )}

    </Container>
);
}
