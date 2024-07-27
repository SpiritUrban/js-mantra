import React, { useEffect } from 'react';
import Prism from 'prismjs';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre >
      <code 
      className={`language-${language}`}
      style={{fontSize: '1.2rem'}}
      
      >{code}</code>
    </pre>
  );
};

export default CodeBlock;
