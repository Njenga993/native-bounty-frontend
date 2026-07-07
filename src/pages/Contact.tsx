import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import SEO from "../components/SEO";
import "../styles/contactpage.css";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

/* ── Scroll-reveal ── */
const useReveal = <T extends HTMLElement = HTMLDivElement>(delay = 0) => {
  const ref = useRef<T>(null);
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
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
};


const ContactPage = () => {
  const r1 = useReveal(0);
  const r2 = useReveal(100);
  

  return (
    <>
      <SEO page="contact" />

      <div className="nb-cp">
        {/* ══ PAGE HERO ══ */}
        <div className="nb-cp__hero">
          <div className="nb-cp__hero-texture" aria-hidden="true" />
          <div className="nb-cp__hero-inner">
            <nav className="nb-cp__breadcrumb" aria-label="Breadcrumb">
              <NavLink to="/" className="nb-cp__bread-link">Home</NavLink>
              <span className="nb-cp__bread-sep" aria-hidden="true">/</span>
              <span className="nb-cp__bread-current" aria-current="page">
                Contact
              </span>
            </nav>
            <h1 className="nb-cp__hero-heading">
              Let's talk<br />
              <em>indigenous foods.</em>
            </h1>
            <p className="nb-cp__hero-sub">
              Whether you're a family looking for fresh produce, an institution 
              seeking bulk supply, or a farmer wanting to partner with us — 
              we're here to connect.
            </p>
          </div>
          <div className="nb-cp__hero-edge" aria-hidden="true" />
        </div>

        {/* ══ CONTACT INFO STRIP ══ 
        <address
          className="nb-cp__strip"
          aria-label="Native Bounty contact information"
        >
          <div className="nb-cp__strip-inner">
            <a
              href="tel:+254115374520"
              className="nb-cp__strip-item"
              aria-label="Call Native Bounty"
            >
              <div className="nb-cp__strip-icon" aria-hidden="true">
                <Phone size={16} strokeWidth={1.5} />
              </div>
              <div>
                <span className="nb-cp__strip-label">Call us</span>
                <span className="nb-cp__strip-val">+254 115 374 520</span>
              </div>
            </a>

            <div className="nb-cp__strip-sep" aria-hidden="true" />

            <a
              href="mailto:info@nativebounty.co.ke"
              className="nb-cp__strip-item"
              aria-label="Email Native Bounty"
            >
              <div className="nb-cp__strip-icon" aria-hidden="true">
                <Mail size={16} strokeWidth={1.5} />
              </div>
              <div>
                <span className="nb-cp__strip-label">Email us</span>
                <span className="nb-cp__strip-val">info@nativebounty.co.ke</span>
              </div>
            </a>

            <div className="nb-cp__strip-sep" aria-hidden="true" />

            <div className="nb-cp__strip-item nb-cp__strip-item--static">
              <div className="nb-cp__strip-icon" aria-hidden="true">
                <MapPin size={16} strokeWidth={1.5} />
              </div>
              <div>
                <span className="nb-cp__strip-label">Office</span>
                <span className="nb-cp__strip-val">Gilgil, Nakuru County</span>
              </div>
            </div>

            <div className="nb-cp__strip-sep" aria-hidden="true" />

            <div className="nb-cp__strip-item nb-cp__strip-item--static">
              <div className="nb-cp__strip-icon" aria-hidden="true">
                <Clock size={16} strokeWidth={1.5} />
              </div>
              <div>
                <span className="nb-cp__strip-label">Hours</span>
                <span className="nb-cp__strip-val">Mon–Sat · 8AM–5PM</span>
              </div>
            </div>
          </div>
        </address>*/}

        {/* ══ MAIN BODY: Location + Direct Contact ── */}
        <div className="nb-cp__body">
          <div className="nb-cp__body-inner">
            {/* ── LEFT: Contact info and socials ── */}
            <div className="nb-cp__info-col reveal" ref={r1}>
              <div className="nb-cp__section-label">
                <span className="nb-cp__eyebrow-line" aria-hidden="true" />
                Get in Touch
              </div>
              <h2 className="nb-cp__info-heading">
                We'd love to<br />
                <em>hear from you.</em>
              </h2>
              <p className="nb-cp__info-lead">
                Whether you're looking for fresh indigenous produce, want to 
                partner with us, or just have questions — reach out. We respond 
                within 2 hours during business hours.
              </p>

              <div className="nb-cp__contact-details">
                <div className="nb-cp__contact-item">
                  <div className="nb-cp__contact-icon" aria-hidden="true">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="nb-cp__contact-label">Phone</span>
                    <a href="tel:+254115374520" className="nb-cp__contact-link">
                      +254 115 374 520
                    </a>
                  </div>
                </div>

                <div className="nb-cp__contact-item">
                  <div className="nb-cp__contact-icon" aria-hidden="true">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="nb-cp__contact-label">Email</span>
                    <a href="mailto:info@nativebounty.co.ke" className="nb-cp__contact-link">
                      info@nativebounty.co.ke
                    </a>
                  </div>
                </div>

                <div className="nb-cp__contact-item">
                  <div className="nb-cp__contact-icon" aria-hidden="true">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="nb-cp__contact-label">Office</span>
                    <span className="nb-cp__contact-text">
                      Gilgil, Nakuru County, Kenya
                    </span>
                  </div>
                </div>
              </div>

              {/* ── WhatsApp CTA ── */}
              <a
                href="https://wa.me/254115374520"
                target="_blank"
                rel="noopener noreferrer"
                className="nb-cp__whatsapp"
                aria-label="Chat with Native Bounty on WhatsApp"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                Chat with us on WhatsApp
              </a>
            </div>

            {/* ── RIGHT: Location + map ── */}
            <div className="nb-cp__location-col reveal" ref={r2}>
              <div className="nb-cp__section-label">
                <span className="nb-cp__eyebrow-line" aria-hidden="true" />
                Our Location
              </div>
              <h2 className="nb-cp__loc-heading">
                Find us on<br />
                <em>the ground.</em>
              </h2>

              <div
                className="nb-cp__location-card"
                itemScope
                itemType="https://schema.org/LocalBusiness"
              >
                <meta itemProp="name" content="Native Bounty" />
                <meta itemProp="telephone" content="+254115374520" />
                <meta itemProp="email" content="info@nativebounty.co.ke" />
                <div className="nb-cp__loc-top">
                  <div className="nb-cp__loc-icon" aria-hidden="true">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <div
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <h3 className="nb-cp__loc-name" itemProp="name">
                      Gilgil Headquarters
                    </h3>
                    <p className="nb-cp__loc-addr">
                      <span itemProp="streetAddress">
                        Off Nakuru–Nairobi Highway, Kariandusi Area
                      </span>
                      , <span itemProp="addressLocality">Gilgil</span>,{" "}
                      <span itemProp="addressRegion">Nakuru County</span>,{" "}
                      <span itemProp="addressCountry">Kenya</span>
                    </p>
                  </div>
                </div>
                <div className="nb-cp__loc-details">
                  <div className="nb-cp__loc-row">
                    <Phone size={13} strokeWidth={1.5} aria-hidden="true" />
                    <a href="tel:+254115374520" itemProp="telephone">
                      +254 115 374 520
                    </a>
                  </div>
                  <div className="nb-cp__loc-row">
                    <Mail size={13} strokeWidth={1.5} aria-hidden="true" />
                    <a href="mailto:info@nativebounty.co.ke" itemProp="email">
                      info@nativebounty.co.ke
                    </a>
                  </div>
                  <div className="nb-cp__loc-row">
                    <Clock size={13} strokeWidth={1.5} aria-hidden="true" />
                    <span
                      itemProp="openingHours"
                      content="Mo-Fr 08:00-17:00 Sa 09:00-16:00"
                    >
                      Mon–Fri: 8AM–5PM · Sat: 9AM–4PM
                    </span>
                  </div>
                </div>
              </div>

              <div className="nb-cp__map">
                <iframe
                  title="Native Bounty Gilgil headquarters location on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.18!2d36.3!3d-0.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGilgil!5e0!3m2!1sen!2ske!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map showing Native Bounty's location in Gilgil, Nakuru County"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ══ FAQ ══ 
        <section className="nb-cp__faq" aria-label="Frequently asked questions">
          <div className="nb-cp__faq-inner">
            <div className="nb-cp__faq-header reveal">
              <span className="nb-cp__eyebrow">
                <span className="nb-cp__eyebrow-line" aria-hidden="true" />
                Common Questions
              </span>
              <h2 className="nb-cp__faq-heading">
                Frequently asked<br />
                <em>questions.</em>
              </h2>
            </div>

            <div className="nb-cp__faq-list">
              {FAQ_DATA.map((faq, i) => {
                const answerId = `cp-faq-answer-${i}`;
                return (
                  <div
                    key={faq.question}
                    className={`nb-cp__faq-item ${openFaq === i ? "nb-cp__faq-item--open" : ""}`}
                    ref={faqRefs[i]}
                  >
                    <button
                      className="nb-cp__faq-q"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                      aria-controls={answerId}
                    >
                      <span className="nb-cp__faq-num" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="nb-cp__faq-text">{faq.question}</span>
                      <span className="nb-cp__faq-tog" aria-hidden="true">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="nb-cp__faq-chev"
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
                    <div
                      id={answerId}
                      className="nb-cp__faq-a"
                      role="region"
                      aria-label={faq.question}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>*/}
      </div>
    </>
  );
};

export default ContactPage;