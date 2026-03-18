import heroImage from "../assets/vegetables.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section
      className="nb-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Floating content card — left-anchored, no overlay */}
      <div className="nb-hero__card">

        <span className="nb-hero__eyebrow">
          <span className="nb-hero__eyebrow-line" />
          Native Bounty
        </span>

        <h1 className="nb-hero__title">
          Connecting<br />
          Farmers to<br />
          <span className="nb-hero__title-accent">Markets.</span>
        </h1>

        <p className="nb-hero__description">
          Reliable, structured logistics that link organic farmers
          directly to buyers  reducing post-harvest losses and
          guaranteeing timely, fresh delivery every time.
        </p>

        <div className="nb-hero__actions">
          <button className="nb-btn nb-btn--primary">Get Started</button>
          <button className="nb-btn nb-btn--ghost">Learn More</button>
        </div>

        <div className="nb-hero__divider" />

        <div className="nb-hero__stats">
          <div className="nb-hero__stat">
            <strong>500+</strong>
            <span>Farmers Served</span>
          </div>
          <div className="nb-hero__stat-sep" />
          <div className="nb-hero__stat">
            <strong>35+</strong>
            <span>Market Routes</span>
          </div>
          <div className="nb-hero__stat-sep" />
          <div className="nb-hero__stat">
            <strong>98%</strong>
            <span>On-Time Delivery</span>
          </div>
        </div>

      </div>

      {/* Bottom-right live badge */}
      <div className="nb-hero__badge">
        <div className="nb-hero__badge-dot" />
        <span>Live network — 12 counties covered</span>
      </div>
    </section>
  );
};

export default Hero;