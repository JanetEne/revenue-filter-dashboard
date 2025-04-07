import type { SVGProps } from "react";

interface SvgAppbarInvoicingProps extends SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

const SvgAppbarInvoicing = ({ isHovered = false, ...props }: SvgAppbarInvoicingProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={isHovered ? "url(#appbar-invoicing_svg__a)" : "oklch(70.7% 0.022 261.325)"}
      d="M20.52 6.65v14.4c0 .58-.47 1.05-1.05 1.05H9.29c-.58 0-1.05-.47-1.05-1.05v-.89l9.1-3.44c.36-.14.6-.48.6-.87V5.6h1.53c.58 0 1.05.47 1.05 1.05"
    />
    <path
      fill={isHovered ? "url(#appbar-invoicing_svg__b)" : "oklch(50% 0.022 261.325)"}
      d="M17.94 5.6v10.26c0 .39-.24.73-.60.87l-9.1 3.44V6.65c0-.58.47-1.05 1.05-1.05z"
    />
    <path
      fill={isHovered ? "url(#appbar-invoicing_svg__c)" : "oklch(70.7% 0.022 261.325)"}
      d="M17.94 2.93V5.6H9.29c-.58 0-1.05.47-1.05 1.05v13.52l-3.5 1.32a.93.93 0 0 1-1.26-.87V2.92c0-.51.42-.93.93-.93h12.6c.51.01.93.43.93.94"
    />
    <defs>
      <linearGradient
        id="appbar-invoicing_svg__a"
        x1={8.242}
        x2={20.518}
        y1={13.852}
        y2={13.852}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FCFF1C" />
        <stop offset={1} stopColor="#FF9D0A" />
      </linearGradient>
      <linearGradient
        id="appbar-invoicing_svg__b"
        x1={8.242}
        x2={17.937}
        y1={12.886}
        y2={12.886}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFDDCD" />
        <stop offset={1} stopColor="#FF5403" />
      </linearGradient>
      <linearGradient
        id="appbar-invoicing_svg__c"
        x1={3.482}
        x2={17.937}
        y1={11.778}
        y2={11.778}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E7CFFF" />
        <stop offset={1} stopColor="#870FFF" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgAppbarInvoicing;