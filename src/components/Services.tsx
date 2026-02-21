// components/Services.tsx
import React from "react";
import "../styles/services.css";
import {
  Truck,
  PackageCheck,
  Network,
  ClipboardCheck,
  Building2
} from "lucide-react";

const servicesData = [
  {
    icon: <PackageCheck size={40} />,
    title: "Produce Aggregation",
    description:
      "We consolidate harvests from multiple farmers to ensure consistent volumes and reliable supply for bulk buyers."
  },
  {
    icon: <Truck size={40} />,
    title: "Farm-to-Market Logistics",
    description:
      "Coordinated transportation from farms to urban centers with scheduled pickups and timely delivery."
  },
  {
    icon: <Network size={40} />,
    title: "Market Linkage",
    description:
      "Direct connections between farmers and retailers, reducing inefficiencies and improving pricing transparency."
  },
  {
    icon: <ClipboardCheck size={40} />,
    title: "Quality Control & Sorting",
    description:
      "Standardized grading and packaging processes to ensure consistent quality before dispatch."
  },
  {
    icon: <Building2 size={40} />,
    title: "Institutional Bulk Supply",
    description:
      "Reliable bulk deliveries tailored for supermarkets, hotels, schools, and restaurants."
  }
];

const Services: React.FC = () => {
  return (
    <section className="nb-services-section">
      <div className="nb-services-container">
        <div className="nb-services-header">
          <h2>Our Services</h2>
          <p>
            We streamline agricultural supply chains by connecting farmers to
            markets through efficient aggregation, logistics, and distribution.
          </p>
        </div>

        <div className="nb-services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="nb-service-card">
              <div className="nb-service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="nb-services-cta">
          <h4>Ready to partner with Native Bounty?</h4>
          <div className="nb-services-buttons">
            <button className="nb-btn-primary">Partner as Farmer</button>
            <button className="nb-btn-outline">Request Supply</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;