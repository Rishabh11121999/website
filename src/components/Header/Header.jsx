import "./Header.css";

import { useState } from "react";

import {
  FaTicketAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";

import { IoChevronDown } from "react-icons/io5";

import logo from "../../assets/images/logo.webp";

import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

import {
  hostingMenu,
  cloudMenu,
  dedicatedMenu,
  aiMenu,
  solutionsMenu,
  companyMenu
} from "./menuData";

const Header = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [currency, setCurrency] = useState("INR");

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">

        <div className="container">

          <div className="topbar-wrapper">

            <div className="support-numbers">

              <span>Support No. :</span>

              <a href="tel:+919971329945">
                +91-9971329945
              </a>

              <span>|</span>

              <a href="tel:+917428124446">
                +91-7428124446
              </a>

              <span>|</span>

              <a href="tel:+1204312792">
                +120-4312792
              </a>

            </div>

            <div className="topbar-actions">

              <a
                href="https://eportal.datanethosting.com/submitticket.php?step=2&deptid=1"
                className="ticket-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTicketAlt />
                Submit Ticket
              </a>

              <a
                href="https://eportal.datanethosting.com/clientarea.php"
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

      {/* MAIN HEADER */}

      <header className="header">

        <div className="container">

          <div className="header-wrapper">

            {/* Logo */}

            <a
              href="/"
              className="logo"
            >
              <img
                src={logo}
                alt="DNH Logo"
              />
            </a>

            {/* Desktop Navigation */}

            <nav className="navbar">

              <ul className="nav-menu">

                <li className="nav-item">
                  Hosting
                  <IoChevronDown />

                  <MegaMenu
                    title="Hosting Solutions"
                    items={hostingMenu}
                  />
                </li>

                <li className="nav-item">
                  Cloud
                  <IoChevronDown />

                  <MegaMenu
                    title="Cloud Solutions"
                    items={cloudMenu}
                  />
                </li>

                <li className="nav-item">
                  Dedicated Servers
                  <IoChevronDown />

                  <MegaMenu
                    title="Dedicated Servers"
                    items={dedicatedMenu}
                  />
                </li>

                <li className="nav-item">
                  AI
                  <IoChevronDown />

                  <MegaMenu
                    title="AI Solutions"
                    items={aiMenu}
                  />
                </li>

                <li className="nav-item">
                  Solutions
                  <IoChevronDown />

                  <MegaMenu
                    title="Business Solutions"
                    items={solutionsMenu}
                  />
                </li>

                <li className="nav-item">
                  Company
                  <IoChevronDown />

                  <MegaMenu
                    title="Company"
                    items={companyMenu}
                  />
                </li>

              </ul>

            </nav>

            {/* Right Side */}

            <div className="header-right">

              {/* Currency */}

              {/* <div className="currency-switcher">

                <button
                    className="currency-btn"
                    onClick={() => setCurrencyOpen(!currencyOpen)}
                >
                    {currency === "INR" ? "₹ INR" : "$ USD"}
                </button>

                {currencyOpen && (
                    <div className="currency-dropdown">

                    <button
                        onClick={() => {
                        setCurrency("INR");
                        setCurrencyOpen(false);
                        }}
                    >
                        ₹ INR
                    </button>

                    <button
                        onClick={() => {
                        setCurrency("USD");
                        setCurrencyOpen(false);
                        }}
                    >
                        $ USD
                    </button>

                    </div>
                )}

                </div> */}

              {/* Mobile Hamburger */}

              <button
                className="mobile-toggle"
                onClick={() =>
                  setMobileOpen(!mobileOpen)
                }
              >
                {
                  mobileOpen
                    ? <FaTimes />
                    : <FaBars />
                }
              </button>

            </div>

          </div>

        </div>

        {/* Mobile Menu */}

        <MobileMenu
          isOpen={mobileOpen}
          hostingMenu={hostingMenu}
          cloudMenu={cloudMenu}
          dedicatedMenu={dedicatedMenu}
          aiMenu={aiMenu}
          solutionsMenu={solutionsMenu}
          companyMenu={companyMenu}
        />

      </header>
    </>
  );
};

export default Header;