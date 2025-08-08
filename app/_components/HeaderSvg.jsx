import React from "react";

const HeaderSvg = () => {
  return (
    <div>
      {" "}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 300"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Radial gradient for fade effect */}
          <radialGradient id="fadeGradient" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          {/* Pattern for dots */}
          <pattern
            id="dots"
            x="0"
            y="0"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="15" cy="15" r="2" fill="rgba(128, 0, 0, 0.15)" />
          </pattern>
        </defs>

        {/* Dots pattern covering entire area */}
        <rect width="100%" height="100%" fill="url(#dots)" />

        {/* Overlay with fade effect */}
        <rect width="100%" height="100%" fill="url(#fadeGradient)" />
      </svg>
    </div>
  );
};

export default HeaderSvg;
