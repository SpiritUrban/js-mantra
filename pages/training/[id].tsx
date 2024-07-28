/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import styled from 'styled-components';
import CodeEditor from '@/components/organisms/CodeEditor';
import { useEffect, useState } from 'react';
import * as ts from 'typescript';
import RewardModal from '@/components/organisms/modals/RewardModal';
import { ToastContainer, toast } from 'react-toastify';
import { playSound } from '@/utils';

import pageData, { CumPortion } from '@/data/training/cum-work';


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


export const compileTypeScript = (code: string) => {
    const result = ts.transpileModule(code, {
        compilerOptions: { module: ts.ModuleKind.CommonJS }
    });
    return result.outputText;
};

const TrainingPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const [result, setResult] = useState<string | null>(null);
    const [testResults, setTestResults] = useState<string | null>(null);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        if (id) {
            import(`@/data/training/${id}`)
                .then((data) => {
                    console.log('data', data);
                    //   setVideoData(data.default as VideoData);
                })
                .catch((err) => {
                    console.error("Failed to load data:", err);
                });
        }
    }, [id]);

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
            const func = new Function('return (function() {' + compiledCode + '\nreturn cumMixer; })();')();
            const output = func(pageData.trainingData.test[0].data);

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
            let isPassedAllTests = true;
            // const isPassedTest1 = func(pageData.data) === 180;
            // const isPassedTest2 = func([]) === 0;

            pageData.trainingData.test.map((item, index) => {
                const isPassedTest = func(item.data) === item.result;
                if (!isPassedTest) {
                    isPassedAllTests = false;
                }
                const test = isPassedTest ? item.successMessage : item.failMessage;
                results += test + '\n';
            });
        
            if (!isPassedAllTests) {
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

    return (
        <div>
            <Container>
                <h1>JS Training: {pageData.trainingData.title}</h1>

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
                    content={pageData.modalContent}
                />

                <Top>
                    <div className="left">
                        <h2 dangerouslySetInnerHTML={{ __html: pageData.trainingData.heading }} ></h2>
                        <p dangerouslySetInnerHTML={{ __html: pageData.trainingData.description }}></p>
                    </div>
                    <div className="right">
                        <h3>Описание тестов:</h3>
                        <ul>
                            {pageData.trainingData.test.map((item, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: item.description }}></li>
                            ))}
                        </ul>
                    </div>
                </Top>

                <CodeEditor initialCode={pageData.initialCode} onSubmit={handleSubmit} />
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

export default TrainingPage;
