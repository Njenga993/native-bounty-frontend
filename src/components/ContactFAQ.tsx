// components/ContactFAQ.tsx
import React, { useState } from "react";
import "../styles/contactfaq.css";
import { Mail, Phone, ChevronDown, Truck, Package } from "lucide-react";

const faqData = [
  {
    question: "What areas do you serve for logistics?",
    answer:
      "We currently operate across all major counties in Kenya, with dedicated routes in Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret. Our network continues to expand based on client demand."
  },
  {
    question: "How do I track my shipment?",
    answer:
      "Every shipment receives a unique tracking number. You can monitor your cargo in real-time through our online portal or receive SMS updates at key transit points."
  },
  {
    question: "What types of cargo can you transport?",
    answer:
      "We handle general freight, perishable goods with temperature-controlled vehicles, construction materials, and oversized cargo. Special requirements can be discussed with our logistics team."
  },
  {
    question: "How quickly can you dispatch a vehicle?",
    answer:
      "Standard dispatch is within 24 hours of order confirmation. For urgent requirements, we offer express dispatch within 4-6 hours subject to vehicle availability."
  }
];

const ContactFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="logistics-contact-section">
      <div className="logistics-contact-container">
        {/* Header */}
        <div className="logistics-contact-header">
          <span className="logistics-contact-badge">GET IN TOUCH</span>
          <h2>We're Here to Help</h2>
          <p>
            Whether you need a quote, have questions about our services, 
            or want to discuss a logistics partnership, our team is ready to assist you.
          </p>
        </div>

        {/* Main Contact Area */}
        <div className="logistics-contact-grid">
          {/* Left Column - Contact Info */}
          <div className="logistics-contact-info">
            <h3>Contact Information</h3>
            <p>Reach out to us through any of these channels</p>
            
            <div className="logistics-contact-details">
              <div className="logistics-contact-item">
                <div className="logistics-contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="logistics-contact-label">Phone</span>
                  <a href="tel:+254700123456" className="logistics-contact-value">
                    +254 700 123 456
                  </a>
                  <span className="logistics-contact-note">24/7 Support</span>
                </div>
              </div>

              <div className="logistics-contact-item">
                <div className="logistics-contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="logistics-contact-label">Email</span>
                  <a href="mailto:info@nativebounty.co.ke" className="logistics-contact-value">
                    info@nativebounty.co.ke
                  </a>
                  <span className="logistics-contact-note">Response within 2 hours</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="logistics-quick-actions">
              <button className="logistics-btn-primary">
                <Truck size={18} />
                Request a Quote
              </button>
              <button className="logistics-btn-secondary">
                <Package size={18} />
                Track Shipment
              </button>
            </div>
          </div>

          {/* Right Column - FAQ */}
          <div className="logistics-faq-section">
            <h3>Frequently Asked Questions</h3>
            <p>Quick answers to common questions</p>
            
            <div className="logistics-faq-list">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`logistics-faq-item ${
                    openIndex === index ? "active" : ""
                  }`}
                >
                  <button
                    className="logistics-faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown 
                      size={18} 
                      className={`logistics-faq-icon ${
                        openIndex === index ? "rotated" : ""
                      }`}
                    />
                  </button>
                  <div className="logistics-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;