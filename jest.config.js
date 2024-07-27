const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Указываем путь к директории с приложением Next.js, чтобы загрузить next.config.js и .env файлы в тестовой среде
  dir: './',
});

// Добавляем пользовательские настройки для Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Настройка для абсолютных импортов и алиасов модулей
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
