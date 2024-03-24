import React from 'react';
import './PricingCards.css'; // Assuming you have a separate CSS file for styling

const PricingCard = ({ type, price, features }) => {
  const showYearText = price !== 'Free';
  return (
    <div className="pricing-card">

      <div className="card-type">{type}</div>
      <h1 className="card-price">{price}</h1>
      {showYearText && <h3 className="month">/ Year</h3>}
      <div className="list">

        {features.map((feature, index) => (
          <div key={index} className="list-item1">
            <i className={feature.icon}></i>
            <span>{feature.text}</span>
          </div>
        ))}
      </div>
      <button type="button" className="card-btn">Buy Now</button>
     
    </div>
  );
};

const PricingCards = () => {

  const pricingData = [

    {
      type: 'Standard',
      price: '14.99$',
      features: [
        { icon: 'fa-solid fa-check', text: 'Tamil Translation 80% accuracy.' },
        { icon: 'fa-solid fa-check', text: 'Summarisation Manual count.' },
        { icon: 'fa-solid fa-xmark', text: 'Preview & Editing.' },
        { icon: 'fa-solid fa-xmark', text: 'Merge.' },
        { icon: 'fa-solid fa-xmark', text: '10Mb file size.' },
        { icon: 'fa-solid fa-xmark', text: 'Download 15 PDF per day.' },
    
        // Similar structure for Standard card
      ],
    },
    {
      type: 'Basic',
      price: 'Free',
      
      features: [
        { icon: 'fa-solid fa-check', text: 'Tamil Translation 70% accuracy.' },
        { icon: 'fa-solid fa-check', text: 'Summarisation Default count.' },
        { icon: 'fa-solid fa-xmark', text: 'Preview & Editing.' },
        { icon: 'fa-solid fa-xmark', text: 'Merge.' },
        { icon: 'fa-solid fa-xmark', text: '10Kb file size.' },
        { icon: 'fa-solid fa-xmark', text: 'Download 6 PDF per day.' },
    
      ],
    },
   
    {
      type: 'Premium',
      price: '49.99$',
      features: 
      [   { icon: 'fa-solid fa-check', text: 'Tamil Translation 90% accuracy.' },
      { icon: 'fa-solid fa-check', text: 'Summarisation Manual count.' },
      { icon: 'fa-solid fa-xmark', text: 'Preview & Editing.' },
      { icon: 'fa-solid fa-xmark', text: 'Merge.' },
      { icon: 'fa-solid fa-xmark', text: 'Unlimited file size.' },
      { icon: 'fa-solid fa-xmark', text: 'Unlimited download.' },
  
        // Similar structure for Premium card
      ],
    },
  ];

  return (
    <div className="container">
      <div className="pricing-cards">
        {pricingData.map((data, index) => (
          <PricingCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
