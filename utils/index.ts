export const playSound = (path: string) => {
  const audio = new Audio(path);
  audio.play();
};

export const pause = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));