import React from "react";

interface DesktopIconProps {
  fill?: string;
  className?: React.SVGAttributes<SVGSVGElement>["className"];
  style?: React.SVGAttributes<SVGSVGElement>["style"];
}

const DesktopIcon: React.FC<DesktopIconProps> = ({
  fill = "none",
  className,
  style
}) => {
  return (
    <svg
      width="76"
      height="56"
      viewBox="0 0 76 56"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <rect
        x="23.8321"
        y="26.7808"
        width="49.5955"
        height="27.4902"
        rx="1.72859"
        stroke="#C2C6EC"
        strokeWidth="3.45717"
        strokeDasharray="6.05 6.05"
      />
      <path
        d="M7.36914 11.7893H48.6323V38.3156H7.36914V11.7893Z"
        fill="#C2C6EC"
      />
      <path
        d="M28 39.6665H7V11.6665H49V39.6665H28Z"
        stroke="#6E79D6"
        strokeWidth="3.45717"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 49H39.6667"
        stroke="#6E79D6"
        strokeWidth="3.45717"
        strokeLinecap="round"
      />
      <path
        d="M28 48.9998V39.6665"
        stroke="#6E79D6"
        strokeWidth="3.45717"
        strokeLinecap="round"
      />
      <path
        d="M28.0006 49H16.334"
        stroke="#6E79D6"
        strokeWidth="3.45717"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DesktopIcon;
