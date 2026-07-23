export function LoadingScreen() {
  return (
    <div className="loading-overlay" aria-live="polite">
      <div className="loading-core">
        <div className="loading-ring" />
        <div className="loading-ring ring-two" />
      </div>
    </div>
  );
}
