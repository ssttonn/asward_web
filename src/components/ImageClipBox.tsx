import React from "react";

interface ImageClipBoxProps {
  src: string;
  clipClassName: string;
}

const ImageClipBox = ({ src, clipClassName }: ImageClipBoxProps) => {
  return (
    <div className={clipClassName}>
      <img src={src} />
    </div>
  );
};

export default ImageClipBox;
