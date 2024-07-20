export enum Category {
  BUTTON = "button",
  CARD = "card",
  FORM = "form",
  SLIDER = "slider",
  GALLERY = "gallery",
  SECTION = "section",
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
  size?: string;
}

export const defaultTab = (item: Src) => item.segments.split(" ").join("%2C");

export const buttonsSrc: Src[] = [
  'MWMyvNN',
  'eYaBKGG',
  'JjQPQXR',
  'WNqwZXq',
].map((id) => ({
  id,
  segments: Segments.RESULT,
  category: Category.BUTTON
}));

export const formsSrc: Src[] = [...[
  // 'MWMyvNN',
].map((id) => ({
  id,
  segments: Segments.RESULT,
  category: Category.FORM
})), ...[
  {
    id: 'gOqVqBx',
    segments: Segments.RESULT,
    category: Category.FORM,
    size: "80x40", // or "40x20"
  },
]];

export const slidersSrc: Src[] = [
  'JjqNEbZ'
].map((id) => ({
  id,
  segments: Segments.RESULT,
  category: Category.SLIDER
}));

export const galerysSrc: Src[] = [...[
  // 'MWMyvNN',
  'WNqwXEG',
].map((id) => ({
  id,
  segments: Segments.RESULT,
  category: Category.GALLERY
})), ...[
  {
    id: 'rNEeYYJ',
    segments: Segments.RESULT,
    category: Category.GALLERY,
    size: "80x40", // or "40x20"
  },
]];

export const sectionsSrc: Src[] = [
  'PovJqWm',
].map((id) => ({
  id,
  segments: Segments.RESULT,
  category: Category.SECTION,
  size: "80x40", // or "40x20"
}));



export const toolsSrc: Src[] = [
  'vYqBbgL',
].map((id) => ({
  id,
  segments: Segments.RESULT,
  category: Category.TOOL,
  size: "80x40", // or "40x20"
}));

export const codepenSrc: Src[] = [
  ...buttonsSrc,
  ...slidersSrc,
  ...galerysSrc,
  ...formsSrc,
  ...toolsSrc,
  ...sectionsSrc,
];


// Новый объект, который вы хотите добавить
const newItem: Src = {
  id: "newId123",
  segments: Segments.RESULT,
  category: Category['BUTTON'],
};

// Добавляем новый объект в массив codepenSrc
// codepenSrc.push(newItem);
