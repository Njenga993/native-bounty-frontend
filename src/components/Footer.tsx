
import { NavLink } from "react-router-dom";
import "../styles/footer.css";

const YEAR = new Date().getFullYear();

const NAV_LINKS = [
  { label: "Home", to: "/native-bounty-frontend", end: true },
  { label: "About", to: "/about" },
  { label: "Products & Services", to: "/products-services" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {

  return (
    <footer className="nb-footer">
      {/* ── Newsletter band ── 
      <div className="nb-footer__newsletter">
        <div className="nb-footer__newsletter-inner">
          <div className="nb-footer__newsletter-copy">
            <span className="nb-footer__newsletter-label">Stay in the loop</span>
            <p className="nb-footer__newsletter-text">
              Get seasonal basket updates and farmer stories in your inbox.
            </p>
          </div>
          <form className="nb-footer__newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="nb-footer__newsletter-input"
            />
            <button type="submit" className="nb-footer__newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>*/}

      {/* ── Main grid ── */}
      <div className="nb-footer__grid">
        <div className="nb-footer__col nb-footer__col--brand">
          <span className="nb-footer__logo-name">Native Bounty</span>
          <span className="nb-footer__logo-sub">Farm · Market · Network</span>
          <p className="nb-footer__tagline">
            Connecting organic farmers to markets through reliable, transparent,
            and efficient agricultural logistics across Kenya.
          </p>
          <div className="nb-footer__social">
            <a href="#" aria-label="LinkedIn" className="nb-footer__social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="nb-footer__social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="https://wa.me/254700712085" aria-label="WhatsApp" className="nb-footer__social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="nb-footer__col">
          <span className="nb-footer__col-label">Navigate</span>
          <ul className="nb-footer__nav">
            {NAV_LINKS.map(({ label, to, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} className="nb-footer__nav-link">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="nb-footer__col">
          <span className="nb-footer__col-label">Contact</span>
          <ul className="nb-footer__contact-list">
            <li>
              <span className="nb-footer__contact-key">Email</span>
              <a href="mailto:info@nativebounty.co.ke" className="nb-footer__contact-val">
                info@nativebounty.co.ke
              </a>
            </li>
            <li>
              <span className="nb-footer__contact-key">Phone</span>
              <a href="tel:+254115374520" className="nb-footer__contact-val">
                +254 115374520
              </a>
            </li>
            <li>
              <span className="nb-footer__contact-key">Location</span>
              <span className="nb-footer__contact-val">Gilgil, Nakuru</span>
            </li>
            <li>
              <span className="nb-footer__contact-key">Network</span>
              <span className="nb-footer__contact-val">12 Counties</span>
            </li>
          </ul>
        </div>

        <div className="nb-footer__col">
          <span className="nb-footer__col-label">Partner With Us</span>
          <p className="nb-footer__partner-text">
            Ready to join Kenya's growing agricultural logistics network?
          </p>
          <NavLink to="/contact" className="nb-footer__partner-btn">
            Get Started
          </NavLink>
          <NavLink to="/contact" className="nb-footer__partner-btn nb-footer__partner-btn--outline">
            Request Supply
          </NavLink>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="nb-footer__bottom">
        <div className="nb-footer__bottom-inner">
          <span className="nb-footer__copy">
            © {YEAR} Native Bounty. All rights reserved.
          </span>

          <div className="nb-footer__live">
            <span className="nb-footer__live-dot" />
            <span>Network live · 12 counties</span>
          </div>

          <a
            href="https://njenga993.github.io/kspace/"
            target="_blank"
            rel="noopener noreferrer"
            className="nb-footer__credit"
          >
            <span>Designed by</span>
            <span className="nb-footer__credit-name">kspace</span>
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 16L16 4M16 4H8M16 4v8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;