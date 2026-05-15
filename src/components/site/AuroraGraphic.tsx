export function AuroraGraphic() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="h-full w-full"
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <radialGradient id="core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F0F4FF" stopOpacity="1" />
          <stop offset="25%" stopColor="#A5B4FC" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#6366F1" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0B0F1A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ambient halo */}
      <circle cx="250" cy="250" r="230" fill="url(#halo)" className="aurora-halo" />

      {/* concentric rings */}
      <circle cx="250" cy="250" r="210" stroke="#A5B4FC" strokeOpacity="0.18" strokeDasharray="2 6" className="aurora-spin-slow" />
      <circle cx="250" cy="250" r="180" stroke="#A5B4FC" strokeOpacity="0.22" />
      <circle cx="250" cy="250" r="150" stroke="#A5B4FC" strokeOpacity="0.28" strokeDasharray="1 4" className="aurora-spin-med" />
      <circle cx="250" cy="250" r="110" stroke="#A5B4FC" strokeOpacity="0.35" />
      <circle cx="250" cy="250" r="70" stroke="#A5B4FC" strokeOpacity="0.45" />

      {/* tick marks around outer ring */}
      <g stroke="#A5B4FC" strokeOpacity="0.5" className="aurora-spin-slow">
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 24;
          const x1 = 250 + Math.cos(a) * 218;
          const y1 = 250 + Math.sin(a) * 218;
          const x2 = 250 + Math.cos(a) * 228;
          const y2 = 250 + Math.sin(a) * 228;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>

      {/* hexagram (two triangles) */}
      <g stroke="#6366F1" strokeOpacity="0.85" strokeWidth="1" className="aurora-spin-fast">
        <polygon points="250,90 389,330 111,330" />
        <polygon points="250,410 111,170 389,170" />
      </g>

      {/* inner hexagon */}
      <polygon
        points="250,170 319,210 319,290 250,330 181,290 181,210"
        stroke="#A5B4FC"
        strokeOpacity="0.7"
      />

      {/* vertex dots */}
      <g fill="#A5B4FC">
        <circle cx="250" cy="90" r="3" />
        <circle cx="389" cy="330" r="3" />
        <circle cx="111" cy="330" r="3" />
        <circle cx="250" cy="410" r="3" />
        <circle cx="111" cy="170" r="3" />
        <circle cx="389" cy="170" r="3" />
      </g>

      {/* glowing core */}
      <circle cx="250" cy="250" r="70" fill="url(#core)" />
      <circle cx="250" cy="250" r="6" fill="#F0F4FF" />

      {/* mono labels */}
      <g
        fill="#A5B4FC"
        fillOpacity="0.7"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="11"
        letterSpacing="2"
      >
        <text x="40" y="40">ZETUS · CORE</text>
        <text x="460" y="40" textAnchor="end">v1.0</text>
        <text x="40" y="475">LAT 18.5204°N</text>
        <text x="460" y="475" textAnchor="end">LON 73.8567°E</text>
      </g>
    </svg>
  );
}
