
// prevent creating "executeCode" function in global scope
if (typeof executeCode === 'undefined') {
    const executeCode = (code) => {
        try {
            eval(code);
            mocha.run();
        } catch (error) {
            console.error('Ошибка выполнения кода:', error);
        }
    };
} else {
    console.error('executeCode уже существует');
}
// const executeCode = (code) => {
//     try {
//         eval(code);
//         mocha.run();
//     } catch (error) {
//         console.error('Ошибка выполнения кода:', error);
//     }
// };
