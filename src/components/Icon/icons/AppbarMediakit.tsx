import type { SVGProps } from "react";

interface SvgAppbarMediakitProps extends SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

const SvgAppbarMediakit = ({ isHovered = false, ...props }: SvgAppbarMediakitProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={isHovered ? "url(#appbar-mediakit_svg__a)" : "oklch(70.7% 0.022 261.325)"}
      d="M15.84 4.925v6.1c0 .39-.31.7-.7.7H9.98c-.39 0-.7-.31-.7-.7v-.97h-4.3c-.39 0-.7-.31-.7-.7v-6.1c0-.39.31-.7.7-.7h5.16c.39 0 .7.31.7.7v.97h4.3c.38 0 .7.32.7.7"
    />
    <path
      fill={isHovered ? "url(#appbar-mediakit_svg__b)" : "oklch(60% 0.022 261.325)"}
      d="M11.59 14.185H2.7c-.39 0-.7-.31-.7-.7v-6.93c0-.39.31-.7.7-.7h8.89c.39 0 .7.31.7.7v6.93c0 .39-.31.7-.7.7"
    />
    <path
      fill={isHovered ? "url(#appbar-mediakit_svg__c)" : "oklch(70.7% 0.022 261.325)"}
      d="M21.3 21.445H2.7c-.39 0-.7-.31-.7-.7V8.475c0-.39.31-.7.7-.7h18.6c.39 0 .7.31.7.7v12.27c0 .39-.31.7-.7.7"
    />
    <defs>
      <linearGradient
        id="appbar-mediakit_svg__a"
        x1={4.275}
        x2={15.836}
        y1={7.142}
        y2={7.142}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FCFF1C" />
        <stop offset={1} stopColor="#FF9D0A" />
      </linearGradient>
      <linearGradient
        id="appbar-mediakit_svg__b"
        x1={2}
        x2={12.293}
        y1={10.022}
        y2={10.022}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E7CFFF" />
        <stop offset={1} stopColor="#870FFF" />
      </linearGradient>
      <linearGradient
        id="appbar-mediakit_svg__c"
        x1={2}
        x2={22}
        y1={14.614}
        y2={14.614}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#03FFE5" />
        <stop offset={1} stopColor="#14B348" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgAppbarMediakit;
