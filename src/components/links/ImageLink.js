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
      className={`${
        className ? className : ""
      } ${scale} w-min h-full transition-all duration-150 ease-in`}
    >
      <div className="w-8 2xl:w-24 xl:w-20 lg:w-16 sm:w-14 xs:w-10 transition-all duration-150 ease-in">
        {newElement}
      </div>
    </Link>
  );
}
