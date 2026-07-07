import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import HowItWorks from "../components/HowItWorks";
import Operations from "../components/Operations";
import BasketTiers from "../components/BasketTiers";
// import Coverage from "../components/Coverage";
// import Features from "../components/Features";
// import HowItWorks from "../components/HowItWorks";
// import Stats from "../components/Stats";
// import Testimonials from "../components/Testimonials";
// import CTA from "../components/CTA";
// import Footer from "../components/Footer";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      {/* ✅ SEO: Must sit outside <main> so Helmet can hoist it into <head> */}
      <SEO page="home" />

      <main id="main-content" aria-label="Native Bounty home page">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <Hero />

        {/* ── Problem ─────────────────────────────────────────────────────── */}
        <Problem />

        {/* ── How It Works ──────────────────────────────────────────────── */}
        <HowItWorks />

        {/* ── Operations ──────────────────────────────────────────────── */}
        <Operations />

        {/* ── Impact Metrics ────────────────────────────────────────────── */}
        <BasketTiers />

        {/* <Coverage /> */}


        {/* Components to be uncommented as they are built:
          <Features />
          <HowItWorks />
          <Stats />
          <Testimonials />
          <CTA />
          <Footer />
        */}
      </main>
    </>
  );
};

export default Home;
