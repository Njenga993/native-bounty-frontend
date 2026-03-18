import { useState, useEffect } from "react";
import "../styles/pageloader.css";

interface PageLoaderProps {
  /** Minimum time (ms) to show the loader — default 1800 */
  minDuration?: number;
  /** Called when the loader finishes and is about to unmount */
  onDone?: () => void;
}

const PageLoader = ({ minDuration = 1800, onDone }: PageLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting]   = useState(false);
  const [mounted, setMounted]   = useState(true);

  useEffect(() => {
    /* ── Simulate a realistic loading curve ── */
    const steps: [number, number][] = [
      // [target%, delay-from-start ms]
      [15,  120],
      [35,  350],
      [58,  650],
      [75,  950],
      [88, 1200],
      [95, 1450],
      [100, minDuration],
    ];

    const timers: ReturnType<typeof setTimeout>[] = [];

    steps.forEach(([target, delay]) => {
      timers.push(
        setTimeout(() => setProgress(target), delay)
      );
    });

    /* ── After minDuration, begin the exit wipe ── */
    const exitTimer = setTimeout(() => {
      setExiting(true);

      /* ── After wipe animation, unmount completely ── */
      const unmountTimer = setTimeout(() => {
        setMounted(false);
        onDone?.();
      }, 700); // matches CSS transition duration

      timers.push(unmountTimer);
    }, minDuration + 80);

    timers.push(exitTimer);

    return () => timers.forEach(clearTimeout);
  }, [minDuration, onDone]);

  if (!mounted) return null;

  return (
    <div className={`pl ${exiting ? "pl--exit" : ""}`} role="status" aria-live="polite">

      {/* CSS grid texture */}
      <div className="pl__tex" aria-hidden="true" />

      {/* Amber left border */}
      <div className="pl__border" aria-hidden="true" />

      {/* Centre content */}
      <div className="pl__content">

        {/* Brand wordmark */}
        <div className="pl__wordmark" aria-label="Loading Native Bounty">
          <span className="pl__brand">Native Bounty</span>
          <span className="pl__sub">Farm · Market · Network</span>
        </div>

        {/* Animated wheat stalk divider */}
        <div className="pl__divider" aria-hidden="true">
          <span className="pl__divider-line" />
          <span className="pl__divider-dot" />
          <span className="pl__divider-line" />
        </div>

        {/* Loading label */}
        <span className="pl__status" aria-hidden="true">
          Loading
          <span className="pl__dots">
            <span>.</span><span>.</span><span>.</span>
          </span>
        </span>

      </div>

      {/* Progress bar — bottom edge */}
      <div className="pl__bar-track" aria-hidden="true">
        <div
          className="pl__bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress percentage — bottom right */}
      <span className="pl__pct" aria-hidden="true">
        {progress}<span>%</span>
      </span>

    </div>
  );
};

export default PageLoader;