import { useEffect, useRef } from "react";
import "../styles/operations.css";
import { Sprout, ShieldCheck, PackageCheck, MessageCircle } from "lucide-react";

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
    icon: <Sprout size={32} strokeWidth={1.4} />,
    title: "Farmer Production",
    description:
      "Contracted farmers grow indigenous vegetables, fruits, herbs, and root crops using sustainable, organic methods on their own land.",
    detail: "Contracted farmer groups · Sustainable practices",
    dark: false,
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1.4} />,
    title: "Collection & Testing",
    description:
      "Produce is collected from farmers, inspected, and tested for chemical residues before it's cleared to move into a basket.",
    detail: "Residue testing · Quality inspection",
    dark: true,
  },
  {
    icon: <PackageCheck size={32} strokeWidth={1.4} />,
    title: "Packing & Delivery",
    description:
      "Cleared produce is packed into Household, Premium, or Institutional baskets and delivered on the customer's chosen schedule.",
    detail: "Weekly · Fortnightly · Monthly delivery",
    dark: false,
  },
  {
    icon: <MessageCircle size={32} strokeWidth={1.4} />,
    title: "Feedback & Improvement",
    description:
      "Customer feedback is collected after every delivery and used to continuously refine sourcing, packing, and service quality.",
    detail: "Continuous feedback loop",
    dark: true,
  },
];

const Operations = () => {
  const headerRef = useReveal(0);

  return (
    <section className="nb-ops">

      {/* ── Header ── */}
      <div className="nb-ops__intro reveal" ref={headerRef}>
        <span className="nb-ops__eyebrow">
          <span className="nb-ops__eyebrow-line" />
          Operations
        </span>
        <h2 className="nb-ops__heading">
          Four steps.<br />
          <em>Every basket accounted for.</em>
        </h2>
        <p className="nb-ops__lead">
          From the farmer's field to a checked, tested, and packed basket —
          quality is verified at every stage, and every delivery feeds back
          into how we improve.
        </p>
      </div>

      {/* ── Journey panels (desktop) ── */}
      <div className="nb-ops__track">
        {STEPS.map((step, i) => {
          const ref = useReveal(i * 100);
          const isLast = i === STEPS.length - 1;
          return (
            <div
              key={i}
              className={`nb-ops__panel ${step.dark ? "nb-ops__panel--dark" : "nb-ops__panel--light"} reveal`}
              ref={ref}
            >
              <span className="nb-ops__ghost">{String(i + 1).padStart(2, "0")}</span>

              <div className="nb-ops__panel-inner">
                <div className="nb-ops__step-label">
                  <span className="nb-ops__step-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="nb-ops__step-rule" />
                  <span className="nb-ops__step-of">of 04</span>
                </div>

                <div className={`nb-ops__icon-wrap ${step.dark ? "nb-ops__icon-wrap--light" : ""}`}>
                  {step.icon}
                </div>

                <h3 className={`nb-ops__title ${step.dark ? "nb-ops__title--light" : ""}`}>
                  {step.title}
                </h3>

                <p className={`nb-ops__desc ${step.dark ? "nb-ops__desc--light" : ""}`}>
                  {step.description}
                </p>

                <div className={`nb-ops__detail ${step.dark ? "nb-ops__detail--light" : ""}`}>
                  {step.detail.split(" · ").map((d, di) => (
                    <span key={di} className="nb-ops__detail-chip">{d}</span>
                  ))}
                </div>
              </div>

              {!isLast && (
                <div className={`nb-ops__connector ${step.dark ? "nb-ops__connector--from-dark" : "nb-ops__connector--from-light"}`}>
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
      <div className="nb-ops__timeline">
        {STEPS.map((step, i) => {
          const ref = useReveal(i * 100);
          return (
            <div key={i} className="nb-ops__tl-item reveal" ref={ref}>
              <div className="nb-ops__tl-left">
                <div className="nb-ops__tl-dot">
                  <div className={`nb-ops__tl-icon ${step.dark ? "nb-ops__tl-icon--dark" : ""}`}>
                    {step.icon}
                  </div>
                </div>
                {i < STEPS.length - 1 && <div className="nb-ops__tl-line" />}
              </div>
              <div className="nb-ops__tl-body">
                <span className="nb-ops__tl-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="nb-ops__tl-title">{step.title}</h3>
                <p className="nb-ops__tl-desc">{step.description}</p>
                <div className="nb-ops__detail">
                  {step.detail.split(" · ").map((d, di) => (
                    <span key={di} className="nb-ops__detail-chip nb-ops__detail-chip--sm">{d}</span>
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

export default Operations;