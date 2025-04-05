
import type { SVGProps } from "react";
const SvgEmptyState = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <rect width={48} height={48} fill="url(#empty-state_svg__a)" rx={16} />
    <mask
      id="empty-state_svg__b"
      width={24}
      height={24}
      x={12}
      y={12}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M12 12h24v24H12z" />
    </mask>
    <g mask="url(#empty-state_svg__b)">
      <path
        fill="url(#empty-state_svg__c)"
        d="M18 33q-.85 0-1.425-.575T16 31v-2h3V15.375l1.275.9 1.3-.9 1.3.9 1.325-.9 1.3.9 1.3-.9 1.325.9 1.3-.9 1.3.9 1.275-.9V31q0 .85-.575 1.425T30 33zm12-1q.424 0 .712-.288A.97.97 0 0 0 31 31V17H20v12h9v2q0 .424.288.712A.97.97 0 0 0 30 32m-8.625-11.5v-1h5.35v1zm0 3v-1h5.35v1zm7.5-2.725q-.3 0-.525-.238a.76.76 0 0 1-.225-.537q0-.3.225-.538a.73.73 0 0 1 1.075 0q.225.238.225.538a.76.76 0 0 1-.225.537.73.73 0 0 1-.55.238m0 3q-.3 0-.525-.238a.76.76 0 0 1-.225-.537q0-.3.225-.538a.73.73 0 0 1 1.075 0q.225.238.225.538a.76.76 0 0 1-.225.537.73.73 0 0 1-.55.238"
      />
    </g>
    <defs>
      <linearGradient
        id="empty-state_svg__a"
        x1={1.5}
        x2={48}
        y1={0.314}
        y2={46.815}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBDEE6" />
        <stop offset={1} stopColor="#F6F7F9" />
      </linearGradient>
      <linearGradient
        id="empty-state_svg__c"
        x1={16.8}
        x2={32.269}
        y1={15.375}
        y2={31.516}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5C6670" />
        <stop offset={1} stopColor="#131316" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgEmptyState;
