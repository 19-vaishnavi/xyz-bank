import React, { useState } from "react";
import personalBankingImage from "../components/images/insurance.jpeg";
import businessBankingImage from "../components/images/loans.jpeg";
import onlineBankingImage from "../components/images/service.jpeg";



const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);



  const services = [
    {
      id: 1,
      name: "Personal Banking",
      description: "Your personal financial partner, helping you achieve your goals.",
      image: "../components/images/insurance.jpeg",
    },
    {
      id: 2,
      name: "Business Banking",
      description: "Financial solutions tailored for businesses to grow and succeed.",
      image: "../components/images/loans.jpeg",
    },
    {
      id: 3,
      name: "Online Banking",
      description: "Bank anytime, anywhere with our secure and easy-to-use online services.",
      image: "../components/images/service.jpeg",
    },
  ];

  return (
    <div className="services-page">
      <h2>Our Services</h2>
      <div className="tab-menu">
        {services.map((service) => (
          <button
            key={service.id}
            className={`tab-button ${activeService === service.id ? "active" : ""}`}
            onClick={() => setActiveService(service.id)}
          >
            {service.name}
          </button>
        ))}
      </div>

      {activeService && (
        <div className="service-details">
          <h3>{services[activeService - 1].name}</h3>
          <p>{services[activeService - 1].description}</p>
          <img
            src={services[activeService - 1].image}
            alt={services[activeService - 1].name}
          />
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
