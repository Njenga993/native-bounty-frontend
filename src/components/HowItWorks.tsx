import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/how-it-works.css";
import {
  Sprout,
  PackageCheck,
  Boxes,
  Truck,
  Home,
  Wallet,
  TrendingUp,
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

const STEPS = [
  {
    icon: <Sprout size={28} strokeWidth={1.5} />,
    title: "Smallholder Farmers",
    description:
      "Contracted farmer groups grow indigenous vegetables, fruits, herbs, and root crops using sustainable, organic practices.",
    tag: "Step 01",
  },
  {
    icon: <PackageCheck size={28} strokeWidth={1.5} />,
    title: "Collection & Quality Control",
    description:
      "Native Bounty collects the harvest, inspecting and testing produce for chemical residues to guarantee safety and freshness.",
    tag: "Step 02",
  },
  {
    icon: <Boxes size={28} strokeWidth={1.5} />,
    title: "Sorting, Packing & Branding",
    description:
      "Produce is sorted, packed into Native Bounty baskets, and branded — ready for household, premium, or institutional delivery.",
    tag: "Step 03",
  },
  {
    icon: <Truck size={28} strokeWidth={1.5} />,
    title: "Weekly / Bi-Weekly Basket Delivery",
    description:
      "Baskets are delivered on a schedule that fits each customer — weekly, fortnightly, or monthly subscriptions.",
    tag: "Step 04",
  },
  {
    icon: <Home size={28} strokeWidth={1.5} />,
    title: "Households & Institutions",
    description:
      "Families, hospitals, schools, universities, hotels, restaurants, and corporate offices receive fresh, healthy produce directly.",
    tag: "Step 05",
  },
  {
    icon: <Wallet size={28} strokeWidth={1.5} />,
    title: "Subscription Payments",
    description:
      "Customers pay through simple, recurring subscription plans — creating predictable revenue for Native Bounty and its farmers.",
    tag: "Step 06",
  },
  {
    icon: <TrendingUp size={28} strokeWidth={1.5} />,
    title: "Reliable Markets, Stable Incomes",
    description:
      "The cycle closes with what matters most — dependable markets and stable, fair incomes for the farmers who grow our food.",
    tag: "Step 07",
  },
];

const HowItWorks = () => {
  const navigate = useNavigate();
  const headerRef = useReveal(0);

  return (
    <section className="nb-hiw">

      {/* ── Header ── */}
      <div className="nb-hiw__intro reveal" ref={headerRef}>
        <div className="nb-hiw__intro-inner">
          <span className="nb-hiw__eyebrow">
            <span className="nb-hiw__eyebrow-line" />
            How It Works
          </span>
          <h2 className="nb-hiw__heading">
            From the farm gate<br />
            <em>to your basket.</em>
          </h2>
          <p className="nb-hiw__lead">
            A simple, transparent model that puts fresh indigenous food on your
            table and fair, dependable income in farmers' hands.
          </p>
        </div>
      </div>

      {/* ── Step rows ── */}
      <div className="nb-hiw__list">
        {STEPS.map((step, i) => {
          const rowRef = useReveal(i * 80);
          return (
            <div key={i} className="nb-step-row reveal" ref={rowRef}>
              <span className="nb-step-row__ghost">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="nb-step-row__index">
                <span className="nb-step-row__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="nb-step-row__icon">{step.icon}</div>
              </div>

              <div className="nb-step-row__content">
                <h3 className="nb-step-row__title">{step.title}</h3>
                <p className="nb-step-row__desc">{step.description}</p>
              </div>

              <div className="nb-step-row__tag">{step.tag}</div>

              {i < STEPS.length - 1 && (
                <div className="nb-step-row__arrow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4v9M6 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── CTA Banner ── */}
      <div className="nb-hiw__cta">
        <div className="nb-hiw__cta-inner">
          <div className="nb-hiw__cta-text">
            <span className="nb-hiw__cta-eyebrow">Ready to get started?</span>
            <h3 className="nb-hiw__cta-heading">
              Subscribe to a basket, or grow with us as a farmer partner.
            </h3>
          </div>
          <div className="nb-hiw__cta-actions">
            <button
              className="nb-hiw__btn nb-hiw__btn--primary"
              onClick={() => navigate("/contact")}
            >
              Subscribe to a Basket
            </button>
            <button
              className="nb-hiw__btn nb-hiw__btn--ghost"
              onClick={() => navigate("/contact")}
            >
              Partner as a Farmer
            </button>
          </div>
        </div>
        <div className="nb-hiw__cta-bar" />
      </div>

    </section>
  );
};

export default HowItWorks;