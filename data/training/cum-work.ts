export interface Training {
    title: string;
    heading: string;
    description: string;
    test: Test[];
    img: string;
}

export interface Test {
    description: string;
    code: string;
    successMessage: string;
    failMessage: string;
    data: any;
    result: any;
}

export interface ModalContent {
    title: string;
    heading: string;
    description: string;
    img: string;
}

export interface CumPortion {
    producer: string;
    volume: number;
}

export default {

    trainingData: {
        title: "Cum Work",
        heading: 'Используем метод <b>"reduce"</b>',
        description: 'Допишите функцию <b>"cumMixer()"</b>.',
        img: "/img/cum-work.webp",

        test: [
            {
                description: 'Тест 1: Проверяет, что <b>"cumMixer(data)"</b> возвращает <b>180</b> для набора данных <b>"data"</b> .',
                code: ``,
                successMessage: 'Тест 1 прошел: cumMixer(data) === 180',
                failMessage: 'Тест 1 провален: cumMixer(data) !== 180',
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
                description: 'Тест 2: Проверяет, что <b>"cumMixer([])"</b> возвращает <b>0</b> для пустого массива.',
                code: ``,
                successMessage: 'Тест 2 прошел: cumMixer([]) === 0',
                failMessage: 'Тест 2 провален: cumMixer([]) !== 0',
                data: [],
                result: 0
            }
        ],

    } as Training,

    modalContent: {
        title: 'Congratulation !!!',
        heading: 'You have passed the test',
        description: 'You have passed the test and you can get a reward.',
        img: '/img/medals/cum-worker.webp',
    } as ModalContent,

    

    initialCode: `
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
` as string,

}

// backet + currentPortion.volume







