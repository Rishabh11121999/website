import "./ServiceFeatures.css";

import {
  FaCheckCircle,
  FaServer,
  FaRocket,
  FaShieldAlt,
  FaHeadset,
  FaDatabase
} from "react-icons/fa";

const icons = [
  <FaServer />,
  <FaRocket />,
  <FaShieldAlt />,
  <FaDatabase />,
  <FaHeadset />,
  <FaCheckCircle />
];

const ServiceFeatures = ({ features }) => {
  return (
    <section className="service-features">

      <div className="container">

        <div className="section-header">

          <span className="section-badge">
            Features
          </span>

          <h2>
            Everything You Need To Grow
          </h2>

          <p>
            Powerful hosting features designed to
            improve performance, reliability,
            security and scalability.
          </p>

        </div>

        <div className="features-grid">

          {features.map((feature, index) => (

            <div
              className="feature-card"
              key={index}
            >

              <div className="feature-icon">
                {icons[index % icons.length]}
              </div>

              <h3>
                {feature}
              </h3>

              <p>
                Enterprise-grade infrastructure and
                advanced technology built for
                modern businesses.
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ServiceFeatures;