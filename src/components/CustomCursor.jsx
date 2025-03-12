import { useEffect, useState } from "react";

const trailingSizes = [8, 7, 6, 5, 4];

const CustomCursor = () => {
  // Instantaneous mouse position
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  // Smoothed cursor position for a lag/delay effect
  const [cursorPosition, setCursorPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  // Cursor variant: 'default' | 'click' | 'link'
  const [cursorVariant, setCursorVariant] = useState("default");
  // Visibility state for showing/hiding the cursor
  const [isVisible, setIsVisible] = useState(true);
  // Positions for trailing dots
  const [trailPositions, setTrailPositions] = useState(
    Array(trailingSizes.length).fill({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    })
  );

  // Hide native browser cursor globally
  useEffect(() => {
    const originalCursor = document.body.style.cursor;
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = originalCursor;
    };
  }, []);

  // Update instantaneous mouse position on movement
  useEffect(() => {
    const moveCursor = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Smoothly interpolate cursorPosition toward mousePosition
  useEffect(() => {
    let rafId;
    const smoothing = 0.2; // Adjust to change delay/smoothness
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

  // Update variant on click events
  useEffect(() => {
    const handleMouseDown = () => setCursorVariant("click");
    const handleMouseUp = () => setCursorVariant("default");
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Change variant when hovering over interactive elements
  useEffect(() => {
    const handleMouseOver = (e) => {
      if (
        e.target.closest('a, button, input, textarea, select, [role="button"]')
      ) {
        setCursorVariant("link");
      }
    };
    const handleMouseOut = (e) => {
      if (
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

  // Ensure the custom cursor is visible when returning to the tab
  useEffect(() => {
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

  // Animate trailing dots to follow the smoothed cursor position
  useEffect(() => {
    let rafId;
    const smoothing = 0.15;
    const animateTrail = () => {
      setTrailPositions((prevTrail) => {
        const newTrail = [...prevTrail];
        // First trailing dot follows the main smoothed cursor
        newTrail[0] = {
          x: prevTrail[0].x + (cursorPosition.x - prevTrail[0].x) * smoothing,
          y: prevTrail[0].y + (cursorPosition.y - prevTrail[0].y) * smoothing,
        };
        // Each subsequent dot follows the one ahead
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

  // Determine sizes and scales for main dot and outline ring based on variant
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

  // Styles using inline transforms for positioning and scaling
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
      {/* Main dot */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-150 ease-out"
        style={mainDotStyle}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </div>

      {/* Outline ring */}
      <div
        className="fixed pointer-events-none z-40 transition-transform duration-150 ease-out"
        style={ringStyle}
      >
        <div className="w-full h-full border border-white rounded-full" />
      </div>

      {/* Trailing dots */}
      {trailPositions.map((pos, idx) => {
        const size = trailingSizes[idx];
        return (
          <div
            key={idx}
            className="fixed pointer-events-none z-30 transition-transform duration-150 ease-out opacity-50"
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
