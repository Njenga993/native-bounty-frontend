// components/ContactPage.tsx
import React, { useState } from "react";
import "../styles/contactpage.css";
import { 
  Mail, 
  Phone, 
  ChevronDown, 
  Truck, 
  Package, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle,
  User,
  MessageSquare,
  Building,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";

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
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we provide international shipping services to East African countries including Tanzania, Uganda, Rwanda, and Burundi. Please contact our international logistics team for specific requirements."
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, M-Pesa, credit cards, and offer credit facilities for established business clients. Payment terms can be discussed based on volume and relationship."
  }
];

const officeLocations = [
  {
    city: "Nairobi Headquarters",
    address: "Waiyaki Way, Westlands, Nairobi",
    phone: "+254 700 123 456",
    email: "nairobi@nativebounty.co.ke",
    hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM"
  },
  {
    city: "Mombasa Office",
    address: "Dongo Kundu, Mombasa",
    phone: "+254 700 123 457",
    email: "mombasa@nativebounty.co.ke",
    hours: "Mon-Fri: 8AM-5PM"
  },
  {
    city: "Kisumu Office",
    address: "Kakamega Road, Kisumu",
    phone: "+254 700 123 458",
    email: "kisumu@nativebounty.co.ke",
    hours: "Mon-Fri: 8AM-5PM"
  }
];

const ContactPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    serviceType: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        serviceType: ""
      });
    } catch (error) {
      // Error
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="ns-contact-page">
      <div className="ns-contact-container">
        {/* Hero Section */}
        <div className="ns-contact-hero">
          <div className="ns-contact-hero-content">
            <span className="ns-contact-badge">GET IN TOUCH</span>
            <h1>We're Here to Help</h1>
            <p>
              Whether you need a quote, have questions about our services, 
              or want to discuss a logistics partnership, our team is ready to assist you.
            </p>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="ns-contact-cards">
          <div className="ns-contact-card">
            <div className="ns-contact-card-icon">
              <Phone size={24} />
            </div>
            <h3>Call Us</h3>
            <p>+254 700 123 456</p>
            <span>24/7 Support Available</span>
          </div>
          
          <div className="ns-contact-card">
            <div className="ns-contact-card-icon">
              <Mail size={24} />
            </div>
            <h3>Email Us</h3>
            <p>info@nativebounty.co.ke</p>
            <span>Response within 2 hours</span>
          </div>
          
          <div className="ns-contact-card">
            <div className="ns-contact-card-icon">
              <MapPin size={24} />
            </div>
            <h3>Visit Us</h3>
            <p>Westlands, Nairobi</p>
            <span>Mon-Fri: 8AM-6PM</span>
          </div>
          
          <div className="ns-contact-card">
            <div className="ns-contact-card-icon">
              <Truck size={24} />
            </div>
            <h3>Request Quote</h3>
            <p>Get a Custom Quote</p>
            <span>Fast Response Guaranteed</span>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="ns-contact-main">
          <div className="ns-contact-form-section">
            <div className="ns-form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            
            {submitStatus === "success" && (
              <div className="ns-form-alert ns-success">
                <CheckCircle size={20} />
                <span>Thank you for your message! We'll get back to you soon.</span>
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="ns-form-alert ns-error">
                <AlertCircle size={20} />
                <span>Something went wrong. Please try again later.</span>
              </div>
            )}
            
            <form className="ns-contact-form" onSubmit={handleSubmit}>
              <div className="ns-form-row">
                <div className="ns-form-group">
                  <label htmlFor="name">
                    <User size={16} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={formErrors.name ? "ns-error" : ""}
                    placeholder="John Doe"
                  />
                  {formErrors.name && <span className="ns-error-message">{formErrors.name}</span>}
                </div>
                
                <div className="ns-form-group">
                  <label htmlFor="email">
                    <Mail size={16} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={formErrors.email ? "ns-error" : ""}
                    placeholder="john@example.com"
                  />
                  {formErrors.email && <span className="ns-error-message">{formErrors.email}</span>}
                </div>
              </div>
              
              <div className="ns-form-row">
                <div className="ns-form-group">
                  <label htmlFor="phone">
                    <Phone size={16} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={formErrors.phone ? "ns-error" : ""}
                    placeholder="+254 700 000 000"
                  />
                  {formErrors.phone && <span className="ns-error-message">{formErrors.phone}</span>}
                </div>
                
                <div className="ns-form-group">
                  <label htmlFor="company">
                    <Building size={16} />
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company Ltd."
                  />
                </div>
              </div>
              
              <div className="ns-form-group">
                <label htmlFor="serviceType">Service Type</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                >
                  <option value="">Select a service</option>
                  <option value="farm-supply">Farm Supply Chain</option>
                  <option value="transport">Transportation</option>
                  <option value="storage">Storage & Warehousing</option>
                  <option value="distribution">Distribution</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="ns-form-group">
                <label htmlFor="subject">
                  <MessageSquare size={16} />
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={formErrors.subject ? "ns-error" : ""}
                  placeholder="How can we help you?"
                />
                {formErrors.subject && <span className="ns-error-message">{formErrors.subject}</span>}
              </div>
              
              <div className="ns-form-group">
                <label htmlFor="message">
                  <MessageSquare size={16} />
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={formErrors.message ? "ns-error" : ""}
                  rows={5}
                  placeholder="Tell us more about your requirements..."
                ></textarea>
                {formErrors.message && <span className="ns-error-message">{formErrors.message}</span>}
              </div>
              
              <button type="submit" className="ns-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                    <div className="ns-spinner"></div>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Office Locations */}
          <div className="ns-locations-section">
            <div className="ns-locations-header">
              <h2>Our Office Locations</h2>
              <p>Visit us at any of our convenient locations</p>
            </div>
            
            <div className="ns-locations-list">
              {officeLocations.map((location, index) => (
                <div key={index} className="ns-location-card">
                  <div className="ns-location-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="ns-location-info">
                    <h3>{location.city}</h3>
                    <p>{location.address}</p>
                    <div className="ns-location-details">
                      <div className="ns-location-detail">
                        <Phone size={14} />
                        <a href={`tel:${location.phone}`}>{location.phone}</a>
                      </div>
                      <div className="ns-location-detail">
                        <Mail size={14} />
                        <a href={`mailto:${location.email}`}>{location.email}</a>
                      </div>
                      <div className="ns-location-detail">
                        <Clock size={14} />
                        <span>{location.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Map Placeholder */}
            <div className="ns-map-container">
              <div className="ns-map-placeholder">
                <MapPin size={48} />
                <h3>Interactive Map</h3>
                <p>Find our locations on the map</p>
                <button className="ns-map-btn">View Full Map</button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="ns-faq-section">
          <div className="ns-faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          
          <div className="ns-faq-list">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`ns-faq-item ${openIndex === index ? "active" : ""}`}
              >
                <button
                  className="ns-faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    size={18} 
                    className={`ns-faq-icon ${openIndex === index ? "rotated" : ""}`}
                  />
                </button>
                <div className="ns-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="ns-quick-actions-section">
          <div className="ns-quick-actions-header">
            <h2>Need Quick Assistance?</h2>
            <p>Get immediate help with these options</p>
          </div>
          
          <div className="ns-quick-actions-grid">
            <button className="ns-quick-action-btn">
              <Truck size={20} />
              <span>Request a Quote</span>
            </button>
            <button className="ns-quick-action-btn">
              <Package size={20} />
              <span>Track Shipment</span>
            </button>
            <button className="ns-quick-action-btn">
              <Phone size={20} />
              <span>Call Support</span>
            </button>
            <button className="ns-quick-action-btn">
              <MessageSquare size={20} />
              <span>Live Chat</span>
            </button>
          </div>
        </div>

        {/* Social Media */}
        <div className="ns-social-section">
          <div className="ns-social-header">
            <h2>Connect With Us</h2>
            <p>Follow us on social media for updates and news</p>
          </div>
          
          <div className="ns-social-links">
            <a href="#" className="ns-social-link">
              <Facebook size={20} />
            </a>
            <a href="#" className="ns-social-link">
              <Twitter size={20} />
            </a>
            <a href="#" className="ns-social-link">
              <Linkedin size={20} />
            </a>
            <a href="#" className="ns-social-link">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;