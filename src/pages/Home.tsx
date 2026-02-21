import Hero from "../components/Hero";
import "../styles/home.css";
// Other components will be added later
import About from "../components/About";
import Services from "../components/Services";
import SupplyChain from "../components/SupplyChain";
import ImpactMetrics from "../components/ImpactMetrics";
import Coverage from "../components/Coverage";
import ContactFAQ from "../components/ContactFAQ";
// import Features from "../components/Features";
// import HowItWorks from "../components/HowItWorks";
// import Stats from "../components/Stats";
// import Testimonials from "../components/Testimonials";
// import CTA from "../components/CTA";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <Hero />
      {/* Other components will go here as we build them */}
      <About />
      <Services />
      <SupplyChain />
      <ImpactMetrics />
      <Coverage />
      <ContactFAQ />
      {/*<Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer /> */}
    </main>
  );
};

export default Home;