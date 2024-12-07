import React from 'react';
import insuranceImage from '../components/images/bank.jpeg';  // Import the image

const HomePage = () => {
  return (
    <div className="homepage-section">
      <div>
        <h2>
          Welcome to XYZ Bank
          <br />
        </h2>
        <p> XYZ Bank offers different type of accounts to meet your financial goals and secure your future. Choose from our wide range of services that are specifically designed to keep your unique requirements in mind.XYZ Bank offers different type of accounts to meet your financial goals and secure your future. Choose from our wide range of services that are specifically designed to keep your unique requirements in mind.XYZ Bank offers different type of accounts to meet your financial goals and secure your future. Choose from our wide range of services that are specifically designed to keep your unique requirements in mind.XYZ Bank offers different type of accounts to meet your financial goals and secure your future. Choose from our wide range of services that are specifically designed to keep your unique requirements in mind.</p>
        
      </div>
      <div>
        {/* Use the imported image */}
        <img src={insuranceImage} alt="Bank Info" />
      </div>
    </div>
  );
};

export default HomePage;
