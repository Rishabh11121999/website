import "./ServiceBreadcrumb.css";

import { Link } from "react-router-dom";

import { FaHome, FaChevronRight } from "react-icons/fa";

const ServiceBreadcrumb = ({ title }) => {
  return (
    <section className="service-breadcrumb">

      <div className="container">

        <div className="breadcrumb-wrapper">

          <Link
            to="/"
            className="breadcrumb-home"
          >
            <FaHome />
            Home
          </Link>

          <FaChevronRight className="breadcrumb-arrow" />

          <span className="breadcrumb-current">
            {title}
          </span>

        </div>

      </div>

    </section>
  );
};

export default ServiceBreadcrumb;