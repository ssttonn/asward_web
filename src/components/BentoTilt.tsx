import React, {
  memo,
  MouseEventHandler,
  useCallback,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";

interface BentoTiltProps {
  children: React.ReactNode;
  className?: string;
}

const BentoTilt = ({ children, className }: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback<MouseEventHandler<HTMLDivElement>>(
    (e) => {
      if (itemRef.current) {
        const rect = itemRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const tiltX = -(y / rect.height) * 15;
        const tiltY = (x / rect.width) * 15;
        setTransformStyle(
          `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
        );
      }
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    gsap.to(itemRef.current, {
      duration: 0.4,
      rotateX: 0,
      rotateY: 0,
      onComplete: () => {
        setTransformStyle("");
      },
    });
  }, []);

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export default memo(BentoTilt);
