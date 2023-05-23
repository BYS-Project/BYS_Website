import Link from "next/link";

export function LinkButton({ href, target, children, style, className }) {
  return (
    <Link href={href} target={target}>
      <button
        className={`${className} rounded-full border-1 border-solid border-black`}
        style={style}
      >
        {children}
      </button>
    </Link>
  );
}
