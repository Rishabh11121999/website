import { useState } from "react";

import {
  IoChevronDown,
  IoChevronUp
} from "react-icons/io5";

import {
  FaServer,
  FaCloud,
  FaRobot,
  FaShieldAlt,
  FaBuilding,
  FaMicrochip,
  FaEnvelope
} from "react-icons/fa";

const MobileMenu = ({
  isOpen,
  hostingMenu,
  cloudMenu,
  dedicatedMenu,
  aiMenu,
  solutionsMenu,
  companyMenu
}) => {

  const [activeMenu, setActiveMenu] = useState("hosting");

  if (!isOpen) return null;

  const toggleMenu = (menu) => {
    setActiveMenu(
      activeMenu === menu
        ? null
        : menu
    );
  };

  const renderMenuItems = (items) => (
    <div className="mobile-submenu">

      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <a
            key={index}
            href={item.link}
            className="mobile-service-card"
          >
            <div className="mobile-service-icon">
              <Icon />
            </div>

            <div className="mobile-service-content">
              <h5>{item.name}</h5>
              <p>{item.description}</p>
            </div>
          </a>
        );
      })}

    </div>
  );

  return (
    <div className="mobile-menu">

      {/* Hosting */}

      <div className={`mobile-menu-section ${activeMenu === "hosting" ? "active" : ""}`}>

        <button
          className="mobile-menu-title"
          onClick={() => toggleMenu("hosting")}
        >
          <div className="mobile-title-left">
            <FaServer />
            <span>Hosting</span>
          </div>

          {
            activeMenu === "hosting"
              ? <IoChevronUp />
              : <IoChevronDown />
          }
        </button>

        {activeMenu === "hosting" && renderMenuItems(hostingMenu)}

      </div>

      {/* Cloud */}

      <div className={`mobile-menu-section ${activeMenu === "cloud" ? "active" : ""}`}>

        <button
          className="mobile-menu-title"
          onClick={() => toggleMenu("cloud")}
        >
          <div className="mobile-title-left">
            <FaCloud />
            <span>Cloud</span>
          </div>

          {
            activeMenu === "cloud"
              ? <IoChevronUp />
              : <IoChevronDown />
          }
        </button>

        {activeMenu === "cloud" && renderMenuItems(cloudMenu)}

      </div>

      {/* Dedicated */}

      <div className={`mobile-menu-section ${activeMenu === "dedicated" ? "active" : ""}`}>

        <button
          className="mobile-menu-title"
          onClick={() => toggleMenu("dedicated")}
        >
          <div className="mobile-title-left">
            <FaMicrochip />
            <span>Dedicated Servers</span>
          </div>

          {
            activeMenu === "dedicated"
              ? <IoChevronUp />
              : <IoChevronDown />
          }
        </button>

        {activeMenu === "dedicated" && renderMenuItems(dedicatedMenu)}

      </div>

      {/* AI */}

      <div className={`mobile-menu-section ${activeMenu === "ai" ? "active" : ""}`}>

        <button
          className="mobile-menu-title"
          onClick={() => toggleMenu("ai")}
        >
          <div className="mobile-title-left">
            <FaRobot />
            <span>AI Solutions</span>
          </div>

          {
            activeMenu === "ai"
              ? <IoChevronUp />
              : <IoChevronDown />
          }
        </button>

        {activeMenu === "ai" && renderMenuItems(aiMenu)}

      </div>

      {/* Solutions */}

      <div className={`mobile-menu-section ${activeMenu === "solutions" ? "active" : ""}`}>

        <button
          className="mobile-menu-title"
          onClick={() => toggleMenu("solutions")}
        >
          <div className="mobile-title-left">
            <FaShieldAlt />
            <span>Solutions</span>
          </div>

          {
            activeMenu === "solutions"
              ? <IoChevronUp />
              : <IoChevronDown />
          }
        </button>

        {activeMenu === "solutions" && renderMenuItems(solutionsMenu)}

      </div>

      {/* Company */}

      <div className={`mobile-menu-section ${activeMenu === "company" ? "active" : ""}`}>

        <button
          className="mobile-menu-title"
          onClick={() => toggleMenu("company")}
        >
          <div className="mobile-title-left">
            <FaBuilding />
            <span>Company</span>
          </div>

          {
            activeMenu === "company"
              ? <IoChevronUp />
              : <IoChevronDown />
          }
        </button>

        {activeMenu === "company" && renderMenuItems(companyMenu)}

      </div>

      {/* Contact Card */}

      <div className="mobile-contact-card">

        <h4>Need Help?</h4>

        <a href="mailto:hr@datanethosting.com">
          <FaEnvelope />
          hr@datanethosting.com
        </a>

        <a href="mailto:support@datanethosting.com">
          <FaEnvelope />
          support@datanethosting.com
        </a>

        <a href="mailto:sales@datanethosting.com">
          <FaEnvelope />
          sales@datanethosting.com
        </a>

      </div>

      {/* Buttons */}

      <div className="mobile-actions">

        <a
          href="https://eportal.datanethosting.com/clientarea.php"
          className="mobile-login-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Client Login
        </a>

        <a
          href="https://eportal.datanethosting.com/submitticket.php?step=2&deptid=1"
          className="mobile-ticket-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit Ticket
        </a>

      </div>

    </div>
  );
};

export default MobileMenu;