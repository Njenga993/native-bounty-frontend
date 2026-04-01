import SEO from "../components/SEO";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import SupplyChain from "../components/SupplyChain";
import ImpactMetrics from "../components/ImpactMetrics";
// import Coverage from "../components/Coverage";
import ContactFAQ from "../components/ContactFAQ";
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

        {/* ── About ─────────────────────────────────────────────────────── */}
        <About />

        {/* ── Services ──────────────────────────────────────────────────── */}
        <Services />

        {/* ── Supply Chain ──────────────────────────────────────────────── */}
        <SupplyChain />

        {/* ── Impact Metrics ────────────────────────────────────────────── */}
        <ImpactMetrics />

        {/* <Coverage /> */}

        {/* ── Contact / FAQ ─────────────────────────────────────────────── */}
        <ContactFAQ />

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
