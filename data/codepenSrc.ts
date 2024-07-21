export enum Category {
  BUTTON = "button",
  CARD = "card",
  CHECKBOX = "checkbox",
  FORM = "form",
  SLIDER = "slider",
  GALLERY = "gallery",
  SECTION = "section",
  PAGE = "page",
  UI = "ui",
  TOOL = "tool",
  EFFECT = "effect"
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
  'qBzZMGN',
  'VwJaEYb',
].map((id) => ({
  id,
  segments: Segments.RESULT,
  category: Category.BUTTON
}));

export const checkboxesSrc: Src[] = [...[
  'xxoVaoZ'
].map((id) => ({
  id,
  segments: Segments.RESULT,
  category: Category.CHECKBOX
})), ...[
  // {
  //   id: 'gOqVqBx',
  //   segments: Segments.RESULT,
  //   category: Category.CHECKBOX,
  //   size: "80x40", // or "40x20"
  // },
]];

export const pageSrc: Src[] = [...[
  'KKjzGPE',
  'poXyxoB',
  'abgNRzd',
].map((id) => ({
  id,
  segments: Segments.RESULT,
  category: Category.PAGE,
  size: "80x50", // or "40x20"
})), ...[
  // {
  //   id: 'gOqVqBx',
  //   segments: Segments.RESULT,
  //   category: Category.PAGE,
  //   size: "80x40", // or "40x20"
  // },
]];

export const uiSrc: Src[] = [...[
  'wvLGENj',
  'OJeNBJZ',
].map((id) => ({
  id,
  segments: Segments.RESULT,
  category: Category.UI,
  size: "80x50", // or "40x20"
})), ...[
  // {
  //   id: 'gOqVqBx',
  //   segments: Segments.RESULT,
  //   category: Category.UI,
  //   size: "80x40", // or "40x20"
  // },
]];

export const cardsSrc: Src[] = [...[
  'NWZNLez',
  'eYwZPpY',
].map((id) => ({
  id,
  segments: Segments.RESULT,
  category: Category.CARD
})), ...[
  // {
  //   id: 'gOqVqBx',
  //   segments: Segments.RESULT,
  //   category: Category.CARD,
  //   size: "80x40", // or "40x20"
  // },
]];

export const effectsSrc: Src[] = [...[
  'MWMyBoo',
  'KKjzBZW',
  'bGPpxPj',
  'eYwZLwq',
  'rNEeqBN',
  'vYqGVBJ',
  'JjQXmRb',
].map((id) => ({
  id,
  segments: Segments.RESULT,
  category: Category.EFFECT
})), ...[
  // {
  //   id: 'gOqVqBx',
  //   segments: Segments.RESULT,
  //   category: Category.EFFECT,
  //   size: "80x40", // or "40x20"
  // },
]];

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


export type SrcSet = {category: Category, items: Src[]}[];

export const codepenSrc: SrcSet = [
  {category: Category.BUTTON, items: buttonsSrc},
  {category: Category.CHECKBOX, items: checkboxesSrc},
  {category: Category.PAGE, items: pageSrc},
  {category: Category.UI, items: uiSrc},
  {category: Category.CARD, items: cardsSrc},
  {category: Category.EFFECT, items: effectsSrc},
  {category: Category.SLIDER, items: slidersSrc},
  {category: Category.GALLERY, items: galerysSrc},
  {category: Category.FORM, items: formsSrc},
  {category: Category.TOOL, items: toolsSrc},
  {category: Category.SECTION, items: sectionsSrc},
];


// Новый объект, который вы хотите добавить
const newItem: Src = {
  id: "newId123",
  segments: Segments.RESULT,
  category: Category['BUTTON'],
};

// Добавляем новый объект в массив codepenSrc
// codepenSrc.push(newItem);
