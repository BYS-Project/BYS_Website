"use client";

import Link from "next/link";

export default function TextLink({ className, children, href, color, height }) {
  /* Wait for some documentation to appear - nextjs 13 issues with router - and when on hover of current page don't show the underline */
  /* Not display for mobiles - should be working - to be tested */
  return (
    <Link
      className={`group relative w-max h-min ${className ? className : ""}`}
      href={href}
    >
      {children}
      <div
        className={`absolute bottom-0 left-0 w-full flex items-center justify-center`}
      >
        <div
          className="absolute z-10 bottom-0 left-0 w-0 sm:group-hover:w-full transition-all duration-150 ease-in rounded-full"
          style={{
            backgroundColor: color ? color : "black",
            height: height ? height : "0.25rem",
          }}
        />
      </div>
    </Link>
  );
}
