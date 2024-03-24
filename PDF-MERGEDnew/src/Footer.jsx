// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="row">
        <div className="col">
          <ul>
            <li>
            
            </li>
            <li>
              <p>
              "Our created website is good, offering intuitive navigation and engaging content."
              </p>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Terms of Service | Privacy Policy | Contact Us</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>+94 23 (555) 5858</li>
            <li>thruvoxsrilanka@gmail.lk</li>
            <li>Colombo, Srilanka</li>
          </ul>
        </div>
        <div className="col">
         
        </div>
      </div>
      <p>&copy; 2024|| All Rights Reserved by Thruvox.com</p>
    </footer>
  );
};

export default Footer;
