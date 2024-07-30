interface ScriptLoadStatus {
  mocha: boolean;
  chai: boolean;
  executeCode: boolean;
  tests: boolean;
}

const scriptStatus: ScriptLoadStatus = {
  mocha: false,
  chai: false,
  executeCode: false,
  tests: false,
};

const loadScript = async (src: string, statusKey: keyof ScriptLoadStatus): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (statusKey === 'tests' && scriptStatus[statusKey]) {
      removeScript(statusKey);
    }

    if (!scriptStatus[statusKey]) {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        scriptStatus[statusKey] = true;
        resolve();
      };
      script.onerror = reject;
      script.id = statusKey; // Assign an ID to the script for easy removal
      document.body.appendChild(script);
    } else {
      resolve();
    }
  });
};

const removeScript = (statusKey: keyof ScriptLoadStatus): void => {
  const script = document.getElementById(statusKey);
  if (script) {
    script.parentNode?.removeChild(script);
    scriptStatus[statusKey] = false; // Update the status to indicate the script is not loaded
  }
};

export const addTestScripts = async (testPath?: string): Promise<void> => {
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/mocha/9.1.3/mocha.min.js', 'mocha');
  window.mocha.setup({ ui: 'bdd', cleanReferencesAfterRun: false });
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/chai/4.3.4/chai.min.js', 'chai');
  window.chai = window.chai;
  await loadScript('/training/1/executeCode.js', 'executeCode');
  if (testPath) await loadScript(testPath, 'tests');
};

