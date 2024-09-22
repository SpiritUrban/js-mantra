import dynamic from "next/dynamic";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

interface StyledProps extends React.HTMLAttributes<HTMLDivElement> {
  'data-component'?: string;
}

const Main = styled.main`
  // padding: 2rem 0;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // gap: 1rem;
  flex-direction: column;
`;

const ParallaxSection = styled.section.attrs<StyledProps>({ 'data-component': 'ParallaxSection' })`
  background-image: url('/img/team-of-developers-riding-a-rocket.webp');
  height: 500px;
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem;
  position: relative;
`;

const ContentSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  height: 1000px;
  background-color: #181230;
  font-size: 36px;
  align-items: center;
  text-align: center;
`;

const GlassCard = styled.div`
  background-color: rgb(12 13 43 / 69%);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  padding: 1rem 2rem;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: fit-content;
  max-width: 50%;
  // height: calc(100% - 4rem);
  text-align: justify;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
  1px 1px 1px rgba(0, 0, 0, 0.5);

  h1 {
    text-align: center;
    color: #d570ff;
    color: #c88afb;
  }
`;

export default function Home() {
  return (
    <Container fluid className="bg-dark text-white min-vh-100">
      <Main>

        <ParallaxSection>
          <GlassCard>
            <h1>JS Mantra</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum magni maiores praesentium reprehenderit a autem reiciendis asperiores facere quisquam quaerat recusandae et officia ratione, odio dolores voluptas ut. At, ea?</p>
            <hr />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum magni maiores praesentium reprehenderit a autem reiciendis asperiores facere quisquam quaerat recusandae et officia ratione, odio dolores voluptas ut. At, ea?</p>
          </GlassCard>
        </ParallaxSection>

        <ContentSection>
          sdsdgdsgdsg
        </ContentSection>

        {/* <Image
          src="/img/A-team-of-developers-riding-a-rocket.webp"
          alt="JS Mantra"
          className="test"
          width={1000}
          height={1000}
          priority
          style={{
            borderRadius: "2rem",
          }}
        /> */}

        <Card data-bs-theme="dark">
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>

        <Card data-bs-theme="dark">
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>

        <Card data-bs-theme="dark">
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>        <Card data-bs-theme="dark">
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>

        <Card data-bs-theme="dark">
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>

        <Card data-bs-theme="dark">
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>        <Card data-bs-theme="dark">
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>

        <Card data-bs-theme="dark">
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>

        <Card data-bs-theme="dark">
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>


      </Main>
    </Container>
  );
}
