import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/native-bounty-logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nb-navbar">
      <div className="nb-navbar__container">
        {/* Logo */}
        <div className="nb-navbar__logo">
          <img src={Logo} alt="Native Bounty logo" />
          <span>Native Bounty</span>
        </div>

        {/* Desktop Links */}
        <nav className="nb-navbar__links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/network">Network</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Hamburger */}
        <button
          className="nb-navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="nb-navbar__mobile">
          <NavLink onClick={() => setMenuOpen(false)} to="/" end>Home</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/about">About</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/services">Services</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/network">Network</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/contact">Contact</NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;