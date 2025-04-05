
import type { SVGProps } from "react";
const SvgNotifications = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <mask
      id="notifications_svg__a"
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
    <g mask="url(#notifications_svg__a)">
      <path
        fill="#56616B"
        d="M4.375 15.737a.6.6 0 0 1-.445-.18.6.6 0 0 1-.18-.445q0-.266.18-.445.18-.18.445-.18h.881V8.27q0-1.68 1.038-2.973a4.6 4.6 0 0 1 2.664-1.652v-.519q0-.434.304-.738.303-.303.737-.304.434 0 .738.304.305.305.305.738v.52a4.6 4.6 0 0 1 2.664 1.651 4.6 4.6 0 0 1 1.037 2.973v6.218h.882q.265 0 .445.18t.18.445q0 .267-.18.446a.6.6 0 0 1-.445.18zm5.624 2.34q-.623 0-1.064-.443a1.45 1.45 0 0 1-.441-1.064h3.012q0 .624-.443 1.065-.443.442-1.064.442m-3.493-3.59h6.988V8.27q0-1.447-1.024-2.47A3.37 3.37 0 0 0 10 4.776q-1.447 0-2.47 1.023a3.37 3.37 0 0 0-1.024 2.47z"
      />
    </g>
  </svg>
);
export default SvgNotifications;
