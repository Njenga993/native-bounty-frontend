import { NavLink } from "react-router-dom";
import "../styles/footer.css";

const YEAR = new Date().getFullYear();

const NAV_LINKS = [
  { label: "Home",     to: "/native-bounty-frontend", end: true },
  { label: "About",    to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact",  to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="nb-footer">

      {/* ── Top statement band ── */}
      <div className="nb-footer__statement">
        <div className="nb-footer__statement-inner">
          <p className="nb-footer__statement-text">
            From the farm gate to the<br className="nb-footer__br" />
            <em>market shelf.</em>
          </p>
          <NavLink to="/contact" className="nb-footer__statement-cta">
            Join the Network
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </NavLink>
        </div>
        {/* decorative amber rule */}
        <div className="nb-footer__statement-rule" />
      </div>

      {/* ── Main grid ── */}
      <div className="nb-footer__grid">

        {/* Col 1 — Brand */}
        <div className="nb-footer__col nb-footer__col--brand">
          <span className="nb-footer__logo-name">Native Bounty</span>
          <span className="nb-footer__logo-sub">Farm · Market · Network</span>
          <p className="nb-footer__tagline">
            Connecting organic farmers to markets through reliable, transparent,
            and efficient agricultural logistics across Kenya.
          </p>
          <div className="nb-footer__social">
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="nb-footer__social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" aria-label="Twitter" className="nb-footer__social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/254700712085" aria-label="WhatsApp" className="nb-footer__social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <div className="nb-footer__col">
          <span className="nb-footer__col-label">Navigate</span>
          <ul className="nb-footer__nav">
            {NAV_LINKS.map(({ label, to, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className="nb-footer__nav-link"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
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
              <a href="tel:+254700712085" className="nb-footer__contact-val">
                +254 700 712 085
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

        {/* Col 4 — Partnership */}
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

          {/* Left — copyright */}
          <span className="nb-footer__copy">
            © {YEAR} Native Bounty. All rights reserved.
          </span>

          {/* Centre — live network badge */}
          <div className="nb-footer__live">
            <span className="nb-footer__live-dot" />
            <span>Network live · 12 counties</span>
          </div>

          {/* Right — designed by kspace */}
          <a
            href="https://njenga993.github.io/kspace/"
            target="_blank"
            rel="noopener noreferrer"
            className="nb-footer__credit"
          >
            <span>Designed by</span>
            <span className="nb-footer__credit-name">kspace</span>
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
              <path d="M4 16L16 4M16 4H8M16 4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

        </div>
      </div>

    </footer>
  );
};

export default Footer;