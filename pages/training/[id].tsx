/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import styled from 'styled-components';
import CodeEditor from '@/components/organisms/CodeEditor';
import { useRef, useEffect, useState } from 'react';
import RewardModal from '@/components/organisms/modals/RewardModal';
import { ToastContainer, toast } from 'react-toastify';
import { playSound, pause, smoothScrollToBottom } from '@/utils';
import Image from "next/image";
import Head from 'next/head';
import { PageData } from "@/data/training/interfaces";
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
    padding: 0;
    margin: 0 auto;
    h1 {
        color: cadetblue;
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

const TrainingPage = () => {
    const router = useRouter();
    const { id } = router.query as { id?: string };
    const [pageData, setPageData] = useState<PageData | null>(null);
    const [modalShow, setModalShow] = useState(false);
    const [testPassed, setTestPassed] = useState<boolean | null>(null);
    const [scriptsLoaded, setScriptsLoaded] = useState(false);
    const [initialCode, setInitialCode] = useState<string | null>(null);
    const [testingCode, setTestingCode] = useState<string | null>(null);
    const mochaRef = useRef(null);

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
        window.mocha
            .run()
            .on('end', async () => {
                // Прокрутка элемента Mocha вниз после завершения тестов
                smoothScrollToBottom(mochaRef.current);
                const allTestsPassed = window.mocha.suite.suites.every((suite: any) =>
                    suite.tests.every((test: any) => test.state === 'passed')
                );
                setTestPassed(allTestsPassed);

                // Show results
                if (!allTestsPassed) {
                    errorToast('Тесты провалены.');
                } else {
                    await pause(1000);
                    setModalShow(true);
                }
            });
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

    // [BUTTON from Editor]
    const handleSubmit = (code: string) => {
        try {
            console.log('ts', code); // ts
            const path = `/training/${id}`;
            runTest(path, code);
        } catch (error) {
            errorToast('Произошла неизвестная ошибка');
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

            <Container style={{ background: (testPassed) ? '#0e5a0e' : 'none' }}>

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
            </Container>
        </div>
    );
};

export default TrainingPage;
