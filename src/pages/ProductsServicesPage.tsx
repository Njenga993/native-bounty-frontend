import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SEO from "../components/SEO";
import "../styles/productspage.css";
import {
  Sprout,
  PackageCheck,
  ShieldCheck,
  MessageCircle,
  Home,
  Sparkles,
  Building2,
  Leaf,
  FlaskConical,
  Users,
  Store,
  Heart,
  Globe,
} from "lucide-react";

/* ── Scroll-reveal ── */
const useReveal = <T extends HTMLElement = HTMLDivElement>(delay = 0) => {
  const ref = useRef<T>(null);
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
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
};

/* ── Product Categories (from Page 5) ── */
const PRODUCT_CATEGORIES = [
  {
    icon: <Sprout size={28} strokeWidth={1.4} />,
    title: "Fresh Indigenous Vegetables",
    items: ["Traditional leafy greens", "African nightshade", "Amaranth", "Spider plant", "Cowpea leaves"],
  },
  {
    icon: <Leaf size={28} strokeWidth={1.4} />,
    title: "Fruits & Herbs",
    items: ["Indigenous fruits", "Traditional herbs", "Medicinal plants", "Wild fruits"],
  },
  {
    icon: <PackageCheck size={28} strokeWidth={1.4} />,
    title: "Root Crops & Tubers",
    items: ["Arrowroot", "Yams", "Sweet potatoes", "Cassava", "Traditional roots"],
  },
  {
    icon: <FlaskConical size={28} strokeWidth={1.4} />,
    title: "Dried Vegetables & Flours",
    items: ["Dried leafy greens", "Indigenous flours", "Traditional grain flours"],
  },
  {
    icon: <Sparkles size={28} strokeWidth={1.4} />,
    title: "Seeds & Spice Blends",
    items: ["Indigenous seed varieties", "Traditional spice blends", "Herbal mixes"],
  },
  {
    icon: <Heart size={28} strokeWidth={1.4} />,
    title: "Healthy Snacks",
    items: ["Nutrient-dense traditional snacks", "Indigenous grain-based snacks"],
  },
];

/* ── Basket Tiers (from Page 5) ── */
const BASKET_TIERS = [
  {
    icon: <Home size={32} strokeWidth={1.4} />,
    name: "Household Basket",
    audience: "For families and homes",
    description: "Fresh indigenous vegetables, fruits, herbs, and root crops — sized for everyday family cooking, sourced directly from trained smallholder farmers.",
    frequency: "Weekly · Fortnightly · Monthly",
    cta: "Subscribe Now",
  },
  {
    icon: <Sparkles size={32} strokeWidth={1.4} />,
    name: "Premium Basket",
    audience: "For elevated everyday eating",
    description: "An expanded selection featuring dried vegetables, indigenous flours, spice blends, and seasonal specialty produce for households who want more variety.",
    frequency: "Weekly · Fortnightly · Monthly",
    cta: "Subscribe Now",
  },
  {
    icon: <Building2 size={32} strokeWidth={1.4} />,
    name: "Institutional Basket",
    audience: "Hospitals, schools, hotels, corporates & correctional facilities",
    description: "Bulk-volume baskets built for universities, hospitals, hotels, restaurants, corporate offices, and correctional facilities — consistent supply, consistent quality.",
    frequency: "Weekly · Fortnightly · Monthly",
    cta: "Enquire Now",
  },
];

/* ── Services (from Page 5) ── */
const SERVICES = [
  {
    icon: <Users size={24} strokeWidth={1.4} />,
    title: "Farmer Training",
    description: "We train farmers in sustainable farming practices, quality standards, and post-harvest handling to ensure consistent, high-quality produce.",
  },
  {
    icon: <PackageCheck size={24} strokeWidth={1.4} />,
    title: "Produce Aggregation",
    description: "We aggregate produce from trained farmer groups, ensuring consistent volumes and reliable supply for households and institutional buyers.",
  },
  {
    icon: <ShieldCheck size={24} strokeWidth={1.4} />,
    title: "Quality Assurance",
    description: "Every batch is inspected and tested for chemical residues before it reaches customers — we maintain rigorous quality standards at every stage.",
  },
  {
    icon: <MessageCircle size={24} strokeWidth={1.4} />,
    title: "Consultancy",
    description: "We offer consultancy services on indigenous food systems, sustainable agriculture, and market linkages for organizations and development partners.",
  },
];

/* ── Target Market (from Page 5) ── */
const TARGET_MARKETS = [
  { icon: <Home size={20} strokeWidth={1.4} />, label: "Households" },
  { icon: <Building2 size={20} strokeWidth={1.4} />, label: "Institutions" },
  { icon: <Store size={20} strokeWidth={1.4} />, label: "Retailers" },
  { icon: <Store size={20} strokeWidth={1.4} />, label: "Supermarkets" },
  { icon: <Globe size={20} strokeWidth={1.4} />, label: "Development Organizations" },
  { icon: <Building2 size={20} strokeWidth={1.4} />, label: "Corporate Clients" },
];

/* ── FAQ (rewritten for baskets, not logistics) ── */

const ProductsServicesPage = () => {
  

  /* ── Section reveals ── */
  const r1 = useReveal(0);
  const r2 = useReveal(0);
  const r3 = useReveal(0);
  const r4 = useReveal(0);

  /* ── Product category reveals ── */
  const cr0 = useReveal(0 * 70);
  const cr1 = useReveal(1 * 70);
  const cr2 = useReveal(2 * 70);
  const cr3 = useReveal(3 * 70);
  const cr4 = useReveal(4 * 70);
  const cr5 = useReveal(5 * 70);
  const catRefs = [cr0, cr1, cr2, cr3, cr4, cr5];

  /* ── Basket tier reveals ── */
  const br0 = useReveal(0 * 80);
  const br1 = useReveal(1 * 80);
  const br2 = useReveal(2 * 80);
  const basketRefs = [br0, br1, br2];

  /* ── Service reveals ── */
  const sr0 = useReveal(0 * 80);
  const sr1 = useReveal(1 * 80);
  const sr2 = useReveal(2 * 80);
  const sr3 = useReveal(3 * 80);
  const serviceRefs = [sr0, sr1, sr2, sr3];

  

  return (
    <>
      {/* ✅ FIXED: Use page="services" — not title="..." */}
      <SEO page="services" />

      <div className="nb-pp">
        {/* ══ HERO ══ */}
        <div className="nb-pp__hero">
          <div className="nb-pp__hero-texture" aria-hidden="true" />
          <div className="nb-pp__hero-inner">
            <nav className="nb-pp__breadcrumb" aria-label="Breadcrumb">
              <NavLink to="/" className="nb-pp__bread-link">Home</NavLink>
              <span className="nb-pp__bread-sep" aria-hidden="true">/</span>
              <span className="nb-pp__bread-current" aria-current="page">
                Products & Services
              </span>
            </nav>
            <h1 className="nb-pp__hero-h">
              Indigenous Foods,<br />
              <em>Delivered Fresh.</em>
            </h1>
            <p className="nb-pp__hero-sub">
              From our farmers' fields to your table — fresh indigenous vegetables,
              fruits, herbs, and root crops, plus value-added products, all sourced
              directly from trained smallholder farmers.
            </p>
          </div>
          <div className="nb-pp__hero-edge" aria-hidden="true" />
        </div>

        {/* ══ PRODUCTS / CATEGORIES ══ */}
        <section className="nb-pp__products" aria-label="Native Bounty product categories">
          <div className="nb-pp__products-inner">
            <div className="nb-pp__products-header reveal" ref={r1}>
              <span className="nb-pp__eyebrow">
                <span className="nb-pp__ey-line" aria-hidden="true" />
                Our Products
              </span>
              <h2 className="nb-pp__section-h">
                From the earth<br />
                <em>to your table.</em>
              </h2>
            </div>

            <div className="nb-pp__categories">
              {PRODUCT_CATEGORIES.map((cat, i) => (
                <div
                  key={cat.title}
                  className="nb-pp__category reveal"
                  ref={catRefs[i]}
                >
                  <div className="nb-pp__cat-icon" aria-hidden="true">
                    {cat.icon}
                  </div>
                  <h3 className="nb-pp__cat-title">{cat.title}</h3>
                  <ul className="nb-pp__cat-items" aria-label={`${cat.title} items`}>
                    {cat.items.map((item) => (
                      <li key={item}>
                        <span className="nb-pp__cat-dot" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ BASKET SUBSCRIPTION TIERS ══ */}
        <section className="nb-pp__baskets" aria-label="Native Bounty basket subscription tiers">
          <div className="nb-pp__baskets-inner">
            <div className="nb-pp__baskets-header reveal" ref={r2}>
              <span className="nb-pp__eyebrow nb-pp__eyebrow--lt">
                <span className="nb-pp__ey-line" aria-hidden="true" />
                Basket Subscriptions
              </span>
              <h2 className="nb-pp__section-h nb-pp__section-h--lt">
                A basket for<br />
                <em>every need.</em>
              </h2>
              <p className="nb-pp__baskets-lead">
                Choose your tier, pick your frequency, and let us deliver fresh,
                indigenous produce directly to your door.
              </p>
            </div>

            <div className="nb-pp__tiers">
              {BASKET_TIERS.map((tier, i) => (
                <div
                  key={tier.name}
                  className="nb-pp__tier reveal"
                  ref={basketRefs[i]}
                >
                  <div className="nb-pp__tier-icon" aria-hidden="true">
                    {tier.icon}
                  </div>
                  <div className="nb-pp__tier-rule" aria-hidden="true" />
                  <h3 className="nb-pp__tier-name">{tier.name}</h3>
                  <span className="nb-pp__tier-audience">{tier.audience}</span>
                  <p className="nb-pp__tier-desc">{tier.description}</p>
                  <div className="nb-pp__tier-frequency">
                    <span className="nb-pp__tier-freq-label">Frequency:</span>
                    {tier.frequency}
                  </div>
                  <NavLink
                    to="/contact"
                    className="nb-pp__tier-btn"
                    aria-label={`Subscribe to ${tier.name}`}
                  >
                    {tier.cta}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══ */}
        <section className="nb-pp__services" aria-label="Native Bounty additional services">
          <div className="nb-pp__services-inner">
            <div className="nb-pp__services-header reveal" ref={r3}>
              <span className="nb-pp__eyebrow">
                <span className="nb-pp__ey-line" aria-hidden="true" />
                Services
              </span>
              <h2 className="nb-pp__section-h">
                Beyond the<br />
                <em>basket.</em>
              </h2>
            </div>

            <div className="nb-pp__services-grid">
              {SERVICES.map((svc, i) => (
                <div
                  key={svc.title}
                  className="nb-pp__service reveal"
                  ref={serviceRefs[i]}
                >
                  <div className="nb-pp__service-icon" aria-hidden="true">
                    {svc.icon}
                  </div>
                  <div className="nb-pp__service-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="nb-pp__service-title">{svc.title}</h3>
                  <p className="nb-pp__service-desc">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TARGET MARKET ══ */}
        <section className="nb-pp__market" aria-label="Who Native Bounty serves">
          <div className="nb-pp__market-inner">
            <div className="nb-pp__market-header reveal" ref={r4}>
              <span className="nb-pp__eyebrow">
                <span className="nb-pp__ey-line" aria-hidden="true" />
                Who We Serve
              </span>
              <h2 className="nb-pp__section-h">
                Fresh food<br />
                <em>for everyone.</em>
              </h2>
            </div>

            <div className="nb-pp__market-grid">
              {TARGET_MARKETS.map((m) => (
                <div key={m.label} className="nb-pp__market-item">
                  <div className="nb-pp__market-icon" aria-hidden="true">
                    {m.icon}
                  </div>
                  <span className="nb-pp__market-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ 
        <section className="nb-pp__faq" aria-label="Frequently asked questions">
          <div className="nb-pp__faq-inner">
            <div className="nb-pp__faq-header">
              <span className="nb-pp__eyebrow">
                <span className="nb-pp__ey-line" aria-hidden="true" />
                Common Questions
              </span>
              <h2 className="nb-pp__faq-h">
                Frequently asked<br />
                <em>questions.</em>
              </h2>
            </div>

            <div className="nb-pp__faq-list">
              {FAQ_DATA.map((faq, i) => {
                const answerId = `faq-answer-${i}`;
                return (
                  <div
                    key={faq.q}
                    className={`nb-pp__faq-item ${openFaq === i ? "nb-pp__faq-item--open" : ""}`}
                    ref={faqRefs[i]}
                  >
                    <button
                      className="nb-pp__faq-q"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                      aria-controls={answerId}
                    >
                      <span className="nb-pp__faq-num" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="nb-pp__faq-text">{faq.q}</span>
                      <span className="nb-pp__faq-tog" aria-hidden="true">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="nb-pp__faq-chev"
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
                      className="nb-pp__faq-a"
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
        </section>*/}

        {/* ══ CTA BANNER ══ */}
        <div className="nb-pp__cta">
          <div className="nb-pp__cta-bar" aria-hidden="true" />
          <div className="nb-pp__cta-inner">
            <div>
              <span className="nb-pp__cta-eyebrow">Start nourishing your family</span>
              <h2 className="nb-pp__cta-h">
                Subscribe to a basket today.
              </h2>
            </div>
            <div className="nb-pp__cta-actions">
              <NavLink
                to="/contact"
                className="nb-pp__cta-btn nb-pp__cta-btn--primary"
                aria-label="Subscribe to a Native Bounty basket"
              >
                Subscribe Now
              </NavLink>
              <NavLink
                to="/about"
                className="nb-pp__cta-btn nb-pp__cta-btn--ghost"
                aria-label="Learn more about Native Bounty"
              >
                Our Story
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsServicesPage;