
import type { SVGProps } from "react";
const SvgNavbarHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <mask
      id="navbar-home_svg__a"
      width={20}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#navbar-home_svg__a)">
      <path
        fill="#56616B"
        d="M4.721 16.112h3.22v-4.51q0-.252.17-.422a.57.57 0 0 1 .422-.17h2.949q.236 0 .407.17t.17.422v4.51h3.22V8.308a.24.24 0 0 0-.028-.116.3.3 0 0 0-.076-.092l-5.023-3.772A.25.25 0 0 0 10 4.28a.25.25 0 0 0-.152.048L4.825 8.1a.3.3 0 0 0-.076.092.24.24 0 0 0-.028.116zm-.913 0V8.316q0-.288.115-.528.116-.241.356-.407L9.3 3.595q.307-.236.697-.236t.7.236l5.023 3.786q.24.165.355.407.116.24.116.528v7.796q0 .373-.27.643a.88.88 0 0 1-.643.27h-3.541a.57.57 0 0 1-.423-.169.57.57 0 0 1-.17-.423v-4.51h-2.29v4.51q0 .254-.171.423a.56.56 0 0 1-.406.17H4.715a.87.87 0 0 1-.636-.271.88.88 0 0 1-.271-.643"
      />
    </g>
  </svg>
);
export default SvgNavbarHome;
