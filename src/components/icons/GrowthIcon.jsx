export function GrowthIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 18l6-6 4 4 6-8"
        stroke="url(#grad)"
        strokeWidth="1.5"
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
