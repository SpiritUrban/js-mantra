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

// Функция для замены строки /* tslint:disable */ на пустую строку
const removeTslintDisable = (code: string): string => {
  const tslintDisablePattern = /\/\*\s*tslint:disable\s*\*\//g;
  return code.replace(tslintDisablePattern, '');
};

// AndCompileTypeScript
export const fetchFile = async (src: string): Promise<string | null> => {
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
    return removeTslintDisable(tsCode);
  } catch (error) {
    console.error(`Error loading script ${src}:`, error);
    return null;
  }
};

const executeJSCode = (code: string): void => {
  try {
    eval(code);
  } catch (error) {
    console.error('Error executing JS code:', error);
  }
};

const executeTypeScript = (tsCode: string): void => {
  try {
    let jsCode = compileTypeScript(tsCode);
    // Automatically add global export
    console.log(jsCode)
    jsCode = addGlobalExport(jsCode);
    eval(jsCode); // Execute the compiled JavaScript code
  } catch (error) {
    console.error('Error executing JS -> TScode:', error);
  }
}


const addGlobalExport = (jsCode: string): string => {
  const functionNames = [];
  const functionRegex = /function\s+(\w+)/g;
  const varFunctionRegex = /var\s+(\w+)\s*=\s*function/g;
  const varArrowFunctionRegex = /var\s+(\w+)\s*=\s*\([\w\s,:]*\)\s*=>/g;
  const constFunctionRegex = /const\s+(\w+)\s*=\s*function/g;
  const constArrowFunctionRegex = /const\s+(\w+)\s*=\s*\([\w\s,:]*\)\s*=>/g;
  const letFunctionRegex = /let\s+(\w+)\s*=\s*function/g;
  const letArrowFunctionRegex = /let\s+(\w+)\s*=\s*\([\w\s,:]*\)\s*=>/g;
  const varRegex = /var\s+(\w+)\s*=/g;
  const constRegex = /const\s+(\w+)\s*=/g;
  const letRegex = /let\s+(\w+)\s*=/g;

  let match;

  while ((match = functionRegex.exec(jsCode)) !== null) {
    functionNames.push(match[1]);
  }
  while ((match = varFunctionRegex.exec(jsCode)) !== null) {
    functionNames.push(match[1]);
  }
  while ((match = varArrowFunctionRegex.exec(jsCode)) !== null) {
    functionNames.push(match[1]);
  }
  while ((match = constFunctionRegex.exec(jsCode)) !== null) {
    functionNames.push(match[1]);
  }
  while ((match = constArrowFunctionRegex.exec(jsCode)) !== null) {
    functionNames.push(match[1]);
  }
  while ((match = letFunctionRegex.exec(jsCode)) !== null) {
    functionNames.push(match[1]);
  }
  while ((match = letArrowFunctionRegex.exec(jsCode)) !== null) {
    functionNames.push(match[1]);
  }
  while ((match = varRegex.exec(jsCode)) !== null) {
    functionNames.push(match[1]);
  }
  while ((match = constRegex.exec(jsCode)) !== null) {
    functionNames.push(match[1]);
  }
  while ((match = letRegex.exec(jsCode)) !== null) {
    functionNames.push(match[1]);
  }

  functionNames.forEach(name => {
    jsCode += `\nif (typeof window !== 'undefined') { window.${name} = ${name}; }\n`;
  });

  return jsCode;
};





export const addTestScripts = async (testPath?: string, _tsCode?: string): Promise<void> => {
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/mocha/9.1.3/mocha.min.js', 'mocha');
  window.mocha.setup({ ui: 'bdd', cleanReferencesAfterRun: false });
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/chai/4.3.4/chai.min.js', 'chai');
  window.chai = window.chai;
  await loadScript('/training/executeCode.js', 'executeCode');
  if (testPath) {
    const tsCode = _tsCode ? _tsCode : await fetchFile(`${testPath}/code.ts`);
    if (tsCode) executeTypeScript(tsCode)
    else console.error(`Failed to fetch TypeScript code from ${testPath}/code.ts`);
    await loadScript(`${testPath}/code.test.js`, 'tests');
  }
};