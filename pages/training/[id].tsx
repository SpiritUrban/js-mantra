/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import styled from 'styled-components';
import CodeEditor from '@/components/organisms/CodeEditor';
import { useEffect, useState } from 'react';
import * as ts from 'typescript';
import RewardModal from '@/components/organisms/modals/RewardModal';
import { ToastContainer, toast } from 'react-toastify';
import { playSound } from '@/utils';
import Image from "next/image";

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
  gap: 1rem;
  .left{
    flex: 2;
    background: rgb(0 0 0 / 10%);
    padding: 1rem;
    border-radius: .5rem;
  }
  .right{
    flex: 3;
    background: rgb(0 0 0 / 10%);
    padding: 1rem;
    border-radius: .5rem;
  }
`;

const Second = styled.div` 
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
  .left{
    flex: 2;
    background: rgb(0 0 0 / 10%);
    padding: 1rem;
    border-radius: .5rem;
  }
  .right{
    flex: 2;
    background: rgb(0 0 0 / 10%);
    padding: 1rem;
    border-radius: .5rem;
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

    const handleError = (error: unknown, defaultMessage: string) => {
        if (error instanceof Error) {
            setResult(`Ошибка: ${error.message}`);
            errorToast(`Ошибка`);
        } else {
            setResult(defaultMessage);
            errorToast(defaultMessage);
        }
    };

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
            handleError(error, 'Произошла неизвестная ошибка');
        }
    };

    const runTests = (func: (cumPortions: CumPortion[]) => number) => {
        let results = '';
        let isPassedAllTests = true;

        try {
            pageData.trainingData.test.forEach((item) => {
                const isPassedTest = func(item.data) === item.result;
                isPassedAllTests = isPassedAllTests && isPassedTest;
                const testMessage = isPassedTest ? item.successMessage : item.failMessage;
                results += testMessage + '\n';
            });

            if (!isPassedAllTests) {
                errorToast('Тесты провалены.');
            } else {
                setModalShow(true);
            }

            setTestResults(results);
        } catch (error) {
            handleError(error, 'Ошибка в тестах.');
        }
    };


    return (
        <div>
            <Container>
                <h1>
                    <Image
                        src={pageData.trainingData.img}
                        alt="JS Mantra"
                        width={100}  // Adjusted to fit better
                        height={100} // Adjusted to fit better
                        priority
                        style={{
                            marginRight: "1.5rem",
                            borderRadius: ".5rem",
                            objectFit: 'cover',
                            width: '5rem',
                            height: '5rem',
                        }}
                    />
                    JS Training: &nbsp;
                    <b>{pageData.trainingData.title}</b>
                </h1>

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

                <div>

                    <Top>
                        <div className="left">
                            <h3 dangerouslySetInnerHTML={{ __html: pageData.trainingData.heading }} ></h3>
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


                    <Second>
                        <div className="left">
                            {testResults && (
                                <div>
                                    <h3>Результаты тестов:</h3>
                                    <pre>{testResults}</pre>
                                </div>
                            )}
                        </div>
                        <div className="right">
                            {result && <div>{result}</div>}

                        </div>
                    </Second>

                </div>

                <CodeEditor initialCode={pageData.initialCode} onSubmit={handleSubmit} />

            </Container>
        </div>
    );
};

export default TrainingPage;
