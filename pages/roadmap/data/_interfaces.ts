


export interface Question {
    question: string;
    answers: string[];
    rightAnswerPointer: number;
  }
  
  export interface Point {
    title: string;
    questions: Question[];
    link?: string;
  }
  
  export interface Subtopic {
    title: string;
    points: Point[];
  }
  
  export interface Topic {
    title: string;
    subtopics: Subtopic[];
  }