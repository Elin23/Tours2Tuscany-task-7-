import React from "react";

type ArrowProps = {
  color?: string;
  className?: string;
};

export default function RightArrow({ color = "#333333", className = "" }: ArrowProps) {
  return (
    <svg
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.5 1L8.5 8L1.5 15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
