import React from "react";

const SearchIcon = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{width:"45px"}}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};

export default SearchIcon;
