import React from "react";

interface ArrowRightProps {
  fill?: string;
  className?: React.SVGAttributes<SVGSVGElement>["className"];
  style?: React.SVGAttributes<SVGSVGElement>["style"];
}

const ArrowRight: React.FC<ArrowRightProps> = ({
  className,
  style,
  fill = "none"
}) => {
  return (
    <svg
      style={style}
      className={className}
      fill={fill}
      width="7"
      height="8"
      viewBox="0 0 7 8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 4L2 4.76837e-07L2 8L7 4Z" />
    </svg>
  );
};

export default ArrowRight;
