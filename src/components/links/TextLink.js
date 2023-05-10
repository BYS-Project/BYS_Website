import Link from "next/link";

export default function TextLink({ className, children, href, center }) {
  return (
    <Link className={`group relative ${className}`} href={href}>
      {children}
      <div className={`${center && "w-full flex items-center justify-center"}`}>
        <div className="absolute z-10 bottom-0 left-0 w-0 group-hover:w-full h-1 bg-black transition-all duration-150 ease-in rounded-full" />
      </div>
    </Link>
  );
}
