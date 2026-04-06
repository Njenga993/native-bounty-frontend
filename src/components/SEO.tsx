import { Helmet } from "react-helmet-async";

interface SEOProps {
  page: "home" | "about" | "services" | "contact" | "network";
}

const SEO = ({ page }: SEOProps) => {
  // Base configuration
  const siteUrl = "https://www.nativebounty.co.ke";
  const siteName = "Native Bounty";
  const defaultImage = `${siteUrl}/assets/og-image.jpg`;

  // Page-specific configurations
  const pageConfig = {
    home: {
      title:
        "Native Bounty | Connecting Kenyan Farmers to Markets | Agricultural Logistics",
      description:
        "Native Bounty connects organic farmers directly to buyers through reliable logistics. Reduce post-harvest losses with 98% on-time delivery across 35+ market routes in Kenya. Join 500+ farmers already in our network.",
      keywords:
        "Native Bounty, farmers Kenya, agricultural logistics, farm to market, organic farming Kenya, post-harvest loss reduction, Kenyan agriculture",
      canonical: "/",
      ogType: "website",
    },
    about: {
      title:
        "About Native Bounty | Revolutionizing Agricultural Supply Chains in Kenya",
      description:
        "Learn how Native Bounty is transforming agricultural logistics in Kenya. Founded 2018, we've helped 500+ farmers across 12 counties reduce waste by 40% and increase income by 25%.",
      keywords:
        "Native Bounty about, agricultural logistics company Kenya, Kenyan agritech, farm supply chain, smallholder farmers Kenya",
      canonical: "/about",
      ogType: "website",
    },
    services: {
      title:
        "Our Services | Agricultural Logistics & Farm-to-Market Solutions | Native Bounty",
      description:
        "Explore Native Bounty's agricultural logistics services: structured aggregation, real-time delivery tracking, and market connections for Kenyan farmers. Reduce post-harvest losses and increase income.",
      keywords:
        "agricultural logistics services Kenya, farm to market solutions, produce aggregation, farmer logistics, Kenyan agribusiness",
      canonical: "/services",
      ogType: "website",
    },
    contact: {
      title:
        "Contact Native Bounty | Partner With Us | Kenyan Agricultural Logistics",
      description:
        "Get in touch with Native Bounty to partner, inquire about services, or join our network of 500+ farmers across Kenya. We're building the future of agricultural logistics.",
      keywords:
        "contact Native Bounty, partner with us, Kenyan agricultural logistics, farmer network Kenya",
      canonical: "/contact",
      ogType: "website",
    },
    network: {
      title: "Our Network | Native Bounty's Farmer & Partner Network in Kenya",
      description:
        "Discover Native Bounty's growing network of 500+ farmers across 12 Kenyan counties. Join our agricultural logistics ecosystem and connect to reliable markets.",
      keywords:
        "Native Bounty network, farmer network Kenya, agricultural partners, Kenyan agribusiness network",
      canonical: "/network",
      ogType: "website",
    },
  };

  const config = pageConfig[page];
  const fullUrl = `${siteUrl}${config.canonical}`;

  // Organization Structured Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Native Bounty",
    url: siteUrl,
    logo: `${siteUrl}/assets/native-bounty-logo.jpeg`,
    description:
      "Agricultural logistics company connecting Kenyan farmers to markets through reliable, transparent supply chains.",
    foundingDate: "2018",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@nativebounty.co.ke",
      availableLanguage: ["English", "Swahili"],
    },
    sameAs: [
      "https://www.facebook.com/nativebounty",
      "https://twitter.com/nativebounty",
      "https://www.instagram.com/nativebounty",
      "https://www.linkedin.com/company/nativebounty",
    ],
  };

  // Website Structured Data
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: config.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // Local Business Schema (for Kenyan operations)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Native Bounty",
    description: "Agricultural logistics and farm-to-market services in Kenya",
    url: siteUrl,
    telephone: "+254700000000",
    email: "info@nativebounty.co.ke",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi County",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-1.286389",
      longitude: "36.817223",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    priceRange: "$$",
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="en" />
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords} />
      <meta name="author" content="Native Bounty" />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={config.ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_KE" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:image" content={defaultImage} />

      {/* Geo Tags for Kenyan SEO */}
      <meta name="geo.region" content="KE" />
      <meta name="geo.placename" content="Nairobi, Kenya" />
      <meta name="geo.position" content="-1.286389;36.817223" />
      <meta name="ICBM" content="-1.286389, 36.817223" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#4CAF50" />
      <meta name="format-detection" content="telephone=no" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
