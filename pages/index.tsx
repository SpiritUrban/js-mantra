import Image from "next/image";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

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
        <Button variant="primary">Primary</Button>{" "}
      </main>
    </Container>
  );
}
