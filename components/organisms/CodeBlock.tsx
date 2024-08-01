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
    <pre style={{ borderRadius: '.5rem' }}>
      <code
        className={`language-${language}`}
        style={{ fontSize: '.9rem' }}
      >
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
