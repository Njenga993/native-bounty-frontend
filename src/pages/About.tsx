import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import SEO from "../components/SEO";
import "../styles/aboutpage.css";
import AboutImg1 from "../assets/mercy25.jpeg";  // Replace with your indigenous farming image
import AboutImg2 from "../assets/avocado59.jpeg"; // Replace with basket/community image
import ImpactImg from "../assets/impact27.jpeg";  // Replace with farm/biodiversity image

/* ── Scroll-reveal hook ── */
const useReveal = (delay = 0) => {
  const ref = useRef<HTMLDivElement>(null);
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

/* ── Core Values (from Page 4) ── */
const VALUES = [
  {
    num: "01",
    title: "Sustainability",
    desc: "We champion farming practices that restore ecosystems, protect biodiversity, and ensure food systems can thrive for generations to come.",
  },
  {
    num: "02",
    title: "Integrity",
    desc: "We operate with transparency and fairness — from the prices we pay farmers to the quality we promise our customers.",
  },
  {
    num: "03",
    title: "Innovation",
    desc: "We continuously improve how we source, package, and deliver indigenous foods, creating new value for farmers and communities.",
  },
  {
    num: "04",
    title: "Inclusivity",
    desc: "We create opportunities for women, youth, and marginalized farming communities to participate fully in the food system.",
  },
  {
    num: "05",
    title: "Quality",
    desc: "Every basket that leaves our hands has been inspected, tested, and packed to meet the highest standards of freshness and safety.",
  },
  {
    num: "06",
    title: "Community Empowerment",
    desc: "We invest in farmer training, reliable markets, and local leadership to build stronger, more resilient rural communities.",
  },
  {
    num: "07",
    title: "Environmental Stewardship",
    desc: "We care for the land by promoting agroecology, conserving indigenous seeds, and reducing food waste at every stage.",
  },
];

/* ── Impact Areas (from Page 6) ── */
const IMPACT_AREAS = [
  {
    val: "Fair & Stable",
    label: "Farmer Incomes",
    ctx: "Direct market access ensures farmers earn predictable, fair returns for their produce.",
  },
  {
    val: "Better",
    label: "Nutrition",
    ctx: "Indigenous foods are nutrient-dense — we make them accessible to households and institutions.",
  },
  {
    val: "Biodiversity",
    label: "Conservation",
    ctx: "By growing and marketing indigenous crops, we help preserve seeds and ecosystems.",
  },
  {
    val: "Climate",
    label: "Resilience",
    ctx: "Agroecological practices and diversified sourcing reduce vulnerability to climate shocks.",
  },
  {
    val: "Reduced",
    label: "Food Waste",
    ctx: "Direct farm-to-basket model cuts post-harvest losses and ensures produce reaches tables.",
  },
];

/* ── Partner Categories (from Page 7) ── 
const PARTNERS = [
  "Development Organizations",
  "Government Agencies",
  "NGOs",
  "Supermarkets",
  "Hotels & Restaurants",
  "Schools & Hospitals",
  "Research Institutions",
  "Farmer Cooperatives",
];*/

const AboutPage = () => {
  /* ── Section reveals ── */
  const r1 = useReveal(0);
  const r2 = useReveal(0);
  const r3 = useReveal(0);
  const r4 = useReveal(0);
  const r5 = useReveal(0);
  const r6 = useReveal(0);

  /* ── Values row reveals ── */
  const vr0 = useReveal(0 * 80);
  const vr1 = useReveal(1 * 80);
  const vr2 = useReveal(2 * 80);
  const vr3 = useReveal(3 * 80);
  const vr4 = useReveal(4 * 80);
  const vr5 = useReveal(5 * 80);
  const vr6 = useReveal(6 * 80);
  const valueRefs = [vr0, vr1, vr2, vr3, vr4, vr5, vr6];

  /* ── Impact reveals ── */
  const mr0 = useReveal(0 * 80);
  const mr1 = useReveal(1 * 80);
  const mr2 = useReveal(2 * 80);
  const mr3 = useReveal(3 * 80);
  const mr4 = useReveal(4 * 80);
  const metricRefs = [mr0, mr1, mr2, mr3, mr4];

  return (
    <>
      <SEO page="about" />

      <div className="ap">
        {/* ══ HERO ══ */}
        <div className="ap-hero">
          <div className="ap-hero__tex" />
          <div className="ap-hero__inner">
            <nav className="ap-bread" aria-label="Breadcrumb">
              <NavLink to="/" className="ap-bread__link">Home</NavLink>
              <span className="ap-bread__sep" aria-hidden="true">/</span>
              <span className="ap-bread__cur" aria-current="page">About</span>
            </nav>
            <h1 className="ap-hero__h">
              Growing Indigenous<br />
              Foods. <em>Nourishing<br />
              Communities.</em>
            </h1>
            <p className="ap-hero__sub">
              We connect smallholder farmers directly with households and institutions
              through a subscription basket model — fresh, healthy, indigenous produce
              that creates fair markets and preserves biodiversity.
            </p>
          </div>
          <div className="ap-hero__edge" />
        </div>

        {/* ══ MISSION / VISION ══ */}
        <div className="ap-mv">
          {/* Left — Mission (dark) */}
          <div className="ap-mv__panel ap-mv__panel--dk reveal" ref={r1}>
            <div className="ap-mv__tex" />
            <div className="ap-mv__inner">
              <span className="ap-eyebrow ap-eyebrow--lt">
                <span className="ap-ey-line" />
                Our Mission
              </span>
              <h2 className="ap-mv__h ap-mv__h--lt">
                To empower<br />
                <em>farming communities.</em>
              </h2>
              <p className="ap-mv__body ap-mv__body--lt">
                We produce, add value to, and market indigenous foods while improving
                nutrition, protecting biodiversity, and creating sustainable livelihoods
                for smallholder farmers.
              </p>
            </div>
          </div>

          {/* Right — Vision (cream) */}
          <div className="ap-mv__panel ap-mv__panel--lt reveal" ref={r2}>
            <div className="ap-mv__inner">
              <span className="ap-eyebrow">
                <span className="ap-ey-line" />
                Our Vision
              </span>
              <h2 className="ap-mv__h">
                Kenya's leading<br />
                <em>indigenous food enterprise.</em>
              </h2>
              <p className="ap-mv__body">
                To connect biodiversity conservation with profitable, climate-resilient
                agriculture — making indigenous foods a cornerstone of Kenya's food
                future.
              </p>
            </div>
          </div>
        </div>

        {/* ══ STORY ══ */}
        <div className="ap-story">
          <div className="ap-story__inner reveal" ref={r3}>
            <div className="ap-story__left">
              <span className="ap-eyebrow">
                <span className="ap-ey-line" />
                Our Story
              </span>
              <blockquote className="ap-story__pull">
                "Every basket delivered represents more than fresh food — it represents
                a family whose harvest has found a market."
              </blockquote>
              <div className="ap-story__rule" aria-hidden="true" />
              <p className="ap-story__attr">— Native Bounty</p>
            </div>
            <div className="ap-story__right">
              <p>
                Long before supermarkets lined our streets, Kenyan families relied on
                indigenous foods grown in their own communities. These crops nourished
                generations, preserved biodiversity, and sustained livelihoods.
              </p>
              <p>
                Yet today, many of these nutritious foods are disappearing — while the
                farmers who grow them struggle to find reliable markets.
              </p>
              <p>
                Native Bounty was born from a simple belief: our indigenous foods
                deserve a place on every table, and the farmers who grow them deserve
                fair, dependable markets. We partner with smallholder farmers who
                cultivate indigenous vegetables, fruits, herbs, and traditional crops
                using sustainable practices — and we bring that harvest directly to
                households and institutions through our basket subscriptions.
              </p>
              <p>
                By choosing Native Bounty, you become part of a movement to restore
                indigenous foods, strengthen local farmers, and build a more sustainable
                food system for Kenya.
              </p>
            </div>
          </div>
        </div>

        {/* ══ CONTENT BLOCKS ══ */}
        <div className="ap-blocks">
          {/* Block 1 — Farmer Partnerships */}
          <div className="ap-block">
            <div className="ap-block__visual">
              <img
                src={AboutImg1}
                alt="Smallholder farmers growing indigenous vegetables for Native Bounty"
                loading="lazy"
                decoding="async"
              />
              <div className="ap-block__vis-card">
                <strong>Fair</strong>
                <span>
                  markets &<br />
                  stable incomes
                </span>
              </div>
            </div>
            <div className="ap-block__content reveal" ref={r4}>
              <div className="ap-block__chapter">
                <span className="ap-block__chnum">01</span>
                <span className="ap-block__chrule" aria-hidden="true" />
              </div>
              <h2 className="ap-block__title">From Farm to Basket</h2>
              <p>
                We work directly with organized farmer groups who grow indigenous
                vegetables, fruits, herbs, and root crops. By aggregating produce
                from trained farmers and maintaining strict quality standards, we
                create a reliable pipeline from the field to your table.
              </p>
              <p>
                This direct relationship means farmers earn fair, stable incomes —
                and customers receive fresh, nutritious, locally produced food they
                can trust.
              </p>
              <ul className="ap-block__pillars" aria-label="Key features">
                <li>
                  <span className="ap-dot" aria-hidden="true" />
                  Direct farmer partnerships
                </li>
                <li>
                  <span className="ap-dot" aria-hidden="true" />
                  Trained farmer groups
                </li>
                <li>
                  <span className="ap-dot" aria-hidden="true" />
                  Quality assurance & testing
                </li>
              </ul>
            </div>
          </div>

          {/* Block 2 — Indigenous Foods & Biodiversity */}
          <div className="ap-block ap-block--flip">
            <div className="ap-block__visual">
              <img
                src={AboutImg2}
                alt="Native Bounty's indigenous food basket — fresh vegetables and herbs"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="ap-block__content reveal" ref={r5}>
              <div className="ap-block__chapter">
                <span className="ap-block__chnum">02</span>
                <span className="ap-block__chrule" aria-hidden="true" />
              </div>
              <h2 className="ap-block__title">Preserving Biodiversity, One Basket at a Time</h2>
              <p>
                Indigenous crops are more than food — they are living heritage. By
                creating markets for these crops, we give farmers a reason to keep
                growing them, conserving seeds and traditional knowledge for future
                generations.
              </p>
              <p>
                Our subscription model also supports agroecological farming practices
                that care for the land, restore ecosystems, and build climate resilience
                — all while delivering delicious, nutrient-rich food to Kenyan families.
              </p>
            </div>
          </div>
        </div>

        {/* ══ VALUES ══ */}
        <div className="ap-values">
          <div className="ap-values__inner">
            <div className="ap-values__header reveal" ref={r6}>
              <span className="ap-eyebrow">
                <span className="ap-ey-line" />
                Our Values
              </span>
              <h2 className="ap-values__heading">
                What we stand<br />
                <em>for.</em>
              </h2>
            </div>
            <div className="ap-values__list">
              {VALUES.map((v, i) => (
                <div key={v.num} className="ap-vrow reveal" ref={valueRefs[i]}>
                  <span className="ap-vrow__ghost" aria-hidden="true">
                    {v.num}
                  </span>
                  <span className="ap-vrow__num">{v.num}</span>
                  <div className="ap-vrow__rule" aria-hidden="true" />
                  <h3 className="ap-vrow__title">{v.title}</h3>
                  <p className="ap-vrow__desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ IMPACT ══ */}
        <div className="ap-impact">
          {/* Left — editorial dark */}
          <div className="ap-impact__left">
            <div className="ap-impact__tex" />
            <div className="ap-impact__left-inner">
              <span className="ap-eyebrow ap-eyebrow--lt">
                <span className="ap-ey-line" />
                Our Impact
              </span>
              <h2 className="ap-impact__h">
                Growing<br />
                more than<br />
                <em>food.</em>
              </h2>
              <p className="ap-impact__sub">
                Every basket delivers healthier diets, stronger local economies,
                and farming practices that care for the land.
              </p>
              <div className="ap-impact__img-wrap">
                <img
                  src={ImpactImg}
                  alt="Native Bounty's impact — thriving farming communities and biodiversity"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* Right — impact areas */}
          <dl className="ap-impact__right" aria-label="Native Bounty impact areas">
            {IMPACT_AREAS.map((m, i) => (
              <div
                key={m.label}
                className={`ap-impact__metric reveal${i === IMPACT_AREAS.length - 1 ? " ap-impact__metric--last" : ""}`}
                ref={metricRefs[i]}
              >
                <dd className="ap-impact__mval">{m.val}</dd>
                <div className="ap-impact__mrule" aria-hidden="true" />
                <dt className="ap-impact__mlabel">{m.label}</dt>
                <p className="ap-impact__mctx">{m.ctx}</p>
              </div>
            ))}
          </dl>
        </div>

        {/* ══ PARTNERS ══ 
        <div className="ap-partners">
          <div className="ap-partners__inner">
            <span className="ap-eyebrow ap-eyebrow--centered">
              <span className="ap-ey-line" aria-hidden="true" />
              Partnership Opportunities
              <span className="ap-ey-line" aria-hidden="true" />
            </span>
            <p className="ap-partners__sub">
              We're looking for partners who share our vision for food security,
              nutrition, biodiversity conservation, and sustainable agriculture.
            </p>
            <ul className="ap-partners__strip" aria-label="Native Bounty partner categories">
              {PARTNERS.map((p, i) => (
                <li key={i} className="ap-partners__item">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ══ CTA BANNER ══ 
        <div className="ap-cta">
          <div className="ap-cta__bar" aria-hidden="true" />
          <div className="ap-cta__inner">
            <div>
              <span className="ap-cta__eyebrow">Join the movement</span>
              <h3 className="ap-cta__heading">
                Let's grow something together.
              </h3>
            </div>
            <div className="ap-cta__actions">
              <NavLink
                to="/contact"
                className="ap-btn ap-btn--primary"
                aria-label="Partner with Native Bounty"
              >
                Partner With Us
              </NavLink>
              <NavLink
                to="/baskets"
                className="ap-btn ap-btn--ghost"
                aria-label="Explore Native Bounty baskets"
              >
                View Baskets
              </NavLink>
            </div>
        </div>
          </div>*/}
      </div>
    </>
  );
};

export default AboutPage;