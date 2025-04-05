
import type { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 34 34"
    {...props}
  >
    <mask
      id="close_svg__a"
      width={24}
      height={24}
      x={4}
      y={4}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#C4C4C4" d="M4 4h24v24H4z" />
    </mask>
    <g mask="url(#close_svg__a)">
      <path
        fill="#131316"
        d="m10.4 22.3-.7-.7 5.6-5.6-5.6-5.6.7-.7 5.6 5.6 5.6-5.6.7.7-5.6 5.6 5.6 5.6-.7.7-5.6-5.6z"
      />
    </g>
  </svg>
);
export default SvgClose;
