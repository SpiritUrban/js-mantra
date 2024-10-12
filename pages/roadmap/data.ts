// data.ts

export interface Subtopic {
  title: string;
  points: string[];
}

export interface Topic {
  title: string;
  subtopics: {
      [key: string]: Subtopic;
  };
}

export const javascriptCourse: { [key: string]: Topic } = {
  "1": {
      title: "Основы JavaScript",
      subtopics: {
          "1.1": {
              title: "Введение в JavaScript",
              points: [
                  "Что такое JavaScript?",
                  "Применение JavaScript (веб-разработка, серверные приложения, мобильные приложения)"
              ]
          },
          "1.2": {
              title: "Настройка окружения разработки",
              points: [
                  "Текстовый редактор (Visual Studio Code, Sublime Text)",
                  "Браузер (Chrome, Firefox) и инструменты разработчика"
              ]
          }
      }
  },
  "2": {
      title: "Синтаксис и основы",
      subtopics: {
          "2.1": {
              title: "Переменные",
              points: [
                  "Объявление: var, let, const",
                  "Типы данных (String, Number, Boolean, Null, Undefined, Object, Symbol)"
              ]
          },
          "2.2": {
              title: "Операторы",
              points: [
                  "Арифметические операторы",
                  "Операторы сравнения",
                  "Логические операторы"
              ]
          },
          "2.3": {
              title: "Управляющие структуры",
              points: [
                  "Условные операторы (if, else, switch)",
                  "Циклы (for, while, do...while)"
              ]
          }
      }
  },
  "3": {
      title: "Функции",
      subtopics: {
          "3.1": {
              title: "Определение функций",
              points: [
                  "Объявление функции",
                  "Функциональные выражения",
                  "Стрелочные функции"
              ]
          },
          "3.2": {
              title: "Параметры и возвращаемые значения",
              points: [
                  "Параметры функции",
                  "Возвращаемые значения"
              ]
          }
      }
  },
  "4": {
      title: "Объекты и массивы",
      subtopics: {
          "4.1": {
              title: "Объекты",
              points: [
                  "Создание объектов",
                  "Доступ к свойствам и методам",
                  "Ключевое слово this"
              ]
          },
          "4.2": {
              title: "Массивы",
              points: [
                  "Создание массивов",
                  "Методы массивов (push, pop, shift, unshift, map, filter, reduce)"
              ]
          }
      }
  },
  "5": {
      title: "Манипуляция с DOM",
      subtopics: {
          "5.1": {
              title: "Введение в DOM",
              points: [
                  "Что такое объектная модель документа (DOM)?",
                  "Доступ к элементам DOM с помощью document.getElementById, document.querySelector"
              ]
          },
          "5.2": {
              title: "Методы DOM",
              points: [
                  "Добавление, удаление и изменение элементов",
                  "Обработка событий (нажатия, наведения и т. д.)"
              ]
          }
      }
  },
  "6": {
      title: "Асинхронное программирование",
      subtopics: {
          "6.1": {
              title: "Callback-функции",
              points: [
                  "Что такое Callback?",
                  "Использование Callback в JavaScript"
              ]
          },
          "6.2": {
              title: "Промисы",
              points: [
                  "Введение в промисы",
                  "Создание и использование промисов",
                  "Цепочки промисов"
              ]
          },
          "6.3": {
              title: "async/await",
              points: [
                  "Введение в async и await",
                  "Использование async/await для асинхронного программирования"
              ]
          }
      }
  },
  "7": {
      title: "Продвинутые концепции",
      subtopics: {
          "7.1": {
              title: "ES6+ функции",
              points: [
                  "Шаблонные строки",
                  "Деструктуризация",
                  "Оператор расширения и остатка"
              ]
          },
          "7.2": {
              title: "Модули",
              points: [
                  "Введение в модули",
                  "Экспорт и импорт модулей"
              ]
          }
      }
  },
  "8": {
      title: "JavaScript на практике",
      subtopics: {
          "8.1": {
              title: "Создание проектов",
              points: [
                  "Создайте небольшие проекты (например, список дел, калькулятор)",
                  "Используйте HTML и CSS вместе с JavaScript"
              ]
          },
          "8.2": {
              title: "Фреймворки и библиотеки",
              points: [
                  "Введение в фреймворки (React, Vue, Angular)",
                  "Использование библиотек (jQuery, Lodash)"
              ]
          }
      }
  },
  "9": {
      title: "Ресурсы и практика",
      subtopics: {
          "9.1": {
              title: "Онлайн-ресурсы",
              points: [
                  "MDN Web Docs",
                  "JavaScript.info",
                  "Codecademy, freeCodeCamp или аналогичные платформы"
              ]
          },
          "9.2": {
              title: "Практические проекты",
              points: [
                  "Создайте личный сайт",
                  "Постройте небольшие игры (например, крестики-нолики)"
              ]
          }
      }
  },
  "10": {
      title: "Сообщество и дальнейшее обучение",
      subtopics: {
          "10.1": {
              title: "Сообщества",
              points: [
                  "Присоединяйтесь к онлайн-форумам и группам (например, Stack Overflow, Reddit, Discord-серверы)"
              ]
          },
          "10.2": {
              title: "Темы для дальнейшего изучения",
              points: [
                  "Изучите более продвинутые темы, такие как TypeScript, веб-API и фреймворки для тестирования"
              ]
          }
      }
  }
};

