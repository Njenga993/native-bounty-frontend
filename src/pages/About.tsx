import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/aboutpage.css";
import AboutImg1 from "../assets/about-image-1.webp";
import AboutImg2 from "../assets/about-image-2.webp";
import ImpactImg from "../assets/about-image-2.webp";

/* ── Scroll-reveal hook ── */
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

const VALUES = [
  { num: "01", title: "Fairness",       desc: "We ensure farmers receive fair compensation by creating transparent, direct market connections that eliminate exploitative intermediaries." },
  { num: "02", title: "Sustainability", desc: "Our systems are designed to minimise waste and environmental impact while maximising long-term economic sustainability for farming communities." },
  { num: "03", title: "Innovation",     desc: "We continuously evolve our logistics infrastructure using technology and real-time data to improve efficiency and farmer outcomes." },
  { num: "04", title: "Community",      desc: "We believe in strengthening farming communities by creating economic opportunities, supporting local networks, and investing in shared infrastructure." },
];

const PARTNERS = ["Seed Savers Network Kenya", "Seed Savers Network Kenya", "Seed Savers Network Kenya", "Farm to Feed", "Seed Savers Network Kenya", "Seed Savers Network Kenya"];

const AboutPage = () => {
  const r1 = useReveal(0);
  const r2 = useReveal(0);
  const r3 = useReveal(0);
  const r4 = useReveal(0);
  const r5 = useReveal(0);
  const r6 = useReveal(0);

  return (
    <div className="ap">

      {/* ══ HERO ══ */}
      <div className="ap-hero">
        <div className="ap-hero__tex" />
        <div className="ap-hero__inner">
          <nav className="ap-bread">
            <NavLink to="/native-bounty-frontend" className="ap-bread__link">Home</NavLink>
            <span className="ap-bread__sep">/</span>
            <span className="ap-bread__cur">About</span>
          </nav>
          <h1 className="ap-hero__h">
            We move food.<br /><em>We move farmers.</em>
          </h1>
          <p className="ap-hero__sub">
            Building the agricultural logistics infrastructure Kenya's farming communities deserve.
          </p>
        </div>
        <div className="ap-hero__edge" />
      </div>

      {/* ══ MISSION / VISION — split panels ══ */}
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
              To revolutionise<br /><em>agricultural supply chains.</em>
            </h2>
            <p className="ap-mv__body ap-mv__body--lt">
              We create efficient, transparent, and sustainable logistics systems that directly
              connect farmers to markets — ensuring fair compensation and eliminating food waste
              at every link in the chain.
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
              A world where every<br /><em>farmer has a market.</em>
            </h2>
            <p className="ap-mv__body">
              Every farmer with reliable market access. Food reaching consumers with minimal
              waste. Agricultural communities thriving through sustainable economic growth
              and dignified livelihoods.
            </p>
          </div>
        </div>
      </div>

      {/* ══ STORY — editorial pull-quote ══ */}
      <div className="ap-story">
        <div className="ap-story__inner reveal" ref={r3}>
          <div className="ap-story__left">
            <span className="ap-eyebrow">
              <span className="ap-ey-line" />
              Our Story
            </span>
            <p className="ap-story__pull">
              "Born from witnessing firsthand what happens when a harvest has no road to market."
            </p>
            <div className="ap-story__rule" />
            <p className="ap-story__attr">— Native Bounty, founded 2018</p>
          </div>
          <div className="ap-story__right">
            <p>
              Native Bounty was born from witnessing firsthand the challenges smallholder farmers
              face in getting their produce to market efficiently. Our founders spent years working
              with farming communities and saw how much food was lost between harvest and market
              due to inadequate logistics infrastructure.
            </p>
            <p>
              In 2018, we started with a simple pilot connecting 50 farmers to 3 local markets.
              Today, we serve over 500 farmers across 12 counties, with plans to grow further.
              Our journey has been guided by the conviction that sustainable agriculture requires
              not just good farming — it requires efficient, honest, reliable market connections.
            </p>
          </div>
        </div>
      </div>

      {/* ══ CONTENT BLOCKS ══ */}
      <div className="ap-blocks">

        {/* Block 1 — image left */}
        <div className="ap-block">
          <div className="ap-block__visual">
            <img src={AboutImg1} alt="Farm logistics operations" />
            <div className="ap-block__vis-card">
              <strong>60%</strong>
              <span>avg. reduction in<br />post-harvest loss</span>
            </div>
          </div>
          <div className="ap-block__content reveal" ref={r4}>
            <div className="ap-block__chapter">
              <span className="ap-block__chnum">01</span>
              <span className="ap-block__chrule" />
            </div>
            <h2 className="ap-block__title">Bridging the Logistics Gap</h2>
            <p>
              Smallholder farmers face fragmented supply chains, delayed transport, and
              unpredictable market access. Native Bounty introduces structured aggregation,
              coordinated transport scheduling, and transparent delivery tracking to close that gap.
            </p>
            <p>
              By aligning logistics with harvest cycles and market demand, we reduce
              post-harvest losses and improve price stability for farmers.
            </p>
            <ul className="ap-block__pillars">
              <li><span className="ap-dot" />Structured aggregation points</li>
              <li><span className="ap-dot" />Real-time delivery tracking</li>
              <li><span className="ap-dot" />Harvest-cycle scheduling</li>
            </ul>
          </div>
        </div>

        {/* Block 2 — image right */}
        <div className="ap-block ap-block--flip">
          <div className="ap-block__visual">
            <img src={AboutImg2} alt="Produce distribution network" />
          </div>
          <div className="ap-block__content reveal" ref={r5}>
            <div className="ap-block__chapter">
              <span className="ap-block__chnum">02</span>
              <span className="ap-block__chrule" />
            </div>
            <h2 className="ap-block__title">Building Sustainable Supply Networks</h2>
            <p>
              Our model integrates farmers, transporters, buyers, and market hubs into a
              coordinated ecosystem. Through route optimisation and structured aggregation
              points, we ensure consistency in delivery timelines and product quality.
            </p>
            <p>
              Native Bounty is not just moving produce — we are building a dependable
              agricultural logistics infrastructure that supports long-term growth and
              food system resilience.
            </p>
          </div>
        </div>

      </div>

      {/* ══ VALUES — horizontal rows ══ */}
      <div className="ap-values">
        <div className="ap-values__inner">
          <div className="ap-values__header reveal" ref={r6}>
            <span className="ap-eyebrow">
              <span className="ap-ey-line" />
              Our Values
            </span>
            <h2 className="ap-values__heading">
              What we stand<br /><em>for.</em>
            </h2>
          </div>
          <div className="ap-values__list">
            {VALUES.map((v, i) => {
              const ref = useReveal(i * 80);
              return (
                <div key={i} className="ap-vrow reveal" ref={ref}>
                  <span className="ap-vrow__ghost">{v.num}</span>
                  <span className="ap-vrow__num">{v.num}</span>
                  <div className="ap-vrow__rule" />
                  <h3 className="ap-vrow__title">{v.title}</h3>
                  <p className="ap-vrow__desc">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══ IMPACT — dark scoreboard split ══ */}
      <div className="ap-impact">
        {/* Left — editorial */}
        <div className="ap-impact__left">
          <div className="ap-impact__tex" />
          <div className="ap-impact__left-inner">
            <span className="ap-eyebrow ap-eyebrow--lt">
              <span className="ap-ey-line" />
              Our Impact
            </span>
            <h2 className="ap-impact__h">
              Numbers<br />that<br /><em>matter.</em>
            </h2>
            <p className="ap-impact__sub">
              From Gilgil to Nairobi — every tonne delivered, every farmer paid, every
              stockout prevented is a link in a stronger food system.
            </p>
            <div className="ap-impact__img-wrap">
              <img src={ImpactImg} alt="Impact in farming communities" />
            </div>
          </div>
        </div>
        {/* Right — metrics */}
        <div className="ap-impact__right">
          {[
            { val: "500+",  label: "Farmers Onboarded",       ctx: "Verified smallholder producers across 12 counties" },
            { val: "40%",   label: "Reduction in Food Waste",  ctx: "Measured against pre-network baseline across partner farms" },
            { val: "25%",   label: "Avg. Income Increase",     ctx: "For farmers in the network vs. non-network peers" },
            { val: "12",    label: "Counties Covered",         ctx: "With active logistics routes and aggregation points" },
          ].map((m, i) => {
            const ref = useReveal(i * 80);
            return (
              <div key={i} className={`ap-impact__metric reveal ${i === 3 ? "ap-impact__metric--last" : ""}`} ref={ref}>
                <div className="ap-impact__mval">{m.val}</div>
                <div className="ap-impact__mrule" />
                <div className="ap-impact__mlabel">{m.label}</div>
                <div className="ap-impact__mctx">{m.ctx}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ══ PARTNERS — ticker strip ══ */}
      <div className="ap-partners">
        <div className="ap-partners__inner">
          <span className="ap-eyebrow ap-eyebrow--centered">
            <span className="ap-ey-line" />
            Our Partners
            <span className="ap-ey-line" />
          </span>
          <p className="ap-partners__sub">
            Organisations that share our vision for sustainable agriculture and fair food systems.
          </p>
          <div className="ap-partners__strip">
            {PARTNERS.map((p, i) => (
              <div key={i} className="ap-partners__item">{p}</div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ CTA BANNER ══ */}
      <div className="ap-cta">
        <div className="ap-cta__bar" />
        <div className="ap-cta__inner">
          <div>
            <span className="ap-cta__eyebrow">Join the movement</span>
            <h3 className="ap-cta__heading">Ready to build something together?</h3>
          </div>
          <div className="ap-cta__actions">
            <NavLink to="/contact" className="ap-btn ap-btn--primary">Partner With Us</NavLink>
            <NavLink to="/services" className="ap-btn ap-btn--ghost">Explore Services</NavLink>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;