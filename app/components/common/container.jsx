import React from "react";
import clsx from "clsx";

const Container = ({ children, className }) => {
  return (
    <div
      className={clsx("w-full max-w-[1170px] mx-auto px-3 xl:px-0", className)}
    >
      {children}
    </div>
  );
};

export default Container;
