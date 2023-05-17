"use client";

export function P1({ className, children, translationPath, style }) {
  const props = className ? className : "";
  return (
    <p
      style={style}
      className={`${props} text-[1.75rem] xl:text-[2.25rem] md:text-[2rem] leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </p>
  );
}
export function P1SP({ className, children, translationPath, style }) {
  const props = className ? className : "";
  return (
    <p
      style={style}
      className={`${props} text-[1.25rem] xl:text-[2.25rem] md:text-[1.5rem] leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </p>
  );
}
export function P2({ className, children, translationPath }) {
  const props = className ? className : "";
  return (
    <p
      className={`${props} text-[1.25rem] xl:text-[1.5rem] md:text-[1.375rem] leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </p>
  );
}

export function P3({ className, children, translationPath }) {
  const props = className ? className : "";
  return (
    <p
      className={`${props} text-[1.125rem] xl:text-[1.375rem] md:text-[1.25rem] leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </p>
  );
}

export function P4({ className, children, translationPath }) {
  const props = className ? className : "";
  return (
    <p
      className={`${props} text-[1rem] xl:text-[1.25rem] md:text-[1.125rem] leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </p>
  );
}
