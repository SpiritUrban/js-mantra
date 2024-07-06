// components/CodePenFrame.tsx
import { useEffect, useState } from 'react';

interface CodePenFrameProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {}

const CodePenFrame: React.FC<CodePenFrameProps> = (props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <iframe {...props} />;
};

export default CodePenFrame;
