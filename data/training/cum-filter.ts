import { Training, ModalContent } from "./interfaces";

const funcName = "cumFilter";

const trainingData: Training = {
  title: "Cum Filter",
  heading: 'Используя метод <b>"filter"</b>',
  sounds: [
    // {
    //   src: '/sound/training/JS-Training-Dick-Splitting-ru.mp3',
    //   delay: 8
    // }
  ],

  funcName,
  description: `Допишите функцию <b>"${funcName}()"</b>.`,
  img: "/img/cum-filter.webp",
  editorHeight: "45rem",
};

const modalContent: ModalContent = {
  title: "Congratulation !!!",
  heading: "You have passed the test",
  description: "You have passed the test and you can get a reward.",
  img: "/img/medals/cum-worker.webp",
};

export default { trainingData, modalContent };
