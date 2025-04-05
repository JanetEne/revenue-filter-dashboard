
import type { SVGProps } from "react";
const SvgExpandMore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <mask
      id="expand-more_svg__a"
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
    <g mask="url(#expand-more_svg__a)">
      <path
        fill="#131316"
        d="M10 13.021a.828.828 0 0 1-.633-.256L4.873 8.271a.73.73 0 0 1-.213-.522.7.7 0 0 1 .213-.532A.72.72 0 0 1 5.399 7q.31 0 .527.217L10 11.29l4.073-4.073a.73.73 0 0 1 .523-.212.7.7 0 0 1 .531.212q.218.217.218.527a.72.72 0 0 1-.218.527l-4.494 4.494a.83.83 0 0 1-.633.256"
      />
    </g>
  </svg>
);
export default SvgExpandMore;
