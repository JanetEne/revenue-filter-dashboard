
import type { SVGProps } from "react";
const SvgOutgoingTransaction = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 49 49"
    {...props}
  >
    <circle cx={24.5} cy={24.5} r={24} fill="#F9E3E0" />
    <mask
      id="outgoing-transaction_svg__a"
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
    <g mask="url(#outgoing-transaction_svg__a)">
      <path
        fill="#961100"
        d="M19 30.583 18.416 30 28.5 19.917h-6.084v-.834h7.5v7.5h-.833V20.5z"
      />
    </g>
  </svg>
);
export default SvgOutgoingTransaction;
