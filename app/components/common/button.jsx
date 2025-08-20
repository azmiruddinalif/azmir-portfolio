"use client";

import React from "react";
import clsx from "clsx";

const Button = ({
  text,
  onClick,
  icon,
  type = "button",
  className,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "bg-orange cursor-pointer rounded-md px-8",
        "flex items-center justify-center gap-2",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
