import { useCallback, useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasUserClicked, setHasUserClicked] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const onMiniVideoClick = useCallback(() => {
    setHasUserClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  }, []);

  const onVideoLoad = useCallback(() => {
    setLoadedVideos((prevLoadedVideos) => prevLoadedVideos + 1);
  }, []);

  const getVideoPath = useCallback((index: number) => {
    return `/videos/hero-${index}.mp4`;
  }, []);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={onMiniVideoClick}
              className="origin-center scale-50 opacity-0 transition-all ease-in duration-500 hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoPath(
                  currentIndex + 1 > totalVideos ? 1 : currentIndex + 1
                )}
                loop
                muted
                id="current-video"
                className="rounded-lg size-64 scale-150 origin-center object-cover"
                onLoadedData={onVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoPath(currentIndex > totalVideos ? 1 : currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={onVideoLoad}
          />
          <video
            src={getVideoPath(currentIndex > totalVideos ? 1 : currentIndex)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={onVideoLoad}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer
              <br />
              Unleash the Play Economy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
