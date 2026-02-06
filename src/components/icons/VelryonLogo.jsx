export default function VelryonLogo({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 10L32 32L8 54"
        stroke="url(#grad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56 10L32 32L56 54"
        stroke="url(#grad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#1F7CFF" />
          <stop offset="1" stopColor="#E94FFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
