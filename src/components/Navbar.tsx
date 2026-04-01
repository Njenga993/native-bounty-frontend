import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/native_StoreLogo.png";

const NAV_LINKS = [
  { label: "Home", to: "/native-bounty-frontend", end: true },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Scroll detection — switches navbar from transparent to solid */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.classList.toggle("nb-scroll-lock", menuOpen);
    return () => document.body.classList.remove("nb-scroll-lock");
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`nb-navbar ${scrolled ? "nb-navbar--scrolled" : ""}`}>
        <div className="nb-navbar__container">
          {/* ── Logo ── */}
          <NavLink
            to="/native-bounty-frontend"
            className="nb-navbar__logo"
            onClick={close}
          >
            <div className="nb-navbar__logo-mark">
              <img src={Logo} alt="Native Bounty" />
            </div>
            <div className="nb-navbar__logo-text">
              <span className="nb-navbar__logo-primary">Native Bounty</span>
              <span className="nb-navbar__logo-sub">
                Farm · Market · Network
              </span>
            </div>
          </NavLink>

          {/* ── Desktop links ── */}
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

          {/* ── CTA (desktop) ── */}
          <NavLink to="/contact" className="nb-navbar__cta" onClick={close}>
            Partner With Us
          </NavLink>

          {/* ── Hamburger ── */}
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

        {/* ── Progress bar (decorative bottom line) ── */}
        <div className="nb-navbar__accent-line" />
      </header>

      {/* ── Mobile Drawer Overlay ── */}
      <div
        className={`nb-drawer-overlay ${menuOpen ? "nb-drawer-overlay--open" : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* ── Mobile Drawer ── */}
      <nav
        className={`nb-drawer ${menuOpen ? "nb-drawer--open" : ""}`}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="nb-drawer__header">
          <span className="nb-drawer__brand">Native Bounty</span>
          <button
            className="nb-drawer__close"
            onClick={close}
            aria-label="Close menu"
          >
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

        {/* Drawer links */}
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

        {/* Drawer CTA */}
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
