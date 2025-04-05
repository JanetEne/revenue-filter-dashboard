
import type { SVGProps } from "react";
const SvgAppbarLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="url(#appbar-link_svg__a)"
      strokeMiterlimit={10}
      strokeWidth={2.7}
      d="M12.507 12.9h-4c-2.35 0-4.25-1.9-4.25-4.25v-.4c0-2.35 1.9-4.25 4.25-4.25h4c2.35 0 4.25 1.9 4.25 4.25v.4a4.26 4.26 0 0 1-4.25 4.25Z"
    />
    <path
      stroke="url(#appbar-link_svg__b)"
      strokeMiterlimit={10}
      strokeWidth={2.7}
      d="M16.777 16.9h-4c-2.35 0-4.25-1.9-4.25-4.25v-.4c0-2.35 1.9-4.25 4.25-4.25h4c2.35 0 4.25 1.9 4.25 4.25v.4c0 2.35-1.9 4.25-4.25 4.25Z"
    />
    <path
      fill="url(#appbar-link_svg__c)"
      d="m5.458 18.6-.25.39c-.06.1-.18.13-.27.07l-1.28-.76c-.1-.06-.13-.18-.07-.27l.25-.39c.06-.1.03-.22-.07-.27l-.67-.39a.206.206 0 0 1 0-.35l3.34-1.88c.14-.08.3.02.3.18l-.04 3.84c0 .15-.17.25-.3.17l-.67-.39c-.08-.08-.21-.04-.27.05"
    />
    <defs>
      <linearGradient
        id="appbar-link_svg__a"
        x1={2.898}
        x2={18.105}
        y1={8.445}
        y2={8.445}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#870FFF" />
        <stop offset={1} stopColor="#E7CFFF" />
      </linearGradient>
      <linearGradient
        id="appbar-link_svg__b"
        x1={7.169}
        x2={22.377}
        y1={12.455}
        y2={12.455}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFDDCD" />
        <stop offset={1} stopColor="#FF5403" />
      </linearGradient>
      <linearGradient
        id="appbar-link_svg__c"
        x1={3.664}
        x2={7.309}
        y1={15.639}
        y2={17.809}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FCFF1C" />
        <stop offset={1} stopColor="#FF9D0A" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgAppbarLink;
