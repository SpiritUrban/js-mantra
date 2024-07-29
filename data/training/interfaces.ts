export interface PageData {
    trainingData: Training;
    modalContent: ModalContent;
    initialCode: string;
}

export interface Training {
    title: string;
    heading: string;
    funcName: string;
    description: string;
    test: Test[];
    img: string;
    editorHeight: string;
}

export interface Test {
    description: string;
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