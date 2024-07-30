import { playSound, pause, compileTypeScript, smoothScrollToBottom } from '@/utils';

interface ScriptLoadStatus {
  mocha: boolean;
  chai: boolean;
  executeCode: boolean;
  code: boolean;
  tests: boolean;
}

const scriptStatus: ScriptLoadStatus = {
  mocha: false,
  chai: false,
  executeCode: false,
  code: false,
  tests: false,
};

const loadScript = async (src: string, statusKey: keyof ScriptLoadStatus): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (statusKey === 'code' && scriptStatus[statusKey]) {
      removeScript(statusKey);
    }
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
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
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

const fetchAndCompileTypeScript = async (src: string): Promise<void> => {
  try {
    const response = await fetch(src, {
      headers: {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'uk-UA,uk;q=0.9,en-US;q=0.8,en;q=0.7',
        'Connection': 'keep-alive',
        'If-Modified-Since': 'Tue, 30 Jul 2024 20:29:02 GMT',
        'Referer': 'http://localhost:3000/training/cum-work',
        'Sec-Fetch-Dest': 'script',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'
      }
    });

    if (!response.ok) throw new Error(`Failed to fetch script: ${src}`);
    const tsCode = await response.text();
    let jsCode = compileTypeScript(tsCode);

    // Automatically add global export
    jsCode = addGlobalExport(jsCode);
    eval(jsCode); // Execute the compiled JavaScript code
  } catch (error) {
    console.error(`Error loading script ${src}:`, error);
  }
};

const addGlobalExport = (jsCode: string): string => {
  const functionNames = [];
  const regex = /function\s+(\w+)/g;
  let match;
  while ((match = regex.exec(jsCode)) !== null) {
    functionNames.push(match[1]);
  }

  functionNames.forEach(name => {
    jsCode += `\nif (typeof window !== 'undefined') { window.${name} = ${name}; }\n`;
  });
  return jsCode;
};


export const addTestScripts = async (testPath?: string): Promise<void> => {
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/mocha/9.1.3/mocha.min.js', 'mocha');
  window.mocha.setup({ ui: 'bdd', cleanReferencesAfterRun: false });
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/chai/4.3.4/chai.min.js', 'chai');
  window.chai = window.chai;
  await loadScript('/training/1/executeCode.js', 'executeCode');
  if (testPath) {
    await fetchAndCompileTypeScript(`${testPath}/code.ts`);
    await loadScript(`${testPath}/tests.js`, 'tests');
  }
};