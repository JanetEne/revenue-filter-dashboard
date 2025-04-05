import * as icons from "./icons";

export type IconName = keyof typeof icons;
export interface Props {
  icon: IconName;
  className?: string;
  fill?: string; 
}

const Icon = ({ icon, className, fill }: Props) => {
  const IconComp = icons[icon];
  if (IconComp) return <IconComp className={className} fill={fill} />;
  throw new Error(`Unknown icon "${icon}"`);
};

export default Icon;
