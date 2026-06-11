import "./ServiceCTA.css";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight
} from "react-icons/fa";

import { Link } from "react-router-dom";

const ServiceCTA = () => {
  return (
    <section className="service-cta">

      <div className="container">

        <div className="service-cta-box">

          <div className="service-cta-content">

            <span className="cta-badge">
              Free Consultation
            </span>

            <h2>
              Need Expert Guidance For Your
              Hosting Infrastructure?
            </h2>

            <p>
              Our hosting specialists are available
              24/7 to help you choose the right
              solution for your business.
            </p>

          </div>

          <div className="service-cta-actions">

            <a
              href="tel:+919876543210"
              className="cta-btn cta-primary"
            >
              <FaPhoneAlt />
              Call Expert
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-whatsapp"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <Link
              to="/contact"
              className="cta-btn cta-secondary"
            >
              Contact Us
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServiceCTA;