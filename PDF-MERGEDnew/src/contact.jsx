import React, { useState } from 'react';
import './contact.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you're using Font Awesome icons

function ContactForm() {
  const [focus, setFocus] = useState({}); // State to manage focus of input fields

  const handleFocus = (field) => {
    setFocus({ ...focus, [field]: true });
  };

  const handleBlur = (field) => {
    if (!field.value) {
      setFocus({ ...focus, [field]: false });
    }
  };

  return (
    
    <div className="container11111">
      {/* <img src="img/pic.gif" className="pic" alt="" /> */}
      {/* <span className="big-circle"></span> */}
      <img src="img/shape.png" className="square" alt="" />
      <img src="img/shape.png" className="square1" alt="" />
      <img src="img/shape.png" className="square2" alt="" />
      <img src="img/shape.png" className="square3" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            
"Our newly developed website excels with seamless navigation and captivating content, providing an exceptional user experience!"
          </p>

          <div className="info">
            <div className="information">
              <img src="img/location.png" className="icon" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <img src="img/email.png" className="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <img src="img/phone.png" className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

          {/* <div className="social-media"> */}
            {/* <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
              </a>
            </div> */}
          {/* </div> */}
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>
          <span className="circle three"></span>
          <span className="circle four"></span>
          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className={`input-container ${focus.name ? 'focus' : ''}`}>
              <input
                type="text"
                name="name"
                className="input"
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
              />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className={`input-container ${focus.email ? 'focus' : ''}`}>
              <input
                type="email"
                name="email"
                className="input"
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
              />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className={`input-container ${focus.phone ? 'focus' : ''}`}>
              <input
                type="tel"
                name="phone"
                className="input"
                onFocus={() => handleFocus('phone')}
                onBlur={() => handleBlur('phone')}
              />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className={`input-container textarea ${focus.message ? 'focus' : ''}`}>
              <textarea
                name="message"
                className="input"
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
              ></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
