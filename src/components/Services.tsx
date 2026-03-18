import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/services.css";
import {
  Truck,
  PackageCheck,
  Network,
  ClipboardCheck,
  Building2,
} from "lucide-react";

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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
};

const SERVICES = [
  {
    icon: <PackageCheck size={28} strokeWidth={1.5} />,
    title: "Produce Aggregation",
    description:
      "We consolidate harvests from multiple farmers to ensure consistent volumes and reliable supply for bulk buyers, reducing individual farmer risk.",
    tag: "Core Service",
  },
  {
    icon: <Truck size={28} strokeWidth={1.5} />,
    title: "Farm-to-Market Logistics",
    description:
      "Coordinated transportation from farms to urban centers with scheduled pickups, route optimization, and timely delivery guarantees.",
    tag: "Logistics",
  },
  {
    icon: <Network size={28} strokeWidth={1.5} />,
    title: "Market Linkage",
    description:
      "Direct connections between farmers and retailers, reducing intermediary inefficiencies and improving pricing transparency across the chain.",
    tag: "Network",
  },
  {
    icon: <ClipboardCheck size={28} strokeWidth={1.5} />,
    title: "Quality Control & Sorting",
    description:
      "Standardized grading and packaging processes ensure consistent quality and presentation before dispatch to any market segment.",
    tag: "Standards",
  },
  {
    icon: <Building2 size={28} strokeWidth={1.5} />,
    title: "Institutional Bulk Supply",
    description:
      "Reliable, high-volume deliveries tailored for supermarkets, hotels, schools, and restaurants with dedicated account management.",
    tag: "Enterprise",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const headerRef = useReveal(0);

  return (
    <section className="nb-services">

      {/* ── Header ── */}
      <div className="nb-services__intro reveal" ref={headerRef}>
        <div className="nb-services__intro-inner">
          <span className="nb-services__eyebrow">
            <span className="nb-services__eyebrow-line" />
            What We Do
          </span>
          <h2 className="nb-services__heading">
            The infrastructure<br />
            <em>agriculture deserves.</em>
          </h2>
          <p className="nb-services__lead">
            From farm gate to market shelf — we handle every link in the chain
            so farmers focus on growing and buyers focus on buying.
          </p>
        </div>
      </div>

      {/* ── Service rows ── */}
      <div className="nb-services__list">
        {SERVICES.map((svc, i) => {
          const rowRef = useReveal(i * 80);
          return (
            <div key={i} className="nb-service-row reveal" ref={rowRef}>
              {/* Ghost number */}
              <span className="nb-service-row__ghost">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Number + icon */}
              <div className="nb-service-row__index">
                <span className="nb-service-row__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="nb-service-row__icon">{svc.icon}</div>
              </div>

              {/* Content */}
              <div className="nb-service-row__content">
                <h3 className="nb-service-row__title">{svc.title}</h3>
                <p className="nb-service-row__desc">{svc.description}</p>
              </div>

              {/* Tag */}
              <div className="nb-service-row__tag">{svc.tag}</div>

              {/* Arrow */}
              <div className="nb-service-row__arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── CTA Banner ── */}
      <div className="nb-services__cta">
        <div className="nb-services__cta-inner">
          <div className="nb-services__cta-text">
            <span className="nb-services__cta-eyebrow">Ready to connect?</span>
            <h3 className="nb-services__cta-heading">
              Join the Native Bounty network today.
            </h3>
          </div>
          <div className="nb-services__cta-actions">
            <button
              className="nb-services__btn nb-services__btn--primary"
              onClick={() => navigate("/contact")}
            >
              Partner as Farmer
            </button>
            <button
              className="nb-services__btn nb-services__btn--ghost"
              onClick={() => navigate("/contact")}
            >
              Request Supply
            </button>
          </div>
        </div>
        {/* decorative amber bar */}
        <div className="nb-services__cta-bar" />
      </div>

    </section>
  );
};

export default Services;