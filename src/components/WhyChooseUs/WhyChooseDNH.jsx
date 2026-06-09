import "./WhyChooseDNH.css";

import image from "../../assets/images/why-choose-dnh.png";

import { whyChooseData } from "./whyChooseData";

const WhyChooseDNH = () => {
  return (
    <section className="why-dnh">

      <div className="container">

        {/* SECTION HEADING */}

        <div className="why-section-title">
          <h2>Why Businesses Choose Datanet</h2>
        </div>

        <div className="why-dnh-wrapper">

          {/* LEFT IMAGE */}

          <div className="why-dnh-image">

            <img
              src={image}
              alt="Why Choose DNH"
            />

          </div>

          {/* RIGHT CARDS */}

          <div className="why-dnh-content">

            <div className="why-grid">

              {whyChooseData.map((item, index) => {

                const Icon = item.icon;

                return (
                  <div
                    className="why-card"
                    key={index}
                  >

                    <div className="why-icon">
                      <Icon />
                    </div>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseDNH;