// components/SupplyChain.tsx
import React from "react";
import "../styles/supplychain.css";
import { UserPlus, PackageSearch, Truck, Store } from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={36} />,
    title: "Farmer Onboarding",
    description:
      "We register farmers and verify available produce to ensure consistent and reliable supply."
  },
  {
    icon: <PackageSearch size={36} />,
    title: "Aggregation & Sorting",
    description:
      "Harvests are collected, graded, and consolidated to meet market volume requirements."
  },
  {
    icon: <Truck size={36} />,
    title: "Logistics Coordination",
    description:
      "Efficient route planning and scheduled transport ensure timely delivery."
  },
  {
    icon: <Store size={36} />,
    title: "Delivery to Market",
    description:
      "Fresh produce is delivered directly to retailers, hotels, and institutional buyers."
  }
];

const SupplyChain: React.FC = () => {
  return (
    <section className="nb-sc-section">
      <div className="nb-sc-container">
        <div className="nb-sc-header">
          <h2>How Our Supply Chain Works</h2>
          <p>
            From farm to market, we manage every stage of the agricultural
            supply chain with structure, transparency, and efficiency.
          </p>
        </div>

        <div className="nb-sc-grid">
          {steps.map((step, index) => (
            <div key={index} className="nb-sc-card">
              <div className="nb-sc-number">{index + 1}</div>
              <div className="nb-sc-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupplyChain;