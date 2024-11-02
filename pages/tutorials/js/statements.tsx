import React from "react";
import CodeBlock from "@/components/organisms/CodeBlock";
import styled from "styled-components";

function Statements() {
  const Tag = styled.span`
    background-color: #222;
    color: #aaa;
    border-radius: 0.25rem;
    padding: 0 0.5rem;
  `;

  const content = {
    title: "Statements",
    description: `In JavaScript sind Anweisungen (oder Statements) Kommandos, die 
        bestimmte Aktionen ausführen. Sie sind die grundlegenden Bausteine eines 
        Programms und werden Zeile für Zeile geschrieben. Hier sind die wichtigsten 
        Anweisungen in JavaScript:`,
    items: [
      {
        title: "Variablendeklaration:",
        description: (
          <>
            <Tag>let</Tag>, <Tag>const</Tag>, <Tag>var</Tag> — werden verwendet,
            um Variablen zu erstellen.
          </>
        ),
        code: `
        let age = 25;
        const name = "Alice";
        `,
      },
      {
        title: "Bedingte Anweisungen:",
        description: (
          <>
            <Tag>if</Tag>, <Tag>else if</Tag>, <Tag>else</Tag> — überprüfen
            Bedingungen und führen Codeblöcke aus, wenn die Bedingungen wahr
            oder falsch sind.
          </>
        ),
        code: `
         if (age > 18) {
            console.log("Erwachsener");
         } else {  
            console.log("Minderjährig");
         }  
        `,
      },
    ],
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  `;

  const ImageWrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 450px;
    height: 450px;
    margin-left: 70%;
  `;

  const Star = styled.div`
    width: 0;
    height: 0;
    border-right: 100px solid transparent;
    border-bottom: 200px solid gold;
    border-left: 100px solid transparent;
    position: relative;

    &::before {
      width: 0;
      height: 0;
      border-top: 200px solid gold;
      border-right: 100px solid transparent;
      border-bottom: 0 solid transparent;
      border-left: 100px solid transparent;
      position: absolute;
      content: "";
      top: 75px;
      left: -100px;
    }
  `;

  return (
    <Container>
      <ImageWrapper>
        <Star/>
      </ImageWrapper>

      <h1>{content.title}</h1>
      <p>{content.description}</p>
      {content.items.map((item, i) => (
        <div key={i + item.title}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <CodeBlock code={item.code} language="typescript" />
        </div>
      ))}
    </Container>
  );
}

export default Statements;
