import React from "react";

interface CodePenFrameProps {
  style: React.CSSProperties;
  scrolling?: string;
  title?: string;
  src: string;
  frameBorder?: string;
  loading?: "eager" | "lazy";
  allowFullScreen?: boolean;
}

const CodePenFrame: React.FC<CodePenFrameProps> = ({
  style,
  scrolling,
  title,
  src,
  frameBorder,
  loading,
  allowFullScreen
}) => {
  return (
    <iframe
      style={style}
      scrolling={scrolling}
      title={title}
      src={src}
      frameBorder={frameBorder}
      loading={loading}
      allowFullScreen={allowFullScreen}
    />
  );
};

export default CodePenFrame;
