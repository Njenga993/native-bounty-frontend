import React, { useState } from "react";
import "../styles/servicespage.css";
import {
  Truck,
  PackageCheck,
  Network,
  ClipboardCheck,
  Building2,
  Users,
  TrendingUp,
  Clock,
  MapPin,
  Shield,
  BarChart,
  ChevronDown,
  ChevronUp,
  CheckCircle
} from "lucide-react";

const servicesData = [
  {
    icon: <PackageCheck size={40} />,
    title: "Produce Aggregation",
    description:
      "We consolidate harvests from multiple farmers to ensure consistent volumes and reliable supply for bulk buyers.",
    features: [
      "Quality assessment at collection points",
      "Standardized packaging and labeling",
      "Temperature-controlled storage facilities",
      "Real-time inventory tracking"
    ]
  },
  {
    icon: <Truck size={40} />,
    title: "Farm-to-Market Logistics",
    description:
      "Coordinated transportation from farms to urban centers with scheduled pickups and timely delivery.",
    features: [
      "Optimized route planning",
      "GPS-enabled fleet tracking",
      "Temperature-controlled transportation",
      "Flexible scheduling options"
    ]
  },
  {
    icon: <Network size={40} />,
    title: "Market Linkage",
    description:
      "Direct connections between farmers and retailers, reducing inefficiencies and improving pricing transparency.",
    features: [
      "Digital marketplace platform",
      "Price transparency tools",
      "Direct buyer-seller negotiations",
      "Market trend analytics"
    ]
  },
  {
    icon: <ClipboardCheck size={40} />,
    title: "Quality Control & Sorting",
    description:
      "Standardized grading and packaging processes to ensure consistent quality before dispatch.",
    features: [
      "Industry-standard grading system",
      "Automated sorting technology",
      "Quality certification process",
      "Traceability documentation"
    ]
  },
  {
    icon: <Building2 size={40} />,
    title: "Institutional Bulk Supply",
    description:
      "Reliable bulk deliveries tailored for supermarkets, hotels, schools, and restaurants.",
    features: [
      "Customized supply contracts",
      "Consistent delivery schedules",
      "Volume-based pricing",
      "Dedicated account management"
    ]
  }
];

const processSteps = [
  {
    title: "Registration & Onboarding",
    description: "Farmers and buyers register on our platform with complete verification."
  },
  {
    title: "Harvest Planning",
    description: "We work with farmers to plan harvest schedules based on market demand."
  },
  {
    title: "Collection & Aggregation",
    description: "Produce is collected from farms and aggregated at our collection centers."
  },
  {
    title: "Quality Assurance",
    description: "All produce undergoes quality checks and grading according to standards."
  },
  {
    title: "Logistics & Distribution",
    description: "Optimized transportation ensures timely delivery to buyers."
  },
  {
    title: "Payment & Feedback",
    description: "Transparent payment processing and feedback collection for continuous improvement."
  }
];

const benefits = [
  {
    icon: <TrendingUp size={32} />,
    title: "Increased Revenue",
    description: "Farmers typically see 25-40% increase in income through better market access."
  },
  {
    icon: <Clock size={32} />,
    title: "Time Efficiency",
    description: "Reduce time spent on logistics by up to 70%, allowing focus on farming."
  },
  {
    icon: <Shield size={32} />,
    title: "Risk Mitigation",
    description: "Minimize post-harvest losses and market price fluctuations through our system."
  },
  {
    icon: <Users size={32} />,
    title: "Market Access",
    description: "Connect with verified buyers across multiple regions without intermediaries."
  },
  {
    icon: <BarChart size={32} />,
    title: "Data Insights",
    description: "Access market trends and pricing data to make informed farming decisions."
  },
  {
    icon: <MapPin size={32} />,
    title: "Expanded Reach",
    description: "Sell to markets beyond your local area without logistical challenges."
  }
];

const faqData = [
  {
    question: "How do I register as a farmer?",
    answer: "You can register through our online portal or visit one of our collection centers. You'll need to provide identification, farm location details, and information about your typical crops and harvest volumes."
  },
  {
    question: "What are the quality standards for produce?",
    answer: "We follow industry-standard grading based on size, appearance, ripeness, and absence of defects. Our quality team provides guidelines and training to help farmers meet these standards."
  },
  {
    question: "How and when do I receive payment?",
    answer: "Payments are processed within 48 hours of delivery to buyers. You can choose to receive payment via bank transfer, mobile money, or direct deposit. All transactions are transparent and documented."
  },
  {
    question: "What regions do you currently serve?",
    answer: "We currently operate in five regions with plans to expand. Check our coverage map or contact our team to confirm service availability in your area."
  },
  {
    question: "Is there a minimum quantity requirement?",
    answer: "We work with farms of all sizes. For smaller farms, we aggregate produce from multiple farmers to meet minimum order requirements from buyers."
  }
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section className="ns-services-page">
      <div className="ns-services-container">
        {/* Hero Section */}
        <div className="ns-services-hero">
          <h1>Our Agricultural Logistics Services</h1>
          <p>
            We streamline agricultural supply chains by connecting farmers to
            markets through efficient aggregation, logistics, and distribution.
          </p>
        </div>

        {/* Service Categories */}
        <div className="ns-service-categories">
          <div className="ns-category-tabs">
            {["All Services", "For Farmers", "For Buyers", "Value-Added"].map((category, index) => (
              <button
                key={index}
                className={`ns-category-tab ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="ns-services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="ns-service-card">
              <div className="ns-service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="ns-service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="ns-learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="ns-process-section">
          <div className="ns-section-header">
            <h2>How Our Service Works</h2>
            <p>Our streamlined process ensures efficiency from farm to market</p>
          </div>
          <div className="ns-process-flow">
            {processSteps.map((step, index) => (
              <div key={index} className="ns-process-step">
                <div className="ns-step-number">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="ns-step-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="ns-benefits-section">
          <div className="ns-section-header">
            <h2>Why Choose Native Bounty</h2>
            <p>Transform your agricultural business with our comprehensive services</p>
          </div>
          <div className="ns-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="ns-benefit-card">
                <div className="ns-benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="ns-case-studies">
          <div className="ns-section-header">
            <h2>Success Stories</h2>
            <p>Real impact in agricultural communities</p>
          </div>
          <div className="ns-case-studies-grid">
            <div className="ns-case-study">
              <div className="ns-case-study-image">
                <img src="https://picsum.photos/seed/farmer1/600/400.jpg" alt="Farmer success story" />
              </div>
              <div className="ns-case-study-content">
                <h3>Small Farm, Big Impact</h3>
                <p className="ns-case-study-subtitle">Maria's Vegetable Farm</p>
                <p>
                  "Before Native Bounty, I struggled to sell my produce beyond the local market. 
                  Now I supply to three major supermarkets and my income has increased by 40%."
                </p>
                <div className="ns-case-study-metrics">
                  <div className="ns-metric">
                    <span className="ns-metric-value">40%</span>
                    <span className="ns-metric-label">Income Increase</span>
                  </div>
                  <div className="ns-metric">
                    <span className="ns-metric-value">3x</span>
                    <span className="ns-metric-label">Market Reach</span>
                  </div>
                  <div className="ns-metric">
                    <span className="ns-metric-value">70%</span>
                    <span className="ns-metric-label">Time Saved</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ns-case-study">
              <div className="ns-case-study-image">
                <img src="https://picsum.photos/seed/buyer1/600/400.jpg" alt="Buyer success story" />
              </div>
              <div className="ns-case-study-content">
                <h3>Reliable Supply Chain</h3>
                <p className="ns-case-study-subtitle">FreshMart Supermarkets</p>
                <p>
                  "Native Bounty has transformed our produce sourcing. We now have consistent quality 
                  and supply, reducing stockouts by 90% and improving customer satisfaction."
                </p>
                <div className="ns-case-study-metrics">
                  <div className="ns-metric">
                    <span className="ns-metric-value">90%</span>
                    <span className="ns-metric-label">Fewer Stockouts</span>
                  </div>
                  <div className="ns-metric">
                    <span className="ns-metric-value">25%</span>
                    <span className="ns-metric-label">Cost Reduction</span>
                  </div>
                  <div className="ns-metric">
                    <span className="ns-metric-value">30%</span>
                    <span className="ns-metric-label">Waste Reduction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="ns-faq-section">
          <div className="ns-section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our services</p>
          </div>
          <div className="ns-faq-list">
            {faqData.map((faq, index) => (
              <div key={index} className="ns-faq-item">
                <button
                  className="ns-faq-question"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  {expandedFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <div className={`ns-faq-answer ${expandedFaq === index ? "expanded" : ""}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="ns-services-cta">
          <div className="ns-cta-content">
            <h2>Ready to Transform Your Agricultural Business?</h2>
            <p>Join thousands of farmers and buyers who trust Native Bounty</p>
            <div className="ns-cta-buttons">
              <button className="ns-btn-primary">Partner as Farmer</button>
              <button className="ns-btn-outline">Request Supply</button>
            </div>
            <p className="ns-contact-info">
              Or call us directly at <a href="tel:1234567890">1-800-BOUNTY</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;