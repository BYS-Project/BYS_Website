export function Arrow({ fill }) {
  return (
    <svg
      fill={fill}
      width="100%"
      height="100%"
      viewBox="10.9 8.9 196.2 325.0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M 172.855469 333.867188 L 10.929688 171.9375 L 173.980469 8.886719 L 207.136719 42.039062 L 77.238281 171.9375 L 206.011719 300.714844 L 172.855469 333.867188" />
      </g>
    </svg>
  );
}
export function Circle({ fill }) {
  return (
    <svg
      fill={fill}
      width="100%"
      height="100%"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#E4E4E4" />
          <stop offset="100%" stop-color="#243A87" />
        </linearGradient>
      </defs>
      <g fill-rule="evenodd">
        <circle cx="100" cy="100" r="100" fill="url(#gradient)" />
      </g>
    </svg>
  );
}
export function Mask({ fill }) {
  return (
    <svg
      fill={fill}
      width="100%"
      height="100%"
      viewBox="-0.6 -3.7 146.1 121.8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="maskGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#E4E4E4" />
          <stop offset="100%" stop-color="#243A87" />
        </linearGradient>
      </defs>
      <path
        d="M47.7,50.39c14.13-28.64,60.16,32.61,74.64-0.79c23.1-53.3-21.66-52.9-72.21-46.92 C17.25,6.57,0.66,19.11,0.01,68.61S34.13,77.89,47.7,50.39z"
        fill="url(#maskGradient)"
      />
    </svg>
  );
}
