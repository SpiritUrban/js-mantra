export interface Src {
  id: string;
  segments: string;
}

export const defaultTab = (item: Src) => item.segments.split(" ").join("%2C");

export const codepenSrc: Src[] = [
  {
    id: "JjQPQXR",
    segments: "result",
  },
  {
    id: "JjQPQXR",
    segments: "js result",
  },
  {
    id: "JjQPQXR",
    segments: "css result",
  },
  {
    id: "JjQPQXR",
    segments: "html result",
  },
];
