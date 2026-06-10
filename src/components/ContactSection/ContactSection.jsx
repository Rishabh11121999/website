import "./ContactSection.css";

import {
 FaHeadset,
 FaPhoneAlt,
 FaEnvelope,
 FaComments,
 FaMapMarkerAlt
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="contact-section">

      <div className="container">

        <div className="contact-grid">

          {/* Left Form */}

          <div className="contact-form-card">

            <h2>
              Drop Your <span>Queries</span>
            </h2>

            <p>
              Write to Us or Request a Call Back.
              Our team of expert professionals is here
              to help you find the perfect hosting solution.
            </p>

            <form>

              <div className="form-grid">

                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label>Subject *</label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                  />
                </div>

                <div className="form-group">
                  <label>Service Interested In</label>

                  <select>
                    <option>Select a service</option>
                    <option>Shared Hosting</option>
                    <option>Cloud Hosting</option>
                    <option>VPS Hosting</option>
                    <option>Dedicated Servers</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>How can we help you?</label>

                  <textarea
                    rows="6"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

              </div>

              <button className="submit-btn">
                Submit Request
              </button>

            </form>

          </div>

          {/* Right Cards */}

          <div className="contact-info">

            <h3>Get in Touch</h3>

            <div className="info-card">
              <FaHeadset />
              <div>
                <h4>24/7 Expert Support</h4>
                <p>support@datanethosting.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt />
              <div>
                <h4>Call Us</h4>
                <p>+91 90713 29045</p>
              </div>
            </div>

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h4>Sales Inquiries</h4>
                <p>sales@datanethosting.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaComments />
              <div>
                <h4>Live Chat</h4>
                <p>Start Live Chat →</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Our Office</h4>
                <p>
                  Datanet Hosting Pvt Ltd
                  <br />
                  A-90 Sector 4, Noida
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;