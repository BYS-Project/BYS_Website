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
  const baseColor = children.props.fill ? children.props.fill : "black";
  const [fill, setFill] = useState(baseColor);
  const [scale, setScale] = useState("100%");
  const newElement = cloneElement(children, { fill: fill });
  return (
    <Link
      href={href}
      target={blank ? "_blank" : "_self"}
      onMouseEnter={() => {
        setFill(fillOnHover);
        setScale(scaleOnHover);
      }}
      onMouseLeave={() => {
        setFill(baseColor);
        setScale("100%");
      }}
      className={`${
        className ? className : ""
      } w-min h-full transition-all duration-150 ease-in`}
      style={{ transform: `scale(${scale})` }}
    >
      <div className="w-8 2xl:w-24 xl:w-20 lg:w-16 sm:w-14 xs:w-10 transition-all duration-150 ease-in">
        {newElement}
      </div>
    </Link>
  );
}
