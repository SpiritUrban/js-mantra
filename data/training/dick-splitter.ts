import { Training, ModalContent } from "./interfaces";

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
};

const modalContent: ModalContent = {
    title: 'Congratulation !!!',
    heading: 'You have passed the test',
    description: 'You have passed the test and you can get a reward.',
    img: '/img/medals/glass-dick-splitter.webp',
};

export default { trainingData, modalContent };