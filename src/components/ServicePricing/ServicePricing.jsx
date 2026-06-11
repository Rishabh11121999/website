import "./ServicePricing.css";

import {
  FaCheck,
  FaArrowRight
} from "react-icons/fa";

const ServicePricing = ({ pricing }) => {
  return (
    <section className="service-pricing">

      <div className="container">

        <div className="pricing-header">

          <span className="section-badge">
            Pricing Plans
          </span>

          <h2>
            Flexible Plans For Every Business
          </h2>

          <p>
            Choose a hosting package that matches
            your performance and business needs.
          </p>

        </div>

        <div className="pricing-grid">

          {pricing.map((plan, index) => (

            <div
              key={index}
              className={`pricing-card ${
                index === 1
                  ? "popular-plan"
                  : ""
              }`}
            >

              {index === 1 && (
                <span className="popular-badge">
                  Most Popular
                </span>
              )}

              <h3>
                {plan.plan}
              </h3>

              <div className="plan-price">
                {plan.price}
              </div>

              <ul>

                {plan.features.map(
                  (feature, idx) => (

                    <li key={idx}>

                      <FaCheck />

                      {feature}

                    </li>

                  )
                )}

              </ul>

              <button>

                Get Started

                <FaArrowRight />

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ServicePricing;