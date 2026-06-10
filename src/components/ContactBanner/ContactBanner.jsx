import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <section className="contact-banner">

      <div className="container">

        <div className="contact-banner-content">

          <div className="banner-line"></div>

          <div>
            <h1>Contact Us</h1>

            <div className="breadcrumb">
              Home
              <span>›</span>
              About Us
              <span>›</span>
              Contact
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactBanner;