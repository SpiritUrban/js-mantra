export enum Category {
  BUTTON = "button",
  SLIDER = "slider",
  PAGE = "page",
  TOOL = "tool",
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

export const buttonsSrc: Src[] = [
  'MWMyvNN',
  'eYaBKGG',
  'JjQPQXR'
].map((id) => ({
  id,
  segments: Segments.RESULT,
  category: Category.BUTTON
}));

export const codepenSrc: Src[] = [
  ...buttonsSrc,
  {
    id: "vYqBbgL",
    segments: Segments.RESULT,
    category: Category.TOOL,
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
