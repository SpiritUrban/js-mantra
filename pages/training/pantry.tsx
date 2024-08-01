import { compileTypeScript } from '@/utils';
import { useRouter } from 'next/router';
import { useRef, useEffect, useState } from 'react';


const PantryPage = () => {
    const [scriptsLoaded, setScriptsLoaded] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [testResultsMessage, setTestResultsMessage] = useState<string | null>(null);

    const pageData: any = {};

    const runTest = async (path: string) => {
    };
    const runTests = async (path: string) => {
    };

    // [BUTTON from files]
    const handleRunTests = async (x: number | string) => {
        if (!scriptsLoaded) return;
        const path = `/training/${x}`;
        runTest(path);
    };

    const executeCode = async (code: string) => {
        try {
            console.log('ts', code); // ts
            const compiledCode = compileTypeScript(code);
            console.log('js', code); // js

            const func = new Function(`return (function() {${compiledCode}\nreturn ${pageData?.trainingData.funcName}; })();`)();
            const output = func(pageData?.trainingData.test[0].data);

            if (output !== null) {
                setResult(`Результат: ${output}`);
                runTests(func);
            } else {
                setResult(`Ошибка: функция "${pageData?.trainingData.funcName}()" не найдена`);
            }
        } catch (error) {
            // handleError(error, 'Произошла неизвестная ошибка');
        }
    };



    return (
        <div>
            Pantry

            <button onClick={_ => handleRunTests(id as string)}>Run: {id}</button> &nbsp; : &nbsp;
            <button onClick={_ => handleRunTests('add')}>add</button>
            <button onClick={_ => handleRunTests('multiply')}>multiply</button>
            <button onClick={_ => handleRunTests('cum-work')}>cum-work</button>
            <button onClick={_ => handleRunTests('dick-splitter')}>dick-splitter</button>

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

        </div>
    )
}
export default PantryPage