export function AuroraBackground() {
  const glows = [
    { className: 'aurora-orb orb-a', style: {} },
    { className: 'aurora-orb orb-b', style: {} },
    { className: 'aurora-orb orb-c', style: {} },
    { className: 'aurora-orb orb-d', style: {} },
    { className: 'aurora-orb orb-e', style: {} },
  ];

  const snippets = [
    { text: '0x7f', left: '12%', top: '14%' },
    { text: '101010', left: '76%', top: '20%' },
    { text: 'neon', left: '18%', top: '72%' },
    { text: 'sync', left: '82%', top: '70%' },
  ];

  return (
    <div className="aurora-layer" aria-hidden="true">
      {glows.map((glow, index) => (
        <div key={`${glow.className}-${index}`} className={glow.className} />
      ))}
      <div className="grid-overlay" />
      <div className="scan-beam scan-beam-a" />
      <div className="scan-beam scan-beam-b" />
      <div className="ambient-shine" />
      {snippets.map((snippet, index) => (
        <div key={`${snippet.text}-${index}`} className="hex-snippet" style={{ left: snippet.left, top: snippet.top }}>
          {snippet.text}
        </div>
      ))}
    </div>
  );
}
