import { useEffect, useRef } from "react";
import "../styles/about.css";
import AboutImg1 from "../assets/about-image-1.webp";
import AboutImg2 from "../assets/about-image-2.webp";

/* ── Scroll-reveal hook ── */
const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("is-visible"); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const About = () => {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();

  return (
    <section className="nb-about">

      {/* ── Section intro ── */}
      <div className="nb-about__intro reveal" ref={r1}>
        <span className="nb-about__eyebrow">
          <span className="nb-about__eyebrow-line" />
          Who We Are
        </span>
        <h2 className="nb-about__heading">
          Built for the <em>farmer</em>.<br />
          Designed for the <em>market</em>.
        </h2>
        <p className="nb-about__lead">
          We are building structured agricultural logistics systems that empower
          farmers, reduce waste, and create reliable farm-to-market connections
          across regions.
        </p>
      </div>

      {/* ── Block 1: asymmetric split ── */}
      <div className="nb-about__block nb-about__block--split reveal" ref={r2}>

        {/* Left — image with overlapping stat card */}
        <div className="nb-about__visual">
          <img src={AboutImg1} alt="Farm logistics operations" />
          <div className="nb-about__visual-card">
            <strong>60%</strong>
            <span>avg. reduction in<br />post-harvest loss</span>
          </div>
        </div>

        {/* Right — content */}
        <div className="nb-about__content">
          <div className="nb-about__chapter">
            <span className="nb-about__chapter-num">01</span>
            <span className="nb-about__chapter-rule" />
          </div>
          <h3 className="nb-about__title">Bridging the Logistics Gap</h3>
          <p>
            Smallholder farmers face fragmented supply chains, delayed transport,
            and unpredictable market access. Native Bounty introduces structured
            aggregation, coordinated transport scheduling, and transparent delivery
            tracking systems to close that gap.
          </p>
          <p>
            By aligning logistics with harvest cycles and market demand, we reduce
            post-harvest losses and improve price stability for farmers.
          </p>
          <ul className="nb-about__pillars">
            <li><span className="nb-about__pill-dot" />Structured aggregation points</li>
            <li><span className="nb-about__pill-dot" />Real-time delivery tracking</li>
            <li><span className="nb-about__pill-dot" />Harvest-cycle scheduling</li>
          </ul>
        </div>
      </div>

      {/* ── Block 2: dark panel ── */}
      <div className="nb-about__block nb-about__block--dark reveal" ref={r3}>
        <div className="nb-about__dark-inner">

          {/* Image bleeds over panel top */}
          <div className="nb-about__dark-visual">
            <img src={AboutImg2} alt="Produce distribution network" />
          </div>

          <div className="nb-about__dark-content">
            <div className="nb-about__chapter">
              <span className="nb-about__chapter-num nb-about__chapter-num--light">02</span>
              <span className="nb-about__chapter-rule nb-about__chapter-rule--light" />
            </div>
            <h3 className="nb-about__title nb-about__title--light">
              Building Sustainable Supply Networks
            </h3>
            <p className="nb-about__dark-text">
              Our model integrates farmers, transporters, buyers, and market hubs
              into a coordinated ecosystem. Through route optimization and structured
              aggregation points, we ensure consistency in delivery timelines and
              product quality.
            </p>
            <p className="nb-about__dark-text">
              Native Bounty is not just moving produce — we are building a dependable
              agricultural logistics infrastructure that supports long-term growth and
              food system resilience.
            </p>

            {/* inline stats strip 
            <div className="nb-about__stats">
              <div className="nb-about__stat">
                <strong>500+</strong>
                <span>Farmers onboarded</span>
              </div>
              <div className="nb-about__stat-sep" />
              <div className="nb-about__stat">
                <strong>35+</strong>
                <span>Active market routes</span>
              </div>
              <div className="nb-about__stat-sep" />
              <div className="nb-about__stat">
                <strong>12</strong>
                <span>Counties covered</span>
              </div>
            </div>*/}
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;