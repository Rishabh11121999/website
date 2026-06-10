import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaArrowUp
} from "react-icons/fa";

import { footerLinks } from "./footerData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          {/* Company Info */}

          <div className="footer-company">

            <img
              src={logo}
              alt="DNH Logo"
              className="footer-logo"
            />

            <p>
              Delivering reliable hosting, cloud and IT
              solutions across India since 2010.
            </p>

            <div className="footer-social">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Hosting */}

          <div className="footer-column">

            <h4>Hosting</h4>

            <ul>
              {footerLinks.hosting.map((item, index) => (
                <li key={index}>
                  <a href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Cloud */}

          <div className="footer-column">

            <h4>Cloud Solutions</h4>

            <ul>
              {footerLinks.cloud.map((item, index) => (
                <li key={index}>
                  <a href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Support */}

          <div className="footer-column">

            <h4>Support</h4>

            <ul>
              {footerLinks.support.map((item, index) => (
                <li key={index}>
                  <a href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Resources */}

          <div className="footer-column">

            <h4>Resources</h4>

            <ul>
              {footerLinks.resources.map((item, index) => (
                <li key={index}>
                  <a href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Company */}

          <div className="footer-column">

            <h4>Company</h4>

            <ul>
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

        </div>

        {/* Footer Bottom */}

        <div className="footer-bottom">

          <p>
            © 2025 Datanet Hosting. All Rights Reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms of Service
            </a>

          </div>

        </div>

      </div>

      {/* Floating WhatsApp */}

      <a
        href="https://wa.me/919971329945"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Scroll Top */}

      <button
        type="button"
        className="scroll-top"
        onClick={scrollToTop}
        aria-label="Scroll To Top"
      >
        <FaArrowUp />
      </button>

    </footer>
  );
};

export default Footer;