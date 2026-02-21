// components/Coverage.tsx
import React from "react";
import "../styles/coverage.css";
import { MapPin, Package, Clock, Truck, Shield, TrendingUp } from "lucide-react";

const coverageRegions = [
  { name: "Nairobi Metro", counties: ["Nairobi", "Kiambu", "Kajiado", "Machakos"] },
  { name: "Coast Region", counties: ["Mombasa", "Kwale", "Kilifi", "Taita Taveta"] },
  { name: "Western Region", counties: ["Kisumu", "Kakamega", "Bungoma", "Busia"] },
  { name: "Rift Valley", counties: ["Nakuru", "Eldoret", "Kericho", "Bomet"] },
  { name: "Central Region", counties: ["Nyeri", "Murang'a", "Kirinyaga", "Nyandarua"] },
  { name: "Eastern Region", counties: ["Meru", "Embu", "Kitui", "Machakos"] }
];

const stats = [
  { value: "47+", label: "Counties Covered", icon: MapPin },
  { value: "24/7", label: "Operations", icon: Clock },
  { value: "98%", label: "On-Time Delivery", icon: TrendingUp }
];

const Coverage: React.FC = () => {
  return (
    <section className="logistics-coverage-section">
      <div className="logistics-coverage-container">
        {/* Header */}
        <div className="logistics-coverage-header">
          <span className="logistics-coverage-badge">NETWORK COVERAGE</span>
          <h2>Nationwide Logistics Network</h2>
          <p>
            Our extensive coverage ensures your cargo reaches every corner of Kenya. 
            From major cities to remote locations, we've got you covered.
          </p>
        </div>

        {/* Stats Section */}
        <div className="logistics-coverage-stats">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="logistics-stat-card">
                <div className="logistics-stat-icon">
                  <Icon size={24} />
                </div>
                <div className="logistics-stat-content">
                  <div className="logistics-stat-value">{stat.value}</div>
                  <div className="logistics-stat-label">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="logistics-coverage-grid">
          {/* Left Column - Coverage Map & Details */}
          <div className="logistics-coverage-left">
            {/* Map Representation */}
            <div className="logistics-coverage-map">
              <div className="logistics-map-container">
                {/* Map Grid Overlay */}
                <div className="logistics-map-grid">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="logistics-map-cell"></div>
                  ))}
                </div>
                
                {/* Kenya Outline Representation */}
                <div className="logistics-kenya-outline">
                  <div className="logistics-kenya-shape"></div>
                </div>

                {/* Major City Markers */}
                <div className="logistics-map-markers">
                  <div className="logistics-marker" style={{ top: '30%', left: '45%' }}>
                    <span className="logistics-marker-dot"></span>
                    <span className="logistics-marker-label">Nairobi</span>
                  </div>
                  <div className="logistics-marker" style={{ top: '70%', left: '75%' }}>
                    <span className="logistics-marker-dot"></span>
                    <span className="logistics-marker-label">Mombasa</span>
                  </div>
                  <div className="logistics-marker" style={{ top: '15%', left: '25%' }}>
                    <span className="logistics-marker-dot"></span>
                    <span className="logistics-marker-label">Kisumu</span>
                  </div>
                  <div className="logistics-marker" style={{ top: '25%', left: '60%' }}>
                    <span className="logistics-marker-dot"></span>
                    <span className="logistics-marker-label">Nakuru</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Highlights */}
            <div className="logistics-coverage-highlights">
              <h3>Service Features</h3>
              <div className="logistics-highlights-grid">
                <div className="logistics-highlight-item">
                  <Shield size={20} />
                  <div>
                    <strong>Insured Shipments</strong>
                    <span>Full coverage for all cargo</span>
                  </div>
                </div>
                <div className="logistics-highlight-item">
                  <Truck size={20} />
                  <div>
                    <strong>Fleet Diversity</strong>
                    <span>From pickups to 40ft trucks</span>
                  </div>
                </div>
                <div className="logistics-highlight-item">
                  <Clock size={20} />
                  <div>
                    <strong>Express Delivery</strong>
                    <span>Same-day within Nairobi</span>
                  </div>
                </div>
                <div className="logistics-highlight-item">
                  <Package size={20} />
                  <div>
                    <strong>Specialized Handling</strong>
                    <span>Perishable & fragile cargo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Regional Coverage */}
          <div className="logistics-coverage-right">
            <h3>Regional Coverage</h3>
            <p className="logistics-coverage-subtitle">
              Serving all 47 counties with dedicated routes
            </p>

            <div className="logistics-regions-list">
              {coverageRegions.map((region, index) => (
                <div key={index} className="logistics-region-card">
                  <div className="logistics-region-header">
                    <h4>{region.name}</h4>
                    <span className="logistics-county-count">
                      {region.counties.length} counties
                    </span>
                  </div>
                  <div className="logistics-county-tags">
                    {region.counties.map((county, idx) => (
                      <span key={idx} className="logistics-county-tag">
                        {county}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="logistics-coverage-cta">
              <p>Need coverage in a specific area?</p>
              <button className="logistics-btn-outline">
                Check Route Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;