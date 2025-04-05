
import type { SVGProps } from "react";
const SvgAppbarStore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="url(#appbar-store_svg__a)"
      d="M19 22.06H4.98c-.35 0-.64-.28-.64-.64V7.4c0-.35.28-.64.64-.64H19c.35 0 .64.28.64.64v14.02c0 .35-.29.64-.64.64"
    />
    <path
      fill="url(#appbar-store_svg__b)"
      d="M20.46 15.72 7.59 5.22c-.46-.38-.2-1.13.4-1.13h12.87c.35 0 .64.28.64.64v10.51c0 .53-.62.82-1.04.48"
    />
    <path
      fill="url(#appbar-store_svg__c)"
      d="M3.54 13.58 16.41 3.07c.46-.38.2-1.13-.4-1.13H3.14c-.35 0-.64.28-.64.64v10.51c0 .53.62.83 1.04.49"
    />
    <defs>
      <linearGradient
        id="appbar-store_svg__a"
        x1={4.342}
        x2={19.637}
        y1={14.411}
        y2={14.411}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9868" />
        <stop offset={1} stopColor="#FF5403" />
      </linearGradient>
      <linearGradient
        id="appbar-store_svg__b"
        x1={7.353}
        x2={21.5}
        y1={9.979}
        y2={9.979}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#03FFE5" />
        <stop offset={1} stopColor="#14B348" />
      </linearGradient>
      <linearGradient
        id="appbar-store_svg__c"
        x1={2.5}
        x2={16.647}
        y1={7.832}
        y2={7.832}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FCFF1C" />
        <stop offset={1} stopColor="#FF9D0A" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgAppbarStore;
