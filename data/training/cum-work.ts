import { Training, ModalContent, CumPortion } from "./interfaces";

const funcName = 'cumMixer';

const trainingData: Training = {
    title: "Cum Work",
    heading: 'Используя метод <b>"reduce"</b>',
    funcName,
    description: `Допишите функцию <b>"${funcName}()"</b>.`,
    img: "/img/cum-work.webp",
    editorHeight: '32rem',

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

};

const modalContent: ModalContent = {
    title: 'Congratulation !!!',
    heading: 'You have passed the test',
    description: 'You have passed the test and you can get a reward.',
    img: '/img/medals/cum-worker.webp',
};

const initialCode: string = `
interface CumPortion {
    producer: string;
    volume: number;
};

const data: CumPortion[] = [
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
];

const cumMixer = (cumPortions: CumPortion[]): number => 
    cumPortions.reduce((backet, currentPortion) => /* тут */, 0);

// dickSplitter(glassDick) => ['my', 'dick', 'is', 'big']
`;

export default { trainingData, modalContent, initialCode }

// answer -> backet + currentPortion.volume







