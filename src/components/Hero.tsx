import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="nb-hero">
      <div className="nb-hero__overlay"></div>

      <div className="nb-hero__container">
        <div className="nb-hero__content">
          <p className="nb-hero__tag">
            Agricultural Logistics Network
          </p>

          <h1 className="nb-hero__title">
            From Farm to Market,
            <br />
            Seamlessly.
          </h1>

          <p className="nb-hero__description">
            We provide reliable and structured logistics solutions
            that connect farmers to markets efficiently, reduce
            post-harvest losses, and ensure timely delivery of
            agricultural produce.
          </p>

          <div className="nb-hero__actions">
            <button className="nb-btn nb-btn--primary">
              Get Started
            </button>
            <button className="nb-btn nb-btn--secondary">
              Learn More
            </button>
          </div>

          <div className="nb-hero__stats">
            <div className="nb-hero__stat">
              <h3>500+</h3>
              <span>Farmers Served</span>
            </div>
            <div className="nb-hero__stat">
              <h3>35+</h3>
              <span>Market Routes</span>
            </div>
            <div className="nb-hero__stat">
              <h3>98%</h3>
              <span>On-Time Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;