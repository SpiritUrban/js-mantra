import React, { useEffect, useState } from 'react';
import Editor, { loader } from '@monaco-editor/react';
import { Button } from 'react-bootstrap';

interface CodeEditorProps {
  initialCode: string;
  onSubmit: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialCode, onSubmit }) => {
  const [code, setCode] = useState<string>(initialCode);

  useEffect(() => {
    const stylePaths = [
      'monaco-editor/min/vs/editor/editor.main.css',
      'monaco-editor/min/vs/base/browser/ui/contextview/contextview.css',
      'monaco-editor/min/vs/base/browser/ui/dropdown/dropdown.css',
      'monaco-editor/min/vs/base/browser/ui/inputbox/inputBox.css',
      'monaco-editor/min/vs/base/browser/ui/list/list.css',
      'monaco-editor/min/vs/base/browser/ui/selectBox/selectBox.css',
      'monaco-editor/min/vs/editor/editor.all.css'
    ];

    stylePaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `https://unpkg.com/${path}`;
      document.head.appendChild(link);
    });

    return () => {
      stylePaths.forEach(path => {
        const link = document.querySelector(`link[href="https://unpkg.com/${path}"]`);
        if (link) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const handleSubmit = () => {
    onSubmit(code);
  };

  return (
    <div >
      <div style={{ borderRadius: '.5rem', overflow: 'hidden' }}>

        <Editor
          height="65vh"
          defaultLanguage="typescript"
          defaultValue={initialCode}
          onChange={handleEditorChange}
          theme="vs-dark"
        />
      </div>


      <br />

      <Button variant="primary" onClick={handleSubmit}>Проверить</Button>
    </div>
  );
};

export default CodeEditor;
