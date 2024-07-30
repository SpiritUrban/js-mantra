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

export const addTestScripts = async (): Promise<void> => {
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/mocha/9.1.3/mocha.min.js', 'mocha');
  window.mocha.setup('bdd');
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/chai/4.3.4/chai.min.js', 'chai');
  window.chai = window.chai;
  await loadScript('/training/1/code.js', 'code');
  await loadScript('/training/1/tests.js', 'tests');
};
