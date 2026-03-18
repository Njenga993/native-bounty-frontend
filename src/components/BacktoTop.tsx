import { useState, useEffect, useCallback } from "react";
import "../styles/backtotop.css";

const BackToTop = () => {
  const [visible, setVisible]   = useState(false);
  const [progress, setProgress] = useState(0);

  const onScroll = useCallback(() => {
    const scrollY  = window.scrollY;
    const docH     = document.documentElement.scrollHeight - window.innerHeight;
    const pct      = docH > 0 ? (scrollY / docH) * 100 : 0;

    setProgress(Math.min(pct, 100));
    setVisible(scrollY > 300);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`btt ${visible ? "btt--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      {/* Amber scroll-progress bar along left edge */}
      <span
        className="btt__progress"
        style={{ height: `${progress}%` }}
        aria-hidden="true"
      />

      {/* Arrow icon */}
      <span className="btt__arrow" aria-hidden="true">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 12V2M2 7l5-5 5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* Label */}
      <span className="btt__label">Top</span>
    </button>
  );
};

export default BackToTop;