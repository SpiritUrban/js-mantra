export interface PageData {
    trainingData: Training;
    modalContent: ModalContent;
}

export interface Training {
    title: string;
    heading: string;
    sounds?: { src: string; delay: number }[];
    funcName: string;
    description: string;
    img: string;
    editorHeight: string;
}

export interface ModalContent {
    title: string;
    heading: string;
    description: string;
    img: string;
}