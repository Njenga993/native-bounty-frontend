import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/servicespage.css";
import {
  Truck, PackageCheck, Network, ClipboardCheck, Building2,
  TrendingUp, Clock, Shield, Users, BarChart, MapPin,
} from "lucide-react";

/* ── Scroll-reveal ── */
const useReveal = (delay = 0) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => el.classList.add("is-visible"), delay); obs.disconnect(); } },
      { threshold: 0.08 }
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
    description: "We consolidate harvests from multiple farmers to ensure consistent volumes and reliable supply for bulk buyers.",
    features: ["Quality assessment at collection points", "Standardized packaging & labeling", "Temperature-controlled storage", "Real-time inventory tracking"],
  },
  {
    icon: <Truck size={26} strokeWidth={1.4} />,
    title: "Farm-to-Market Logistics",
    tag: "Logistics",
    description: "Coordinated transportation from farms to urban centers with scheduled pickups and timely delivery.",
    features: ["Optimised route planning", "GPS-enabled fleet tracking", "Temperature-controlled transport", "Flexible scheduling options"],
  },
  {
    icon: <Network size={26} strokeWidth={1.4} />,
    title: "Market Linkage",
    tag: "Network",
    description: "Direct connections between farmers and retailers, reducing inefficiencies and improving pricing transparency.",
    features: ["Digital marketplace platform", "Price transparency tools", "Direct buyer-seller negotiations", "Market trend analytics"],
  },
  {
    icon: <ClipboardCheck size={26} strokeWidth={1.4} />,
    title: "Quality Control & Sorting",
    tag: "Standards",
    description: "Standardized grading and packaging processes to ensure consistent quality before dispatch.",
    features: ["Industry-standard grading system", "Automated sorting technology", "Quality certification process", "Traceability documentation"],
  },
  {
    icon: <Building2 size={26} strokeWidth={1.4} />,
    title: "Institutional Bulk Supply",
    tag: "Enterprise",
    description: "Reliable bulk deliveries tailored for supermarkets, hotels, schools, and restaurants.",
    features: ["Customized supply contracts", "Consistent delivery schedules", "Volume-based pricing", "Dedicated account management"],
  },
];

const PROCESS = [
  { title: "Registration & Onboarding", desc: "Farmers and buyers register on our platform with complete verification and farm location details." },
  { title: "Harvest Planning", desc: "We work with farmers to plan harvest schedules aligned to confirmed market demand." },
  { title: "Collection & Aggregation", desc: "Produce is collected from farms and consolidated at our designated collection centres." },
  { title: "Quality Assurance", desc: "All produce undergoes standardised quality checks and grading before it moves." },
  { title: "Logistics & Distribution", desc: "Optimised, GPS-tracked transportation ensures timely delivery to buyers." },
  { title: "Payment & Feedback", desc: "Transparent payment within 48 hours. Feedback loops drive continuous improvement." },
];

const BENEFITS = [
  { icon: <TrendingUp size={24} strokeWidth={1.4} />, title: "25–40% Income Increase", desc: "Farmers typically see significant income growth through better, wider market access." },
  { icon: <Clock size={24} strokeWidth={1.4} />, title: "70% Less Logistics Time", desc: "Reduce time spent on logistics and focus energy where it matters — on the farm." },
  { icon: <Shield size={24} strokeWidth={1.4} />, title: "Risk Mitigation", desc: "Minimise post-harvest losses and shield against market price fluctuations." },
  { icon: <Users size={24} strokeWidth={1.4} />, title: "Verified Buyer Access", desc: "Connect with verified buyers across multiple regions without intermediaries." },
  { icon: <BarChart size={24} strokeWidth={1.4} />, title: "Data & Insights", desc: "Access market trends and pricing data to make informed, profitable decisions." },
  { icon: <MapPin size={24} strokeWidth={1.4} />, title: "Expanded Market Reach", desc: "Sell beyond your local area without any of the logistical overhead." },
];

const FAQ_DATA = [
  { q: "How do I register as a farmer?", a: "Register through our online portal or visit a collection centre. You'll need identification, farm location details, and typical crop and harvest volume information." },
  { q: "What are the quality standards for produce?", a: "We follow industry-standard grading based on size, appearance, ripeness, and absence of defects. Our quality team provides guidelines and training." },
  { q: "How and when do I receive payment?", a: "Payments are processed within 48 hours of buyer delivery via bank transfer, M-Pesa, or direct deposit. All transactions are transparent and documented." },
  { q: "What regions do you currently serve?", a: "We currently operate across 12 counties in Kenya with ongoing expansion. Contact our team to confirm service availability in your area." },
  { q: "Is there a minimum quantity requirement?", a: "We work with farms of all sizes. For smaller farms, we aggregate produce from multiple farmers to meet minimum buyer requirements." },
];

const ServicesPage = () => {
  const [openService, setOpenService] = useState<number | null>(null);
  const [openFaq, setOpenFaq]         = useState<number | null>(null);

  const r1 = useReveal(0);
  const r2 = useReveal(0);
  const r3 = useReveal(0);
  const r4 = useReveal(0);

  return (
    <div className="nb-sp">

      {/* ══ HERO ══ */}
      <div className="nb-sp__hero">
        <div className="nb-sp__hero-texture" aria-hidden />
        <div className="nb-sp__hero::before" aria-hidden />
        <div className="nb-sp__hero-inner">
          <nav className="nb-sp__breadcrumb">
            <NavLink to="/native-bounty-frontend" className="nb-sp__bread-link">Home</NavLink>
            <span className="nb-sp__bread-sep">/</span>
            <span className="nb-sp__bread-current">Services</span>
          </nav>
          <h1 className="nb-sp__hero-h">
            What we<br /><em>do best.</em>
          </h1>
          <p className="nb-sp__hero-sub">
            Five core services. One mission — connecting every kilogram of organic
            produce from the farm gate to the right buyer, on time.
          </p>
        </div>
        <div className="nb-sp__hero-edge" />
      </div>

      {/* ══ SERVICE ROWS ══ */}
      <div className="nb-sp__services">
        <div className="nb-sp__services-inner">

          <div className="nb-sp__services-header reveal" ref={r1}>
            <span className="nb-sp__eyebrow"><span className="nb-sp__ey-line" />Our Services</span>
            <h2 className="nb-sp__section-h">The infrastructure<br /><em>agriculture deserves.</em></h2>
          </div>

          <div className="nb-sp__rows">
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className={`nb-sp__row ${openService === i ? "nb-sp__row--open" : ""}`}
              >
                {/* Ghost number */}
                <span className="nb-sp__row-ghost">{String(i + 1).padStart(2, "0")}</span>

                {/* Header bar — always visible, clickable */}
                <button
                  className="nb-sp__row-bar"
                  onClick={() => setOpenService(openService === i ? null : i)}
                  aria-expanded={openService === i}
                >
                  <div className="nb-sp__row-index">
                    <span className="nb-sp__row-num">{String(i + 1).padStart(2, "0")}</span>
                    <div className="nb-sp__row-icon">{svc.icon}</div>
                  </div>
                  <div className="nb-sp__row-main">
                    <span className="nb-sp__row-title">{svc.title}</span>
                    <span className="nb-sp__row-desc-short">{svc.description}</span>
                  </div>
                  <div className="nb-sp__row-tag">{svc.tag}</div>
                  <div className="nb-sp__row-toggle">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="nb-sp__row-chev">
                      <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>

                {/* Expanded detail panel */}
                <div className="nb-sp__row-detail">
                  <div className="nb-sp__row-detail-inner">
                    <ul className="nb-sp__features">
                      {svc.features.map((f, fi) => (
                        <li key={fi}>
                          <span className="nb-sp__feat-dot" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <NavLink to="/contact" className="nb-sp__row-cta">
                      Enquire about this service
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ PROCESS ══ */}
      <div className="nb-sp__process">
        <div className="nb-sp__process-inner">

          <div className="nb-sp__process-header reveal" ref={r2}>
            <span className="nb-sp__eyebrow nb-sp__eyebrow--lt"><span className="nb-sp__ey-line" />The Process</span>
            <h2 className="nb-sp__section-h nb-sp__section-h--lt">Six steps.<br /><em>Zero confusion.</em></h2>
            <p className="nb-sp__process-lead">Every partner goes through the same clear, documented process — from first contact to final delivery.</p>
          </div>

          <div className="nb-sp__process-list">
            {PROCESS.map((step, i) => {
              const ref = useReveal(i * 80);
              const isLast = i === PROCESS.length - 1;
              return (
                <div key={i} className="nb-sp__step reveal" ref={ref}>
                  <div className="nb-sp__step-left">
                    <div className="nb-sp__step-num">{String(i + 1).padStart(2, "0")}</div>
                    {!isLast && <div className="nb-sp__step-line" />}
                  </div>
                  <div className="nb-sp__step-body">
                    <h3 className="nb-sp__step-title">{step.title}</h3>
                    <p className="nb-sp__step-desc">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ══ BENEFITS ══ */}
      <div className="nb-sp__benefits">
        <div className="nb-sp__benefits-inner">

          <div className="nb-sp__benefits-header reveal" ref={r3}>
            <span className="nb-sp__eyebrow"><span className="nb-sp__ey-line" />Why Native Bounty</span>
            <h2 className="nb-sp__section-h">What you<br /><em>gain.</em></h2>
          </div>

          <div className="nb-sp__benefits-grid">
            {BENEFITS.map((b, i) => {
              const ref = useReveal(i * 70);
              return (
                <div key={i} className="nb-sp__benefit reveal" ref={ref}>
                  <div className="nb-sp__benefit-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="nb-sp__benefit-icon">{b.icon}</div>
                  <h3 className="nb-sp__benefit-title">{b.title}</h3>
                  <p className="nb-sp__benefit-desc">{b.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ══ CASE STUDIES ══ */}
      <div className="nb-sp__cases">
        <div className="nb-sp__cases-inner">
          <div className="nb-sp__cases-header reveal">
            <span className="nb-sp__eyebrow"><span className="nb-sp__ey-line" />Success Stories</span>
            <h2 className="nb-sp__section-h">Real results.<br /><em>Real people.</em></h2>
          </div>

          {/* Case 1 — dark left */}
          <div className="nb-sp__case">
            <div className="nb-sp__case-dark">
              <span className="nb-sp__case-ghost">01</span>
              <div className="nb-sp__case-dark-inner">
                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80" alt="Farm" className="nb-sp__case-img" />
                <div className="nb-sp__case-metrics">
                  {[["40%","Income increase"],["3×","Market reach"],["70%","Time saved"]].map(([v,l]) => (
                    <div key={l} className="nb-sp__case-metric">
                      <strong>{v}</strong><span>{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="nb-sp__case-light">
              <span className="nb-sp__case-eyebrow">Smallholder Farmer</span>
              <h3 className="nb-sp__case-title">Small Farm,<br /><em>Big Impact.</em></h3>
              <p className="nb-sp__case-quote">"Before Native Bounty, I struggled to sell my produce beyond the local market. Now I supply to three major supermarkets and my income has increased by 40%."</p>
              <span className="nb-sp__case-name">Maria W. — Vegetable Farm, Nakuru</span>
            </div>
          </div>

          {/* Case 2 — light left */}
          <div className="nb-sp__case nb-sp__case--flip">
            <div className="nb-sp__case-light">
              <span className="nb-sp__case-eyebrow">Institutional Buyer</span>
              <h3 className="nb-sp__case-title">Reliable Supply.<br /><em>Zero Disruption.</em></h3>
              <p className="nb-sp__case-quote">"Native Bounty has transformed our produce sourcing. We now have consistent quality and supply, reducing stockouts by 90% and improving customer satisfaction."</p>
              <span className="nb-sp__case-name">FreshMart Supermarkets — Nairobi</span>
            </div>
            <div className="nb-sp__case-dark">
              <span className="nb-sp__case-ghost">02</span>
              <div className="nb-sp__case-dark-inner">
                <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=700&q=80" alt="Market" className="nb-sp__case-img" />
                <div className="nb-sp__case-metrics">
                  {[["90%","Fewer stockouts"],["25%","Cost reduction"],["30%","Waste reduction"]].map(([v,l]) => (
                    <div key={l} className="nb-sp__case-metric">
                      <strong>{v}</strong><span>{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ══ FAQ ══ */}
      <div className="nb-sp__faq">
        <div className="nb-sp__faq-inner">
          <div className="nb-sp__faq-header reveal" ref={r4}>
            <span className="nb-sp__eyebrow"><span className="nb-sp__ey-line" />Common Questions</span>
            <h2 className="nb-sp__faq-h">Frequently asked<br /><em>questions.</em></h2>
          </div>
          <div className="nb-sp__faq-list">
            {FAQ_DATA.map((faq, i) => {
              const ref = useReveal(i * 60);
              return (
                <div key={i} className={`nb-sp__faq-item reveal ${openFaq === i ? "nb-sp__faq-item--open" : ""}`} ref={ref}>
                  <button className="nb-sp__faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="nb-sp__faq-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="nb-sp__faq-text">{faq.q}</span>
                    <span className="nb-sp__faq-tog">
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="nb-sp__faq-chev">
                        <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  <div className="nb-sp__faq-a"><p>{faq.a}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══ CTA BANNER ══ */}
      <div className="nb-sp__cta">
        <div className="nb-sp__cta-bar" />
        <div className="nb-sp__cta-inner">
          <div>
            <span className="nb-sp__cta-eyebrow">Ready to connect?</span>
            <h2 className="nb-sp__cta-h">Join the Native Bounty network today.</h2>
          </div>
          <div className="nb-sp__cta-actions">
            <NavLink to="/contact" className="nb-sp__cta-btn nb-sp__cta-btn--primary">Partner as Farmer</NavLink>
            <NavLink to="/contact" className="nb-sp__cta-btn nb-sp__cta-btn--ghost">Request Supply</NavLink>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ServicesPage;