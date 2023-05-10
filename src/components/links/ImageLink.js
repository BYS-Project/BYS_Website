import Link from "next/link";
import { cloneElement, useState } from "react";

export default function ImageLink({
  className,
  scaleOnHover,
  fillOnHover,
  children,
  href,
  blank,
}) {
  const scale = scaleOnHover ? `hover:scale-[${scaleOnHover}]` : "";
  const baseColor = children.props.fill ? children.props.fill : "black";
  const [fill, setFill] = useState(baseColor);
  const newElement = cloneElement(children, { fill: fill });
  return (
    <Link
      href={href}
      target={blank ? "_blank" : "_self"}
      onMouseEnter={() => setFill(fillOnHover)}
      onMouseLeave={() => setFill(baseColor)}
      className={`${className} ${scale} w-full h-full transition-all duration-150 ease-in`}
    >
      {newElement}
    </Link>
  );
}
