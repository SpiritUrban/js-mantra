import { useEffect, useState } from 'react';
import Head from 'next/head';

let testResults = false;

// Функция для добавления тестовых скриптов и запуска тестов
const addTestScripts = () => {
  const mochaScript = document.createElement('script');
  mochaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/mocha/9.1.3/mocha.min.js';
  mochaScript.onload = () => {
    window.mocha.setup('bdd');

    const chaiScript = document.createElement('script');
    chaiScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/chai/4.3.4/chai.min.js';
    chaiScript.onload = () => {
      window.chai = window.chai;
      const codeScript = document.createElement('script');
      codeScript.src = '/training/1/code.js';
      codeScript.onload = () => {
        const testScript = document.createElement('script');
        testScript.src = '/training/1/tests.js';
        testScript.onload = () => {
          // Перехват событий Mocha
          mocha.run()
            .on('end', () => {
              // Если все тесты прошли, testResults будет true
              testResults = mocha.suite.suites.every(suite => suite.tests.every(test => test.state === 'passed'));
            });
        };
        document.body.appendChild(testScript);
      };
      document.body.appendChild(codeScript);
    };
    document.body.appendChild(chaiScript);
  };
  document.body.appendChild(mochaScript);
};

export default function Test() {
  const [testPassed, setTestPassed] = useState(null);
  const [resultVisible, setResultVisible] = useState(false);

  useEffect(() => {
    if (testPassed !== null) {
      console.log('Test Results:', testPassed);
      setTimeout(() => setResultVisible(true), 100); // Плавное появление после небольшой задержки
    }
  }, [testPassed]);

  const handleRunTests = () => {
    setResultVisible(false);
    addTestScripts();
    setTimeout(() => {
      setTestPassed(testResults);
    }, 1000); // Дайте время на выполнение тестов
  };

  return (
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
  );
}
