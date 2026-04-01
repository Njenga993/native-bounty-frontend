import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import SEO from "../components/SEO";
import "../styles/contactpage.css";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

/* ── Scroll-reveal — generic so it works on any HTML element ── */
const useReveal = <T extends HTMLElement = HTMLDivElement>(delay = 0) => {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
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
      "We handle general freight, perishable goods with temperature-controlled vehicles, construction materials, and oversized cargo. Special requirements can be discussed with our logistics team.",
  },
  {
    question: "How quickly can you dispatch a vehicle?",
    answer:
      "Standard dispatch is within 24 hours of order confirmation. For urgent requirements, we offer express dispatch within 4–6 hours subject to vehicle availability.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we provide international shipping services to East African countries including Tanzania, Uganda, Rwanda, and Burundi. Contact our international logistics team for specific requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, M-Pesa, credit cards, and offer credit facilities for established business clients. Payment terms can be discussed based on volume and relationship.",
  },
];

const SERVICE_OPTIONS = [
  { value: "", label: "Select a service type" },
  { value: "farm-supply", label: "Farm Supply Chain" },
  { value: "transport", label: "Transportation & Logistics" },
  { value: "aggregation", label: "Produce Aggregation" },
  { value: "distribution", label: "Market Distribution" },
  { value: "bulk", label: "Institutional Bulk Supply" },
  { value: "other", label: "Other" },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  message: string;
};
type FormErrors = Partial<Record<keyof FormData, string>>;

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  /* ── Section reveals ── */
  const r1 = useReveal(0);
  const r2 = useReveal(80);
  const r3 = useReveal(0);

  /* ── FAQ row reveals — declared at top level, NOT inside map ── */
  const fr0 = useReveal(0 * 60);
  const fr1 = useReveal(1 * 60);
  const fr2 = useReveal(2 * 60);
  const fr3 = useReveal(3 * 60);
  const fr4 = useReveal(4 * 60);
  const fr5 = useReveal(5 * 60);
  const faqRefs = [fr0, fr1, fr2, fr3, fr4, fr5];

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData])
      setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setStatus("idle");
    try {
      await new Promise((r) => setTimeout(r, 1500));
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        message: "",
      });
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ✅ SEO: hoisted into <head> via react-helmet-async */}
      <SEO page="contact" />

      <div className="nb-cp">
        {/* ══ PAGE HERO ══ */}
        <div className="nb-cp__hero">
          <div className="nb-cp__hero-texture" aria-hidden="true" />
          <div className="nb-cp__hero-inner">
            <nav className="nb-cp__breadcrumb" aria-label="Breadcrumb">
              <NavLink
                to="/native-bounty-frontend"
                className="nb-cp__bread-link"
              >
                Home
              </NavLink>
              <span className="nb-cp__bread-sep" aria-hidden="true">
                /
              </span>
              <span className="nb-cp__bread-current" aria-current="page">
                Contact
              </span>
            </nav>
            {/* ✅ SEO: h1 aligned with contact preset keywords */}
            <h1 className="nb-cp__hero-heading">
              Let's talk
              <br />
              <em>produce.</em>
            </h1>
            <p className="nb-cp__hero-sub">
              Whether you're a farmer, a buyer, or just exploring — we're ready.
            </p>
          </div>
          <div className="nb-cp__hero-edge" aria-hidden="true" />
        </div>

        {/* ══ CONTACT INFO STRIP ══ */}
        {/* ✅ SEO: <address> is the correct semantic element for contact information */}
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
                <span className="nb-cp__strip-val">
                  info@nativebounty.co.ke
                </span>
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
        </address>

        {/* ══ MAIN BODY: form + location ══ */}
        <div className="nb-cp__body">
          <div className="nb-cp__body-inner">
            {/* ── LEFT: Contact form ── */}
            <div className="nb-cp__form-col reveal" ref={r1}>
              <div className="nb-cp__section-label">
                <span className="nb-cp__eyebrow-line" aria-hidden="true" />
                Send a Message
              </div>
              <h2 className="nb-cp__form-heading">
                Tell us what
                <br />
                <em>you need.</em>
              </h2>

              {status === "success" && (
                <div
                  className="nb-cp__alert nb-cp__alert--success"
                  role="alert"
                  aria-live="polite"
                >
                  <CheckCircle size={18} strokeWidth={1.5} aria-hidden="true" />
                  <span>Message sent — we'll be in touch within 2 hours.</span>
                </div>
              )}
              {status === "error" && (
                <div
                  className="nb-cp__alert nb-cp__alert--error"
                  role="alert"
                  aria-live="assertive"
                >
                  <AlertCircle size={18} strokeWidth={1.5} aria-hidden="true" />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              {/* ✅ SEO: name + aria-label help crawlers understand the form's purpose */}
              <form
                className="nb-cp__form"
                onSubmit={onSubmit}
                noValidate
                aria-label="Contact Native Bounty"
              >
                <div className="nb-cp__row">
                  <div
                    className={`nb-cp__field ${errors.name ? "nb-cp__field--err" : ""}`}
                  >
                    <label htmlFor="name">
                      Full Name <span aria-hidden="true">*</span>
                      <span className="nb-cp__sr-only">(required)</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Wanjiru Kamau"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "err-name" : undefined}
                    />
                    {errors.name && (
                      <span
                        id="err-name"
                        className="nb-cp__err-msg"
                        role="alert"
                      >
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div
                    className={`nb-cp__field ${errors.email ? "nb-cp__field--err" : ""}`}
                  >
                    <label htmlFor="email">
                      Email Address <span aria-hidden="true">*</span>
                      <span className="nb-cp__sr-only">(required)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "err-email" : undefined}
                    />
                    {errors.email && (
                      <span
                        id="err-email"
                        className="nb-cp__err-msg"
                        role="alert"
                      >
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="nb-cp__row">
                  <div
                    className={`nb-cp__field ${errors.phone ? "nb-cp__field--err" : ""}`}
                  >
                    <label htmlFor="phone">
                      Phone Number <span aria-hidden="true">*</span>
                      <span className="nb-cp__sr-only">(required)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="+254 700 000 000"
                      autoComplete="tel"
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "err-phone" : undefined}
                    />
                    {errors.phone && (
                      <span
                        id="err-phone"
                        className="nb-cp__err-msg"
                        role="alert"
                      >
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="nb-cp__field">
                    <label htmlFor="company">Organisation / Farm</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={onChange}
                      placeholder="Optional"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="nb-cp__field">
                  <label htmlFor="serviceType">Service Type</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={form.serviceType}
                    onChange={onChange}
                    aria-label="Select the service you are interested in"
                  >
                    {SERVICE_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div
                  className={`nb-cp__field ${errors.message ? "nb-cp__field--err" : ""}`}
                >
                  <label htmlFor="message">
                    Your Message <span aria-hidden="true">*</span>
                    <span className="nb-cp__sr-only">(required)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell us about your produce, volumes, routes, or any specific requirements..."
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "err-message" : undefined
                    }
                  />
                  {errors.message && (
                    <span
                      id="err-message"
                      className="nb-cp__err-msg"
                      role="alert"
                    >
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="nb-cp__submit"
                  disabled={submitting}
                  aria-label={
                    submitting
                      ? "Sending your message…"
                      : "Send message to Native Bounty"
                  }
                >
                  {submitting ? (
                    <>
                      <span className="nb-cp__spinner" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} strokeWidth={1.5} aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* ── RIGHT: Location + map ── */}
            <div className="nb-cp__location-col reveal" ref={r2}>
              <div className="nb-cp__section-label">
                <span className="nb-cp__eyebrow-line" aria-hidden="true" />
                Our Location
              </div>
              <h2 className="nb-cp__loc-heading">
                Find us on
                <br />
                <em>the ground.</em>
              </h2>

              {/* ✅ SEO: LocalBusiness schema embedded via itemscope */}
              <div
                className="nb-cp__location-card"
                itemScope
                itemType="https://schema.org/LocalBusiness"
              >
                <meta itemProp="name" content="Native Bounty" />
                <meta itemProp="telephone" content="+254700712085" />
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
                    <a href="tel:+2547115374520" itemProp="telephone">
                      +254 115374520
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

              {/* ✅ SEO: title attribute on iframe helps crawlers understand embed purpose */}
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

              <a
                href="https://wa.me/2547115374520"
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
          </div>
        </div>

        {/* ══ FAQ ══ */}
        <section className="nb-cp__faq" aria-label="Frequently asked questions">
          <div className="nb-cp__faq-inner">
            <div className="nb-cp__faq-header reveal" ref={r3}>
              <span className="nb-cp__eyebrow">
                <span className="nb-cp__eyebrow-line" aria-hidden="true" />
                Common Questions
              </span>
              <h2 className="nb-cp__faq-heading">
                Frequently asked
                <br />
                <em>questions.</em>
              </h2>
            </div>

            {/* ✅ SEO: hooks called at top level, refs passed by index — no Rules-of-Hooks violation */}
            <div className="nb-cp__faq-list">
              {FAQ_DATA.map((faq, i) => {
                const answerId = `cp-faq-answer-${i}`;
                return (
                  <div
                    key={faq.question}
                    className={`nb-cp__faq-item reveal ${openFaq === i ? "nb-cp__faq-item--open" : ""}`}
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
        </section>
      </div>
    </>
  );
};

export default ContactPage;
