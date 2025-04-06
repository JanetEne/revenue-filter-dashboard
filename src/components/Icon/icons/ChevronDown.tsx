import type { SVGProps } from "react";
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <mask
      id="chevron-down_svg__a"
      width={20}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#C4C4C4" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#chevron-down_svg__a)">
      <path
        fill="#31373D"
        d="M10 12.25 5.583 7.833l.584-.604L10 11.063l3.833-3.834.584.604z"
      />
    </g>
  </svg>
);
export default SvgChevronDown;
