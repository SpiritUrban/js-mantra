import React from "react";
import CodeBlock from "@/components/organisms/CodeBlock";
import styled from "styled-components";

function DeveloperTools() {
  const Tag = styled.span`
    background-color: #222;
    color: #aaa;
    border-radius: 0.25rem;
    padding: 0 0.5rem;
  `;

  interface SubItem {
    code?: string;
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
    title: "Браузеры и инструменты разработчика",
    description: `Инструменты разработчика (DevTools) — это встроенные функции браузеров, такие как Chrome и Firefox, которые позволяют веб-разработчикам тестировать, анализировать и отлаживать веб-приложения.`,
    items: [
      {
        title: "Как открыть инструменты разработчика",
        description: (
          <>
            Открыть DevTools можно несколькими способами:
            <ul>
              <li>Нажмите <Tag>F12</Tag> на клавиатуре.</li>
              <li>Используйте сочетание клавиш <Tag>Ctrl+Shift+I</Tag> (Windows) или <Tag>Cmd+Opt+I</Tag> (Mac).</li>
              <li>Щелкните правой кнопкой мыши на странице и выберите <Tag>«Просмотреть код»</Tag>.</li>
            </ul>
          </>
        ),
      },
      {
        title: "Основные вкладки инструментов разработчика",
        description: (
          <>
            DevTools содержит множество вкладок, каждая из которых имеет свои возможности:
            <ul>
              <li><Tag>Elements</Tag>: Изучение и изменение HTML и CSS.</li>
              <li><Tag>Console</Tag>: Проверка ошибок и выполнение JavaScript-кода.</li>
              <li><Tag>Network</Tag>: Анализ сетевых запросов и загрузки ресурсов.</li>
              <li><Tag>Sources</Tag>: Просмотр и отладка JavaScript-кода.</li>
              <li><Tag>Performance</Tag>: Оптимизация производительности.</li>
            </ul>
          </>
        ),
        subItems: [
          {
            subTitle: "Вкладка Elements",
            code: `
              // Изменение текста элемента
              document.querySelector("h1").textContent = "Новый текст!";
            `,
            subDescription: "Используйте вкладку Elements, чтобы изменять HTML-структуру страницы прямо в браузере.",
          },
          {
            subTitle: "Вкладка Console",
            code: `
              console.log("Это сообщение выводится в консоль!");
            `,
            subDescription: "Console используется для вывода информации, выполнения JavaScript и проверки ошибок.",
          },
        ],
      },
      {
        title: "Анализ сетевых запросов",
        description: (
          <>
            Во вкладке <Tag>Network</Tag> можно отслеживать все запросы, которые отправляет ваш сайт:
            <ul>
              <li>Проверять статус запросов (200, 404, 500).</li>
              <li>Анализировать загружаемые ресурсы (JS, CSS, изображения).</li>
              <li>Измерять время загрузки страницы.</li>
            </ul>
          </>
        ),
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
                  {subItem.code && (
                    <CodeBlock code={subItem.code} language="javascript" />
                  )}
                  {subItem.subDescription && <p>{subItem.subDescription}</p>}
                </div>
              ))
            : item.code && <CodeBlock code={item.code} language="javascript" />}
        </div>
      ))}

      <TextHighlight>
        Инструменты разработчика — это мощный инструмент для анализа,
        отладки и улучшения веб-приложений.
      </TextHighlight>
    </Container>
  );
}

export default DeveloperTools;
