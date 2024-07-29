import { Training, ModalContent, CumPortion, } from "./interfaces";

const funcName = 'dickSplitter';

export default {

    trainingData: {
        title: "Dick Splitting",
        heading: 'Используем метод <b>"split"</b>',
        funcName,
        description: `Допишите функцию <b>"${funcName}()"</b>.`,
        img: "/img/dick-splitter.webp",

        test: [
            {
                description: `Тест 1: Проверяет, что <b>"${funcName}(data)"</b> возвращает <b>180</b> для набора данных <b>"data"</b> .`,
                successMessage: `Тест 1 прошел: ${funcName}(data) === 180`,
                failMessage: `Тест 1 провален: ${funcName}(data) !== 180`,
                data: [
                    {
                        producer: "Vasya",
                        volume: 50 // 50 ml
                    },
                    {
                        producer: "Sanya",
                        volume: 60 // 60 ml
                    },
                    {
                        producer: "Siroja",
                        volume: 70 // 70 ml
                    }
                ] as CumPortion[],
                result: 180
            },

            {
                description: `Тест 2: Проверяет, что <b>"${funcName}([])"</b> возвращает <b>0</b> для пустого массива.`,
                successMessage: `Тест 2 прошел: ${funcName}([]) === 0`,
                failMessage: `Тест 2 провален: ${funcName}([]) !== 0`,
                data: [],
                result: 0
            }
        ],

    } as Training,

    modalContent: {
        title: 'Congratulation !!!',
        heading: 'You have passed the test',
        description: 'You have passed the test and you can get a reward.',
        img: '/img/medals/glass-dick-splitter.webp',
    } as ModalContent,

    initialCode: `
const glassDick: string = 'my dick is big';
const dickSplitter = (glassDick: string): string[] => glassDick.split(' ');
` as string,

}

// answer -> backet + currentPortion.volume







