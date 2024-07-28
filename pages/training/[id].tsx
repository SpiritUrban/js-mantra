/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import styled from 'styled-components';
import CodeEditor from '@/components/organisms/CodeEditor';
import { useState } from 'react';
import * as ts from 'typescript';
import RewardModal from '@/components/organisms/modals/RewardModal';
import { ToastContainer, toast } from 'react-toastify';
import { playSound } from '@/utils';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Top = styled.div` 
  display: flex;
  flex-direction: row;
  gap: 2rem;
  .left{
    flex: 2;
  }
  .right{
    flex: 3;
  }
`;

export interface CumPortion {
  producer: string;
  volume: number;
}


export const compileTypeScript = (code: string) => {
  const result = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.CommonJS }
  });
  return result.outputText;
};

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

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
  const [testResults, setTestResults] = useState<string | null>(null);

  const errorToast = (message: string) => {
    playSound('/sound/error.mp3');
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  const handleSubmit = (code: string) => {
    try {
      const compiledCode = compileTypeScript(code);
      console.log(compiledCode);

      const func = new Function('return (function() {' + compiledCode + '\nreturn cumMixer; })();')();

      const output = func(data);

      if (output !== null) {
        setResult(`Результат: ${output}`);
        runTests(func);  // Запуск тестов после получения результата
      } else {
        setResult('Ошибка: функция cumMixer не найдена');
      }
    } catch (error) {
      if (error instanceof Error) {
        setResult(`Ошибка: ${error.message}`);
        errorToast(`Ошибка`);
      } else {
        setResult('Произошла неизвестная ошибка');
        errorToast('Произошла неизвестная ошибка');
      }
    }
  };

  const runTests = (func: (cumPortions: CumPortion[]) => number) => {
    let results = '';
    try {

      const isPassedTest1 = func(data) === 180;
      const isPassedTest2 = func([]) === 0;

      const test1 = isPassedTest1 ? 'Тест 1 прошел: cumMixer(data) === 180' : 'Тест 1 провален: cumMixer(data) !== 180';
      results += test1 + '\n';

      const test2 = isPassedTest2 ? 'Тест 2 прошел: cumMixer([]) === 0' : 'Тест 2 провален: cumMixer([]) !== 0';
      results += test2 + '\n';

      if (!isPassedTest1 || !isPassedTest2) {
        // results += 'Тесты не прошли. Пожалуйста, проверьте свой код.';
        errorToast('Тесты провалены.');
      } else {
        setModalShow(true)
      }


      setTestResults(results);
    } catch (error) {
      results = `Ошибка в тестах: ${(error as Error).message}`;
      setTestResults(results);
      errorToast('Ошибка в тестах.');
      ;
    }
  };



  const [modalShow, setModalShow] = useState(false);

  const modalContent = {
    title: 'Congratulation !!!',
    heading: 'You have passed the test',
    description: 'You have passed the test and you can get a reward.',
    img: '/img/medals/cum-worker.webp'
  };

  return (
    <div>
      <Container>
        <h1>JS Training: {id}</h1>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        <RewardModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          content={modalContent}
        />

        <Top>
          <div className="left">
            <h2>Используем метод reduce</h2>
            <p>Допишите функцию <b>"cumMixer()"</b>.</p>
          </div>
          <div className="right">
            <h3>Описание тестов:</h3>
            <ul>
              <li>Тест 1: Проверяет, что <b>"cumMixer(data)"</b> возвращает <b>180</b> для набора данных <b>"data"</b> .</li>
              <li>Тест 2: Проверяет, что <b>"cumMixer([])"</b> возвращает <b>0</b> для пустого массива.</li>
            </ul>
          </div>
        </Top>





        <CodeEditor initialCode={initialCode} onSubmit={handleSubmit} />
        {result && <div>{result}</div>}
        {testResults && (
          <div>
            <h3>Результаты тестов:</h3>
            <pre>{testResults}</pre>
          </div>
        )}

      </Container>
    </div>
  );
};

export default BlogPost;
