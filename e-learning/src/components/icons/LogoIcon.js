import React from "react";

const LogoIcon = ({
  className = "h-6 w-6",
  fill = "none",
  stroke = "currentColor",
  stokeWidth = "",
}) => {
  return (
    <svg
      className={className}
      fill={fill}
      viewBox="0 0 24 24"
      stroke={stroke}
      strokeWidth={stokeWidth}
      style={{width:"60px", overflow:"hidden"}}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );
};

export default LogoIcon;
