"use client";
import React from "react";
import clsx from "clsx";
import Button from "./button";
import Link from "next/link";

export default function ReusableButton({
  href,
  onClick,
  text = "Click Me",
  icon,
  className,
  target,
  ariaLabel,
}) {
  // If href is given, use <Link> or <a>
  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");

    if (isExternal) {
      // External or mailto links
      return (
        <Link
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          aria-label={ariaLabel || text}
          className={clsx(className)}
        >
          {icon && <span aria-hidden="true">{icon}</span>}
          {text}
        </Link>
      );
    }

    // Internal route (Next.js Link)
    return (
      <Link
        href={href}
        aria-label={ariaLabel || text}
        className={clsx(className)}
      >
        {icon && <span aria-hidden="true">{icon}</span>}
        {text}
      </Link>
    );
  }

  // Fallback: plain button
  return (
    <Button
      text={text}
      onClick={onClick}
      icon={icon}
      className={clsx(className)}
      ariaLabel={ariaLabel || text}
    />
  );
}
