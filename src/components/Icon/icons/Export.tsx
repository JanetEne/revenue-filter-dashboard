
import type { SVGProps } from "react";
const SvgExport = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <mask
      id="export_svg__a"
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
    <g mask="url(#export_svg__a)">
      <path
        fill="#131316"
        d="M10 12.688 7.042 9.75l.604-.604 1.937 1.937V3.875h.834v7.208l1.937-1.937.604.604zm-4.48 3.145q-.582 0-.967-.385a1.31 1.31 0 0 1-.386-.969V12.5H5v1.98q0 .208.157.363A.5.5 0 0 0 5.52 15h8.958q.209 0 .364-.157A.5.5 0 0 0 15 14.48V12.5h.833v1.98a1.315 1.315 0 0 1-1.354 1.353z"
      />
    </g>
  </svg>
);
export default SvgExport;
