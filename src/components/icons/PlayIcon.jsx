export function PlayIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 6l10 6-10 6V6z"
        stroke="url(#grad)"
        strokeWidth="1.6"
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
