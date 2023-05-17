export default function TwitterLogo({ width, height, fill, fillLinear }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 800}
      height={height ? height : 800}
      fill={fill}
      viewBox="0 0 256 256"
    >
      {fillLinear && (
        <defs>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={fillLinear.from} />
            <stop offset="100%" stopColor={fillLinear.to} />
          </linearGradient>
        </defs>
      )}

      <path
        fill={fillLinear && "url(#gradient4)"}
        d="M245.657 77.657l-30.164 30.164C209.471 177.702 150.538 232 80 232c-14.524 0-26.494-2.303-35.578-6.845-7.33-3.665-10.333-7.599-11.078-8.717a8 8 0 013.847-11.929c.257-.097 23.848-9.157 39.095-26.408a109.574 109.574 0 01-24.726-24.355c-13.708-18.604-28.206-50.912-19.431-99.177a8 8 0 0113.528-4.226c.353.352 33.642 33.171 74.338 43.772l.005-6.119a48.319 48.319 0 0148.608-47.993A48.113 48.113 0 01209.578 64H240a8 8 0 015.657 13.657z"
      ></path>
    </svg>
  );
}
