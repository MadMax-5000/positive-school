import { useEffect, useState } from "react";

const trailingSizes = [8, 7, 6, 5, 4];

const isTouchDevice = () => {
  try {
    // More robust touch device detection
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
    );
  } catch (e) {
    return false;
  }
};

const CustomCursor = () => {
  if (isTouchDevice()) return null;

  const [mousePosition, setMousePosition] = useState({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });

  const [cursorPosition, setCursorPosition] = useState({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(true);

  const [trailPositions, setTrailPositions] = useState(
    Array(trailingSizes.length).fill({
      x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
      y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
    })
  );

  useEffect(() => {
    // Ensure we're only running this on the client-side
    if (typeof window === "undefined") return;

    const originalCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    return () => {
      document.body.style.cursor = originalCursor;
    };
  }, []);

  useEffect(() => {
    // Ensure we're only running this on the client-side
    if (typeof window === "undefined") return;

    const moveCursor = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Use passive event listener for better performance
    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    // Ensure we're only running this on the client-side
    if (typeof window === "undefined") return;

    let rafId;
    const smoothing = 0.2;
    const animateCursor = () => {
      setCursorPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * smoothing,
        y: prev.y + (mousePosition.y - prev.y) * smoothing,
      }));
      rafId = requestAnimationFrame(animateCursor);
    };
    animateCursor();
    return () => cancelAnimationFrame(rafId);
  }, [mousePosition]);

  useEffect(() => {
    // Ensure we're only running this on the client-side
    if (typeof window === "undefined") return;

    const handleMouseDown = () => setCursorVariant("click");
    const handleMouseUp = () => setCursorVariant("default");
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    // Ensure we're only running this on the client-side
    if (typeof window === "undefined") return;

    const handleMouseOver = (e) => {
      if (
        e.target &&
        e.target.closest('a, button, input, textarea, select, [role="button"]')
      ) {
        setCursorVariant("link");
      }
    };
    const handleMouseOut = (e) => {
      if (
        e.target &&
        e.target.closest('a, button, input, textarea, select, [role="button"]')
      ) {
        setCursorVariant("default");
      }
    };
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  useEffect(() => {
    // Ensure we're only running this on the client-side
    if (typeof window === "undefined") return;

    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState !== "hidden");
    };
    const handleFocus = () => setIsVisible(true);
    const handleBlur = () => setIsVisible(false);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  useEffect(() => {
    // Ensure we're only running this on the client-side
    if (typeof window === "undefined") return;

    let rafId;
    const smoothing = 0.15;
    const animateTrail = () => {
      setTrailPositions((prevTrail) => {
        const newTrail = [...prevTrail];
        newTrail[0] = {
          x: prevTrail[0].x + (cursorPosition.x - prevTrail[0].x) * smoothing,
          y: prevTrail[0].y + (cursorPosition.y - prevTrail[0].y) * smoothing,
        };
        for (let i = 1; i < trailingSizes.length; i++) {
          newTrail[i] = {
            x:
              prevTrail[i].x + (newTrail[i - 1].x - prevTrail[i].x) * smoothing,
            y:
              prevTrail[i].y + (newTrail[i - 1].y - prevTrail[i].y) * smoothing,
          };
        }
        return newTrail;
      });
      rafId = requestAnimationFrame(animateTrail);
    };
    animateTrail();
    return () => cancelAnimationFrame(rafId);
  }, [cursorPosition]);

  const mainDotBaseSize = 12;
  const ringBaseSize = 36;
  let mainScale = 1;
  let ringScale = 1;
  if (cursorVariant === "click") {
    mainScale = 0.9;
    ringScale = 0.75;
  } else if (cursorVariant === "link") {
    mainScale = 1.5;
    ringScale = 2;
  }

  const mainDotStyle = {
    width: `${mainDotBaseSize}px`,
    height: `${mainDotBaseSize}px`,
    transform: `translate3d(${cursorPosition.x - mainDotBaseSize / 2}px, ${
      cursorPosition.y - mainDotBaseSize / 2
    }px, 0) scale(${mainScale})`,
  };

  const ringStyle = {
    width: `${ringBaseSize}px`,
    height: `${ringBaseSize}px`,
    transform: `translate3d(${cursorPosition.x - ringBaseSize / 2}px, ${
      cursorPosition.y - ringBaseSize / 2
    }px, 0) scale(${ringScale})`,
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-150 ease-out"
        style={mainDotStyle}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </div>

      <div
        className="fixed pointer-events-none z-[9998] transition-transform duration-150 ease-out"
        style={ringStyle}
      >
        <div className="w-full h-full border border-white rounded-full" />
      </div>

      {trailPositions.map((pos, idx) => {
        const size = trailingSizes[idx];
        return (
          <div
            key={idx}
            className="fixed pointer-events-none z-[9997] transition-transform duration-150 ease-out opacity-50"
            style={{
              width: size,
              height: size,
              transform: `translate3d(${pos.x - size / 2}px, ${
                pos.y - size / 2
              }px, 0)`,
            }}
          >
            <div className="w-full h-full bg-white rounded-full" />
          </div>
        );
      })}
    </>
  );
};

export default CustomCursor;
