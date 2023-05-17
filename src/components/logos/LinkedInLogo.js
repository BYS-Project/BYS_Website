export default function LinkedInLogo({ width, height, fill, fillLinear }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 800}
      height={height ? height : 800}
      fill={fill}
      viewBox="0 0 32 32"
    >
      {fillLinear && (
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={fillLinear.from} />
            <stop offset="100%" stopColor={fillLinear.to} />
          </linearGradient>
        </defs>
      )}

      <path
        fill={fillLinear && "url(#gradient2)"}
        d="M17.303 14.365a.246.246 0 00.031-.048v.048h-.031zM32 0v32H0V0h32zM9.925 12.285H5.153v14.354h4.772V12.285zm.312-4.438c-.03-1.41-1.035-2.482-2.668-2.482-1.631 0-2.698 1.072-2.698 2.482 0 1.375 1.035 2.479 2.636 2.479h.031c1.664 0 2.699-1.104 2.699-2.479zm16.892 10.561c0-4.408-2.355-6.459-5.494-6.459-2.531 0-3.664 1.391-4.301 2.368v-2.032h-4.77c.061 1.346 0 14.354 0 14.354h4.77v-8.016c0-.434.031-.855.157-1.164.346-.854 1.132-1.746 2.448-1.746 1.729 0 2.418 1.314 2.418 3.246v7.68h4.771l.001-8.231z"
      ></path>
    </svg>
  );
}
