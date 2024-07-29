import React, { useEffect } from 'react';

interface CodeEditorFrameProps {
    initialCode: string;
    onSubmit: (code: string) => void;
}

const CodeEditorFrame: React.FC<CodeEditorFrameProps> = ({ initialCode, onSubmit }) => {
    useEffect(() => {
        const iframe = document.getElementById('code-editor-iframe') as HTMLIFrameElement;
        const iframeWindow = iframe.contentWindow;

        const iframeDocument = iframe.contentDocument || iframeWindow?.document;
        if (!iframeDocument) return;

        iframeDocument.open();
        iframeDocument.write(`
            <html>
            <head>
                <style>
                    body { margin: 0; }
                    .code-editor { height: 100vh; width: 100vw; }
                </style>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js"></script>
            </head>
            <body>
                <div id="editor" class="code-editor"></div>
                <button id="run-code">Run Code</button>
                <script>
                    const editor = ace.edit("editor");
                    editor.setTheme("ace/theme/monokai");
                    editor.session.setMode("ace/mode/javascript");
                    editor.setValue(\`${initialCode}\`);

                    document.getElementById('run-code').addEventListener('click', () => {
                        const code = editor.getValue();
                        parent.postMessage({ type: 'execute-code', code }, '*');
                    });
                </script>
            </body>
            </html>
        `);
        iframeDocument.close();

        const handleMessage = (event: MessageEvent) => {
            if (event.data.type === 'execute-code') {
                onSubmit(event.data.code);
            }
        };

        window.addEventListener('message', handleMessage);
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [initialCode, onSubmit]);

    return <iframe id="code-editor-iframe" style={{ width: '100%', height: '500px', border: 'none' }}></iframe>;
};

export default CodeEditorFrame;
