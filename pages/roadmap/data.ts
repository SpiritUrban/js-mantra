export interface Question {
  question: string;
  answers: string[];
  rightAnswerPointer: number;
}

export interface Point {
  title: string;
  questions: Question[];
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
        title: "Основы",
        points: [
          {
            title: "Statements (инструкции)",
            questions: [
              {
                question: " что такое инструкция? ",
                answers: ["базовая единица кода", "HTML-теги"],
                rightAnswerPointer: 0,
              },
              {
                question: " Каким знаком обозначаем конец инструкции?",
                answers: [";",".,","_"],
                rightAnswerPointer: 0,
              },
            ],
          },
        ],
      },
      {
        title: "Введение в JavaScript",
        points: [
          {
            title: "Что такое JavaScript?",
            questions: [
              {
                question: "JavaScript это ...",
                answers: ["Язык программирования", "Мобильное приложение"],
                rightAnswerPointer: 0,
              },
            ],
          },
          {
            title:
              "Применение JavaScript (веб-разработка, серверные приложения, мобильные приложения)",
            questions: [
              {
                question: "Где используется JavaScript?",
                answers: ["Веб-разработка", "Игры", "Фото", "Приложения"],
                rightAnswerPointer: 0,
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
  },
  {
    title: "Синтаксис и основы",
    subtopics: [
      {
        title: "Переменные",
        points: [
          {
            title: "Объявление: var, let, const",
            questions: [
              {
                question:
                  "Какой оператор предпочтителен для объявления переменной?",
                answers: ["var", "let", "const", "all"],
                rightAnswerPointer: 1,
              },
            ],
          },
          {
            title:
              "Типы данных (String, Number, Boolean, Null, Undefined, Object, Symbol)",
            questions: [
              {
                question: "Какой тип данных используется для строк?",
                answers: ["String", "Boolean", "Number", "Object"],
                rightAnswerPointer: 0,
              },
            ],
          },
        ],
      },
      {
        title: "Операторы",
        points: [
          {
            title: "Арифметические операторы",
            questions: [
              {
                question: "Что делает оператор '+' в JavaScript?",
                answers: ["Сложение", "Вычитание", "Умножение", "Деление"],
                rightAnswerPointer: 0,
              },
            ],
          },
          {
            title: "Операторы сравнения",
            questions: [
              {
                question: "Что возвращает оператор '=='?",
                answers: ["true", "false"],
                rightAnswerPointer: 0,
              },
            ],
          },
          {
            title: "Логические операторы",
            questions: [
              {
                question: "Что делает оператор '&&'?",
                answers: ["И", "ИЛИ", "Не", "Исключительное ИЛИ"],
                rightAnswerPointer: 0,
              },
            ],
          },
        ],
      },
      {
        title: "Управляющие структуры",
        points: [
          {
            title: "Условные операторы (if, else, switch)",
            questions: [
              {
                question: "Какой оператор используется для проверки условий?",
                answers: ["if", "for", "switch", "else"],
                rightAnswerPointer: 0,
              },
            ],
          },
          {
            title: "Циклы (for, while, do...while)",
            questions: [
              {
                question: "Какой цикл используется для повторения кода?",
                answers: ["for", "while", "if", "else"],
                rightAnswerPointer: 0,
              },
            ],
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
            questions: [
              {
                question: "Как объявить функцию в JavaScript?",
                answers: ["function()", "var function", "let", "class"],
                rightAnswerPointer: 0,
              },
            ],
          },
          {
            title: "Функциональные выражения",
            questions: [
              {
                question: "Что такое функциональные выражения?",
                answers: [
                  "Выражение с функцией",
                  "Лямбда",
                  "Анонимная функция",
                ],
                rightAnswerPointer: 2,
              },
            ],
          },
          {
            title: "Стрелочные функции",
            questions: [
              {
                question: "Что такое стрелочная функция?",
                answers: [
                  "Функция с сокращённым синтаксисом",
                  "Обычная функция",
                ],
                rightAnswerPointer: 0,
              },
            ],
          },
        ],
      },
      {
        title: "Параметры и возвращаемые значения",
        points: [
          {
            title: "Параметры функции",
            questions: [
              {
                question: "Как передать параметры в функцию?",
                answers: ["В круглых скобках", "Через return"],
                rightAnswerPointer: 0,
              },
            ],
          },
          {
            title: "Возвращаемые значения",
            questions: [
              {
                question: "Как вернуть значение из функции?",
                answers: ["return", "console.log"],
                rightAnswerPointer: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Работа с массивами и объектами",
    subtopics: [
      {
        title: "Массивы",
        points: [
          {
            title: "Создание массивов и доступ к элементам",
            questions: [
              {
                question: "Как добавить элемент в конец массива?",
                answers: ["push", "pop", "shift", "unshift"],
                rightAnswerPointer: 0,
              },
            ],
          },
          {
            title: "Методы массивов",
            questions: [
              {
                question:
                  "Какой метод возвращает новый массив с отфильтрованными элементами?",
                answers: ["filter", "map", "reduce", "forEach"],
                rightAnswerPointer: 0,
              },
            ],
          },
        ],
      },
      {
        title: "Объекты",
        points: [
          {
            title: "Создание объектов и доступ к свойствам",
            questions: [
              {
                question: "Как получить значение свойства объекта?",
                answers: [
                  "object.property",
                  "object[property]",
                  "object.get()",
                  "object['property']",
                ],
                rightAnswerPointer: 0,
              },
            ],
          },
          {
            title: "Методы объекта",
            questions: [
              {
                question: "Как добавить метод в объект?",
                answers: [
                  "object.method = function() {}",
                  "object[method]",
                  "object = function()",
                  "object.method = function",
                ],
                rightAnswerPointer: 0,
              },
            ],
          },
        ],
      },
    ],
  },
];
