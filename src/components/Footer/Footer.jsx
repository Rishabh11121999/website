import "./Footer.css";

import logo from "../../assets/images/logo.webp";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

import { footerLinks } from "./footerData";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          {/* Column 1 */}

          <div className="footer-company">

            <img
              src={logo}
              alt="DNH Logo"
              className="footer-logo"
            />

            <p>
              Delivering reliable hosting, cloud and IT
              solutions across India since 2010.
            </p>

            <div className="footer-social">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaTwitter />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Hosting */}

          <div className="footer-column">

            <h4>Hosting</h4>

            <ul>

              {footerLinks.hosting.map((item,index)=>(

                <li key={index}>
                  <a href="#">
                    {item}
                  </a>
                </li>

              ))}

            </ul>

          </div>

          {/* Cloud */}

          <div className="footer-column">

            <h4>Cloud Solutions</h4>

            <ul>

              {footerLinks.cloud.map((item,index)=>(

                <li key={index}>
                  <a href="#">
                    {item}
                  </a>
                </li>

              ))}

            </ul>

          </div>

          {/* Support */}

          <div className="footer-column">

            <h4>Support</h4>

            <ul>

              {footerLinks.support.map((item,index)=>(

                <li key={index}>
                  <a href="#">
                    {item}
                  </a>
                </li>

              ))}

            </ul>

          </div>

          {/* Resources */}

          <div className="footer-column">

            <h4>Resources</h4>

            <ul>

              {footerLinks.resources.map((item,index)=>(

                <li key={index}>
                  <a href="#">
                    {item}
                  </a>
                </li>

              ))}

            </ul>

          </div>

          {/* Company */}

          <div className="footer-column">

            <h4>Company</h4>

            <ul>

              {footerLinks.company.map((item,index)=>(

                <li key={index}>
                  <a href="#">
                    {item}
                  </a>
                </li>

              ))}

            </ul>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2025 Datanet Hosting. All Rights Reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;