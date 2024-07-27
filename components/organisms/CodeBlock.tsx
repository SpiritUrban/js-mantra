import React, { useEffect } from 'react';
import Prism from 'prismjs';
// import 'prismjs/themes/prism.css'; // Import Prism's CSS for styling
import 'prismjs/components/prism-typescript'; // Import TypeScript syntax highlighting

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <pre>
      <code 
        className={`language-${language}`}
        style={{ fontSize: '1.2rem' }}
      >
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
