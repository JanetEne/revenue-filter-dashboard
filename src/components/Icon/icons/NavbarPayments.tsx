
import type { SVGProps } from "react";
const SvgNavbarPayments = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <mask
      id="navbar-payments_svg__a"
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
    <g mask="url(#navbar-payments_svg__a)">
      <path
        fill="#fff"
        d="M3.146 15.938a1.37 1.37 0 0 1-1.005-.418 1.37 1.37 0 0 1-.417-1.004V7.029a.56.56 0 0 1 .171-.41.56.56 0 0 1 .412-.171.56.56 0 0 1 .411.172.56.56 0 0 1 .171.409v7.487q0 .096.08.176.081.08.177.08h12.1q.237 0 .409.172t.171.41q0 .242-.171.413a.56.56 0 0 1-.41.171zm2.883-2.866a1.37 1.37 0 0 1-1.005-.418 1.37 1.37 0 0 1-.417-1.004V5.42q0-.586.417-1.005a1.37 1.37 0 0 1 1.005-.417h10.825q.587 0 1.005.417.417.418.417 1.005v6.23q0 .587-.417 1.004a1.37 1.37 0 0 1-1.005.418zm1.2-1.166q0-.612-.428-1.043a1.4 1.4 0 0 0-1.029-.43v1.217q0 .105.077.18.075.075.18.076zm8.426 0h1.2q.104 0 .18-.076.075-.075.076-.18v-1.216q-.608 0-1.032.43a1.43 1.43 0 0 0-.424 1.042m-4.217-1.414q.826 0 1.39-.57.562-.571.562-1.396a1.88 1.88 0 0 0-.567-1.382 1.89 1.89 0 0 0-1.385-.566q-.82 0-1.39.562-.572.563-.572 1.392 0 .824.568 1.392.569.568 1.394.568M5.772 6.636q.608 0 1.032-.43a1.43 1.43 0 0 0 .424-1.043h-1.2q-.104 0-.18.077a.25.25 0 0 0-.076.18zm11.339 0V5.42q0-.105-.076-.18a.25.25 0 0 0-.18-.077h-1.2q0 .614.427 1.043.427.43 1.029.43"
      />
    </g>
  </svg>
);
export default SvgNavbarPayments;
