import { Training, ModalContent } from "./interfaces";

const funcName = 'cumMixer';

const trainingData: Training = {
    title: "Cum Work",
    heading: 'Используя метод <b>"reduce"</b>',
    sounds: [
        {
          src: '/sound/training/JS-Training-Cum-Work.mp3',
          delay: 2
        },
        // {
        //   src: '/sound/training/JS-Training-Dick-Splitting-ru.mp3',
        //   delay: 8
        // }
      ],
    
    funcName,
    description: `Допишите функцию <b>"${funcName}()"</b>.`,
    img: "/img/cum-work.webp",
    editorHeight: '32rem',
};

const modalContent: ModalContent = {
    title: 'Congratulation !!!',
    heading: 'You have passed the test',
    description: 'You have passed the test and you can get a reward.',
    img: '/img/medals/cum-worker.webp',
};

export default { trainingData, modalContent }