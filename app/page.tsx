import Image from "next/image";
import Button from "react-bootstrap/Button";
import Counter from "@/Counter";
import { Container } from "react-bootstrap";
import Layout from "@/layauts/default";

export default function Home() {
  return (
    <Layout>
      <Container fluid className="bg-dark text-white min-vh-100">
        <Counter/>
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
    </Layout>
  );
}

// priority пред загрузка
