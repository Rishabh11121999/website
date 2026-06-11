import { useParams } from "react-router-dom";

import { services } from "../../data/servicesData";

import ServiceBreadcrumb from "../../components/ServiceBreadcrumb/ServiceBreadcrumb";
import ServiceHero from "../../components/ServiceHero/ServiceHero";
import ServiceContent from "../../components/ServiceContent/ServiceContent";
import ServiceFeatures from "../../components/ServiceFeatures/ServiceFeatures";
import ServicePricing from "../../components/ServicePricing/ServicePricing";
import ServiceFAQ from "../../components/ServiceFAQ/ServiceFAQ";
import ServiceRelated from "../../components/ServiceRelated/ServiceRelated";
import ServiceCTA from "../../components/ServiceCTA/ServiceCTA";

import Clients from "../../components/TrustedClients/Clients";

import "./ServiceDetail.css";

const ServiceDetail = () => {

  const { slug } = useParams();

  const service = services.find(
    item => item.slug === slug
  );

  if (!service) {
    return (
      <div className="service-not-found">

        <div className="container">

          <h1>
            Service Not Found
          </h1>

          <p>
            The service you are looking for does not exist.
          </p>

        </div>

      </div>
    );
  }

  return (
    <>

      <ServiceBreadcrumb
        title={service.breadcrumb}
      />

      <ServiceHero
        service={service}
      />

      <ServiceContent
        content={service.content}
      />

      <ServiceFeatures
        features={service.features}
      />

      <ServicePricing
        pricing={service.pricing}
      />

      <ServiceFAQ
        faqs={service.faqs}
      />

      <ServiceRelated />

      <ServiceCTA />

      <Clients />

    </>
  );
};

export default ServiceDetail;