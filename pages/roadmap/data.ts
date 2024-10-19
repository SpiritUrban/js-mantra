export interface Point {
    title: string;
    question: string;
    answers: string[];
    rightAnswerPointer: number;
  }
  
  export interface Subtopic {
    title: string;
    points: Point[];
  }
  
  export interface Topic {
    title: string;
    subtopics: Subtopic[];
  }
  
  export const javascriptCourse: Topic[] = [
    {
      title: "Основы JavaScript",
      subtopics: [
        {
          title: "Введение в JavaScript",
          points: [
            {
              title: "Что такое JavaScript?",
              question: "JavaScript это ...",
              answers: ["Язык программирования", "Мобильное приложение"],
              rightAnswerPointer: 0,
            },
            {
              title: "Применение JavaScript (веб-разработка, серверные приложения, мобильные приложения)",
              question: "Где используется JavaScript?",
              answers: ["Веб-разработка", "Игры", "Фото", "Приложения"],
              rightAnswerPointer: 0,
            },
          ],
        },
        {
          title: "Настройка окружения разработки",
          points: [
            {
              title: "Текстовый редактор (Visual Studio Code, Sublime Text)",
              question: "Какой редактор лучше подходит для работы с JavaScript?",
              answers: ["VS Code", "Photoshop", "Sublime Text", "Notepad"],
              rightAnswerPointer: 0,
            },
            {
              title: "Браузер (Chrome, Firefox) и инструменты разработчика",
              question: "Какой браузер поддерживает инструменты для разработчиков?",
              answers: ["Chrome", "Firefox", "Safari", "Opera"],
              rightAnswerPointer: 0,
            },
          ],
        },
      ],
    },
    {
      title: "Синтаксис и основы",
      subtopics: [
        {
          title: "Переменные",
          points: [
            {
              title: "Объявление: var, let, const",
              question: "Какой оператор предпочтителен для объявления переменной?",
              answers: ["var", "let", "const", "all"],
              rightAnswerPointer: 1,
            },
            {
              title: "Типы данных (String, Number, Boolean, Null, Undefined, Object, Symbol)",
              question: "Какой тип данных используется для строк?",
              answers: ["String", "Boolean", "Number", "Object"],
              rightAnswerPointer: 0,
            },
          ],
        },
        {
          title: "Операторы",
          points: [
            {
              title: "Арифметические операторы",
              question: "Что делает оператор '+' в JavaScript?",
              answers: ["Сложение", "Вычитание", "Умножение", "Деление"],
              rightAnswerPointer: 0,
            },
            {
              title: "Операторы сравнения",
              question: "Что возвращает оператор '=='?",
              answers: ["true", "false"],
              rightAnswerPointer: 0,
            },
            {
              title: "Логические операторы",
              question: "Что делает оператор '&&'?",
              answers: ["И", "ИЛИ", "Не", "Исключительное ИЛИ"],
              rightAnswerPointer: 0,
            },
          ],
        },
        {
          title: "Управляющие структуры",
          points: [
            {
              title: "Условные операторы (if, else, switch)",
              question: "Какой оператор используется для проверки условий?",
              answers: ["if", "for", "switch", "else"],
              rightAnswerPointer: 0,
            },
            {
              title: "Циклы (for, while, do...while)",
              question: "Какой цикл используется для повторения кода?",
              answers: ["for", "while", "if", "else"],
              rightAnswerPointer: 0,
            },
          ],
        },
      ],
    },
    {
      title: "Функции",
      subtopics: [
        {
          title: "Определение функций",
          points: [
            {
              title: "Объявление функции",
              question: "Как объявить функцию в JavaScript?",
              answers: ["function()", "var function", "let", "class"],
              rightAnswerPointer: 0,
            },
            {
              title: "Функциональные выражения",
              question: "Что такое функциональные выражения?",
              answers: ["Выражение с функцией", "Лямбда", "Анонимная функция"],
              rightAnswerPointer: 2,
            },
            {
              title: "Стрелочные функции",
              question: "Что такое стрелочная функция?",
              answers: ["Функция с сокращённым синтаксисом", "Обычная функция"],
              rightAnswerPointer: 0,
            },
          ],
        },
        {
          title: "Параметры и возвращаемые значения",
          points: [
            {
              title: "Параметры функции",
              question: "Как передать параметры в функцию?",
              answers: ["В круглых скобках", "Через return"],
              rightAnswerPointer: 0,
            },
            {
              title: "Возвращаемые значения",
              question: "Как вернуть значение из функции?",
              answers: ["return", "console.log"],
              rightAnswerPointer: 0,
            },
          ],
        },
      ],
    },
    // Продолжение для остальных разделов аналогично...
  ];
  