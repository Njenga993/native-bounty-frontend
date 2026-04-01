import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import SEO from "../components/SEO";
import "../styles/servicespage.css";
import {
  Truck,
  PackageCheck,
  Network,
  ClipboardCheck,
  Building2,
  TrendingUp,
  Clock,
  Shield,
  Users,
  BarChart,
  MapPin,
} from "lucide-react";

/* ── Scroll-reveal — generic so it works on any HTML element ── */
const useReveal = <T extends HTMLElement = HTMLDivElement>(delay = 0) => {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("is-visible"), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
};

/* ── Data ── */
const SERVICES = [
  {
    icon: <PackageCheck size={26} strokeWidth={1.4} />,
    title: "Produce Aggregation",
    tag: "Core Service",
    description:
      "We consolidate harvests from multiple farmers to ensure consistent volumes and reliable supply for bulk buyers.",
    features: [
      "Quality assessment at collection points",
      "Standardized packaging & labeling",
      "Temperature-controlled storage",
      "Real-time inventory tracking",
    ],
  },
  {
    icon: <Truck size={26} strokeWidth={1.4} />,
    title: "Farm-to-Market Logistics",
    tag: "Logistics",
    description:
      "Coordinated transportation from farms to urban centers with scheduled pickups and timely delivery.",
    features: [
      "Optimised route planning",
      "GPS-enabled fleet tracking",
      "Temperature-controlled transport",
      "Flexible scheduling options",
    ],
  },
  {
    icon: <Network size={26} strokeWidth={1.4} />,
    title: "Market Linkage",
    tag: "Network",
    description:
      "Direct connections between farmers and retailers, reducing inefficiencies and improving pricing transparency.",
    features: [
      "Digital marketplace platform",
      "Price transparency tools",
      "Direct buyer-seller negotiations",
      "Market trend analytics",
    ],
  },
  {
    icon: <ClipboardCheck size={26} strokeWidth={1.4} />,
    title: "Quality Control & Sorting",
    tag: "Standards",
    description:
      "Standardized grading and packaging processes to ensure consistent quality before dispatch.",
    features: [
      "Industry-standard grading system",
      "Automated sorting technology",
      "Quality certification process",
      "Traceability documentation",
    ],
  },
  {
    icon: <Building2 size={26} strokeWidth={1.4} />,
    title: "Institutional Bulk Supply",
    tag: "Enterprise",
    description:
      "Reliable bulk deliveries tailored for supermarkets, hotels, schools, and restaurants.",
    features: [
      "Customized supply contracts",
      "Consistent delivery schedules",
      "Volume-based pricing",
      "Dedicated account management",
    ],
  },
];

const PROCESS = [
  {
    title: "Registration & Onboarding",
    desc: "Farmers and buyers register on our platform with complete verification and farm location details.",
  },
  {
    title: "Harvest Planning",
    desc: "We work with farmers to plan harvest schedules aligned to confirmed market demand.",
  },
  {
    title: "Collection & Aggregation",
    desc: "Produce is collected from farms and consolidated at our designated collection centres.",
  },
  {
    title: "Quality Assurance",
    desc: "All produce undergoes standardised quality checks and grading before it moves.",
  },
  {
    title: "Logistics & Distribution",
    desc: "Optimised, GPS-tracked transportation ensures timely delivery to buyers.",
  },
  {
    title: "Payment & Feedback",
    desc: "Transparent payment within 48 hours. Feedback loops drive continuous improvement.",
  },
];

const BENEFITS = [
  {
    icon: <TrendingUp size={24} strokeWidth={1.4} />,
    title: "25–40% Income Increase",
    desc: "Farmers typically see significant income growth through better, wider market access.",
  },
  {
    icon: <Clock size={24} strokeWidth={1.4} />,
    title: "70% Less Logistics Time",
    desc: "Reduce time spent on logistics and focus energy where it matters — on the farm.",
  },
  {
    icon: <Shield size={24} strokeWidth={1.4} />,
    title: "Risk Mitigation",
    desc: "Minimise post-harvest losses and shield against market price fluctuations.",
  },
  {
    icon: <Users size={24} strokeWidth={1.4} />,
    title: "Verified Buyer Access",
    desc: "Connect with verified buyers across multiple regions without intermediaries.",
  },
  {
    icon: <BarChart size={24} strokeWidth={1.4} />,
    title: "Data & Insights",
    desc: "Access market trends and pricing data to make informed, profitable decisions.",
  },
  {
    icon: <MapPin size={24} strokeWidth={1.4} />,
    title: "Expanded Market Reach",
    desc: "Sell beyond your local area without any of the logistical overhead.",
  },
];

const FAQ_DATA = [
  {
    q: "How do I register as a farmer?",
    a: "Register through our online portal or visit a collection centre. You'll need identification, farm location details, and typical crop and harvest volume information.",
  },
  {
    q: "What are the quality standards for produce?",
    a: "We follow industry-standard grading based on size, appearance, ripeness, and absence of defects. Our quality team provides guidelines and training.",
  },
  {
    q: "How and when do I receive payment?",
    a: "Payments are processed within 48 hours of buyer delivery via bank transfer, M-Pesa, or direct deposit. All transactions are transparent and documented.",
  },
  {
    q: "What regions do you currently serve?",
    a: "We currently operate across 12 counties in Kenya with ongoing expansion. Contact our team to confirm service availability in your area.",
  },
  {
    q: "Is there a minimum quantity requirement?",
    a: "We work with farms of all sizes. For smaller farms, we aggregate produce from multiple farmers to meet minimum buyer requirements.",
  },
];

const ServicesPage = () => {
  const [openService, setOpenService] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ── Section reveals (divs → default HTMLDivElement) ── */
  const r1 = useReveal(0);
  const r2 = useReveal(0);
  const r3 = useReveal(0);
  const r4 = useReveal(0);

  /* ── Process step reveals — typed HTMLLIElement to match <li> ── */
  const pr0 = useReveal<HTMLLIElement>(0 * 80);
  const pr1 = useReveal<HTMLLIElement>(1 * 80);
  const pr2 = useReveal<HTMLLIElement>(2 * 80);
  const pr3 = useReveal<HTMLLIElement>(3 * 80);
  const pr4 = useReveal<HTMLLIElement>(4 * 80);
  const pr5 = useReveal<HTMLLIElement>(5 * 80);
  const processRefs = [pr0, pr1, pr2, pr3, pr4, pr5];

  /* ── Benefit card reveals (divs) ── */
  const br0 = useReveal(0 * 70);
  const br1 = useReveal(1 * 70);
  const br2 = useReveal(2 * 70);
  const br3 = useReveal(3 * 70);
  const br4 = useReveal(4 * 70);
  const br5 = useReveal(5 * 70);
  const benefitRefs = [br0, br1, br2, br3, br4, br5];

  /* ── FAQ row reveals (divs) ── */
  const fr0 = useReveal(0 * 60);
  const fr1 = useReveal(1 * 60);
  const fr2 = useReveal(2 * 60);
  const fr3 = useReveal(3 * 60);
  const fr4 = useReveal(4 * 60);
  const faqRefs = [fr0, fr1, fr2, fr3, fr4];

  return (
    <>
      {/* ✅ SEO: hoisted into <head> via react-helmet-async */}
      <SEO page="services" />

      <div className="nb-sp">
        {/* ══ HERO ══ */}
        <div className="nb-sp__hero">
          <div className="nb-sp__hero-texture" aria-hidden="true" />
          <div className="nb-sp__hero-inner">
            <nav className="nb-sp__breadcrumb" aria-label="Breadcrumb">
              <NavLink
                to="/native-bounty-frontend"
                className="nb-sp__bread-link"
              >
                Home
              </NavLink>
              <span className="nb-sp__bread-sep" aria-hidden="true">
                /
              </span>
              <span className="nb-sp__bread-current" aria-current="page">
                Services
              </span>
            </nav>
            <h1 className="nb-sp__hero-h">
              What we
              <br />
              <em>do best.</em>
            </h1>
            <p className="nb-sp__hero-sub">
              Five core services. One mission — connecting every kilogram of
              organic produce from the farm gate to the right buyer, on time.
            </p>
          </div>
          <div className="nb-sp__hero-edge" aria-hidden="true" />
        </div>

        {/* ══ SERVICE ROWS ══ */}
        <section
          className="nb-sp__services"
          aria-label="Native Bounty core services"
        >
          <div className="nb-sp__services-inner">
            <div className="nb-sp__services-header reveal" ref={r1}>
              <span className="nb-sp__eyebrow">
                <span className="nb-sp__ey-line" aria-hidden="true" />
                Our Services
              </span>
              <h2 className="nb-sp__section-h">
                The infrastructure
                <br />
                <em>agriculture deserves.</em>
              </h2>
            </div>

            <div className="nb-sp__rows">
              {SERVICES.map((svc, i) => {
                const panelId = `svc-panel-${i}`;
                return (
                  <div
                    key={svc.title}
                    className={`nb-sp__row ${openService === i ? "nb-sp__row--open" : ""}`}
                  >
                    <span className="nb-sp__row-ghost" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <button
                      className="nb-sp__row-bar"
                      onClick={() =>
                        setOpenService(openService === i ? null : i)
                      }
                      aria-expanded={openService === i}
                      aria-controls={panelId}
                    >
                      <div className="nb-sp__row-index">
                        <span className="nb-sp__row-num">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="nb-sp__row-icon" aria-hidden="true">
                          {svc.icon}
                        </div>
                      </div>
                      <div className="nb-sp__row-main">
                        <span className="nb-sp__row-title">{svc.title}</span>
                        <span className="nb-sp__row-desc-short">
                          {svc.description}
                        </span>
                      </div>
                      <div className="nb-sp__row-tag">{svc.tag}</div>
                      <div className="nb-sp__row-toggle" aria-hidden="true">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="nb-sp__row-chev"
                        >
                          <path
                            d="M2 5l5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>

                    <div
                      id={panelId}
                      className="nb-sp__row-detail"
                      role="region"
                      aria-label={svc.title}
                    >
                      <div className="nb-sp__row-detail-inner">
                        <ul
                          className="nb-sp__features"
                          aria-label={`${svc.title} features`}
                        >
                          {svc.features.map((f) => (
                            <li key={f}>
                              <span
                                className="nb-sp__feat-dot"
                                aria-hidden="true"
                              />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <NavLink
                          to="/contact"
                          className="nb-sp__row-cta"
                          aria-label={`Enquire about ${svc.title}`}
                        >
                          Enquire about this service
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 20 20"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M4 10h12M11 5l5 5-5 5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ PROCESS ══ */}
        <section
          className="nb-sp__process"
          aria-label="How Native Bounty works"
        >
          <div className="nb-sp__process-inner">
            <div className="nb-sp__process-header reveal" ref={r2}>
              <span className="nb-sp__eyebrow nb-sp__eyebrow--lt">
                <span className="nb-sp__ey-line" aria-hidden="true" />
                The Process
              </span>
              <h2 className="nb-sp__section-h nb-sp__section-h--lt">
                Six steps.
                <br />
                <em>Zero confusion.</em>
              </h2>
              <p className="nb-sp__process-lead">
                Every partner goes through the same clear, documented process —
                from first contact to final delivery.
              </p>
            </div>

            {/* ✅ SEO: <ol> is semantically correct for an ordered process */}
            <ol
              className="nb-sp__process-list"
              aria-label="Native Bounty onboarding process"
            >
              {PROCESS.map((step, i) => (
                <li
                  key={step.title}
                  className="nb-sp__step reveal"
                  ref={processRefs[i]}
                >
                  <div className="nb-sp__step-left">
                    <div className="nb-sp__step-num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {i < PROCESS.length - 1 && (
                      <div className="nb-sp__step-line" aria-hidden="true" />
                    )}
                  </div>
                  <div className="nb-sp__step-body">
                    <h3 className="nb-sp__step-title">{step.title}</h3>
                    <p className="nb-sp__step-desc">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ══ BENEFITS ══ */}
        <section
          className="nb-sp__benefits"
          aria-label="Benefits of joining Native Bounty"
        >
          <div className="nb-sp__benefits-inner">
            <div className="nb-sp__benefits-header reveal" ref={r3}>
              <span className="nb-sp__eyebrow">
                <span className="nb-sp__ey-line" aria-hidden="true" />
                Why Native Bounty
              </span>
              <h2 className="nb-sp__section-h">
                What you
                <br />
                <em>gain.</em>
              </h2>
            </div>

            <div className="nb-sp__benefits-grid">
              {BENEFITS.map((b, i) => (
                <div
                  key={b.title}
                  className="nb-sp__benefit reveal"
                  ref={benefitRefs[i]}
                >
                  <div className="nb-sp__benefit-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="nb-sp__benefit-icon" aria-hidden="true">
                    {b.icon}
                  </div>
                  <h3 className="nb-sp__benefit-title">{b.title}</h3>
                  <p className="nb-sp__benefit-desc">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CASE STUDIES ══ */}
        <section
          className="nb-sp__cases"
          aria-label="Native Bounty success stories"
        >
          <div className="nb-sp__cases-inner">
            <div className="nb-sp__cases-header reveal">
              <span className="nb-sp__eyebrow">
                <span className="nb-sp__ey-line" aria-hidden="true" />
                Success Stories
              </span>
              <h2 className="nb-sp__section-h">
                Real results.
                <br />
                <em>Real people.</em>
              </h2>
            </div>

            {/* Case 1 */}
            <article
              className="nb-sp__case"
              aria-label="Case study: Maria W., Smallholder Farmer"
            >
              <div className="nb-sp__case-dark">
                <span className="nb-sp__case-ghost" aria-hidden="true">
                  01
                </span>
                <div className="nb-sp__case-dark-inner">
                  <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80"
                    alt="Kenyan farmland at sunrise — smallholder vegetable farm in Nakuru"
                    className="nb-sp__case-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <dl
                    className="nb-sp__case-metrics"
                    aria-label="Maria's results with Native Bounty"
                  >
                    {[
                      ["40%", "Income increase"],
                      ["3×", "Market reach"],
                      ["70%", "Time saved"],
                    ].map(([v, l]) => (
                      <div key={l} className="nb-sp__case-metric">
                        <dd className="nb-sp__case-metric-val">
                          <strong>{v}</strong>
                        </dd>
                        <dt className="nb-sp__case-metric-label">{l}</dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="nb-sp__case-light">
                <span className="nb-sp__case-eyebrow">Smallholder Farmer</span>
                <h3 className="nb-sp__case-title">
                  Small Farm,
                  <br />
                  <em>Big Impact.</em>
                </h3>
                <blockquote className="nb-sp__case-quote">
                  "Before Native Bounty, I struggled to sell my produce beyond
                  the local market. Now I supply to three major supermarkets and
                  my income has increased by 40%."
                </blockquote>
                <cite className="nb-sp__case-name">
                  Maria W. — Vegetable Farm, Nakuru
                </cite>
              </div>
            </article>

            {/* Case 2 */}
            <article
              className="nb-sp__case nb-sp__case--flip"
              aria-label="Case study: FreshMart Supermarkets, Institutional Buyer"
            >
              <div className="nb-sp__case-light">
                <span className="nb-sp__case-eyebrow">Institutional Buyer</span>
                <h3 className="nb-sp__case-title">
                  Reliable Supply.
                  <br />
                  <em>Zero Disruption.</em>
                </h3>
                <blockquote className="nb-sp__case-quote">
                  "Native Bounty has transformed our produce sourcing. We now
                  have consistent quality and supply, reducing stockouts by 90%
                  and improving customer satisfaction."
                </blockquote>
                <cite className="nb-sp__case-name">
                  FreshMart Supermarkets — Nairobi
                </cite>
              </div>
              <div className="nb-sp__case-dark">
                <span className="nb-sp__case-ghost" aria-hidden="true">
                  02
                </span>
                <div className="nb-sp__case-dark-inner">
                  <img
                    src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=700&q=80"
                    alt="Fresh organic produce market stall — vegetables sourced from Kenyan farms"
                    className="nb-sp__case-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <dl
                    className="nb-sp__case-metrics"
                    aria-label="FreshMart results with Native Bounty"
                  >
                    {[
                      ["90%", "Fewer stockouts"],
                      ["25%", "Cost reduction"],
                      ["30%", "Waste reduction"],
                    ].map(([v, l]) => (
                      <div key={l} className="nb-sp__case-metric">
                        <dd className="nb-sp__case-metric-val">
                          <strong>{v}</strong>
                        </dd>
                        <dt className="nb-sp__case-metric-label">{l}</dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section className="nb-sp__faq" aria-label="Frequently asked questions">
          <div className="nb-sp__faq-inner">
            <div className="nb-sp__faq-header reveal" ref={r4}>
              <span className="nb-sp__eyebrow">
                <span className="nb-sp__ey-line" aria-hidden="true" />
                Common Questions
              </span>
              <h2 className="nb-sp__faq-h">
                Frequently asked
                <br />
                <em>questions.</em>
              </h2>
            </div>

            <div className="nb-sp__faq-list">
              {FAQ_DATA.map((faq, i) => {
                const answerId = `faq-answer-${i}`;
                return (
                  <div
                    key={faq.q}
                    className={`nb-sp__faq-item reveal ${openFaq === i ? "nb-sp__faq-item--open" : ""}`}
                    ref={faqRefs[i]}
                  >
                    <button
                      className="nb-sp__faq-q"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                      aria-controls={answerId}
                    >
                      <span className="nb-sp__faq-num" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="nb-sp__faq-text">{faq.q}</span>
                      <span className="nb-sp__faq-tog" aria-hidden="true">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="nb-sp__faq-chev"
                        >
                          <path
                            d="M2 5l5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      id={answerId}
                      className="nb-sp__faq-a"
                      role="region"
                      aria-label={faq.q}
                    >
                      <p>{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ CTA BANNER ══ */}
        <div className="nb-sp__cta">
          <div className="nb-sp__cta-bar" aria-hidden="true" />
          <div className="nb-sp__cta-inner">
            <div>
              <span className="nb-sp__cta-eyebrow">Ready to connect?</span>
              <h2 className="nb-sp__cta-h">
                Join the Native Bounty network today.
              </h2>
            </div>
            <div className="nb-sp__cta-actions">
              <NavLink
                to="/contact"
                className="nb-sp__cta-btn nb-sp__cta-btn--primary"
                aria-label="Partner with Native Bounty as a farmer"
              >
                Partner as Farmer
              </NavLink>
              <NavLink
                to="/contact"
                className="nb-sp__cta-btn nb-sp__cta-btn--ghost"
                aria-label="Request produce supply from Native Bounty"
              >
                Request Supply
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
