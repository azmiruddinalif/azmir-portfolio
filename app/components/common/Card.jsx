import clsx from "clsx";

export default function CardBase({ children, className }) {
  return <div className={clsx("bg-white", className)}>{children}</div>;
}

CardBase.Header = function CardBaseHeader({ children, className }) {
  return <div className={clsx(className)}>{children}</div>;
};

CardBase.Body = function CardBaseBody({ children, className }) {
  return <div className={clsx(className)}>{children}</div>;
};

CardBase.Footer = function CardBaseFooter({ children, className }) {
  return <div className={clsx(className)}>{children}</div>;
};
