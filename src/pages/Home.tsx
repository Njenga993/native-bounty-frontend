import "../styles/home.css";

const Home = () => {
  return (
    <main className="nb-home">
      {/* Hero Section */}
      <section className="nb-home__hero">
        <div className="nb-home__hero-content">
          <h1>From Farm to Market, Seamlessly</h1>
          <p>
            Native Bounty is building a reliable logistics network that connects
            farmers to markets through efficient, transparent, and sustainable
            produce movement.
          </p>
          <button>Learn More</button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="nb-home__intro">
        <h2>Why Native Bounty?</h2>
        <p>
          Smallholder farmers lose value due to inefficient supply chains.
          Native Bounty bridges that gap by offering tailored logistics solutions
          designed specifically for agricultural produce.
        </p>
      </section>
    </main>
  );
};

export default Home;