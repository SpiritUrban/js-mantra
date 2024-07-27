import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CodeEditor from './CodeEditor';
import { jest } from '@jest/globals'; // Импортируем Jest для использования функции mock (fn)

// Определяем блок тестов для компонента CodeEditor
describe('CodeEditor', () => {
  // Исходный код, который будет отображен в редакторе
  const initialCode = 'console.log("Hello, world!");';
  // Создаем mock-функцию для onSubmit
  const onSubmit = jest.fn();

  // Первый тест: проверка, что компонент рендерится с исходным кодом
  it('renders the initial code', () => {
    // Рендерим компонент CodeEditor с пропсами initialCode и onSubmit
    render(<CodeEditor initialCode={initialCode} onSubmit={onSubmit} />);
    // Проверяем, что кнопка с текстом "Проверить" отображается в документе
    expect(screen.getByText('Проверить')).toBeInTheDocument();
  });

  // Второй тест: проверка, что функция onSubmit вызывается с текущим кодом при нажатии на кнопку
  it('calls onSubmit with the current code when the button is clicked', () => {
    // Рендерим компонент CodeEditor с пропсами initialCode и onSubmit
    render(<CodeEditor initialCode={initialCode} onSubmit={onSubmit} />);
    // Имитируем клик по кнопке с текстом "Проверить"
    fireEvent.click(screen.getByText('Проверить'));
    // Проверяем, что mock-функция onSubmit была вызвана с исходным кодом
    expect(onSubmit).toHaveBeenCalledWith(initialCode);
  });
});
