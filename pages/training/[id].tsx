import { useRouter } from 'next/router';
import CodeBlock from '@/components/organisms/CodeBlock';
import styled from 'styled-components';
import CodeEditor from '@/components/organisms/CodeEditor';
import { useState } from 'react';
import * as ts from 'typescript';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  interface CumPortion {
    producer: string;
    volume: number;
  }

  const cumMixer = (cumPortions: CumPortion[]) =>
    cumPortions.reduce((backet, currentPortion) => backet + currentPortion.volume, 0);

  const data: CumPortion[] = [
    {
      producer: "Vasya",
      volume: 50 // 50 ml
    },
    {
      producer: "Sanya",
      volume: 60 // 60 ml
    },
    {
      producer: "Siroja",
      volume: 70 // 70 ml
    }
  ];

  // console.log('Total cum volume: ', cumMixer(data));

  const dataForCode: string = `
    const data: CumPortion[] = [
      {
        producer: "Vasya",
        volume: 50 // 50 ml
      },
      {
        producer: "Sanya",
        volume: 60 // 60 ml
      },
      {
        producer: "Siroja",
        volume: 70 // 70 ml
      }
    ];
  `

  const initialCode: string = `
    interface CumPortion {
      producer: string;
      volume: number;
    };

    const data: CumPortion[] = [
      {
        producer: "Vasya",
        volume: 50 // 50 ml
      },
      {
        producer: "Sanya",
        volume: 60 // 60 ml
      },
      {
        producer: "Siroja",
        volume: 70 // 70 ml
      }
    ];

    const cumMixer = (cumPortions: CumPortion[]): number => 
      cumPortions.reduce((backet, currentPortion) => backet + currentPortion.volume, 0);
  `;

  const [result, setResult] = useState<string | null>(null);

  const compileTypeScript = (code: string) => {
    const result = ts.transpileModule(code, {
      compilerOptions: { module: ts.ModuleKind.CommonJS }
    });
    return result.outputText;
  };

  const handleSubmit = (code: string) => {
    try {
      const compiledCode = compileTypeScript(code);
      console.log(compiledCode);

      // Wrap the compiled code in a function
      const func = new Function('return (function() {' + compiledCode + '\nreturn cumMixer; })();')();

      const output = func(data);

      if (output !== null) {
        setResult(`Результат: ${output}`);
      } else {
        setResult('Ошибка: функция cumMixer не найдена');
      }
    } catch (error) {
      if (error instanceof Error) {
        setResult(`Ошибка: ${error.message}`);
      } else {
        setResult('Произошла неизвестная ошибка');
      }
    }
  };

  return (
    <div>
      <Container>
        <h1>JS Training: {id}</h1>

        <h2>Используем метод reduce</h2>

        <p>Допишите функцию "cumMixer".</p>

        <CodeEditor initialCode={initialCode} onSubmit={handleSubmit} />
        {result && <div>{result}</div>}


        <CodeBlock code={dataForCode} language="typescript" />



      </Container>
    </div>
  );
};

export default BlogPost;
