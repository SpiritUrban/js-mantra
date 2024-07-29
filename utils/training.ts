// Функция для добавления тестовых скриптов и запуска тестов
let mochaLoaded = false;
let chaiLoaded = false;
let codeScriptLoaded = false;
let testScriptLoaded = false;

export const addTestScripts = (callback: () => void) => {
    if (!mochaLoaded) {
        const mochaScript = document.createElement('script');
        mochaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/mocha/9.1.3/mocha.min.js';
        mochaScript.onload = () => {
            window.mocha.setup('bdd');
            mochaLoaded = true;
            loadChai(callback);
        };
        document.body.appendChild(mochaScript);
    } else {
        loadChai(callback);
    }
};

const loadChai = (callback: () => void) => {
    if (!chaiLoaded) {
        const chaiScript = document.createElement('script');
        chaiScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/chai/4.3.4/chai.min.js';
        chaiScript.onload = () => {
            window.chai = window.chai;
            chaiLoaded = true;
            loadCodeScript(callback);
        };
        document.body.appendChild(chaiScript);
    } else {
        loadCodeScript(callback);
    }
};

const loadCodeScript = (callback: () => void) => {
    if (!codeScriptLoaded) {
        const codeScript = document.createElement('script');
        codeScript.src = '/training/1/code.js';
        codeScript.onload = () => {
            codeScriptLoaded = true;
            loadTestScript(callback);
        };
        document.body.appendChild(codeScript);
    } else {
        loadTestScript(callback);
    }
};

const loadTestScript = (callback: () => void) => {
    if (!testScriptLoaded) {
        const testScript = document.createElement('script');
        testScript.src = '/training/1/tests.js';
        testScript.onload = () => {
            testScriptLoaded = true;
            callback();
        };
        document.body.appendChild(testScript);
    } else {
        callback();
    }
};