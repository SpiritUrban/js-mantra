export const basics = {
  title: "Основы JavaScript",

  subtopics: [
    {
      title: "Введение в JavaScript",
      
      points: [
        {
          title: "Что такое JavaScript?",
          link: "/tutorials/js/about-js",
          questions: [
            {
              question: "JavaScript это ...",
              answers: [
                "Мобильное приложение",
                "Язык программирования",
                "Операционная система",
                "Фреймворк",
              ],
              rightAnswerPointer: 1,
            },
            {
              question:
                "Какое из следующих применений не относится к JavaScript?",
              answers: [
                "Веб-разработка",
                "Серверные приложения",
                "Обработка изображений",
                "Мобильные приложения",
              ],
              rightAnswerPointer: 2,
            },
          ],
        },
        {
          title:
            "Применение JavaScript (веб-разработка, серверные приложения, мобильные приложения)",
            link: "/tutorials/js/using-js",
          questions: [
            {
              question: "Где используется JavaScript?",
              answers: [
                "В обработке фото",
                "В базах данных",
                "В веб-разработке",
              ],
              rightAnswerPointer: 0,
            },
            {
              question: "Какая из областей не использует JavaScript?",
              answers: [
                "Мобильные приложения",
                "Интерактивность на веб-страницах",
                "Видеомонтаж",
                "Серверная логика",
              ],
              rightAnswerPointer: 2,
            },
          ],
        },
      ],
    },
    {
      title: "Основы",
      points: [
        {
          title: "Operators (Операторы)",
          link: "/tutorials/js/operators",
          questions: [
            {
              question: "Что такое оператор в JavaScript?",
              answers: [
                "Функция",
                "Команда для выполнения действий с переменными и значениями",
                "Тип переменной",
              ],
              rightAnswerPointer: 1,
            },
            {
              question:
                "Какой оператор используется для присваивания значения переменной?",
              answers: ["=", "==", "==="],
              rightAnswerPointer: 0,
            },
            {
              question:
                "Какой оператор используется для проверки равенства в JavaScript?",
              answers: ["=", "=>", "=="],
              rightAnswerPointer: 2,
            },
            {
              question: "Что делает тернарный оператор?",
              answers: [
                "Преобразует тип данных",
                "Прерывает выполнение программы",
                "Сокращает запись условного оператора",
              ],
              rightAnswerPointer: 2,
            },
            {
              question: "Какой из этих операторов является логическим?",
              answers: ["&&", "+", "-"],
              rightAnswerPointer: 0,
            },
            {
              question:
                "Какой оператор используется для проверки типа переменной?",
              answers: ["in", "typeof", "instanceof"],
              rightAnswerPointer: 1,
            },
            {
              question: "Что делает оператор `delete` в JavaScript?",
              answers: [
                "Сравнивает два значения",
                "Удаляет свойство из объекта",
                "Создает новый объект",
              ],
              rightAnswerPointer: 1,
            },
            {
              question:
                "Какой оператор используется для создания нового экземпляра объекта?",
              answers: ["Object.create", "new", "constructor"],
              rightAnswerPointer: 1,
            },
          ],
        },
        /*Statements */
        {
          title: "Statements (инструкции)",
          link: "/tutorials/js/statements",
          questions: [
            {
              question: "Что такое инструкция в JavaScript?",
              answers: [
                "Тип функции",
                "Базовая единица кода, которая выполняется в программе",
                "Тип переменной",
              ],
              rightAnswerPointer: 1,
            },
            {
              question:
                "Какой символ обозначает конец инструкции в JavaScript?",
              answers: [";", ".", ":"],
              rightAnswerPointer: 0,
            },
            {
              question: "Что делает инструкция `if`?",
              answers: [
                "Проверяет условие и выполняет код, если условие истинно",
                "Определяет тип переменной",
                "Создает новый объект",
              ],
              rightAnswerPointer: 0,
            },
            {
              question:
                "Какой тип инструкций используется для повторения кода несколько раз?",
              answers: ["Циклы", "Функции", "Константы"],
              rightAnswerPointer: 0,
            },
            {
              question: "Что делает инструкция `return`?",
              answers: [
                "Выводит информацию в консоль",
                "Завершает выполнение функции и возвращает значение",
                "Создает новый объект",
              ],
              rightAnswerPointer: 1,
            },
            {
              question: "Что делает инструкция `try...catch`?",
              answers: [
                "Завершает выполнение цикла",
                "Перезапускает программу",
                "Обрабатывает ошибки в коде",
              ],
              rightAnswerPointer: 2,
            },
            {
              question:
                "Какая инструкция используется для выбора между несколькими вариантами?",
              answers: ["for", "switch", "if...else"],
              rightAnswerPointer: 1,
            },
            {
              question: "Какая инструкция используется для завершения цикла?",
              answers: ["return", "continue", "break"],
              rightAnswerPointer: 2,
            },
          ],
        },
      ],
    },

    {
      title: "Настройка окружения разработки",
      points: [
        {
          title: "Текстовый редактор (Visual Studio Code, Sublime Text)",
          link: "/tutorials/js/editors",
          questions: [
            {
              question:
                "Какой редактор лучше подходит для работы с JavaScript?",
              answers: ["VS Code", "Photoshop", "Sublime Text", "Notepad"],
              rightAnswerPointer: 0,
            },
          ],
        },
        {
          title: "Браузер (Chrome, Firefox) и инструменты разработчика",
          questions: [
            {
              question:
                "Какой браузер поддерживает инструменты для разработчиков?",
              answers: ["Chrome", "Firefox", "Safari", "Opera"],
              rightAnswerPointer: 0,
            },
          ],
        },
      ],
    },
  ],
};
