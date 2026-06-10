import "./Clients.css";

import Associate1 from "../../assets/images/clients/Associate-1.jpg";
import Associate2 from "../../assets/images/clients/Associate-2.jpg";
import Associate3 from "../../assets/images/clients/Associate-3.jpg";
import Associate4 from "../../assets/images/clients/Associate-4.jpg";
import Associate5 from "../../assets/images/clients/Associate-5.jpg";
import Associate6 from "../../assets/images/clients/Associate-6.jpg";
import Associate7 from "../../assets/images/clients/Associate-7.jpg";
import Associate8 from "../../assets/images/clients/Associate-8.jpg";
import Associate9 from "../../assets/images/clients/Associate-9.jpg";
import Associate10 from "../../assets/images/clients/Associate-10.jpg";
import Associate11 from "../../assets/images/clients/Associate-11.jpg";
import Associate12 from "../../assets/images/clients/Associate-12.jpg";
import Associate13 from "../../assets/images/clients/Associate-13.jpg";
import Associate14 from "../../assets/images/clients/Associate-14.jpg";
import Associate15 from "../../assets/images/clients/Associate-15.jpg";
import Associate16 from "../../assets/images/clients/Associate-16.jpg";
import Associate17 from "../../assets/images/clients/Associate-17.jpg";
import Associate18 from "../../assets/images/clients/Associate-18.jpg";
import Associate19 from "../../assets/images/clients/Associate-19.jpg";
import Associate20 from "../../assets/images/clients/Associate-20.jpg";
import Associate21 from "../../assets/images/clients/Associate-21.jpg";
import Associate22 from "../../assets/images/clients/Associate-22.jpg";
import Associate23 from "../../assets/images/clients/Associate-23.jpg";
import Associate24 from "../../assets/images/clients/Associate-24.png";
import Associate25 from "../../assets/images/clients/Associate-25.png";
import Associate26 from "../../assets/images/clients/Associate-26.png";
import Associate27 from "../../assets/images/clients/Associate-27.png";
import Associate28 from "../../assets/images/clients/Associate-28.png";
import Associate29 from "../../assets/images/clients/Associate-29.png";

export const clientLogos = [
  Associate1,
  Associate2,
  Associate3,
  Associate4,
  Associate5,
  Associate6,
  Associate7,
  Associate8,
  Associate9,
  Associate10,
  Associate11,
  Associate12,
  Associate13,
  Associate14,
  Associate15,
  Associate16,
  Associate17,
  Associate18,
  Associate19,
  Associate20,
  Associate21,
  Associate22,
  Associate23,
  Associate24,
  Associate25,
  Associate26,
  Associate27,
  Associate28,
  Associate29
];

const Clients = () => {
  return (
    <section className="partners">

      <div className="container">
          

        <div className="partners-title">
          <span className="section-badge">
            Trusted Partners
          </span>
          <h2>
            Trusted by 200,000+ Businesses Across India
          </h2>
          <div className="title-line"></div>
        </div>
        

        <div className="partners-marquee">

          <div className="partners-track">

            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                className="partner-item"
                key={index}
              >
                <img
                  src={logo}
                  alt="Partner Logo"
                />
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Clients;