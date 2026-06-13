import "./CTABanner.css";

import {
  FaPhoneAlt,
  FaCalendarAlt,
  FaArrowRight
} from "react-icons/fa";

const CTABanner = () => {
  return (
    <section className="cta-banner">

      <div className="cta-overlay"></div>

      <div className="container">

        <div className="cta-wrapper">

          {/* LEFT CONTENT */}

          <div className="cta-content">

            {/* <span className="cta-badge">
              Enterprise Hosting Solutions
            </span> */}

            <h2>
              Ready To Scale Your
              Infrastructure?
            </h2>

            <p>
              Deploy high-performance Cloud, VPS, Dedicated servers
              and Enterprise hosting solutions backed by
              24/7 expert support and guaranteed uptime.
            </p>

            <div className="cta-buttons">

              <a
                href="/contact-us"
                className="cta-primary-btn"
              >
                Get Started Today
                <FaArrowRight />
              </a>

              <a
                href="/book-demo"
                className="cta-secondary-btn"
              >
                <FaCalendarAlt />
                Book Free Consultation
              </a>

            </div>

          </div>

          {/* RIGHT CARD */}

          <div className="cta-contact-card">

            {/* <span className="help-badge">
              Need Help?
            </span> */}

            <h3>
              Talk To Our Hosting Experts
            </h3>

            <a href="tel:+919971329945">

              <FaPhoneAlt />

              <span>
                +91 99713 29945
              </span>

            </a>

            <p>
              Available 24×7 for sales and technical assistance.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTABanner;