import dynamic from "next/dynamic";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const Main = styled.main`
  padding: 2rem 0;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export default function Home() {
  return (
    <Container fluid className="bg-dark text-white min-vh-100">
      <Main>

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
