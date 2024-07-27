import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CodeEditor from './CodeEditor';

describe('CodeEditor', () => {
  const initialCode = 'console.log("Hello, world!");';
  const onSubmit = jest.fn();

  it('renders the initial code', () => {
    render(<CodeEditor initialCode={initialCode} onSubmit={onSubmit} />);
    expect(screen.getByText('Проверить')).toBeInTheDocument();
  });

  it('calls onSubmit with the current code when the button is clicked', () => {
    render(<CodeEditor initialCode={initialCode} onSubmit={onSubmit} />);
    fireEvent.click(screen.getByText('Проверить'));
    expect(onSubmit).toHaveBeenCalledWith(initialCode);
  });
});
