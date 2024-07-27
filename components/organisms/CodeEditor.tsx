// components/CodeEditor.tsx
import React, { useState, useEffect } from 'react';
import Editor, { Monaco } from '@monaco-editor/react';


interface CodeEditorProps {
  initialCode: string;
  onSubmit: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialCode, onSubmit }) => {
  const [code, setCode] = useState(initialCode);

  useEffect(() => {
    // Импортируем стили динамически
    import('monaco-editor/min/vs/editor/editor.main.css');
  }, []);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  const handleSubmit = () => {
    onSubmit(code);
  };

  return (
    <div>
      <Editor
        height="65vh"
        defaultLanguage="typescript"
        defaultValue={initialCode}
        onChange={handleEditorChange}
        theme="vs-dark" // Устанавливаем темную тему
      />
      <br />
      <button onClick={handleSubmit}>Проверить</button>
    </div>
  );
};

export default CodeEditor;
