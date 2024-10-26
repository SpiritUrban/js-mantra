import React from "react";
import styled, { css } from "styled-components";

interface ItemProps {
  isLit?: boolean | "on" | "off";
}

const Panel = styled.div`
  background: linear-gradient(145deg, #b0bec5, #90a4ae);
  border: 1px solid #8c9ea3;
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
  background-color: #111; /* Цвет самого объекта */
  border-radius: 50%; /* Закругленные края, создающие эффект отверстия */
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.8); /* Внутренняя тень, создающая глубину */
  position: relative;

  /* Псевдо-элемент для света внутри отверстия */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent; /* Изначально свет не виден */
    box-shadow: none;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  /* Если передано свойство isLit, включается зеленый свет */
  ${({ isLit }) =>
    isLit &&
    css`
      &::before {
        background-color: rgba(0, 255, 0, 1); /* Зеленый свет */
        box-shadow: 0 0 1px 1px rgba(0, 255, 0, 0.7); /* Эффект светящегося света */
      }
    `}
`;

function QuestionPanel() {
  return (
    <Panel>
      {" "}
      <div>
        {/* Вариант использования с булевым значением */}
        <Item isLit={true}>Булевый свет включен</Item>

        {/* Вариант использования со строкой "on" */}
        <Item isLit="on">Строковый свет включен ("on")</Item>

        {/* Вариант использования со строкой "off", свет будет выключен */}
        <Item isLit="off">Свет выключен ("off")</Item>

        {/* Вариант без передачи isLit, по умолчанию свет также выключен */}
        <Item>Свет по умолчанию выключен</Item>
      </div>
    </Panel>
  );
}

export default QuestionPanel;
