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