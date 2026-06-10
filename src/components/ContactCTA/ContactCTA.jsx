import "./ContactCTA.css";

import {
  FaCalendarAlt,
  FaArrowRight
} from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section className="contact-cta">

      <div className="container">

        <div className="cta-box">

          {/* Left Content */}

          <div className="cta-content">

            <span className="cta-badge">
              Free Consultation
            </span>

            <p>
              Let's connect over a call on your own time
              and figure out your requirements.
            </p>

            <h2>
              Book a Virtual Meeting with
              Solution Experts
            </h2>

          </div>

          {/* Right Button */}

          <a
            href="https://calendly.com/datanethosting/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="calendar-btn"
          >
            <FaCalendarAlt />
            Pick A Slot On Our Calendar
            <FaArrowRight />
          </a>

        </div>

      </div>

    </section>
  );
};

export default ContactCTA;