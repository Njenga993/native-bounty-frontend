import { useEffect, useRef } from "react";
import "../styles/problem.css";
import ProblemImg1 from "../assets/truck03.jpeg";
import SolutionImg from "../assets/avocado59.jpeg";

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

const ProblemSolution = () => {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();

  return (
    <section className="nb-ps">

      {/* ── Section intro ── */}
      <div className="nb-ps__intro reveal" ref={r1}>
        <span className="nb-ps__eyebrow">
          <span className="nb-ps__eyebrow-line" />
          The Challenge &amp; Our Response
        </span>
        <h2 className="nb-ps__heading">
          Good food shouldn't be <em>this</em> hard to find.
        </h2>
        <p className="nb-ps__lead">
          Consumers want safe, nutritious, convenient food. Farmers want stable
          markets and fair returns. Native Bounty exists to close that gap.
        </p>
      </div>

      {/* ── Block 1: The Problem (light split) ── */}
      <div className="nb-ps__block nb-ps__block--split reveal" ref={r2}>

        <div className="nb-ps__visual">
          <img src={ProblemImg1} alt="Smallholder farm produce before aggregation" />
          <div className="nb-ps__visual-card">
            <span className="nb-ps__visual-card-text">
              Consumers want fresh food.
              <br />
              Farmers want stable markets.
            </span>
          </div>
        </div>

        <div className="nb-ps__content">
          <div className="nb-ps__chapter">
            <span className="nb-ps__chapter-num">01</span>
            <span className="nb-ps__chapter-rule" />
          </div>
          <h3 className="nb-ps__title">The Problem</h3>
          <p>
            Indigenous food production is declining, even as demand for safe,
            nutritious, and convenient food keeps rising. At the same time,
            smallholder farmers face unstable markets, post-harvest losses, and
            low returns on what they grow.
          </p>
          <p>
            Climate change adds further pressure — making the crops that once
            sustained generations harder to grow, sell, and find.
          </p>
          <ul className="nb-ps__pillars">
            <li><span className="nb-ps__pill-dot" />Declining indigenous food production</li>
            <li><span className="nb-ps__pill-dot" />Unstable markets for smallholder farmers</li>
            <li><span className="nb-ps__pill-dot" />Post-harvest losses and low returns</li>
            <li><span className="nb-ps__pill-dot" />Climate change &amp; limited access to nutritious food</li>
          </ul>
        </div>
      </div>

      {/* ── Block 2: Our Solution (dark panel) ── */}
      <div className="nb-ps__block nb-ps__block--dark reveal" ref={r3}>
        <div className="nb-ps__dark-inner">

          <div className="nb-ps__dark-visual">
            <img src={SolutionImg} alt="Fresh indigenous produce ready for basket packaging" />
          </div>

          <div className="nb-ps__dark-content">
            <div className="nb-ps__chapter">
              <span className="nb-ps__chapter-num nb-ps__chapter-num--light">02</span>
              <span className="nb-ps__chapter-rule nb-ps__chapter-rule--light" />
            </div>
            <h3 className="nb-ps__title nb-ps__title--light">Our Solution</h3>
            <p className="nb-ps__dark-text">
              Native Bounty sources produce directly from trained farmers,
              conducts quality assurance, and packages it into attractive
              baskets — delivered on a weekly, fortnightly, or monthly
              subscription.
            </p>
            <p className="nb-ps__dark-text">
              By aggregating produce from organized farmer groups and
              maintaining consistent quality standards, we bridge the gap
              between what consumers need and what farmers grow.
            </p>

            {/* Real basket tiers, not invented stats */}
            <div className="nb-ps__tiers">
              <div className="nb-ps__tier">
                <strong>Household</strong>
                <span>Basket</span>
              </div>
              <div className="nb-ps__tier-sep" />
              <div className="nb-ps__tier">
                <strong>Premium</strong>
                <span>Basket</span>
              </div>
              <div className="nb-ps__tier-sep" />
              <div className="nb-ps__tier">
                <strong>Institutional</strong>
                <span>Basket</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default ProblemSolution;