export default function H3({ className, children }) {
  const props = className ? className : "";
  const maxDim = 7;
  return (
    <h1
      className={`${props} text-${maxDim - 2}xl sm:text-${
        maxDim - 1
      }xl md:text-${maxDim - 1}xl lg:text-${
        maxDim - 1
      }xl xl:text-${maxDim}xl 2xl:text-${maxDim}xl transition-all duration-300 ease-in`}
    >
      {children}
    </h1>
  );
}
