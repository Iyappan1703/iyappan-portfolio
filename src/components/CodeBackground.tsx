import { FaCode, FaMicrochip, FaRocket } from 'react-icons/fa';

export function CodeBackground() {
  const snippets = [
    { text: 'class', left: '8%', top: '16%' },
    { text: 'const', right: '10%', top: '24%' },
    { text: 'async', left: '14%', bottom: '22%' },
    { text: 'loop', right: '18%', bottom: '16%' },
    { text: '0x7f', left: '64%', top: '14%' },
    { text: 'printf', left: '24%', top: '38%' },
    { text: 'root', right: '22%', top: '44%' },
    { text: 'init', left: '58%', bottom: '28%' },
  ];

  const streams = [
    { className: 'code-stream stream-a', style: { left: '6%', top: '8%' } },
    { className: 'code-stream stream-b', style: { right: '8%', top: '32%' } },
    { className: 'code-stream stream-c', style: { left: '18%', bottom: '12%' } },
  ];

  return (
    <div className="code-layer" aria-hidden="true">
      {streams.map((stream, index) => (
        <div key={`${stream.className}-${index}`} className={stream.className} style={stream.style} />
      ))}
      {snippets.map((snippet, index) => (
        <div key={`${snippet.text}-${index}`} className="code-snippet" style={snippet}>
          {snippet.text}
        </div>
      ))}
      <div className="floating-icon" style={{ left: '10%', top: '46%' }}><FaCode /></div>
      <div className="floating-icon" style={{ right: '12%', top: '48%' }}><FaMicrochip /></div>
      <div className="floating-icon" style={{ left: '22%', bottom: '16%' }}><FaRocket /></div>
    </div>
  );
}
