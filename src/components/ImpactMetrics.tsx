import { useEffect, useRef, useState } from "react";
import "../styles/impactmetrics.css";

/* ── Count-up hook ── */
const useCountUp = (target: number, duration = 1800, active = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return value;
};

/* ── Scroll-reveal hook ── */
const useReveal = (delay = 0) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => { el.classList.add("is-visible"); setVisible(true); }, delay);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return { ref, visible };
};

/* ── Individual metric ── */
interface MetricProps {
  numericValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
  delay: number;
  isLast?: boolean;
}

const Metric = ({ numericValue, prefix = "", suffix = "", label, context, delay, isLast }: MetricProps) => {
  const { ref, visible } = useReveal(delay);
  const count = useCountUp(numericValue, 1600, visible);

  return (
    <div className={`nb-im__metric reveal ${isLast ? "nb-im__metric--last" : ""}`} ref={ref}>
      <div className="nb-im__metric-number">
        {prefix}
        <span className="nb-im__count">{count.toLocaleString()}</span>
        {suffix}
      </div>
      <div className="nb-im__metric-rule" />
      <div className="nb-im__metric-label">{label}</div>
      <div className="nb-im__metric-context">{context}</div>
    </div>
  );
};

const ImpactMetrics = () => {
  const { ref: headerRef } = useReveal(0);

  return (
    <section className="nb-im">

      {/* ── Left editorial column ── */}
      <div className="nb-im__left reveal" ref={headerRef}>

        {/* Field grid texture — pure CSS */}
        <div className="nb-im__texture" aria-hidden="true" />

        <div className="nb-im__left-inner">
          <span className="nb-im__eyebrow">
            <span className="nb-im__eyebrow-line" />
            Impact & Performance
          </span>

          <h2 className="nb-im__heading">
            Numbers<br />
            that<br />
            <em>matter.</em>
          </h2>

          <p className="nb-im__statement">
            We measure success in farmer incomes protected, produce delivered
            on time, and supply chains that hold even at season's edge.
          </p>

          <div className="nb-im__divider" />

          <p className="nb-im__footnote">
            Figures reflect cumulative network performance as of Q2 2025.
            Updated quarterly.
          </p>
        </div>
      </div>

      {/* ── Right metrics column ── */}
      <div className="nb-im__right">

        <Metric
          numericValue={500}
          suffix="+"
          label="Farmers Onboarded"
          context="Verified smallholder producers across 12 counties"
          delay={100}
        />

        <Metric
          numericValue={40}
          suffix="+"
          label="Institutional Buyers"
          context="Supermarkets, hotels, schools & restaurant chains"
          delay={200}
        />

        <Metric
          numericValue={25}
          label="Tons Delivered Monthly"
          context="Consolidated produce moved through our logistics network"
          delay={300}
        />

        <Metric
          numericValue={18}
          suffix="%"
          label="Post-Harvest Loss Reduction"
          context="Measured against pre-network baseline across partner farms"
          delay={400}
          isLast
        />

      </div>

    </section>
  );
};

export default ImpactMetrics;