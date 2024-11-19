export const arraysAndObjects = {
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
};
