import { Helmet } from "react-helmet-async";
import heroImage from "../assets/mercy25.jpeg";
import "../styles/hero.css";

const Hero = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Native Bounty",
    description:
      "A Kenyan agribusiness promoting indigenous foods through a subscription basket model, connecting smallholder farmers directly with households, institutions, and businesses.",
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
    areaServed: { "@type": "State", name: "Kenya" },
    foundingDate: "2024",
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Indigenous Food Basket Subscriptions",
    provider: { "@type": "Organization", name: "Native Bounty" },
    description:
      "Weekly, fortnightly, and monthly subscription baskets of indigenous vegetables, fruits, herbs, and root crops sourced directly from trained smallholder farmers.",
    areaServed: "Kenya",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Basket Subscriptions",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Household Basket" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Premium Basket" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Institutional Basket" } },
      ],
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Home - Native Bounty | Indigenous Foods, Delivered Fresh | Kenya
        </title>
        <meta
          name="title"
          content="Native Bounty | Growing Indigenous Foods, Nourishing Communities"
        />
        <meta
          name="description"
          content="Native Bounty connects Kenyan smallholder farmers to households and institutions through a subscription basket model — fresh indigenous vegetables, fruits, herbs, and root crops, delivered weekly, fortnightly, or monthly."
        />
        <meta
          name="keywords"
          content="indigenous foods, organic basket subscription, Kenyan farmers, smallholder farmers, biodiversity conservation, sustainable agriculture, fresh produce delivery Kenya"
        />
        <meta name="author" content="Native Bounty" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://nativebounty.co.ke" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nativebounty.co.ke" />
        <meta
          property="og:title"
          content="Native Bounty | Growing Indigenous Foods, Nourishing Communities"
        />
        <meta
          property="og:description"
          content="A subscription basket model connecting Kenyan smallholder farmers directly with households and institutions — fresh, healthy, indigenous produce, delivered."
        />
        <meta property="og:image" content={heroImage} />
        <meta property="og:image:alt" content="Fresh indigenous vegetables from Kenyan smallholder farmers" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Native Bounty" />
        <meta property="og:locale" content="en_KE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://nativebounty.co.ke" />
        <meta name="twitter:title" content="Native Bounty | Growing Indigenous Foods, Nourishing Communities" />
        <meta
          name="twitter:description"
          content="Fresh indigenous produce, delivered through basket subscriptions — connecting Kenyan farmers directly to your table."
        />
        <meta name="twitter:image" content={heroImage} />
        <meta name="twitter:image:alt" content="Fresh indigenous vegetables from Kenyan smallholder farmers" />

        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.286389;36.817223" />
        <meta name="ICBM" content="-1.286389, 36.817223" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#152E1E" />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceStructuredData)}</script>
        <link rel="preload" as="image" href={heroImage} />
      </Helmet>

      <section className="nb-hero" aria-label="Hero section - Native Bounty indigenous food baskets">
        <div className="nb-hero__inner">
          {/* ── Left: copy ── */}
          <div className="nb-hero__content">
            <span className="nb-hero__eyebrow">
              <span className="nb-hero__eyebrow-line" aria-hidden="true" />
              Native Bounty
            </span>

            <h1 className="nb-hero__title">
              Rooted in
              <br />
              Tradition, Delivered
              <br />
              <span className="nb-hero__title-accent">Fresh.</span>
            </h1>

            <p className="nb-hero__description">
              We connect Kenya's smallholder farmers directly with households and
              institutions through a subscription basket model — fresh, healthy,
              indigenous produce that nourishes communities and creates fair,
              dependable markets for the people who grow it.
            </p>

            <div className="nb-hero__actions">
              <button className="nb-btn nb-btn--primary" aria-label="Subscribe to a Native Bounty basket">
                Subscribe to a Basket
              </button>
              <button className="nb-btn nb-btn--ghost" aria-label="Read the Native Bounty story">
                Our Story
              </button>
            </div>

            <div className="nb-hero__divider" aria-hidden="true" />

            <div className="nb-hero__stats">
              <div className="nb-hero__stat">
                <strong>Household</strong>
                <span>Basket Tier</span>
              </div>
              <div className="nb-hero__stat-sep" aria-hidden="true" />
              <div className="nb-hero__stat">
                <strong>Premium</strong>
                <span>Basket Tier</span>
              </div>
              <div className="nb-hero__stat-sep" aria-hidden="true" />
              <div className="nb-hero__stat">
                <strong>Institutional</strong>
                <span>Basket Tier</span>
              </div>
            </div>
          </div>

          {/* ── Right: visual ── */}
          <div className="nb-hero__visual">
            <div className="nb-hero__shape" aria-hidden="true" />
            <div className="nb-hero__image-frame">
              <img
                src={heroImage}
                alt="Fresh indigenous vegetables from Kenyan smallholder farmers"
                className="nb-hero__image"
              />
            </div>
            <div className="nb-hero__badge">
              <div className="nb-hero__badge-dot" aria-hidden="true" />
              <span>Sourced from trained smallholder farmers</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;