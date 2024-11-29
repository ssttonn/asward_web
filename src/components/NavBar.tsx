import { useCallback, useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const NavBar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const audioElementRef = useRef<HTMLAudioElement>(null);
  const { y: currentScrollY } = useWindowScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleAudio = useCallback(() => {
    setIsAudioPlaying((prevState) => !prevState);
  }, []);

  useEffect(() => {
    if (currentScrollY <= 200) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.1,
      ease: "power4.out",
    });
  }, [isNavVisible]);

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current?.play();
      console.log("Audio is playing");
    } else {
      audioElementRef.current?.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 mt-2"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClassName="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="nav-hover-btn"
                  >
                    {item}
                  </a>
                );
              })}
            </div>
            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={toggleAudio}
            >
              <audio
                ref={audioElementRef}
                src="audio/loop.mp3"
                loop
                autoPlay
                className="hidden"
              />
              {[1, 2, 3, 4].map((bar, index) => (
                <div
                  key={index}
                  className={`indicator-line ${isAudioPlaying ? "active" : ""}`}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                ></div>
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
