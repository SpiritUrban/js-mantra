import dynamic from "next/dynamic";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const CodePenFrame = dynamic(() => import('../components/organisms/CodePenFrame'), {
  ssr: false
});

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



        <CodePenFrame src="https://cdpn.io/pen/debug/JjQPQXR?authentication_hash=bZAQWdXmbPaM" />
        <CodePenFrame height="300" style={{width: "100%"}} scrolling="no" title="CSS Only Shimmer Button" src="https://codepen.io/Maks-Mm/embed/JjQPQXR?default-tab=ResultCresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" />
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
