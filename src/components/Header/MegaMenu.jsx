import "./Header.css";

import {
  FaCheckCircle,
  // FaArrowRight,
  FaShieldAlt,
  FaHeadset,
  FaServer,
  FaLayerGroup
} from "react-icons/fa";

const MegaMenu = ({ title, items }) => {
  return (
    <div className="mega-menu">

      <div className="mega-menu-inner">

        {/* Left Section */}

        <div className="mega-menu-columns">

          <div className="mega-column">

            <h4>{title}</h4>

            <div className="mega-services">

              {items.map((item, index) => {

                const Icon = item.icon;

                return (

                  <a
                    href={item.link}
                    className="mega-service"
                    key={index}
                  >

                    <div className="mega-service-icon">
                      <Icon />
                    </div>

                    <div className="mega-service-content">

                      <h5>{item.name}</h5>

                      <p>{item.description}</p>

                    </div>
                    <div className="mega-service-arrow">
                      {/* <FaArrowRight /> */}
                    </div>

                  </a>

                );
              })}

            </div>

          </div>

        </div>

        {/* Right Promo */}

        <div className="mega-promo">

          <div className="mega-promo-card">

            <div className="promo-icon">
             
              <img src="src/assets/images/hosting/java.png" alt="Cloud Icon" />

            </div>

            <h3>
              Powerful Cloud Solutions
              <div className="title-line"></div>
            </h3>

            {/* <p>
              Enterprise hosting infrastructure with
              99.9% uptime and 24/7 support.
            </p> */}

            <ul className="promo-list">

              <li>
                <FaCheckCircle />
                <span>Instant Deployment</span>
              </li>

              <li>
                <FaCheckCircle />
                <span>99.9% Uptime Guarantee</span>  
              </li>

              <li>
                <FaCheckCircle />
                <span>Scalable and Secure Infrastructure</span>
              </li>

            </ul>

            <a href="/cloud-hosting" className="promo-btn">
              View Solutions →
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Feature Strip */}

      <div className="mega-footer">

        <div className="mega-feature">

          <div className="mega-feature-icon uptime">
            <FaShieldAlt />
          </div>

          <div className="mega-feature-content">
            <strong>99.9% Uptime</strong>
            <span>Reliable & Secure</span>
          </div>

        </div>

        <div className="mega-feature">

          <div className="mega-feature-icon support">
            <FaHeadset />
          </div>

          <div className="mega-feature-content">
            <strong>24/7 Expert Support</strong>
            <span>Always Here To Help You</span>
          </div>

        </div>

        <div className="mega-feature">

          <div className="mega-feature-icon ddos">
            <FaShieldAlt />
          </div>

          <div className="mega-feature-content">
            <strong>DDoS Protected</strong>
            <span>Enterprise Grade Security</span>
          </div>

        </div>

        <div className="mega-feature">

          <div className="mega-feature-icon scale">
            <FaLayerGroup />
          </div>

          <div className="mega-feature-content">
            <strong>Scalable Infrastructure</strong>
            <span>Grow as Your Business Grows</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default MegaMenu;