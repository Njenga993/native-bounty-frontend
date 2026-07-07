import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/native_StoreLogo.png";

const NAV_LINKS = [
  { label: "Home", to: "/native-bounty-frontend", end: true },
  { label: "About", to: "/about" },
  { label: "Products & Services", to: "/products-services" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nb-scroll-lock", menuOpen);
    return () => document.body.classList.remove("nb-scroll-lock");
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ── Utility bar ── */}
      <div className="nb-utility">
        <div className="nb-utility__inner">
          <span className="nb-utility__msg">
            Farm-fresh baskets, delivered weekly across 12 counties.
          </span>

          <div className="nb-utility__right">
            <a href="mailto:info@nativebounty.co.ke" className="nb-utility__link">
              info@nativebounty.co.ke
            </a>
            <a href="tel:+254115374520" className="nb-utility__link">
              +254 115 374 520
            </a>
            <div className="nb-utility__social">
              <a href="#" aria-label="LinkedIn" className="nb-utility__social-link">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://wa.me/254700712085" aria-label="WhatsApp" className="nb-utility__social-link">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main navbar (always solid) ── */}
      <header className={`nb-navbar ${scrolled ? "nb-navbar--scrolled" : ""}`}>
        <div className="nb-navbar__container">
          <NavLink to="/native-bounty-frontend" className="nb-navbar__logo" onClick={close}>
            <div className="nb-navbar__logo-mark">
              <img src={Logo} alt="Native Bounty" />
            </div>
            <div className="nb-navbar__logo-text">
              <span className="nb-navbar__logo-primary">Native Bounty</span>
              <span className="nb-navbar__logo-sub">Farm · Market · Network</span>
            </div>
          </NavLink>

          <nav className="nb-navbar__links" aria-label="Primary navigation">
            {NAV_LINKS.map(({ label, to, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `nb-navbar__link ${isActive ? "nb-navbar__link--active" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <NavLink to="/contact" className="nb-navbar__cta" onClick={close}>
            Partner With Us
          </NavLink>

          <button
            className={`nb-navbar__hamburger ${menuOpen ? "nb-navbar__hamburger--open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="nb-bar nb-bar--top" />
            <span className="nb-bar nb-bar--mid" />
            <span className="nb-bar nb-bar--bot" />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer overlay ── */}
      <div
        className={`nb-drawer-overlay ${menuOpen ? "nb-drawer-overlay--open" : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ── */}
      <nav
        className={`nb-drawer ${menuOpen ? "nb-drawer--open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="nb-drawer__header">
          <span className="nb-drawer__brand">Native Bounty</span>
          <button className="nb-drawer__close" onClick={close} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M2 2l16 16M18 2L2 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <ul className="nb-drawer__links">
          {NAV_LINKS.map(({ label, to, end }, i) => (
            <li key={to} style={{ "--i": i } as React.CSSProperties}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `nb-drawer__link ${isActive ? "nb-drawer__link--active" : ""}`
                }
                onClick={close}
              >
                <span className="nb-drawer__link-num">0{i + 1}</span>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nb-drawer__footer">
          <NavLink to="/contact" className="nb-drawer__cta" onClick={close}>
            Partner With Us
          </NavLink>
          <p className="nb-drawer__tagline">
            Connecting organic farmers to markets — across Kenya.
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;