export function AuroraGraphic() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full"
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="g2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0B0F1A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="160" fill="url(#g2)" />
      <circle cx="200" cy="200" r="120" stroke="#6366F1" strokeOpacity="0.35" />
      <circle cx="200" cy="200" r="80" stroke="#6366F1" strokeOpacity="0.5" />
      <circle cx="200" cy="200" r="40" stroke="#A5B4FC" strokeOpacity="0.6" />
      <path
        d="M40 220 Q 200 80 360 220"
        stroke="url(#g1)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M40 260 Q 200 120 360 260"
        stroke="url(#g1)"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <g fill="#A5B4FC">
        <circle cx="120" cy="140" r="2" />
        <circle cx="280" cy="120" r="1.5" />
        <circle cx="320" cy="260" r="2" />
        <circle cx="90" cy="290" r="1.5" />
        <circle cx="200" cy="60" r="2" />
      </g>
    </svg>
  );
}
