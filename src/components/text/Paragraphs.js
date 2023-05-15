export function P1({ className, children }) {
  const props = className ? className : "";
  return (
    <p
      className={`${props} text-[1.25rem] lg:text-[1.5rem] leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </p>
  );
}

export function P2({ className, children }) {
  const props = className ? className : "";
  return (
    <p
      className={`${props} text-[1rem] lg:text[1.25] leading-none transition-all duration-300 ease-in`}
    >
      {children}
    </p>
  );
}
