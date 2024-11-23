import React from "react";
import CodeBlock from "@/components/organisms/CodeBlock";
import styled from "styled-components";

function WhatIsJavaScript() {
  const Tag = styled.span`
    background-color: #222;
    color: #aaa;
    border-radius: 0.25rem;
    padding: 0 0.5rem;
  `;

  interface SubItem {
    code: string;
    subTitle?: string | React.ReactNode;
    subDescription?: React.ReactNode;
  }

  interface Item {
    title: string | React.ReactNode;
    description: React.ReactNode;
    code?: string;
    subItems?: SubItem[];
  }

  interface Content {
    title: string | React.ReactNode;
    description: string;
    items: Item[];
  }

  const content: Content = {
    title: "Что такое JavaScript?",
    description: `JavaScript — это язык программирования, используемый для создания интерактивных и динамических веб-страниц. 
      Он позволяет разрабатывать функции, такие как обновление содержимого без перезагрузки страницы, создание анимаций и работа с пользователем.`,
    items: [
      {
        title: "Основные возможности JavaScript:",
        description: (
          <>
            JavaScript предоставляет разработчикам множество возможностей,
            включая:
            <ul>
              <li>Манипуляция DOM (Document Object Model).</li>
              <li>Работа с событиями пользователя.</li>
              <li>Асинхронное взаимодействие с сервером (AJAX).</li>
              <li>Создание сложной логики и анимаций.</li>
            </ul>
          </>
        ),
        code: `
          document.querySelector("button").addEventListener("click", () => {
            alert("Кнопка нажата!");
          });
        `,
      },
      {
        title: (
          <>
            Как подключить <Tag>JavaScript</Tag> к странице
          </>
        ),
        description: (
          <>
            Для подключения JavaScript можно использовать тег <Tag>{`<script>`}</Tag>:
          </>
        ),
        subItems: [
          {
            subTitle: "Подключение внутри HTML:",
            code: `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                <title>Пример JavaScript</title>
              </head>
              <body>
                <button>Нажми на меня</button>
                <script>
                  document.querySelector("button").addEventListener("click", () => {
                    alert("Кнопка нажата!");
                  });
                </script>
              </body>
              </html>
            `,
          },
          {
            subTitle: "Подключение внешнего файла:",
            code: `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                <title>Пример JavaScript</title>
                <script src="script.js" defer></script>
              </head>
              <body>
                <button>Нажми на меня</button>
              </body>
              </html>
            `,
            subDescription: (
              <>
                Используйте атрибут <Tag>defer</Tag> для загрузки JavaScript после загрузки HTML.
              </>
            ),
          },
        ],
      },
      {
        title: "Типы данных в JavaScript",
        description: (
          <>
            JavaScript поддерживает различные типы данных:
            <ul>
              <li>Примитивные: <Tag>string</Tag>, <Tag>number</Tag>, <Tag>boolean</Tag>, <Tag>null</Tag>, <Tag>undefined</Tag>, <Tag>symbol</Tag>, <Tag>bigint</Tag>.</li>
              <li>Объекты: <Tag>object</Tag>, включая массивы и функции.</li>
            </ul>
          </>
        ),
        code: `
          let строка = "Привет";
          let число = 42;
          let логическое = true;
          let объект = { ключ: "значение" };
          let массив = [1, 2, 3];
        `,
      },
      {
        title: "Основные операторы",
        description: (
          <>
            JavaScript поддерживает арифметические, логические и другие
            операторы:
            <ul>
              <li><Tag>+</Tag>, <Tag>-</Tag>, <Tag>*</Tag>, <Tag>/</Tag> — арифметические.</li>
              <li><Tag>==</Tag>, <Tag>===</Tag>, <Tag>!=</Tag>, <Tag>&lt;</Tag>, <Tag>&gt;</Tag> — сравнение.</li>
              <li><Tag>&&</Tag>, <Tag>||</Tag>, <Tag>!</Tag> — логические операторы.</li>
            </ul>
          </>
        ),
        code: `
          let x = 10;
          let y = 20;
          console.log(x + y); // 30
          console.log(x > y); // false
          console.log(x === 10 && y === 20); // true
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

  const TextHighlight = styled.p`
    background-color: #1e1e1e;
    color: #cacaca;
    padding: 1rem;
    border-left: 5px solid #222;
    font-size: 1.2rem;
    font-style: italic;
    border-radius: 7px;
  `;

  return (
    <Container>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      {content.items.map((item, i) => (
        <div key={i + `contentItem`}>
          <h2>
            {i + 1}. {item.title}
          </h2>
          <p>{item.description}</p>
          {item.subItems && item.subItems.length > 0
            ? item.subItems.map((subItem, i2) => (
                <div key={i + i2 + `subItem`}>
                  {subItem.subTitle && <h3>{subItem.subTitle}</h3>}
                  <CodeBlock code={subItem.code} language="html" />
                  {subItem.subDescription && <p>{subItem.subDescription}</p>}
                </div>
              ))
            : item.code && <CodeBlock code={item.code} language="javascript" />}
        </div>
      ))}

      <TextHighlight>
        JavaScript — это мощный инструмент для разработки веб-приложений,
        который позволяет создавать интерактивные элементы и обеспечивать
        динамическое взаимодействие с пользователем.
      </TextHighlight>
    </Container>
  );
}

export default WhatIsJavaScript;
