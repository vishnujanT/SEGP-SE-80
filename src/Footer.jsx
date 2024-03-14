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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. vitae
                laboriosam alias iusto fuga? Magnam, illo.
              </p>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>+1 23 (555) 5858</li>
            <li>example@gmail.com</li>
            <li>London, UK</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>About Company</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col">
         
        </div>
      </div>
      <p>&copy; 2023|| All Rights Reserved by k2infocom</p>
    </footer>
  );
};

export default Footer;
