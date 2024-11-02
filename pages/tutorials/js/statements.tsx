import React from "react";
import CodeBlock from "@/components/organisms/CodeBlock";
import styled from "styled-components";

function statements() {
  const Tag = styled.span`
    background-color: #222;
    color: #aaa;
    border-radius: 0.25rem;
    padding: 0 0.5rem;
  `;

  const content = {
    title: "Statements",
    description: ` В JavaScript инструкции (или Statements) — это команды, которые
        выполняют определённые действия. Они являются основными строительными
        блоками программы и пишутся по одной инструкции на строку. Вот ключевые
        инструкции в JavaScript:`,
    items: [
      {
        title: "Объявление переменных:",
        description: (
          <>
            <Tag>let</Tag>, <Tag>const</Tag>, <Tag>var</Tag> — используются для
            создания переменных
          </>
        ),
        code: `
        let age = 25;
        const name = "Alice";
        `,
      },
      {
        title: "Условные инструкции:",
        description: (
          <>
            <Tag>if</Tag>, <Tag>else if</Tag>, <Tag>else</Tag>— проверяют
            условия и выполняют блоки кода, если условия истинны или ложны.
          </>
        ),
        code: `
         if (age > 18) {
            console.log("Взрослый")
         } else {  
            console.log("Несовершеннолетний");
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

  return (
    <Container>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      {content.items.map((item, i) => (
        <div key={i + item.title}>
          <h2>{item.title} </h2>
          <p>{item.description}</p>
          <CodeBlock code={item.code} language="typescript" />
        </div>
      ))}
    </Container>
  );
}

export default statements;

/*


В JavaScript инструкции (или Statements) — это команды, которые выполняют определённые действия. Они являются основными строительными блоками программы и пишутся по одной инструкции на строку. Вот ключевые инструкции в JavaScript:

    Объявление переменных:
        let, const, var — используются для создания переменных.

    javascript

let age = 25;
const name = "Alice";

Условные инструкции:

    if, else if, else — проверяют условия и выполняют блоки кода, если условия истинны или ложны.

javascript

if (age > 18) {
  console.log("Взрослый");
} else {
  console.log("Несовершеннолетний");
}

    switch — выбирает выполнение одного из нескольких блоков кода в зависимости от значения переменной.

javascript

switch (day) {
  case "Monday":
    console.log("Сегодня понедельник");
    break;
  default:
    console.log("Другой день");
}

Циклы:

    for — используется для выполнения кода несколько раз с заданными условиями.

javascript

for (let i = 0; i < 5; i++) {
  console.log(i);
}

    while и do...while — выполняют код, пока условие истинно.

javascript

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

Инструкции управления потоком:

    break — прерывает выполнение цикла или оператора switch.
    continue — пропускает одну итерацию цикла и переходит к следующей.

javascript

for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // пропустит значение 2
  console.log(i);
}

Функции:

    function — определяет функцию, которую можно вызывать в других частях программы.

javascript

function greet(name) {
  return `Привет, ${name}`;
}

Возврат значения:

    return — завершает выполнение функции и возвращает значение.

javascript

function add(a, b) {
  return a + b;
}

Инструкция try...catch:

    Используется для обработки ошибок.

javascript

    try {
      // код, который может вызвать ошибку
    } catch (error) {
      console.log("Произошла ошибка", error);
    }

Эти инструкции позволяют управлять логикой и потоком выполнения кода, делать программы динамичными и отвечающими на различные условия.

*/
