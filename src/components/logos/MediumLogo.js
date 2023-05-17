export default function MediumLogo({ width, height, fill, fillLinear }) {
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
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={fillLinear.from} />
            <stop offset="100%" stopColor={fillLinear.to} />
          </linearGradient>
        </defs>
      )}

      <path
        fill={fillLinear && "url(#gradient3)"}
        d="M136 128c0 37.495-28.71 68-64 68S8 165.495 8 128s28.71-68 64-68 64 30.505 64 68zm104-64a8 8 0 00-8 8v112a8 8 0 0016 0V72a8 8 0 00-8-8zm-56 0c-5.683 0-16.4 2.76-24.324 21.251C154.726 96.801 152 111.983 152 128s2.726 31.2 7.676 42.749C167.601 189.239 178.317 192 184 192s16.4-2.76 24.324-21.251C213.274 159.199 216 144.017 216 128s-2.726-31.2-7.676-42.749C200.399 66.761 189.683 64 184 64z"
      ></path>
    </svg>
  );
}
