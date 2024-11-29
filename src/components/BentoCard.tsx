import React, { memo } from "react";

interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  descripton: string;
}

const BentoCard = ({ src, title, descripton }: BentoCardProps) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {descripton && (
            <p className="mt-3 max-w-64 text-sm md:text-base font-circular-web">
              {descripton}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(BentoCard);
