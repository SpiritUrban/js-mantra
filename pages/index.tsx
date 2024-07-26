import dynamic from "next/dynamic";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
  <Container fluid className="bg-dark text-white min-vh-100">
      <main
        className=""
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Image
          src="/logo.webp"
          alt="JS Mantra"
          className="test"
          width={1000}
          height={1000}
          priority
          style={{
            filter: "invert(100%)",
            borderRadius: "20rem",
          }}
        />

        <Card data-bs-theme="dark">
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>

        
      </main>
    </Container>
  );
}
