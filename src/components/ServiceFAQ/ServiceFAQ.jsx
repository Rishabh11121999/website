import { useState } from "react";

import "./ServiceFAQ.css";

import {
  FaPlus,
  FaMinus
} from "react-icons/fa";

const ServiceFAQ = ({ faqs }) => {

  const [activeIndex, setActiveIndex] =
    useState(0);

  const toggleFAQ = (index) => {

    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }

  };

  return (
    <section className="service-faq">

      <div className="container">

        <div className="faq-header">

          <span className="section-badge">
            Frequently Asked Questions
          </span>

          <h2>
            Got Questions? We've Got Answers
          </h2>

          <p>
            Find answers to the most common
            questions about our hosting and
            cloud services.
          </p>

        </div>

        <div className="faq-wrapper">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className={`faq-item ${
                activeIndex === index
                  ? "active"
                  : ""
              }`}
            >

              <button
                className="faq-question"
                onClick={() =>
                  toggleFAQ(index)
                }
              >

                <span>
                  {faq.question}
                </span>

                {activeIndex === index
                  ? <FaMinus />
                  : <FaPlus />
                }

              </button>

              <div
                className={`faq-answer ${
                  activeIndex === index
                    ? "show"
                    : ""
                }`}
              >

                <p>
                  {faq.answer}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ServiceFAQ;