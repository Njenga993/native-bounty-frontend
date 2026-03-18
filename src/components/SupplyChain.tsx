import { useEffect, useRef } from "react";
import "../styles/supplychain.css";
import { UserPlus, PackageSearch, Truck, Store } from "lucide-react";

/* ── Scroll-reveal hook ── */
const useReveal = (delay = 0) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("is-visible"), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
};

const STEPS = [
  {
    icon: <UserPlus size={32} strokeWidth={1.4} />,
    title: "Farmer Onboarding",
    description:
      "We register farmers and verify available produce volumes to build a consistent, auditable supply base before market commitments are made.",
    detail: "KYF verification · Produce assessment · Seasonal planning",
    dark: false,
  },
  {
    icon: <PackageSearch size={32} strokeWidth={1.4} />,
    title: "Aggregation & Sorting",
    description:
      "Harvests are collected at designated aggregation points, graded by quality standard, and consolidated into market-ready volumes.",
    detail: "Grade A / B sorting · Packaging · Cold-chain staging",
    dark: true,
  },
  {
    icon: <Truck size={32} strokeWidth={1.4} />,
    title: "Logistics Coordination",
    description:
      "Route-optimised, scheduled transport moves consolidated produce from aggregation hubs to urban distribution nodes on time.",
    detail: "GPS tracking · Route optimisation · On-time SLA",
    dark: false,
  },
  {
    icon: <Store size={32} strokeWidth={1.4} />,
    title: "Delivery to Market",
    description:
      "Fresh produce lands directly with retailers, hotels, and institutional buyers — quality-checked and documented end to end.",
    detail: "Proof of delivery · Quality sign-off · Invoice reconciliation",
    dark: true,
  },
];

const SupplyChain = () => {
  const headerRef = useReveal(0);

  return (
    <section className="nb-sc">

      {/* ── Header ── */}
      <div className="nb-sc__intro reveal" ref={headerRef}>
        <span className="nb-sc__eyebrow">
          <span className="nb-sc__eyebrow-line" />
          The Process
        </span>
        <h2 className="nb-sc__heading">
          Four steps.<br />
          <em>Zero guesswork.</em>
        </h2>
        <p className="nb-sc__lead">
          Every kilogram of produce moves through a structured, transparent
          chain — from verified farm to confirmed delivery.
        </p>
      </div>

      {/* ── Journey panels ── */}
      <div className="nb-sc__track">
        {STEPS.map((step, i) => {
          const ref = useReveal(i * 100);
          const isLast = i === STEPS.length - 1;
          return (
            <div
              key={i}
              className={`nb-sc__panel ${step.dark ? "nb-sc__panel--dark" : "nb-sc__panel--light"} reveal`}
              ref={ref}
            >
              {/* Ghost step number */}
              <span className="nb-sc__ghost">{String(i + 1).padStart(2, "0")}</span>

              {/* Step content */}
              <div className="nb-sc__panel-inner">
                <div className="nb-sc__step-label">
                  <span className="nb-sc__step-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="nb-sc__step-rule" />
                  <span className="nb-sc__step-of">of 04</span>
                </div>

                <div className={`nb-sc__icon-wrap ${step.dark ? "nb-sc__icon-wrap--light" : ""}`}>
                  {step.icon}
                </div>

                <h3 className={`nb-sc__title ${step.dark ? "nb-sc__title--light" : ""}`}>
                  {step.title}
                </h3>

                <p className={`nb-sc__desc ${step.dark ? "nb-sc__desc--light" : ""}`}>
                  {step.description}
                </p>

                <div className={`nb-sc__detail ${step.dark ? "nb-sc__detail--light" : ""}`}>
                  {step.detail.split(" · ").map((d, di) => (
                    <span key={di} className="nb-sc__detail-chip">{d}</span>
                  ))}
                </div>
              </div>

              {/* Connector arrow between panels (not after last) */}
              {!isLast && (
                <div className={`nb-sc__connector ${step.dark ? "nb-sc__connector--from-dark" : "nb-sc__connector--from-light"}`}>
                  <svg viewBox="0 0 40 80" fill="none" preserveAspectRatio="none">
                    <polygon points="0,0 40,40 0,80" fill="currentColor" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Mobile vertical timeline ── */}
      <div className="nb-sc__timeline">
        {STEPS.map((step, i) => {
          const ref = useReveal(i * 100);
          return (
            <div key={i} className="nb-sc__tl-item reveal" ref={ref}>
              <div className="nb-sc__tl-left">
                <div className="nb-sc__tl-dot">
                  <div className={`nb-sc__tl-icon ${step.dark ? "nb-sc__tl-icon--dark" : ""}`}>
                    {step.icon}
                  </div>
                </div>
                {i < STEPS.length - 1 && <div className="nb-sc__tl-line" />}
              </div>
              <div className="nb-sc__tl-body">
                <span className="nb-sc__tl-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="nb-sc__tl-title">{step.title}</h3>
                <p className="nb-sc__tl-desc">{step.description}</p>
                <div className="nb-sc__detail">
                  {step.detail.split(" · ").map((d, di) => (
                    <span key={di} className="nb-sc__detail-chip nb-sc__detail-chip--sm">{d}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default SupplyChain;