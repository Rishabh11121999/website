import "./ServiceRelated.css";

import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCloud,
  FaServer,
  FaWordpress,
  FaDatabase
} from "react-icons/fa";

const relatedServices = [
  {
    title: "Cloud Hosting",
    icon: <FaCloud />,
    slug: "cloud-hosting",
    description:
      "Scalable cloud infrastructure for growing businesses."
  },

  {
    title: "VPS Hosting",
    icon: <FaServer />,
    slug: "vps-hosting",
    description:
      "Dedicated resources with full server control."
  },

  {
    title: "WordPress Hosting",
    icon: <FaWordpress />,
    slug: "wordpress-hosting",
    description:
      "Optimized hosting built specifically for WordPress."
  },

  {
    title: "Dedicated Servers",
    icon: <FaDatabase />,
    slug: "dedicated-server",
    description:
      "Enterprise-grade dedicated server infrastructure."
  }
];

const ServiceRelated = () => {
  return (
    <section className="service-related">

      <div className="container">

        <div className="related-header">

          <span className="section-badge">
            Related Services
          </span>

          <h2>
            Explore More Hosting Solutions
          </h2>

          <p>
            Discover additional hosting and cloud
            services designed to support your
            business growth.
          </p>

        </div>

        <div className="related-grid">

          {relatedServices.map(
            (service, index) => (

              <div
                key={index}
                className="related-card"
              >

                <div className="related-icon">
                  {service.icon}
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <Link
                  to={`/services/${service.slug}`}
                  className="related-link"
                >
                  Learn More
                  <FaArrowRight />
                </Link>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
};

export default ServiceRelated;