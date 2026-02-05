import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="nb-footer">
      <div className="nb-footer__container">
        {/* Brand / Mission */}
        <div className="nb-footer__brand">
          <h3>Native Bounty</h3>
          <p>
            Connecting farmers to markets through reliable, transparent,
            and efficient agricultural produce logistics.
          </p>
        </div>

        {/* Quick Links */}
        <div className="nb-footer__links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Network</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="nb-footer__contact">
          <h4>Contact</h4>
          <p>Email: info@nativebounty.co.ke</p>
          <p>Phone: +254 700 000 000</p>
          <p>Location: Kenya</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="nb-footer__bottom">
        © {new Date().getFullYear()} Native Bounty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;