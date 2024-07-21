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

const Section = styled.section`
  width: 100%;
  h2 {
      display: flex;
      align-items: center;
    span {
      font-size: 1.5rem;
    }
    hr {
      width: 100%;
      margin-left: 1rem;
    }
  }
  iframe {
    margin-top: 1rem;
    margin-right: 1rem;
  }
`;

export default function CodepenSrc() {
  return (
    <Container>
      {codepenSrc.map((items, index) => (
        <Section key={index + "codepenSrcCategory"}>
          <h2> <span>{items.category} </span> <hr /></h2>
          {items.items.map((item, index) => (
            <CodePenFrame
              key={index + "codepenSrc"}
              style={{ 
                maxWidth: item.size ? item.size?.split("x")[0] + "rem" : "40rem" ,
                width: item.size ? item.size?.split("x")[0] + "rem" : "40rem",
                height: item.size ? item.size?.split("x")[1] + "rem" : "20rem",
              }}
              src={`https://codepen.io/Maks-Mm/embed/${item.id}?default-tab=${defaultTab(item)}`}
              scrolling="no"
              title="CSS Only Shimmer Button"
              frameBorder="no"
              loading="lazy"
              allowFullScreen={true}
            />
          ))}
        </Section>
      ))
      
      }
    </Container>
  );
}
