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

  interface Content {
    title: string;
    description: string;
    items: any;
  }

  const content: Content = {
    title: "Операторы",
    description: `В JavaScript операторы (или Statements) представляют собой команды, 
        которые выполняют определенные действия. Они являются основными строительными 
        блоками программы и пишутся построчно. Вот основные операторы в JavaScript:`,
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
        title: "  Тернарный оператор",
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
          console.log(сообщение);`,
          },
        ],
      },
      {
        title: (
          <>
            Оператор <Tag>switch</Tag>
          </>
        ),
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
            Циклы позволяют выполнять блок кода несколько раз: <Tag>for</Tag>,{" "}
            <Tag>while</Tag>, и <Tag>do...while</Tag>.
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
          },
        ],
      },
      {
        title: "",
        description: <></>,
        subItems: [{ code: `` }],
      },
    ],
  };

  /*
  
  3. Тернарный оператор

Тернарный оператор ? : — сокращенный способ записи условий.

javascript

let возраст = 20;
let сообщение = (возраст >= 18) ? "Взрослый" : "Несовершеннолетний";
console.log(сообщение);
  */
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
        <Star />
      </ImageWrapper>

      <h1>{content.title}</h1>
      <p>{content.description}</p>
      {content.items.map((item, i) => (
        <div key={i + item.title}>
          <h2>
            {i + 1}. {item.title}
          </h2>
          <p>{item.description}</p>
          {item.subItems.map((subItem, i2) => (
            <div key={i + i2 + `subItem`}>
              {subItem.subTitle && <h3>{subItem.subTitle}</h3>}
              <CodeBlock code={subItem.code} language="typescript" />
            </div>
          ))}
        </div>
      ))}
    </Container>
  );
}

export default Statements;


/*

Вот примеры для всех операторов на JavaScript с пояснениями на русском языке:
1. Объявление переменных

Операторы для создания переменных: let, const, и var.

javascript

let возраст = 25;   // можно изменять значение
const имя = "Алиса"; // постоянное значение, не изменяется
var город = "Москва"; // более старый способ объявления переменной

2. Условные операторы

Используются для выполнения кода при выполнении определенных условий: if, else if, и else.

javascript

let возраст = 18;

if (возраст >= 18) {
  console.log("Взрослый");
} else {
  console.log("Несовершеннолетний");
}

3. Тернарный оператор

Тернарный оператор ? : — сокращенный способ записи условий.

javascript

let возраст = 20;
let сообщение = (возраст >= 18) ? "Взрослый" : "Несовершеннолетний";
console.log(сообщение);

4. Оператор switch

Оператор switch используется для выбора одного из нескольких блоков кода в зависимости от значения переменной.

javascript

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

5. Циклы

Циклы позволяют выполнять блок кода несколько раз: for, while, и do...while.
Цикл for

javascript

for (let i = 0; i < 5; i++) {
  console.log("Итерация номер", i);
}

Цикл while

javascript

let i = 0;
while (i < 5) {
  console.log("Итерация номер", i);
  i++;
}

Цикл do...while

javascript

let i = 0;
do {
  console.log("Итерация номер", i);
  i++;
} while (i < 5);

6. Оператор return

return завершает выполнение функции и возвращает значение.

javascript

function приветствие(имя) {
  return `Привет, ${имя}`;
}

console.log(приветствие("Алексей"));

7. Оператор try...catch

Используется для обработки ошибок в коде. Блок try содержит код, который может вызвать ошибку, а catch — блок обработки этой ошибки.

javascript

try {
  // Код, который может вызвать ошибку
  let результат = несуществующаяФункция();
} catch (ошибка) {
  console.log("Произошла ошибка", ошибка);
}

8. Функции с параметрами по умолчанию

Позволяет задавать значения параметрам по умолчанию, если они не переданы.

javascript

function приветствие(имя = "гость") {
  return `Привет, ${имя}`;
}

console.log(приветствие()); // Привет, гость
console.log(приветствие("Алексей")); // Привет, Алексей

9. Логические операторы

&& (И), || (ИЛИ) и ! (НЕ) используются для работы с логическими значениями.

javascript

let возраст = 20;
let студент = true;

if (возраст > 18 && студент) {
  console.log("Студент-совершеннолетний");
}

if (возраст > 18 || студент) {
  console.log("Либо совершеннолетний, либо студент");
}

console.log(!студент); // Ложь, так как переменная студент = true

Эти операторы позволяют управлять потоком выполнения кода и делают программы гибкими и адаптируемыми под разные условия.
*/