import "./HostingSolutions.css";

import {
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";

import { hostingData } from "./hostingData";

const HostingSolutions = () => {
  return (
    <section className="hosting-solutions">

      <div className="container">

        <div className="section-header">

          {/* <span className="section-badge">
            Hosting Solutions
          </span> */}

          <h2>
            Explore Our Hosting Solutions
          </h2>

          <div className="title-line"></div>

        </div>

        <div className="hosting-grid">

          {hostingData.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                className="hosting-card"
                key={index}
              >

                <div className="hosting-icon">

                  <Icon />

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                <div className="hosting-divider"></div>

                <ul>

                  {item.features.map(
                    (feature, i) => (

                      <li key={i}>

                        <FaCheckCircle />

                        <span>
                          {feature}
                        </span>

                      </li>

                    )
                  )}

                </ul>

                <a
                  href="/"
                  className="learn-more"
                >
                  Learn More

                  <FaArrowRight />
                </a>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default HostingSolutions;