import "./Header.css";

import { FaTicketAlt } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

import logo from "../../assets/images/logo.webp";
const WHMCS_URL =
"https://client.datanethosting.com";

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-wrapper">

            <div className="support-numbers">
              <span>Support No. :</span>
              <a href="tel:+919971329945">+91-9971329945</a>
              <span>|</span>
              <a href="tel:+917428124446">+91-7428124446</a>
              <span>|</span>
              <a href="tel:+1204312792">+120-4312792</a>
            </div>

            <div className="topbar-actions">

                <a
                    href="https://client.datanethosting.com/submitticket.php"
                    className="ticket-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTicketAlt />
                    Submit Ticket
                </a>

                <a
                    href="https://client.datanethosting.com/clientarea.php"
                    className="client-login-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Login
                </a>

            </div>

          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="container">

          <div className="header-wrapper">

            {/* Logo */}
            <div className="logo">
              <img src={logo} alt="DNH Logo" />
            </div>

            {/* Navigation */}
            <nav className="navbar">
              <ul className="nav-menu">

                <li>
                  Hosting
                  <IoChevronDown />
                </li>

                <li>
                  Cloud
                  <IoChevronDown />
                </li>

                <li>
                  VPS
                  <IoChevronDown />
                </li>

                <li>
                  Dedicated Servers
                  <IoChevronDown />
                </li>

                <li>
                  Solutions
                  <IoChevronDown />
                </li>

                <li>
                  Company
                  <IoChevronDown />
                </li>

              </ul>
            </nav>

            {/* Right Side */}
            <div className="header-right">

              <div className="currency-switcher">
                <select>
                  <option value="INR">₹ INR</option>
                  <option value="USD">$ USD</option>
                </select>
              </div>

            </div>

          </div>

        </div>
      </header>
    </>
  );
};

export default Header;