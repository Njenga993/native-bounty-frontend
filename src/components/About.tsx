import "../styles/about.css";
import AboutImg1 from "../assets/about-image-1.webp";
import AboutImg2 from "../assets/about-image-2.webp";

const About = () => {
  return (
    <section className="nb-about">
      <div className="nb-about__container">

        {/* Section Header */}
        <div className="nb-about__header">
          <h2>About Native Bounty</h2>
          <p>
            We are building structured agricultural logistics systems
            that empower farmers, reduce waste, and create reliable
            farm-to-market connections across regions.
          </p>
        </div>

        {/* Block 1 */}
        <div className="nb-about__row">
          <div className="nb-about__image">
            <img src={AboutImg1} alt="Farm logistics operations" />
          </div>

          <div className="nb-about__content">
            <h3>Bridging the Logistics Gap</h3>
            <p>
              Smallholder farmers often face fragmented supply chains,
              delayed transport, and unpredictable market access.
              Native Bounty introduces structured aggregation,
              coordinated transport scheduling, and transparent delivery
              tracking systems to close that gap.
            </p>
            <p>
              By aligning logistics with harvest cycles and market demand,
              we reduce post-harvest losses and improve price stability
              for farmers.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="nb-about__row nb-about__row--reverse">
          <div className="nb-about__image">
            <img src={AboutImg2} alt="Produce distribution network" />
          </div>

          <div className="nb-about__content">
            <h3>Building Sustainable Supply Networks</h3>
            <p>
              Our model integrates farmers, transporters, buyers, and
              market hubs into a coordinated ecosystem. Through route
              optimization and structured aggregation points, we ensure
              consistency in delivery timelines and product quality.
            </p>
            <p>
              Native Bounty is not just moving produce — we are building
              a dependable agricultural logistics infrastructure that
              supports long-term growth and food system resilience.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;