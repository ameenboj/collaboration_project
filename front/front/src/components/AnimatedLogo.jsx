import React from "react";
import "./AnimatedLogo.css";

const AnimatedLogo = ({ size = "medium", animated = true, className = "" }) => {
  return (
    <div
      className={`animated-logo ${size} ${
        animated ? "animate" : ""
      } ${className}`}
    >
      <svg
        className="logo-svg"
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#1e7e34", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#4caf50", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#81c784", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        {/* Glow effect */}
        <g className="logo-glow">
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="rgba(76, 175, 80, 0.2)"
            strokeWidth="2"
            opacity="0.6"
          />
        </g>

        {/* Main Logo Group */}
        <g className="logo-group">
          {/* Hexagon Pattern */}
          <polygon
            points="130,140 160,120 190,140 180,170 150,190 120,170"
            fill="url(#greenGrad)"
            opacity="0.9"
          />
          <polygon
            points="200,100 240,120 240,160 200,180 160,160 160,120"
            fill="url(#greenGrad)"
            opacity="0.95"
          />
          <polygon
            points="270,140 300,120 330,140 320,170 290,190 260,170"
            fill="url(#greenGrad)"
            opacity="0.9"
          />
          <polygon
            points="100,180 140,160 170,180 160,220 120,240 90,220"
            fill="url(#greenGrad)"
            opacity="0.85"
          />

          {/* Center white hexagon for W */}
          <polygon
            points="200,160 250,140 280,170 270,230 220,250 170,230"
            fill="white"
          />

          <polygon
            points="300,180 340,160 370,180 360,220 320,240 290,220"
            fill="url(#greenGrad)"
            opacity="0.85"
          />
          <polygon
            points="130,260 160,240 190,260 180,300 150,320 120,300"
            fill="url(#greenGrad)"
            opacity="0.9"
          />
          <polygon
            points="200,280 240,260 240,300 200,320 160,300 160,260"
            fill="url(#greenGrad)"
            opacity="0.95"
          />
          <polygon
            points="270,260 300,240 330,260 320,300 290,320 260,300"
            fill="url(#greenGrad)"
            opacity="0.9"
          />

          {/* Letter W */}
          <text
            x="200"
            y="210"
            fontSize="90"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
            fill="#2d3436"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            W
          </text>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLogo;
