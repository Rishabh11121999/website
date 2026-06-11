import "./ServiceContent.css";

import {
  FaCheckCircle,
  FaServer,
  FaShieldAlt,
  FaRocket
} from "react-icons/fa";

const ServiceContent = ({ content }) => {
  return (
    <section className="service-content">

      <div className="container">

        <div className="service-content-wrapper">

          {/* Left Content */}

          <div className="content-left">

            <span className="section-badge">
              Service Overview
            </span>

            <h2>
              {content.title}
            </h2>

            <p>
              {content.description}
            </p>

            <div className="content-points">

              <div className="content-point">
                <FaCheckCircle />
                <span>
                  Enterprise Grade Infrastructure
                </span>
              </div>

              <div className="content-point">
                <FaCheckCircle />
                <span>
                  Maximum Security & Reliability
                </span>
              </div>

              <div className="content-point">
                <FaCheckCircle />
                <span>
                  Scalable Resource Allocation
                </span>
              </div>

              <div className="content-point">
                <FaCheckCircle />
                <span>
                  24×7 Technical Support
                </span>
              </div>

            </div>

          </div>

          {/* Right Cards */}

          <div className="content-right">

            <div className="info-card">

              <div className="card-icon">
                <FaServer />
              </div>

              <h4>
                High Performance
              </h4>

              <p>
                Optimized infrastructure with
                lightning-fast NVMe SSD storage.
              </p>

            </div>

            <div className="info-card">

              <div className="card-icon">
                <FaShieldAlt />
              </div>

              <h4>
                Advanced Security
              </h4>

              <p>
                Built-in firewall, SSL protection
                and proactive monitoring.
              </p>

            </div>

            <div className="info-card">

              <div className="card-icon">
                <FaRocket />
              </div>

              <h4>
                Instant Scalability
              </h4>

              <p>
                Upgrade resources instantly as
                your business grows.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServiceContent;