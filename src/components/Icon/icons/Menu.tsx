
import type { SVGProps } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="menu_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#menu_svg__a)">
      <path
        fill="#56616B"
        d="M4 17.275q-.224 0-.362-.15a.5.5 0 0 1-.138-.35q0-.224.138-.362A.49.49 0 0 1 4 16.275h16a.5.5 0 0 1 .363.138.5.5 0 0 1 .137.362q0 .2-.137.35a.47.47 0 0 1-.363.15zM4 12.5q-.224 0-.362-.15A.5.5 0 0 1 3.5 12a.5.5 0 0 1 .138-.363A.5.5 0 0 1 4 11.5h16q.225 0 .363.15t.137.35q0 .225-.137.363A.5.5 0 0 1 20 12.5zm0-4.775a.49.49 0 0 1-.362-.138.49.49 0 0 1-.138-.362.5.5 0 0 1 .138-.35q.137-.15.362-.15h16q.225 0 .363.15t.137.35a.5.5 0 0 1-.137.362.5.5 0 0 1-.363.138z"
      />
    </g>
  </svg>
);
export default SvgMenu;
