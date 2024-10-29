import React from "react";
import styled, { css } from "styled-components";
import { Point } from "@/pages/roadmap/data";
import { useState } from "react";
import Button from "react-bootstrap/Button";

interface PanelProps {
  backgroundColor?: string;
  borderColor?: string;
}

interface ItemProps {
  isLit?: boolean | "on" | "off";
}

const Panel = styled.div<PanelProps>`
  background: linear-gradient(145deg, #b0bec5, #90a4ae);
  border: 1px solid ${({ borderColor }) => borderColor || "#8c9ea3"};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15),
    -5px -5px 10px rgba(255, 255, 255, 0.5);
  color: #2b2b2b;

  /* Glanz-Effekt */
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 10%;
    left: 1.5%;
    width: 97%;
    height: 80%;
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.3),
      rgba(0, 0, 0, 0.1)
    );
    border-radius: 10px;
    z-index: 1;
    pointer-events: none;
  }
`;

const Item = styled.div<ItemProps>`
  width: 1rem;
  height: 1rem;
  background-color: #111; /* Farbe des Objekts */
  border-radius: 50%; /* Rundungen, die den Effekt eines Lochs erzeugen */
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.8); /* Innenschatten, der Tiefe erzeugt */
  position: relative;

  /* Pseudo-Element für das Licht innerhalb des Lochs */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent; /* Licht ist zunächst nicht sichtbar */
    box-shadow: none;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  /* Wenn die Eigenschaft isLit übergeben wird, wird das grüne Licht eingeschaltet */
  ${({ isLit }) =>
    isLit &&
    css`
      &::before {
        background-color: rgba(0, 255, 0, 1); /* Grünes Licht */
        box-shadow: 0 0 1px 1px rgba(0, 255, 0, 0.7); /* Leuchtender Licht-Effekt */
      }
    `}
`;

const ItemContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const AnswersContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

interface QuestionPanelProps {
  point: Point;
  onNextPoint: () => void;
}

function QuestionPanel({ point, onNextPoint }: QuestionPanelProps) {
  const [questionPointer, setQuestionPointer] = useState(0);

  console.log(point);

  const checkAnswer = (i: number) => {
    console.log(i);
    if (i == point.questions[questionPointer].rightAnswerPointer) {
      if (questionPointer + 1 < point.questions.length) {
        console.log(questionPointer + 1, point.questions.length);
        setQuestionPointer(questionPointer + 1);
      } else {
        setQuestionPointer(0);
         onNextPoint()
        console.log("next")
      }
    } else {
      alert("false");
    }
  };

  return (
    <Panel backgroundColor="#f0f0f0" borderColor="#ccc">
      <ItemContainer>
        {point.questions.map(() => (
          <Item isLit={true}></Item>
        ))}
      </ItemContainer>
      <div>{point.questions[questionPointer].question}</div>
      <AnswersContainer>
        {point.questions[questionPointer].answers.map((answer, i) => (
          <Button
            variant="secondary"
            onClick={() => checkAnswer(i)}
            key={i + answer}
          >
            {answer}
          </Button>
        ))}
      </AnswersContainer>
    </Panel>
  );
}

export default QuestionPanel;
