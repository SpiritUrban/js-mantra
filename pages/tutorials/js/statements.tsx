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

  const content : Content = {
    title: "Выражения (Statements)",
    description: `В JavaScript выражения (или statements) представляют собой конструкции, 
          которые управляют потоком выполнения программы.`,
    items: [
      {
        title: "Условные операторы:",
        description: (
          <>
            <Tag>if</Tag>, <Tag>else if</Tag>, <Tag>else</Tag> — проверяют
            условия и выполняют блоки кода, если условия истинны или ложны.
          </>
        ),
        subItems: [
          {
            code: `
             if (age > 18) {
                console.log("Взрослый");
             } else {  
                console.log("Несовершеннолетний");
             }  
          `,
          },
        ],
      },
      {
        title:(<> Оператор <Tag>switch</Tag></>),
        description: (
          <>
            Оператор <Tag>switch</Tag> используется для выбора одного из
            нескольких блоков кода в зависимости от значения переменной.
          </>
        ),
        subItems: [
          {
            code: `
              let день = 3;
  
              switch (день) {
              case 1:
                console.log("Понедельник");
                break;
              case 2:
                console.log("Вторник");
                break;
              case 3:
                console.log("Среда");
                break;
              default:
                console.log("Неизвестный день");
              }
            `,
          },
        ],
      },
      {
        title: "Циклы",
        description: (
          <>
            Циклы позволяют выполнять блок кода несколько раз: &nbsp;
            <Tag>for</Tag>, <Tag>while</Tag>, <Tag>do...while</Tag>.
          </>
        ),
        subItems: [
          {
            subTitle: (
              <>
                Цикл <Tag>for</Tag>
              </>
            ),
            code: `
               for (let i = 0; i < 5; i++) {
                console.log("Итерация номер", i);
               }
            `,
            subDescription: (
              <>
                <Tag>for</Tag> — цикл с известным числом итераций.
              </>
            ),
          },
          {
            subTitle: (
              <>
                Цикл <Tag>while</Tag>
              </>
            ),
            code: `
              let i = 0;
              while (i < 5) {
                console.log("Итерация номер", i);
                i++;
              }
            `,
          },
          {
            subTitle: (
              <>
                Цикл <Tag>do...while</Tag>
              </>
            ),
            code: `
              let i = 0;
              do {
                console.log("Итерация номер", i);
                i++;
              } while (i < 5);
            `,
            subDescription: (
              <>
                <Tag>do...while</Tag> — цикл, который выполняется хотя бы один
                раз, даже если условие сразу ложно.
              </>
            ),
          },
        ],
      },
      {
        title: (
          <>
            Оператор <Tag>return</Tag>
          </>
        ),
        description: (
          <>
            <Tag>return</Tag> завершает выполнение функции и возвращает
            значение.
          </>
        ),
        code: `
          function приветствие(имя) {
          return \`Привет, \${имя}\`; // Correct string interpolation
        }
        console.log(приветствие("Алексей"));
        `,
        subItems: [],
      },
      {
        title: (
          <>
            Оператор <Tag>try...catch</Tag>
          </>
        ),
        description: (
          <>
            Используется для обработки ошибок. В блоке <Tag>try</Tag> находится
            код, который может вызвать ошибку, а в блоке <Tag>catch</Tag> —
            обработка этой ошибки.
          </>
        ),
        code: `
          try {
            let результат = несуществующаяФункция();
          } catch (ошибка) {
            console.log("Произошла ошибка", ошибка);
          }
        `,
        subItems: [],
      },
      {
        title: <>Функции с параметрами по умолчанию</>,
        description: (
          <>
            Параметры функций могут иметь значения по умолчанию, которые будут
            использованы, если соответствующие аргументы не переданы при вызове
            функции.
          </>
        ),
        code: `
          function приветствие(имя = "гость") {
            return \`Привет, \${имя}\`;
          }
          console.log(приветствие()); // Привет, гость
          console.log(приветствие("Алексей")); // Привет, Алексей
        `,
        subItems: [],
      },
      {
        title: <>Логические операторы</>,
        description: (
          <>
            Логические операторы: <Tag>&& (and)</Tag>, <Tag>|| (or)</Tag>, и
            <Tag>! (no)</Tag> — используются для работы с булевыми значениями.
          </>
        ),
        code: `
          let возраст = 20;
          let студент = true;
  
          if (возраст > 18 && студент) {
            console.log("Студент-совершеннолетний");
          }
  
          if (возраст > 18 || студент) {
            console.log("Либо совершеннолетний, либо студент");
          }
          console.log(!студент); // Ложь, так как переменная студент = true
        `,
        subItems: [],
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
                  <CodeBlock code={subItem.code} language="typescript" />
                  {subItem.subDescription && <p>{subItem.subDescription}</p>}
                </div>
              ))
            : item.code && <CodeBlock code={item.code} language="typescript" />}
        </div>
      ))}

      <TextHighlight>
        Эти операторы и конструкции являются основными средствами для управления
        потоком выполнения программы в JavaScript. Они позволяют создавать
        гибкие и адаптируемые приложения, выполняющие различные действия в
        зависимости от условий и логики.
      </TextHighlight>
    </Container>
  );
}

export default Statements;
