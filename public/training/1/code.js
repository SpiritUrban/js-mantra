
// Пример выполнения кода
const executeCode = (code) => {
    try {
      eval(code);
      mocha.run();
    } catch (error) {
      console.error('Ошибка выполнения кода:', error);
    }
  };
  