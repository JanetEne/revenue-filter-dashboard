
import type { SVGProps } from "react";
const SvgInomingTransaction = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 49 49"
    {...props}
  >
    <circle cx={24.5} cy={24.5} r={24} fill="#E3FCF2" />
    <mask
      id="inoming-transaction_svg__a"
      width={21}
      height={21}
      x={14}
      y={14}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#C4C4C4" d="M14.5 14.5h20v20h-20z" />
    </mask>
    <g mask="url(#inoming-transaction_svg__a)">
      <path
        fill="#075132"
        d="M19.25 29.75v-7.5h.833v6.083L30.167 18.25l.583.583-10.083 10.084h6.083v.833z"
      />
    </g>
  </svg>
);
export default SvgInomingTransaction;
