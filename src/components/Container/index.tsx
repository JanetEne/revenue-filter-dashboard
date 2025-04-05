import { ReactNode } from "react";

declare type ContainerType = {
  children: ReactNode;
  className?: string;
};

/*
 * Todo: add this class name 2xl:max-w-screen-2xl 2xl:px-20
 */

const Container = ({ children, className }: ContainerType) => {
  return (
    <div
      className={`mx-auto max-w-xl xmd:max-w-6xl xxl:max-w-[1360px] px-5 sm:px-12 lg:px-8 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;