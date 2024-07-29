/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import styled from 'styled-components';
import CodeEditor from '@/components/organisms/CodeEditor';
import { useEffect, useState } from 'react';
import RewardModal from '@/components/organisms/modals/RewardModal';
import { ToastContainer, toast } from 'react-toastify';
import { playSound, pause, compileTypeScript } from '@/utils';
import Image from "next/image";
import Head from 'next/head';
import { Test, Training, PageData } from "@/data/training/interfaces";
import { addTestScripts } from '@/utils/training';

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

declare global {
    interface Window {
        mocha: any;
        chai: any;
        executeCode: (code: string) => void;
    }
}


const TrainingPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [pageData, setPageData] = useState<PageData | null>(null);
    const [result, setResult] = useState<string | null>(null);
    const [testResultsMessage, setTestResultsMessage] = useState<string | null>(null);
    const [modalShow, setModalShow] = useState(false);
    const [testPassed, setTestPassed] = useState<boolean | null>(null);
    const [resultVisible, setResultVisible] = useState(false);
    const [scriptsLoaded, setScriptsLoaded] = useState(false);

    useEffect(() => {
        if (testPassed !== null) {
            console.log('Test Results:', testPassed);
            setTimeout(() => setResultVisible(true), 100); // Плавное появление после небольшой задержки
        }
    }, [testPassed]);


    // [BUTTON]
    const handleRunTests = async () => {
        // setScriptsLoaded(false)
        // await pause(1000)
        // setResultVisible(false);

        addTestScripts(() => {
            (function () {
                window.mocha.run()
                    .on('end', () => {
                        const allTestsPassed = window.mocha.suite.suites.every((suite: any) =>
                            suite.tests.every((test: any) => test.state === 'passed')
                        );
                        setTestPassed(allTestsPassed);
                    });
            })();
        });
    };

    useEffect(() => {
        if (id) {
            import(`@/data/training/${id}`)
                .then((data) => {
                    console.log('data', data);
                    setPageData(data.default);
                })
                .catch((err) => {
                    console.error("Failed to load data:", err);
                });
        }
    }, [id]);

    useEffect(() => {
        addTestScripts(() => {
            setScriptsLoaded(true);
        });
    }, []);

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
            const func = new Function(`return (function() {${compiledCode}\nreturn ${pageData?.trainingData.funcName}; })();`)();
            const output = func(pageData?.trainingData.test[0].data);

            if (output !== null) {
                setResult(`Результат: ${output}`);
                runTests(func);
            } else {
                setResult(`Ошибка: функция "${pageData?.trainingData.funcName}()" не найдена`);
            }
        } catch (error) {
            handleError(error, 'Произошла неизвестная ошибка');
        }
    };

    const runTests = async (func: any) => {
        let results = '';
        let isPassedAllTests = true;

        try {
            pageData?.trainingData.test.forEach((item: Test) => {
                const isPassedTest = func(item.data).length > 0; // RESULT !!!
                isPassedAllTests = isPassedAllTests && isPassedTest;
                const testMessage = isPassedTest ? item.successMessage : item.failMessage;
                results += testMessage + '\n';
            });

            setTestResultsMessage(results);

            if (!isPassedAllTests) {
                errorToast('Тесты провалены.');
            } else {
                await pause(1000);
                setModalShow(true);
            }

        } catch (error) {
            handleError(error, 'Ошибка в тестах.');
        }
    };

    if (!pageData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Container>
                <div style={{ marginTop: '2rem' }}>
                    <Head>
                        <title>Тесты</title>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/9.1.3/mocha.min.css" />
                    </Head>
                    <button onClick={handleRunTests}>Запустить</button>

                    <div id="mocha"></div>

                    {testPassed !== null && (
                        <div className={`result ${resultVisible ? 'visible' : ''}`}>
                            {testPassed ? 'Все тесты прошли успешно!' : 'Некоторые тесты не прошли.'}
                        </div>
                    )}
                </div>

                <h1>
                    <Image
                        src={pageData.trainingData.img}
                        alt="JS Mantra"
                        width={100}
                        height={100}
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
                                {pageData.trainingData.test.map((item: Test, index: number) => (
                                    <li key={index + 'Test'} dangerouslySetInnerHTML={{ __html: item.description }}></li>
                                ))}
                            </ul>
                        </div>
                    </Top>

                    <Second>
                        <div className="left">
                            {testResultsMessage && (
                                <div>
                                    <h3>Результаты тестов:</h3>
                                    <pre>{testResultsMessage}</pre>
                                </div>
                            )}
                        </div>
                        <div className="right">
                            <h3>{result && <div>{result}</div>}</h3>
                        </div>
                    </Second>
                </div>

                {scriptsLoaded && (
                    <CodeEditor
                        height={pageData.trainingData.editorHeight}
                        initialCode={pageData.initialCode}
                        onSubmit={handleSubmit}
                    />
                )}
            </Container>
        </div>
    );
};

export default TrainingPage;
