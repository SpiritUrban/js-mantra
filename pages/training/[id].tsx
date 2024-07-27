import { useRouter } from 'next/router';
import CodeBlock from '@/components/organisms/CodeBlock';
import styled from 'styled-components';
import CodeEditor from '@/components/organisms/CodeEditor';
import { useState } from 'react';

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

  const initialCode: string = `
    interface CumPortion {
      producer: string;
      volume: number;
    };
    
    const cumMixer = (cumPortions: CumPortion[]) => 
      cumPortions.reduce((backet, currentPortion) => backet + currentPortion.volume, 0);
  `;

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
  ]

  console.log('Total cum volume: ', cumMixer(data));





  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (code: string) => {
    try {
      // Здесь можно оценить код, выполнив его в безопасной среде
      // Например, используя new Function или eval (не рекомендуется для реальных приложений из-за безопасности)
      const func = new Function('return ' + code)();
      const output = func([1, 2, 3, 4]);
      setResult(`Результат: ${output}`);
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

        <CodeBlock code={initialCode} language="javascript" />
        {/* <CodeBlock code={code} language="typescript" /> */}



        <div>
      <h1>JavaScript Training</h1>
      <p>Напишите функцию CAMMixer, которая использует метод reduce.</p>
      <CodeEditor initialCode={initialCode} onSubmit={handleSubmit} />
      {result && <div>{result}</div>}
    </div>
    

      </Container>

    </div>
  );
};

export default BlogPost;
