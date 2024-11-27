import React from "react";

interface VideoPreviewProps {
  children?: React.ReactNode;
}

const VideoPreview = ({ children }: VideoPreviewProps) => {
  return (
    <section className="absolute z-50 size-full overflow-hidden rounded-lg">
      <div
        className="origin-center rounded-lg"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default VideoPreview;
