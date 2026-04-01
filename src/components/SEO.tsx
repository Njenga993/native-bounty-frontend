/**
 * Native Bounty — SEO Component (TypeScript)
 * -----------------------------------------
 * Drop <SEO /> at the top of every page.
 * Requires: npm install react-helmet-async
 * Requires: npm install -D @types/react-helmet (if needed)
 */

import { Helmet } from "react-helmet-async";

// ─── 1. TYPES ───────────────────────────────────────────────────────────────

interface SchemaObject {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

interface PagePreset {
  title: string;
  description: string;
  canonical: string;
  keywords: string;
  schema: SchemaObject;
}

type PageKey = "home" | "about" | "services" | "farmers" | "buyers" | "contact";

interface SEOProps {
  /** Use a preset key from PAGE_PRESETS (e.g. page="home") */
  page?: PageKey;
  /** Override any preset field individually */
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  /** Absolute URL or root-relative path to OG image (1200×630 px recommended) */
  image?: string;
  schema?: SchemaObject;
  /** Set true to block indexing — use on /login, /thank-you, etc. */
  noIndex?: boolean;
}

// ─── 2. SITE-WIDE DEFAULTS ──────────────────────────────────────────────────

const SITE = {
  name: "Native Bounty",
  tagline: "Connecting Farmers to Markets",
  url: "https://www.nativebounty.co.ke", // ← update before going live
  logo: "https://www.nativebounty.co.ke/native_StoreLogo.png", // ← update before going live
  defaultImage: "https://www.nativebounty.co.ke/native_StoreLogo.png", // 1200×630 px
  twitterHandle: "@NativeBounty",
  themeColor: "#2d6a4f",
  locale: "en_KE",
  language: "en",
} as const;

// ─── 3. PER-PAGE PRESETS ────────────────────────────────────────────────────

const PAGE_PRESETS: Record<PageKey, PagePreset> = {
  home: {
    title: "Native Bounty | Farm-to-Market Logistics in Kenya",
    description:
      "Native Bounty connects organic farmers directly to buyers across Kenya. Reliable logistics, 35+ market routes, 98% on-time delivery. Reduce post-harvest losses today.",
    canonical: "/",
    keywords:
      "farm to market Kenya, organic farmers Kenya, agricultural logistics, fresh produce delivery, post-harvest logistics, farmer market connection Kenya",
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: SITE.logo,
      description:
        "Farm-to-market logistics platform connecting 500+ organic farmers to buyers across 12 counties in Kenya.",
      areaServed: { "@type": "Country", name: "Kenya" },
      foundingLocation: { "@type": "Place", name: "Kenya" },
      knowsAbout: [
        "organic farming",
        "farm-to-market logistics",
        "fresh produce delivery",
        "agricultural supply chain",
        "post-harvest management",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "500",
      },
      sameAs: [
        "https://twitter.com/NativeBounty",
        "https://www.linkedin.com/company/nativebounty",
      ],
    },
  },

  about: {
    title: "About Us | Native Bounty — Our Mission & Story",
    description:
      "Learn how Native Bounty is transforming agricultural supply chains in Kenya by bridging the gap between 500+ smallholder farmers and modern markets.",
    canonical: "/about",
    keywords:
      "about Native Bounty, agricultural startup Kenya, smallholder farmers, farm logistics mission, agri-tech Kenya",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Native Bounty",
      url: `${SITE.url}/about`,
      description:
        "Native Bounty's mission, story, and the team behind Kenya's leading farm-to-market logistics network.",
    },
  },

  services: {
    title: "Our Services | Native Bounty Farm Logistics & Market Routes",
    description:
      "Explore Native Bounty's logistics services: structured market routes, cold-chain delivery, farmer onboarding, and real-time tracking across 12 Kenyan counties.",
    canonical: "/services",
    keywords:
      "farm logistics services Kenya, cold chain delivery, fresh produce transport, market routes Kenya, agricultural delivery service",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Agricultural Logistics",
      provider: {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
      },
      areaServed: { "@type": "Country", name: "Kenya" },
      description:
        "Structured farm-to-market logistics including cold-chain delivery, route optimization, and buyer-seller matching for Kenyan farmers.",
    },
  },

  farmers: {
    title: "For Farmers | Join Native Bounty's Market Network",
    description:
      "Organic and smallholder farmers: sell directly to verified buyers, get fair prices, and eliminate middlemen. Join 500+ farmers on the Native Bounty network.",
    canonical: "/farmers",
    keywords:
      "farmers market Kenya, sell farm produce online Kenya, direct to buyer farming, smallholder farmer platform, organic farm sales Kenya",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "For Farmers — Native Bounty",
      url: `${SITE.url}/farmers`,
      description:
        "How Native Bounty helps organic and smallholder farmers access formal markets, get fair prices, and reduce post-harvest losses in Kenya.",
    },
  },

  buyers: {
    title: "For Buyers | Source Fresh Organic Produce | Native Bounty",
    description:
      "Retailers, restaurants, and wholesalers: source fresh, traceable organic produce directly from verified Kenyan farmers with guaranteed delivery.",
    canonical: "/buyers",
    keywords:
      "buy fresh produce Kenya, organic wholesale Kenya, farm produce sourcing, restaurant fresh supply Kenya, traceable produce Kenya",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "For Buyers — Native Bounty",
      url: `${SITE.url}/buyers`,
      description:
        "How Native Bounty connects retailers, restaurants, and wholesalers with verified Kenyan farmers for consistent fresh produce supply.",
    },
  },

  contact: {
    title: "Contact Us | Native Bounty — Get in Touch",
    description:
      "Have questions about joining Native Bounty's farmer or buyer network? Contact us today and our team will get back to you within 24 hours.",
    canonical: "/contact",
    keywords:
      "contact Native Bounty, Native Bounty Kenya support, farm logistics enquiry, join Native Bounty",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Native Bounty",
      url: `${SITE.url}/contact`,
      description: "Get in touch with the Native Bounty team.",
    },
  },
};

// ─── 4. COMPONENT ───────────────────────────────────────────────────────────

const SEO: React.FC<SEOProps> = ({
  page,
  title,
  description,
  canonical,
  keywords,
  image,
  schema,
  noIndex = false,
}) => {
  const preset = page ? PAGE_PRESETS[page] : ({} as Partial<PagePreset>);

  const resolvedTitle =
    title ?? preset.title ?? `${SITE.name} | ${SITE.tagline}`;
  const resolvedDescription = description ?? preset.description ?? "";
  const resolvedCanonical = canonical ?? preset.canonical ?? "/";
  const resolvedKeywords = keywords ?? preset.keywords ?? "";
  const resolvedImage = image ?? SITE.defaultImage;
  const resolvedSchema = schema ?? preset.schema ?? null;

  const fullUrl = `${SITE.url}${resolvedCanonical}`;
  const fullImageUrl = resolvedImage.startsWith("http")
    ? resolvedImage
    : `${SITE.url}${resolvedImage}`;

  return (
    <Helmet>
      {/* ── Core ─────────────────────────────────── */}
      <html lang={SITE.language} />
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      {resolvedKeywords && <meta name="keywords" content={resolvedKeywords} />}
      <link rel="canonical" href={fullUrl} />
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />
      <meta name="theme-color" content={SITE.themeColor} />
      <meta name="author" content={SITE.name} />

      {/* ── Open Graph (Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content={`${SITE.name} — ${SITE.tagline}`}
      />
      <meta property="og:locale" content={SITE.locale} />

      {/* ── Twitter Card ─────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitterHandle} />
      <meta name="twitter:creator" content={SITE.twitterHandle} />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta
        name="twitter:image:alt"
        content={`${SITE.name} — ${SITE.tagline}`}
      />

      {/* ── JSON-LD Structured Data ───────────────── */}
      {resolvedSchema && (
        <script type="application/ld+json">
          {JSON.stringify(resolvedSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
