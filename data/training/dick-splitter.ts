import { Training, ModalContent, CumPortion } from "./interfaces";

const funcName = 'dickSplitter';

const trainingData: Training = {
    title: "Dick Splitting",
    heading: 'Используем метод <b>"split"</b>',
    funcName,
    description: `
Допишите функцию <b>"${funcName}()"</b>.
Нужно разбить "glassDick" и не порезать руки! <br>
Регулярное выражение <b> /\s+/ </b> используется для поиска одного или более пробельных символов.
Давайте разберем его подробнее:
    <b>/ и /</b>: Две наклонные черты указывают на начало и конец регулярного выражения.
    <b>\s</b>: Экранированный символ s (то есть \s) соответствует любому пробельному символу, 
    включая пробелы, табуляции, переносы строк и другие символы пробела.
    <b>+</b>: Плюс означает "один или более". Таким образом, \s+ будет соответствовать одному 
    или более пробельным символам подряд.
        `,
    img: "/img/dick-splitter.webp",
    editorHeight: '10rem',


    test: [
        {
            description: `Тест 1: Проверяет, что <b>"${funcName}(data)"</b> возвращает <b>180</b> для набора данных <b>"data"</b> .`,
            successMessage: `Тест 1 прошел: ${funcName}(data) === 180`,
            failMessage: `Тест 1 провален: ${funcName}(data) !== 180`,
            data: 'my dick is big',
            result: 4
        },
        {
            description: `Тест 2: Проверяет, что <b>"${funcName}([])"</b> возвращает <b>0</b> для пустого массива.`,
            successMessage: `Тест 2 прошел: ${funcName}([]) === 0`,
            failMessage: `Тест 2 провален: ${funcName}([]) !== 0`,
            data: '',
            result: 0
        }
    ],
};

const modalContent: ModalContent = {
    title: 'Congratulation !!!',
    heading: 'You have passed the test',
    description: 'You have passed the test and you can get a reward.',
    img: '/img/medals/glass-dick-splitter.webp',
};

const initialCode: string = `
const data: string = 'my dick is big';
const dickSplitter = (glassDick: string): string[] => glassDick.split(' ');
`;

export default { trainingData, modalContent, initialCode };
