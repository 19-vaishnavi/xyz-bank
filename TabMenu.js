import React, { useState } from "react";
import servicesData from "../data/servicesData";
import personalBankingImage from "../components/images/insurance.jpeg";
import businessBankingImage from "../components/images/loans.jpeg";
import onlineBankingImage from "../components/images/service.jpeg";

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Map of images corresponding to each service
  const serviceImages = {
    1: personalBankingImage,
    2: businessBankingImage,
    3: onlineBankingImage,
  };

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const activeService = servicesData.find(service => service.id === activeTab);

  return (
    <div className="tab-menu">
      <div className="tab-buttons">
        {servicesData.map((service) => (
          <button
            key={service.id}
            className={`tab-button ${activeTab === service.id ? "active" : ""}`}
            onClick={() => handleTabClick(service.id)}
          >
            {service.name}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <h2>{activeService?.name}</h2>
        <p>{activeService?.description}</p>
        <img
          src={serviceImages[activeTab]} // Dynamically use the active service's image
          alt={activeService?.name}
          className="tab-image"
        />
      </div>
    </div>
  );
};

export default TabMenu;
