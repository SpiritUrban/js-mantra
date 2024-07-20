export enum Category {
  BUTTON = "button",
  SLIDER = "slider",
  PAGE = "page"
}

export enum Segments {
  RESULT = "result",
  JS_RESULT = "js result",
  CSS_RESULT = "css result",
  HTML_RESULT = "html result"
}

export interface Src {
  id: string;
  segments: Segments;
  category: Category;
}

export const defaultTab = (item: Src) => item.segments.split(" ").join("%2C");

export const codepenSrc: Src[] = [
  {
    id: "eYaBKGG",
    segments: Segments.RESULT,
    category: Category.BUTTON,
  },
  {
    id: "JjQPQXR",
    segments: Segments.RESULT,
    category: Category.BUTTON,
  },
 
];


// Новый объект, который вы хотите добавить
const newItem: Src = {
  id: "newId123",
  segments: Segments.RESULT,
  category: Category['BUTTON'],
};

// Добавляем новый объект в массив codepenSrc
// codepenSrc.push(newItem);
