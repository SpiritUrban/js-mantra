import React from 'react';

interface YouTubeFrameProps {
  style: React.CSSProperties;
  title: string;
  src: string;
  frameBorder?: string;
  allowFullScreen?: boolean;
}

const YouTubeFrame: React.FC<YouTubeFrameProps> = ({
  style,
  title,
  src,
  frameBorder = '0',
  allowFullScreen = true,
}) => {
  return (
    <iframe
      style={style}
      title={title}
      src={src}
      frameBorder={frameBorder}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen={allowFullScreen}
    />
  );
};

export default YouTubeFrame;
