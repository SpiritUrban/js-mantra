import React from "react";

interface CodePenFrameProps {
  height: string;
  style: React.CSSProperties;
  scrolling?: string;
  title?: string;
  src: string;
  frameBorder?: string;
  loading?: "eager" | "lazy";
  allowFullScreen?: boolean;
}

const CodePenFrame: React.FC<CodePenFrameProps> = ({
  height,
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
      height={height}
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
