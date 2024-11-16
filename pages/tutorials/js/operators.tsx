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


  const content : Content= {
    title: "Операторы",
    description: `В JavaScript операторы (или Statements) представляют собой команды, 
          которые выполняют определенные действия. Они являются основными операторами в программе.`,
    items: [
      {
        title: "Объявление переменных:",
        description: (
          <>
            <Tag>let</Tag>, <Tag>const</Tag>, <Tag>var</Tag> — используются для
            создания переменных.
          </>
        ),
        subItems: [
          {
            code: `
              let age = 25;
              const name = "Alice";
            `,
          },
        ],
      },
      {
        title: "Тернарный оператор",
        description: (
          <>
            Тернарный оператор <Tag>? :</Tag> — сокращенный способ записи
            условий.
          </>
        ),
        subItems: [
          {
            code: `
              let возраст = 20; 
              let сообщение = (возраст >= 18) ? "Взрослый" : "Несовершеннолетний";
              console.log(сообщение);
            `,
          },
        ],
      },
      {
        title: (
          <>
            Оператор <Tag>typeof</Tag>
          </>
        ),
        description: (
          <>
            Оператор <Tag>typeof</Tag> используется для определения типа
            переменной.
          </>
        ),
        subItems: [
          {
            code: `
              let number = 42;
              console.log(typeof number); // "number"
  
              let str = "Hello, world!";
              console.log(typeof str); // "string"
            `,
          },
        ],
      },
      {
        title: (
          <>
            Оператор <Tag>in</Tag>
          </>
        ),
        description: (
          <>
            Оператор <Tag>in</Tag> используется для проверки, существует ли
            свойство в объекте.
          </>
        ),
        subItems: [
          {
            code: `
              let person = { name: "Alice", age: 25 };
              console.log("name" in person); // true
              console.log("gender" in person); // false
            `,
          },
        ],
      },
      {
        title: (
          <>
            Оператор <Tag>delete</Tag>
          </>
        ),
        description: (
          <>
            Оператор <Tag>delete</Tag> удаляет свойство из объекта.
          </>
        ),
        subItems: [
          {
            code: `
              let person = { name: "Alice", age: 25 };
              delete person.age;
              console.log(person); // { name: "Alice" }
            `,
          },
        ],
      },
      {
        title: (
          <>
            Оператор <Tag>new</Tag>
          </>
        ),
        description: (
          <>
            Оператор <Tag>new</Tag> используется для создания нового
            экземпляра объекта, используя функцию-конструктор.
          </>
        ),
        subItems: [
          {
            code: `
              function Person(name, age) {
                this.name = name;
                this.age = age;
              }
  
              const john = new Person("John", 30);
              console.log(john); // Person { name: "John", age: 30 }
            `,
          },
        ],
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
    color:#cacaca;
    padding: 1rem;
    border-left: 5px solid #222;
    font-size: 1.2rem;
    font-style: italic;
    border-radius:7px;
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
            : 
              item.code && <CodeBlock code={item.code} language="typescript" />}
        </div>
      ))}
      
      <TextHighlight>
        Эти операторы и конструкции являются основными средствами для
        управления потоком выполнения программы в JavaScript. Они позволяют
        создавать гибкие и адаптируемые приложения, выполняющие различные
        действия в зависимости от условий и логики.
      </TextHighlight>
    </Container>
  );
}

export default Statements;

