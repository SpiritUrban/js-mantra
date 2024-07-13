import React from "react";
import CodePenFrame from "@/components/organisms/CodePenFrame";
import { Src, codepenSrc, defaultTab } from "@/data/codepenSrc";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    gap: 2rem;
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
    flex-wrap: wrap;
    iframe {
    max-width: 40rem;
    }
`;

export default function CodepenSrc() {
  return (
    <Container>
      {codepenSrc.map((item, index) => (
        <CodePenFrame
          key={index + "codepenSrc"}
          height="300"
          style={{ width: "100%" }}
          src={`https://codepen.io/Maks-Mm/embed/${item.id}?default-tab=${defaultTab(item)}`}
          scrolling="no"
          title="CSS Only Shimmer Button"
          frameBorder="no"
          loading="lazy"
          allowFullScreen={true}
        />
      ))}
    </Container>
  );
}
