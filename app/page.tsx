import Image from "next/image";
import Button from "react-bootstrap/Button";
import NavBarPanel from "./NavBarPanel";
import { Container } from "react-bootstrap";
import Counter from "@/Counter";


export default function Home() {
  return (


    <Container fluid className="bg-dark text-white min-vh-100">
      <NavBarPanel />
      <main
        className=""
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <Counter />


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

// priority пред загрузка
