import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/contactfaq.css";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

/* ── Scroll-reveal hook ── */
const useReveal = (delay = 0) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("is-visible"), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
};

const FAQ_DATA = [
  {
    question: "What areas do you serve for logistics?",
    answer:
      "We currently operate across all major counties in Kenya, with dedicated routes in Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret. Our network continues to expand based on client demand.",
  },
  {
    question: "How do I track my shipment?",
    answer:
      "Every shipment receives a unique tracking number. You can monitor your cargo in real-time through our online portal or receive SMS updates at key transit points.",
  },
  {
    question: "What types of cargo can you transport?",
    answer:
      "We handle general freight, perishable goods with temperature-controlled vehicles, construction materials, and oversized cargo. Special requirements can be discussed with our team.",
  },
  {
    question: "How quickly can you dispatch a vehicle?",
    answer:
      "Standard dispatch is within 24 hours of order confirmation. For urgent requirements, we offer express dispatch within 4–6 hours subject to vehicle availability.",
  },
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const navigate = useNavigate();
  const leftRef = useReveal(0);
  const rightRef = useReveal(100);

  return (
    <section className="nb-cf">
      {/* ── RIGHT: FAQ panel (cream) ── */}
      <div className="nb-cf__right reveal" ref={rightRef}>
        <div className="nb-cf__right-inner">
          <span className="nb-cf__eyebrow nb-cf__eyebrow--dark">
            <span className="nb-cf__eyebrow-line nb-cf__eyebrow-line--dark" />
            Common Questions
          </span>

          <h3 className="nb-cf__faq-heading">
            Frequently asked
            <br />
            <em>questions.</em>
          </h3>

          <div className="nb-cf__faq-list">
            {FAQ_DATA.map((faq, i) => (
              <div
                key={i}
                className={`nb-cf__faq-item ${openIndex === i ? "nb-cf__faq-item--open" : ""}`}
              >
                <button
                  className="nb-cf__faq-q"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="nb-cf__faq-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="nb-cf__faq-text">{faq.question}</span>
                  <span className="nb-cf__faq-toggle">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="nb-cf__faq-chevron"
                    >
                      <path
                        d="M2 5l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className="nb-cf__faq-a">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="nb-cf__faq-more">
            Can't find what you need?{" "}
            <a
              href="mailto:info@nativebounty.co.ke"
              className="nb-cf__faq-link"
            >
              Drop us an email
            </a>
          </p>
        </div>
      </div>
      {/* ── LEFT: Contact panel (dark) ── */}
      <div className="nb-cf__left reveal" ref={leftRef}>
        {/* CSS grid texture */}
        <div className="nb-cf__texture" aria-hidden="true" />

        <div className="nb-cf__left-inner">
          <span className="nb-cf__eyebrow">
            <span className="nb-cf__eyebrow-line" />
            Get In Touch
          </span>

          <h2 className="nb-cf__heading">
            Let's build
            <br />
            something
            <br />
            <em>together.</em>
          </h2>

          <p className="nb-cf__subtext">
            Whether you're a farmer ready to join the network, or a buyer
            looking for reliable supply — we want to hear from you.
          </p>

          {/* Contact details — big typographic style */}
          <div className="nb-cf__contacts">
            <a href="tel:+254700712085" className="nb-cf__contact-row">
              <div className="nb-cf__contact-icon">
                <Phone size={16} strokeWidth={1.5} />
              </div>
              <div className="nb-cf__contact-body">
                <span className="nb-cf__contact-label">Call us</span>
                <span className="nb-cf__contact-value">+254 115374520</span>
                <span className="nb-cf__contact-note">24 / 7 support line</span>
              </div>
              <ArrowUpRight size={16} className="nb-cf__contact-arrow" />
            </a>

            <a
              href="mailto:info@nativebounty.co.ke"
              className="nb-cf__contact-row"
            >
              <div className="nb-cf__contact-icon">
                <Mail size={16} strokeWidth={1.5} />
              </div>
              <div className="nb-cf__contact-body">
                <span className="nb-cf__contact-label">Email us</span>
                <span className="nb-cf__contact-value">
                  info@nativebounty.co.ke
                </span>
                <span className="nb-cf__contact-note">
                  Response within 2 hours
                </span>
              </div>
              <ArrowUpRight size={16} className="nb-cf__contact-arrow" />
            </a>

            <div className="nb-cf__contact-row nb-cf__contact-row--static">
              <div className="nb-cf__contact-icon">
                <MapPin size={16} strokeWidth={1.5} />
              </div>
              <div className="nb-cf__contact-body">
                <span className="nb-cf__contact-label">Based in</span>
                <span className="nb-cf__contact-value">Nairobi, Kenya</span>
                <span className="nb-cf__contact-note">
                  Operating across 12 counties
                </span>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="nb-cf__actions">
            <button
              className="nb-cf__btn nb-cf__btn--primary"
              onClick={() => navigate("/contact")}
            >
              Partner as Farmer
            </button>
            <button
              className="nb-cf__btn nb-cf__btn--ghost"
              onClick={() => navigate("/contact")}
            >
              Request Supply
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
