import "./Contact.css";

import ContactBanner from "../../components/ContactBanner/ContactBanner";
import ContactSection from "../../components/ContactSection/ContactSection";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import Clients from "../../components/TrustedClients/Clients";

const Contact = () => {
  return (
    <>
      <ContactBanner />

      <ContactSection />

      <ContactCTA />

      <Clients />
    </>
  );
};

export default Contact;