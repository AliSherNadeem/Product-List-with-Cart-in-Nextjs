"Use Client";
import React from "react";
interface IconProps {
  className?: string; // Accept className as an optional prop
}
const DecrementIcon: React.FC<IconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="2"
      fill="none"
      viewBox="0 0 10 2"
    >
      <path fill="#fff" d="M0 .375h10v1.25H0V.375z"></path>
    </svg>
  );
};

export default DecrementIcon;
