export function SofaSketch() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-auto" fill="none" stroke="#2a2a2a" strokeWidth="1.5">
      <rect x="40" y="50" width="200" height="60" />
      <rect x="35" y="45" width="10" height="70" />
      <rect x="235" y="45" width="10" height="70" />
      <line x1="40" y1="110" x2="240" y2="110" />
      <rect x="90" y="40" width="100" height="15" />
      <line x1="110" y1="50" x2="110" y2="110" strokeDasharray="4 4" />
      <line x1="170" y1="50" x2="170" y2="110" strokeDasharray="4 4" />
    </svg>
  );
}
