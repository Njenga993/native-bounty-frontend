import { Helmet } from "react-helmet-async";
import heroImage from "../assets/vegetables.jpg";
import "../styles/hero.css";

const Hero = () => {
  // Structured data for Local Business/Organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Native Bounty",
    description:
      "Reliable, structured logistics that link organic farmers directly to buyers, reducing post-harvest losses and guaranteeing timely, fresh delivery.",
    url: "https://nativebounty.co.ke",
    logo: "https://nativebounty.co.ke/logo.png",
    sameAs: [
      "https://www.facebook.com/nativebounty",
      "https://twitter.com/nativebounty",
      "https://www.instagram.com/nativebounty",
      "https://www.linkedin.com/company/nativebounty",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "KE",
      addressRegion: "Nairobi",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254-XXX-XXX-XXX",
      contactType: "customer service",
      availableLanguage: ["English", "Swahili"],
    },
    areaServed: {
      "@type": "State",
      name: "Kenya",
    },
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "25",
    },
  };

  // Additional structured data for Service
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Agricultural Logistics",
    provider: {
      "@type": "Organization",
      name: "Native Bounty",
    },
    description:
      "Connecting organic farmers to markets through reliable logistics solutions",
    areaServed: "Kenya",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Agricultural Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Farm-to-Market Logistics",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Post-Harvest Management",
          },
        },
      ],
    },
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Home - Native Bounty | Connecting Kenyan Farmers to Markets |
          Agricultural Logistics
        </title>
        <meta
          name="title"
          content="Native Bounty | Connecting Kenyan Farmers to Markets | Agricultural Logistics"
        />
        <meta
          name="description"
          content="Native Bounty provides reliable, structured logistics connecting organic farmers directly to buyers. Reduce post-harvest losses with guaranteed timely delivery across 35+ market routes in Kenya."
        />
        <meta
          name="keywords"
          content="farmers, organic farming, agricultural logistics, farm to market, post-harvest management, Kenyan farmers, fresh produce delivery, agricultural supply chain"
        />
        <meta name="author" content="Native Bounty" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://nativebounty.co.ke" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nativebounty.co.ke" />
        <meta
          property="og:title"
          content="Native Bounty | Connecting Kenyan Farmers to Markets"
        />
        <meta
          property="og:description"
          content="Reliable agricultural logistics linking organic farmers directly to buyers. Serving 500+ farmers across 35+ market routes with 98% on-time delivery."
        />
        <meta property="og:image" content={heroImage} />
        <meta
          property="og:image:alt"
          content="Fresh organic vegetables from Kenyan farmers"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Native Bounty" />
        <meta property="og:locale" content="en_KE" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://nativebounty.co.ke" />
        <meta
          name="twitter:title"
          content="Native Bounty | Connecting Kenyan Farmers to Markets"
        />
        <meta
          name="twitter:description"
          content="Reliable agricultural logistics linking organic farmers directly to buyers. Reduce post-harvest losses with guaranteed timely delivery."
        />
        <meta name="twitter:image" content={heroImage} />
        <meta
          name="twitter:image:alt"
          content="Fresh organic vegetables from Kenyan farmers"
        />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.286389;36.817223" />
        <meta name="ICBM" content="-1.286389, 36.817223" />

        {/* Mobile Optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#4CAF50" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceStructuredData)}
        </script>

        {/* Preload critical assets */}
        <link rel="preload" as="image" href={heroImage} />
      </Helmet>

      <section
        className="nb-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-label="Hero section - Native Bounty agricultural logistics platform"
      >
        {/* Floating content card — left-anchored, no overlay */}
        <div className="nb-hero__card">
          <span className="nb-hero__eyebrow">
            <span className="nb-hero__eyebrow-line" aria-hidden="true" />
            Native Bounty
          </span>

          <h1 className="nb-hero__title">
            Connecting
            <br />
            Farmers to
            <br />
            <span className="nb-hero__title-accent">Markets.</span>
          </h1>

          <p className="nb-hero__description">
            Reliable, structured logistics that link organic farmers directly to
            buyers reducing post-harvest losses and guaranteeing timely, fresh
            delivery every time.
          </p>

          <div className="nb-hero__actions">
            <button
              className="nb-btn nb-btn--primary"
              aria-label="Get started with Native Bounty"
            >
              Get Started
            </button>
            <button
              className="nb-btn nb-btn--ghost"
              aria-label="Learn more about Native Bounty services"
            >
              Learn More
            </button>
          </div>

          <div className="nb-hero__divider" aria-hidden="true" />

          <div className="nb-hero__stats">
            <div className="nb-hero__stat">
              <strong aria-label="500 plus farmers">500+</strong>
              <span>Farmers Served</span>
            </div>
            <div className="nb-hero__stat-sep" aria-hidden="true" />
            <div className="nb-hero__stat">
              <strong aria-label="35 plus market routes">35+</strong>
              <span>Market Routes</span>
            </div>
            <div className="nb-hero__stat-sep" aria-hidden="true" />
            <div className="nb-hero__stat">
              <strong aria-label="98 percent on-time delivery">98%</strong>
              <span>On-Time Delivery</span>
            </div>
          </div>
        </div>

        {/* Bottom-right live badge */}
        <div className="nb-hero__badge">
          <div className="nb-hero__badge-dot" aria-hidden="true" />
          <span>Live network — 12 counties covered</span>
        </div>
      </section>
    </>
  );
};

export default Hero;
