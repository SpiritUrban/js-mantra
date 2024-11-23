import React from "react";
import CodeBlock from "@/components/organisms/CodeBlock";
import styled from "styled-components";

function CodeEditors() {
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
    title: "Текстовые редакторы для JavaScript разработки",
    description: `Текстовые редакторы — это основа любой разработки. Выбор редактора влияет на удобство работы, производительность и комфорт.`,
    items: [
      {
        title: "1. Visual Studio Code (VS Code)",
        description: (
          <>
            Самый популярный текстовый редактор среди разработчиков. Основные
            преимущества:
            <ul>
              <li>Поддержка множества расширений.</li>
              <li>Интеграция с Git и терминалом.</li>
              <li>Интеллектуальная подсветка синтаксиса и автодополнение.</li>
            </ul>
          </>
        ),
        subItems: [
          {
            subTitle: "Пример настройки темы:",
            code: `
              // Установка темы через настройки VS Code
              {
                "workbench.colorTheme": "One Dark Pro",
                "editor.fontFamily": "Fira Code",
                "editor.fontLigatures": true,
              }
            `,
            subDescription: (
              <>
                Популярные темы для VS Code: <Tag>One Dark Pro</Tag>,{" "}
                <Tag>Dracula</Tag>, <Tag>Material Theme</Tag>.
              </>
            ),
          },
        ],
      },
      {
        title: "2. Sublime Text",
        description: (
          <>
            Sublime Text — лёгкий и быстрый редактор с мощными функциями:
            <ul>
              <li>Минималистичный интерфейс.</li>
              <li>Быстрая обработка больших файлов.</li>
              <li>Плагинами можно расширить функционал.</li>
            </ul>
          </>
        ),
        subItems: [
          {
            subTitle: "Пример настройки темы:",
            code: `
              // Установка темы в Sublime Text через файл настроек
              {
                "theme": "Dracula.sublime-theme",
                "color_scheme": "Packages/Color Scheme - Default/Monokai.sublime-color-scheme",
                "font_face": "JetBrains Mono",
                "font_size": 12
              }
            `,
            subDescription: (
              <>
                Популярные темы для Sublime Text: <Tag>Monokai</Tag>,{" "}
                <Tag>Dracula</Tag>, <Tag>Gruvbox</Tag>.
              </>
            ),
          },
        ],
      },
      {
        title: "3. JetBrains WebStorm",
        description: (
          <>
            Платный, но очень мощный редактор, особенно для больших проектов.
            Основные особенности:
            <ul>
              <li>Глубокая интеграция с JavaScript экосистемой.</li>
              <li>Умный анализ кода и рефакторинг.</li>
              <li>Инструменты для тестирования и отладки.</li>
            </ul>
          </>
        ),
        code: `
          // Настройки WebStorm можно менять через Preferences
          Appearance & Behavior -> Appearance -> Theme
        `,
      },
      {
        title: "4. Другие современные редакторы",
        description: (
          <>
            Помимо вышеперечисленных, существуют альтернативные редакторы:
            <ul>
              <li>
                <Tag>Atom</Tag>: Открытый исходный код, поддержка множества
                плагинов.
              </li>
              <li>
                <Tag>Neovim</Tag>: Современная версия Vim, высоко
                настраиваемый.
              </li>
              <li>
                <Tag>Fleet</Tag>: Новый редактор от JetBrains с акцентом на
                скорость.
              </li>
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
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          {item.subItems && item.subItems.length > 0
            ? item.subItems.map((subItem, i2) => (
                <div key={i + i2 + `subItem`}>
                  {subItem.subTitle && <h3>{subItem.subTitle}</h3>}
                  <CodeBlock code={subItem.code} language="json" />
                  {subItem.subDescription && <p>{subItem.subDescription}</p>}
                </div>
              ))
            : item.code && <CodeBlock code={item.code} language="json" />}
        </div>
      ))}

      <TextHighlight>
        Выбор редактора зависит от ваших предпочтений и задач. Попробуйте
        несколько и выберите тот, который максимально удобен для вас.
      </TextHighlight>
    </Container>
  );
}

export default CodeEditors;
