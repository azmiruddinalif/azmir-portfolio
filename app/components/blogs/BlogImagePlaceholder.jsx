import clsx from "clsx";

export default function BlogImagePlaceholder({
  title,
  textClassName = "text-6xl",
  className,
}) {
  const letter = title?.trim()?.charAt(0)?.toUpperCase() || "?";

  return (
    <div
      className={clsx(
        "absolute inset-0 flex items-center justify-center",
        "bg-gradient-to-br from-primary-400 to-primary-600",
        className
      )}
    >
      <span
        className={clsx(
          "font-primary font-extrabold text-white/90 select-none",
          textClassName
        )}
      >
        {letter}
      </span>
    </div>
  );
}
