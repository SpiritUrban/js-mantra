import React from "react";

interface FigmaFrameProps {
  id: string;
}

const FigmaFrame: React.FC<FigmaFrameProps> = ({
    id,
}) => {
 // const id = "25-145"; neuer Code   phJfbdjxNVu8HsYf-0
 const t = "phJfbdjxNVu8HsYf-0"
 

  return (
    <iframe
      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
      width="800"
      height="450"
      src={`https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FhHmsFhexit0GROeKE1GIN6%2FPositivus-Landing-Page-Design-(Community)%3Fnode-id%3D${id}%26t%3D${t}`}
      allowFullScreen
    ></iframe>
  );
};

export default FigmaFrame;


// alte Kette von CodePen `https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FhHmsFhexit0GROeKE1GIN6%2FPositivus-Landing-Page-Design-(Community)%3Fnode-id%3D${id}%26t%3DGpaFu67yjhIrE2rG-1`  GpaFu67yjhIrE2rG-1