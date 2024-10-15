export interface Subtopic {
    title: string;
    points: string[];
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
            "Что такое JavaScript?",
            "Применение JavaScript (веб-разработка, серверные приложения, мобильные приложения)"
          ]
        },
        {
          title: "Настройка окружения разработки",
          points: [
            "Текстовый редактор (Visual Studio Code, Sublime Text)",
            "Браузер (Chrome, Firefox) и инструменты разработчика"
          ]
        }
      ]
    },
    {
      title: "Синтаксис и основы",
      subtopics: [
        {
          title: "Переменные",
          points: [
            "Объявление: var, let, const",
            "Типы данных (String, Number, Boolean, Null, Undefined, Object, Symbol)"
          ]
        },
        {
          title: "Операторы",
          points: [
            "Арифметические операторы",
            "Операторы сравнения",
            "Логические операторы"
          ]
        },
        {
          title: "Управляющие структуры",
          points: [
            "Условные операторы (if, else, switch)",
            "Циклы (for, while, do...while)"
          ]
        }
      ]
    },
    {
      title: "Функции",
      subtopics: [
        {
          title: "Определение функций",
          points: [
            "Объявление функции",
            "Функциональные выражения",
            "Стрелочные функции"
          ]
        },
        {
          title: "Параметры и возвращаемые значения",
          points: [
            "Параметры функции",
            "Возвращаемые значения"
          ]
        }
      ]
    },
    {
      title: "Объекты и массивы",
      subtopics: [
        {
          title: "Объекты",
          points: [
            "Создание объектов",
            "Доступ к свойствам и методам",
            "Ключевое слово this"
          ]
        },
        {
          title: "Массивы",
          points: [
            "Создание массивов",
            "Методы массивов (push, pop, shift, unshift, map, filter, reduce)"
          ]
        }
      ]
    },
    {
      title: "Манипуляция с DOM",
      subtopics: [
        {
          title: "Введение в DOM",
          points: [
            "Что такое объектная модель документа (DOM)?",
            "Доступ к элементам DOM с помощью document.getElementById, document.querySelector"
          ]
        },
        {
          title: "Методы DOM",
          points: [
            "Добавление, удаление и изменение элементов",
            "Обработка событий (нажатия, наведения и т. д.)"
          ]
        }
      ]
    },
    {
      title: "Асинхронное программирование",
      subtopics: [
        {
          title: "Callback-функции",
          points: [
            "Что такое Callback?",
            "Использование Callback в JavaScript"
          ]
        },
        {
          title: "Промисы",
          points: [
            "Введение в промисы",
            "Создание и использование промисов",
            "Цепочки промисов"
          ]
        },
        {
          title: "async/await",
          points: [
            "Введение в async и await",
            "Использование async/await для асинхронного программирования"
          ]
        }
      ]
    },
    {
      title: "Продвинутые концепции",
      subtopics: [
        {
          title: "ES6+ функции",
          points: [
            "Шаблонные строки",
            "Деструктуризация",
            "Оператор расширения и остатка"
          ]
        },
        {
          title: "Модули",
          points: [
            "Введение в модули",
            "Экспорт и импорт модулей"
          ]
        }
      ]
    },
    {
      title: "JavaScript на практике",
      subtopics: [
        {
          title: "Создание проектов",
          points: [
            "Создайте небольшие проекты (например, список дел, калькулятор)",
            "Используйте HTML и CSS вместе с JavaScript"
          ]
        },
        {
          title: "Фреймворки и библиотеки",
          points: [
            "Введение в фреймворки (React, Vue, Angular)",
            "Использование библиотек (jQuery, Lodash)"
          ]
        }
      ]
    },
    {
      title: "Ресурсы и практика",
      subtopics: [
        {
          title: "Онлайн-ресурсы",
          points: [
            "MDN Web Docs",
            "JavaScript.info",
            "Codecademy, freeCodeCamp или аналогичные платформы"
          ]
        },
        {
          title: "Практические проекты",
          points: [
            "Создайте личный сайт",
            "Постройте небольшие игры (например, крестики-нолики)"
          ]
        }
      ]
    },
    {
      title: "Сообщество и дальнейшее обучение",
      subtopics: [
        {
          title: "Сообщества",
          points: [
            "Присоединяйтесь к онлайн-форумам и группам (например, Stack Overflow, Reddit, Discord-серверы)"
          ]
        },
        {
          title: "Темы для дальнейшего изучения",
          points: [
            "Изучите более продвинутые темы, такие как TypeScript, веб-API и фреймворки для тестирования"
          ]
        }
      ]
    }
  ];
  