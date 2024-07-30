interface ScriptLoadStatus {
  [key: string]: boolean;
}

const scriptStatus: ScriptLoadStatus = {
  mocha: false,
  chai: false,
  code: false,
  tests: false,
};

const loadScript = async (src: string, statusKey: keyof ScriptLoadStatus): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!scriptStatus[statusKey]) {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        scriptStatus[statusKey] = true;
        resolve();
      };
      script.onerror = reject;
      document.body.appendChild(script);
    } else {
      resolve();
    }
  });
};

export const addTestScripts = async (testPath?: string): Promise<void> => {
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/mocha/9.1.3/mocha.min.js', 'mocha');
  window.mocha.setup({ ui: 'bdd', cleanReferencesAfterRun: false });
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/chai/4.3.4/chai.min.js', 'chai');
  window.chai = window.chai;
  await loadScript('/training/1/code.js', 'code');
  if (testPath) await loadScript(testPath, 'tests');
};

// Функция для плавного скроллинга элемента вниз
export const smoothScrollToBottom = (element: { scrollHeight: any; scrollTop: any; } | null) => {
  if (element) {
    const scrollHeight = element.scrollHeight;
    const scrollTop = element.scrollTop;
    const distance = scrollHeight - scrollTop;
    const duration = 500; // Продолжительность анимации в миллисекундах
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