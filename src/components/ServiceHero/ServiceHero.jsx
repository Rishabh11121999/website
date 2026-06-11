import "./ServiceHero.css";
import Select from "react-select";

import {
  FaCheckCircle,
  FaArrowRight,
  FaPaperPlane
} from "react-icons/fa";

const ServiceHero = ({ service }) => {

  const serviceOptions = [
    {
      value: "cloud-hosting",
      label: "Cloud Hosting"
    },
    {
      value: "vps-hosting",
      label: "VPS Hosting"
    },
    {
      value: "dedicated-server",
      label: "Dedicated Server"
    },
    {
      value: "wordpress-hosting",
      label: "WordPress Hosting"
    },
    {
      value: "managed-cloud",
      label: "Managed Cloud"
    }
  ];

  const customSelectStyles = {

    control: (provided, state) => ({
      ...provided,
      minHeight: "58px",
      background: "rgba(255,255,255,0.08)",
      border: state.isFocused
        ? "1px solid #4DA3FF"
        : "1px solid rgba(255,255,255,0.15)",
      borderRadius: "14px",
      boxShadow: "none",
      cursor: "pointer"
    }),

    valueContainer: (provided) => ({
      ...provided,
      padding: "0 14px"
    }),

    placeholder: (provided) => ({
      ...provided,
      color: "rgba(255,255,255,.75)",
      fontSize: "15px"
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "#fff"
    }),

    input: (provided) => ({
      ...provided,
      color: "#fff"
    }),

    menu: (provided) => ({
      ...provided,
      background: "#071C63",
      borderRadius: "14px",
      overflow: "hidden",
      zIndex: 99999
    }),

    menuList: (provided) => ({
      ...provided,
      padding: 0
    }),

    option: (provided, state) => ({
      ...provided,
      background: state.isFocused
        ? "#0B5FFF"
        : "#071C63",
      color: "#fff",
      padding: "14px 18px",
      cursor: "pointer"
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#fff"
    }),

    indicatorSeparator: () => ({
      display: "none"
    })
  };

  return (
    <section className="service-hero">

      <div className="container">

        <div className="service-hero-wrapper">

          {/* Left Content */}

          <div className="hero-content">

            <span className="hero-badge">
              Scalable & Secure Infrastructure
            </span>

            <h1>
              {service.title}
            </h1>

            <p>
              {service.shortDescription}
            </p>

            <div className="hero-features">

              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="hero-feature"
                >
                  <FaCheckCircle />
                  <span>{feature}</span>
                </div>
              ))}

            </div>

            <div className="hero-buttons">

              <button className="primary-btn">
                Get Started
                <FaArrowRight />
              </button>

              <button className="secondary-btn">
                View Plans
              </button>

            </div>

          </div>

          {/* Center Image */}

          <div className="hero-image">

            <img
              src={service.heroImage}
              alt={service.title}
            />

          </div>

          {/* Right Form */}

          <div className="hero-form">

            <h3>
              Request a Free Consultation
            </h3>

            <form>

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Business Email"
              />

              <input
                type="tel"
                placeholder="Phone Number"
              />

              <input
                type="text"
                placeholder="Company Name"
              />

              <Select
                options={serviceOptions}
                styles={customSelectStyles}
                placeholder="Select Your Requirement"
                className="service-select"
              />

              <textarea
                rows="4"
                placeholder="Tell us more about your requirement"
              />

              <button
                type="submit"
                className="consult-btn"
              >
                Talk to Expert
                <FaPaperPlane />
              </button>

            </form>

            <span className="response-time">
              Our experts will get back to you
              within 30 minutes.
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServiceHero;