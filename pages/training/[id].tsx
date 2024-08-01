/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import styled from 'styled-components';
import CodeEditor from '@/components/organisms/CodeEditor';
import { useRef, useEffect, useState } from 'react';
import RewardModal from '@/components/organisms/modals/RewardModal';
import { ToastContainer, toast } from 'react-toastify';
import { playSound, pause, compileTypeScript, smoothScrollToBottom } from '@/utils';
import Image from "next/image";
import Head from 'next/head';
import { Test, Training, PageData } from "@/data/training/interfaces";
import { addTestScripts, fetchFile } from '@/utils/training';
import CodeBlock from '@/components/organisms/CodeBlock';

declare global {
    interface Window {
        mocha: any;
        mochaInstance: any;
        chai: any;
        executeCode: (code: string) => void;
        expect: any;
    }
}

interface StyledProps extends React.HTMLAttributes<HTMLDivElement> {
    'data-component'?: string;
}

const Container = styled.div.attrs<StyledProps>({ 'data-component': 'Container' })`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    margin: 0 auto;
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


const TrainingPage = () => {
    const router = useRouter();
    const { id } = router.query as { id?: string };
    const [pageData, setPageData] = useState<PageData | null>(null);
    const [result, setResult] = useState<string | null>(null);
    const [testResultsMessage, setTestResultsMessage] = useState<string | null>(null);
    const [modalShow, setModalShow] = useState(false);
    const [testPassed, setTestPassed] = useState<boolean | null>(null);
    const [resultVisible, setResultVisible] = useState(false);
    const [scriptsLoaded, setScriptsLoaded] = useState(false);
    const [initialCode, setInitialCode] = useState<string | null>(null);
    const [testingCode, setTestingCode] = useState<string | null>(null);

    const mochaRef = useRef(null);

    useEffect(() => {
        if (testPassed !== null) {
            console.log('Test Results:', testPassed);
            setTimeout(() => setResultVisible(true), 100); // Плавное появление после небольшой задержки
        }
    }, [testPassed]);


    // setScriptsLoaded(false)
    // await pause(1000)
    // setResultVisible(false);

    useEffect(() => {
        const run = async () => {
            await addTestScripts();
            setScriptsLoaded(true);

        };
        run();
    }, []);

    useEffect(() => {
        const run = async () => {
            if (!id) return console.log('No id provided');
            else console.log('id:', id);

            try {
                const data = await import(`@/data/training/${id}`);
                setPageData(data.default);
            } catch (err) {
                console.error("Failed to load JSON by [id]:", err);
            }

            try {
                const initialCode = await fetchFile(`/training/${id}/code.ts`);
                if (initialCode) setInitialCode(initialCode);
            } catch (err) {
                console.error(`Error loading script /training/${id}/code.ts:`, err);
            }

            try {
                const testingCode = await fetchFile(`/training/${id}/code.test.js`);
                if (testingCode) setTestingCode(testingCode);
            } catch (err) {
                console.error(`Error loading script /training/${id}/code.test.js:`, err);
            }
        };
        run();
    }, [id]);



    const resetMocha = () => {
        // Clear previous mocha suite
        mocha.suite.suites = [];
    };

    const runTest = async (path: string, tsCode?: string) => {
        // Reset Mocha to clear previous tests
        resetMocha();

        // Load the necessary scripts
        await addTestScripts(path, tsCode);

        // Ensure global `describe`, `it`, and `expect` functions are available
        window.describe = window.mocha.suite.describe;
        window.it = window.mocha.suite.it;
        window.expect = window.chai.expect;

        // Run the tests
        window.mocha.run().on('end', async () => {
            // Прокрутка элемента Mocha вниз после завершения тестов
            smoothScrollToBottom(mochaRef.current);
            const allTestsPassed = window.mocha.suite.suites.every((suite: any) =>
                suite.tests.every((test: any) => test.state === 'passed')
            );
            setTestPassed(allTestsPassed);

            // Show results
            await pause(1000);
            if (!allTestsPassed) {
                errorToast('Тесты провалены.');
            } else {
                await pause(1000);
                setModalShow(true);
            }
        });
    };


    useEffect(() => {
        const run = async () => {

        };
        run();
    }, [testPassed, resultVisible]);



    // [BUTTON from files]
    const handleRunTests = async (x: number | string) => {
        if (!scriptsLoaded) return;
        const path = `/training/${x}`;
        runTest(path);
    };


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


    // [BUTTON from Editor]
    const handleSubmit = (code: string) => {
        try {
            console.log('ts', code); // ts
            // const compiledCode = compileTypeScript(code);
            // console.log('js', code); // js

            const path = `/training/${id}`;
            runTest(path, code);

            // const func = new Function(`return (function() {${compiledCode}\nreturn ${pageData?.trainingData.funcName}; })();`)();
            // const output = func(pageData?.trainingData.test[0].data);

            // if (output !== null) {
            //     setResult(`Результат: ${output}`);
            //     runTests(func);
            // } else {
            //     setResult(`Ошибка: функция "${pageData?.trainingData.funcName}()" не найдена`);
            // }
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
            <Head>
                <title>Тесты</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/9.1.3/mocha.min.css" />
            </Head>

            <Container>

                <Second>
                    <div className="left">

                        {/* Topic */}
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

                        {/* Details */}
                        <h3 dangerouslySetInnerHTML={{ __html: pageData.trainingData.heading }} ></h3>
                        <p dangerouslySetInnerHTML={{ __html: pageData.trainingData.description }}></p>

                        {scriptsLoaded && (
                            <CodeEditor
                                height={pageData.trainingData.editorHeight}
                                initialCode={initialCode || '// no code'}
                                onSubmit={handleSubmit}
                            />
                        )}

                    </div>
                    <div className="right">
                        <div id="mocha" ref={mochaRef} ></div>
                        <CodeBlock code={testingCode || '// no code'} language="typescript" />
                    </div>
                </Second>


                <div style={{ marginTop: '2rem' }}>


                    <button onClick={_ => handleRunTests(id as string)}>Run: {id}</button> &nbsp; : &nbsp;
                    <button onClick={_ => handleRunTests('add')}>add</button>
                    <button onClick={_ => handleRunTests('multiply')}>multiply</button>
                    <button onClick={_ => handleRunTests('cum-work')}>cum-work</button>
                    <button onClick={_ => handleRunTests('dick-splitter')}>dick-splitter</button>

                    {testPassed !== null && (
                        <div className={`result ${resultVisible ? 'visible' : ''}`}>
                            {testPassed ? 'Все тесты прошли успешно!' : 'Некоторые тесты не прошли.'}
                        </div>
                    )}
                </div>



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

                <hr />

                {/* 
                <div className="right">
                    <h3>Описание тестов:</h3>
                    <ul>
                        {pageData.trainingData.test.map((item: Test, index: number) => (
                            <li key={index + 'Test'} dangerouslySetInnerHTML={{ __html: item.description }}></li>
                        ))}
                    </ul>
                </div> */}


            </Container>
        </div>
    );
};

export default TrainingPage;
