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
`;

export default function CodepenSrc() {
  return (
    <Container>
      {codepenSrc.map((item, index) => (
        <CodePenFrame
          key={index + "codepenSrc"}
          style={{ 
            maxWidth: item.size == "80x40" ? "80rem" : "40rem", 
            width: item.size == "80x40" ? "80rem" : "40rem",  
            height: item.size == "80x40" ? "40rem" : "20rem",
          }}
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
