interface PostArtProps {
  art: "chart" | "bars" | "coin" | "steps" | "wave" | "shield" | "grid";
  className?: string;
}

/** Code-drawn editorial artwork for article cards, in the site palette. */
export function PostArt({ art, className = "" }: PostArtProps) {
  const common = "h-full w-full";
  return (
    <div className={`overflow-hidden bg-paper2 ${className}`}>
      {art === "chart" && (
        <svg viewBox="0 0 400 300" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="300" fill="#eae3d1" />
          {[60, 120, 180, 240].map((y) => (
            <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#0e2a22" strokeOpacity="0.08" />
          ))}
          <path
            d="M0 250 L60 230 L120 240 L180 190 L240 200 L300 140 L360 110 L400 70"
            fill="none"
            stroke="#0e2a22"
            strokeWidth="3"
          />
          <path
            d="M0 250 L60 230 L120 240 L180 190 L240 200 L300 140 L360 110 L400 70 L400 300 L0 300 Z"
            fill="#c8f547"
            fillOpacity="0.35"
          />
          <circle cx="300" cy="140" r="6" fill="#0e2a22" />
          <circle cx="400" cy="70" r="6" fill="#c8f547" stroke="#0e2a22" strokeWidth="2" />
        </svg>
      )}
      {art === "bars" && (
        <svg viewBox="0 0 400 300" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="300" fill="#eae3d1" />
          {[90, 150, 200, 130, 240, 170].map((h, i) => (
            <rect
              key={i}
              x={40 + i * 58}
              y={280 - h}
              width="34"
              height={h}
              fill={i === 4 ? "#c8f547" : "#0e2a22"}
              stroke="#0e2a22"
              strokeWidth={i === 4 ? 2 : 0}
            />
          ))}
          <line x1="20" y1="280" x2="390" y2="280" stroke="#0e2a22" strokeWidth="2.5" />
        </svg>
      )}
      {art === "coin" && (
        <svg viewBox="0 0 400 300" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="300" fill="#eae3d1" />
          <circle cx="200" cy="150" r="95" fill="#c8f547" stroke="#0e2a22" strokeWidth="3" />
          <circle cx="200" cy="150" r="70" fill="none" stroke="#0e2a22" strokeWidth="2" strokeDasharray="4 6" />
          <text
            x="200"
            y="178"
            textAnchor="middle"
            fontFamily="Instrument Serif, Georgia, serif"
            fontSize="90"
            fill="#0e2a22"
          >
            $
          </text>
          <circle cx="310" cy="70" r="18" fill="#9be5b9" stroke="#0e2a22" strokeWidth="2" />
          <circle cx="85" cy="235" r="12" fill="#f3c13a" stroke="#0e2a22" strokeWidth="2" />
        </svg>
      )}
      {art === "steps" && (
        <svg viewBox="0 0 400 300" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="300" fill="#eae3d1" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={i}
              x={30 + i * 72}
              y={250 - i * 45}
              width="72"
              height={50 + i * 45}
              fill={i === 4 ? "#c8f547" : "none"}
              stroke="#0e2a22"
              strokeWidth="2.5"
            />
          ))}
          <path d="M330 40 l22 22 m0 -22 l-22 22" stroke="#0e2a22" strokeWidth="0" />
          <circle cx="366" cy="52" r="10" fill="#0e2a22" />
        </svg>
      )}
      {art === "wave" && (
        <svg viewBox="0 0 400 300" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="300" fill="#eae3d1" />
          {[0, 1, 2, 3].map((i) => (
            <path
              key={i}
              d={`M-20 ${90 + i * 45} C 80 ${50 + i * 45}, 140 ${130 + i * 45}, 220 ${90 + i * 45} S 360 ${50 + i * 45}, 420 ${90 + i * 45}`}
              fill="none"
              stroke={i === 1 ? "#c8f547" : "#0e2a22"}
              strokeWidth={i === 1 ? 5 : 2}
              strokeOpacity={i === 1 ? 1 : 0.55}
            />
          ))}
        </svg>
      )}
      {art === "grid" && (
        <svg viewBox="0 0 400 300" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="300" fill="#eae3d1" />
          {[0, 1, 2].map((r) =>
            [0, 1, 2, 3, 4].map((c) => (
              <rect
                key={`${r}-${c}`}
                x={32 + c * 70}
                y={52 + r * 70}
                width="54"
                height="54"
                fill={r === 1 && c === 2 ? "#c8f547" : "none"}
                stroke="#0e2a22"
                strokeWidth="2.5"
              />
            ))
          )}
          <circle cx={32 + 2 * 70 + 27} cy={52 + 1 * 70 + 27} r="10" fill="#0e2a22" />
        </svg>
      )}
      {art === "shield" && (
        <svg viewBox="0 0 400 300" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="300" fill="#eae3d1" />
          <path
            d="M200 45 L310 85 V160 C310 225 260 260 200 278 C140 260 90 225 90 160 V85 Z"
            fill="#9be5b9"
            stroke="#0e2a22"
            strokeWidth="3"
          />
          <path d="M155 160 l32 32 l62 -66" fill="none" stroke="#0e2a22" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}
