import * as ts from 'typescript';


export const playSound = (path: string) => {
  const audio = new Audio(path);
  audio.play();
};

export const pause = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const compileTypeScript = (code: string) => {
  const result = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.CommonJS }
  });
  return result.outputText;
};

// Функция для плавного скроллинга элемента вниз
export const smoothScrollToBottom = (element: { scrollHeight: any; scrollTop: any; } | null) => {
  if (element) {
    const scrollHeight = element.scrollHeight;
    const scrollTop = element.scrollTop;
    const distance = scrollHeight - scrollTop;
    const duration = 1500; // Продолжительность анимации в миллисекундах
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      element.scrollTop = scrollTop + distance * progress;

      if (timeElapsed < duration) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  }
};
