// components/ImpactMetrics.tsx
import React from "react";
import "../styles/impactmetrics.css";
import { Users, Building2, Truck, TrendingUp } from "lucide-react";

const metrics = [
  {
    icon: <Users size={40} />,
    value: "150+",
    label: "Farmers Onboarded"
  },
  {
    icon: <Building2 size={40} />,
    value: "40+",
    label: "Institutional Buyers"
  },
  {
    icon: <Truck size={40} />,
    value: "25 Tons",
    label: "Delivered Monthly"
  },
  {
    icon: <TrendingUp size={40} />,
    value: "18%",
    label: "Post-Harvest Loss Reduction"
  }
];

const ImpactMetrics: React.FC = () => {
  return (
    <section className="nb-im-section">
      <div className="nb-im-container">
        <div className="nb-im-header">
          <h2>Our Impact & Performance</h2>
          <p>
            We measure success through farmer empowerment, reliable supply,
            and measurable improvements across the agricultural value chain.
          </p>
        </div>

        <div className="nb-im-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="nb-im-card">
              <div className="nb-im-icon">{metric.icon}</div>
              <h3>{metric.value}</h3>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;