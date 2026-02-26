import "../styles/aboutpage.css";
import AboutImg1 from "../assets/about-image-1.webp";
import AboutImg2 from "../assets/about-image-2.webp";
import TeamImg from "../assets/about-image-1.webp";
import ImpactImg from "../assets/about-image-2.webp";

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

        {/* Mission and Vision */}
        <div className="nb-about__mission">
          <h3>Our Mission & Vision</h3>
          <div className="nb-about__mission-content">
            <div className="nb-about__mission-block">
              <h4>Mission</h4>
              <p>
                To revolutionize agricultural supply chains by creating efficient, transparent,
                and sustainable logistics systems that directly connect farmers to markets,
                ensuring fair compensation and reducing food waste.
              </p>
            </div>
            <div className="nb-about__mission-block">
              <h4>Vision</h4>
              <p>
                A world where every farmer has reliable market access, where food reaches
                consumers with minimal waste, and where agricultural communities thrive
                through sustainable economic growth.
              </p>
            </div>
          </div>
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

        {/* Our Story */}
        <div className="nb-about__story">
          <h3>Our Story</h3>
          <p>
            Native Bounty was born from witnessing firsthand the challenges
            smallholder farmers face in getting their produce to market efficiently.
            Our founder, Sarah Chen, spent years working with farming communities
            and saw how much food was lost between harvest and market due to
            inadequate logistics infrastructure.
          </p>
          <p>
            In 2018, we started with a simple pilot program connecting 50 farmers
            to 3 local markets. Today, we've expanded to serve over 5,000 farmers
            across 5 regions, with plans to grow further. Our journey has been
            guided by the principle that sustainable agriculture requires not
            just good farming practices, but also efficient market connections.
          </p>
        </div>

        {/* Values Section */}
        <div className="nb-about__values">
          <h3>Our Values</h3>
          <div className="nb-about__values-grid">
            <div className="nb-about__value-card">
              <h4>Fairness</h4>
              <p>We ensure farmers receive fair compensation for their produce by creating transparent market connections.</p>
            </div>
            <div className="nb-about__value-card">
              <h4>Sustainability</h4>
              <p>Our systems are designed to minimize waste and environmental impact while maximizing economic sustainability.</p>
            </div>
            <div className="nb-about__value-card">
              <h4>Innovation</h4>
              <p>We continuously evolve our logistics systems using technology and data to improve efficiency.</p>
            </div>
            <div className="nb-about__value-card">
              <h4>Community</h4>
              <p>We believe in strengthening farming communities by creating economic opportunities and supporting local networks.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="nb-about__team">
          <h3>Our Leadership Team</h3>
          <div className="nb-about__team-grid">
            <div className="nb-about__team-member">
              <div className="nb-about__team-image">
                <img src={TeamImg} alt="Sarah Chen" />
              </div>
              <h4>Sarah Chen</h4>
              <p>Founder & CEO</p>
              <p>With over 15 years in agricultural development, Sarah leads our vision and strategy.</p>
            </div>
            <div className="nb-about__team-member">
              <div className="nb-about__team-image">
                <img src={TeamImg} alt="Michael Rodriguez" />
              </div>
              <h4>Michael Rodriguez</h4>
              <p>Chief Operations Officer</p>
              <p>Michael oversees our logistics operations and ensures efficiency across all regions.</p>
            </div>
            <div className="nb-about__team-member">
              <div className="nb-about__team-image">
                <img src={TeamImg} alt="Aisha Patel" />
              </div>
              <h4>Aisha Patel</h4>
              <p>Chief Technology Officer</p>
              <p>Aisha leads our technology development, creating innovative solutions for agricultural logistics.</p>
            </div>
            <div className="nb-about__team-member">
              <div className="nb-about__team-image">
                <img src={TeamImg} alt="James Wilson" />
              </div>
              <h4>James Wilson</h4>
              <p>Director of Farmer Relations</p>
              <p>James manages our relationships with farming communities and ensures their needs are met.</p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="nb-about__impact">
          <h3>Our Impact</h3>
          <div className="nb-about__row">
            <div className="nb-about__image">
              <img src={ImpactImg} alt="Our impact in farming communities" />
            </div>
            <div className="nb-about__content">
              <div className="nb-about__stats">
                <div className="nb-about__stat">
                  <h4>5,000+</h4>
                  <p>Farmers Served</p>
                </div>
                <div className="nb-about__stat">
                  <h4>40%</h4>
                  <p>Reduction in Food Waste</p>
                </div>
                <div className="nb-about__stat">
                  <h4>25%</h4>
                  <p>Average Income Increase</p>
                </div>
                <div className="nb-about__stat">
                  <h4>5</h4>
                  <p>Regions Covered</p>
                </div>
              </div>
              <p>
                Through our structured logistics systems, we've significantly reduced
                post-harvest losses, increased farmer incomes, and created more reliable
                food supply chains. Our impact extends beyond just logistics – we're
                helping build sustainable farming communities for the future.
              </p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="nb-about__partners">
          <h3>Our Partners</h3>
          <p>We collaborate with organizations that share our vision for sustainable agriculture and fair food systems.</p>
          <div className="nb-about__partners-grid">
            <div className="nb-about__partner-logo">Partner 1</div>
            <div className="nb-about__partner-logo">Partner 2</div>
            <div className="nb-about__partner-logo">Partner 3</div>
            <div className="nb-about__partner-logo">Partner 4</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="nb-about__cta">
          <h3>Join Us in Revolutionizing Agricultural Logistics</h3>
          <p>Whether you're a farmer, buyer, or potential partner, we'd love to hear from you.</p>
          <button className="nb-about__cta-button">Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default About;