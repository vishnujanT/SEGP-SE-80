import React, { useEffect, useRef, useState } from "react";
import "./App.css";
// @ts-ignore
import NavBar from "./Navbar.jsx";
// @ts-ignore
import Footer from "./Footer.jsx";
// @ts-ignore
import PricingCards from './PricingCards';
import { useNavigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import ImageSlider from "./ImageSlider.jsx";
import Contact from "./contact.jsx";
import Stars from "./stars.jsx";
import "./moonstyle.css"

function ParallaxWebsite() {
  const navigate = useNavigate();

  const mainRef = useRef(null); // Reference to the main container element
  const [hand1Position, setHand1Position] = useState(0);
  const [hand2Position, setHand2Position] = useState(0);



  const slides = [
    { url: "image-1.gif", title: "scrn1" },
    { url: "image-2.gif", title: "scrn2" },
    { url: "image-3.gif", title: "scrn3" },
    { url: "image-4.gif", title: "scrn4" },
    { url: "image-5.gif", title: "scrn5" },
    
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "100px 770px",
    marginTop: "100px",
  };



  const onFileChange = (files) => {
    console.log(files);
  };

  useEffect(() => {
    const updateParallax = () => {
      const scrollY = window.scrollY;

      // Optimized parallax calculations for smoother movement
      const homeH1marginTop = scrollY * 0.75; // Apply a more subtle parallax effect
      const mountain1marginBottom = 106 - scrollY * 0.25; // Reduce movement for a more grounded appearance
      const cloudMargin = scrollY * 0.2; // Use the same factor for consistent cloud movement
      const maxHand1Position = 400; // Set the maximum limit for hand1
      const maxHand2Position = -30;

      // Set the maximum limit for hand2

      document.querySelector("#Home h1").style.marginTop =
        `${homeH1marginTop}px`;
      document.querySelector("#Mountain1").style.marginBottom =
        `${mountain1marginBottom}px`;
      document.querySelector("#leftCloud").style.marginLeft =
        `-${cloudMargin}px`;
      document.querySelector("#mainCloud").style.marginTop =
        `-${cloudMargin}px`;
      document.querySelector("#rightCloud").style.marginRight =
        `-${cloudMargin}px`;

      const smallTextTranslateY = scrollY * 0.5; // Adjust the factor as needed
      document.querySelector(".small-text").style.transform =
        `translateY(${smallTextTranslateY}px)`;

      setHand1Position((prevPosition) =>
        scrollY * 0.5 > maxHand1Position ? maxHand1Position : scrollY * 0.5,
      );
      setHand2Position((prevPosition) =>
        scrollY * 0.5 > maxHand2Position ? maxHand2Position : -scrollY * 0.9,
      );
    };

    // Add the event listener only once, on component mount
    window.addEventListener("scroll", updateParallax);

    // Remove the event listener on component unmount to avoid memory leaks
    return () => window.removeEventListener("scroll", updateParallax);
  }, []); // Run the useEffect hook only once on component mount




  
  return (
  
   
    <div className="main" ref={mainRef}>
      <span>
        <header>
          <React.Fragment>
            <NavBar />
          </React.Fragment>
        </header>
      </span>

     
      <section id="Home">
        <h1 className="h1name fade-in">YOUR PDF PARADISE!</h1>
        <p className="small-text">
          RIDE THE DIGITAL WAVE WITH THURUVOX, THE ULTIMATE ONLINE HOTSPOT FOR
          PDF TRANSLATIONS.BEHOLD THE CHARM OF REAL-TIME PREVIEWS AND EDITS.
          <br />
          STRAP IN FOR AN INTERACTIVE ADVENTURE THAT'S AS FUN AS IT IS
          FUNCTIONAL.
        </p>

        <img src="/images/leftCloud.png" id="leftCloud" alt="" />
        <img src="/images/mainCloud.png" id="mainCloud" alt="" />
        <img src="/images/rightCloud.png" id="rightCloud" alt="" />

        <img src="/images/Layer 1.png" id="Mountain1" alt="" />
        <img src="/images/Layer 2.png" id="Mountain2" alt="" />
      </section>

     

      <section id="uppdf">
      
<div className="container-typewr">
    <h1>
        <span className="stable-text">Click the button to </span>{" "}
        <Typewriter
            options={{
                autoStart: true,
                loop: true,
                delay: 80,
                strings: ["Translate.....", "Summarize....."]
            }}
        />
    </h1>
</div>


        <img
          src="/images/hand11.png"
          id="hand1"
          alt=""
          style={{ transform: `translateX(${hand1Position}px)` }}
        />
        <img
          src="/images/hand2.png"
          id="hand2"
          alt=""
          style={{
            transform: `translateX(${hand2Position}px)`,
          }}
        />


{/* image slider */}
<div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>

{/* button */}

<div className="container">
  <button className="btn11" 
  onClick={() => navigate("/app-old")}>
        
  <svg
      height="24"
      width="24"
      fill="#FFFFFF"
      viewBox="0 0 24 24"
      data-name="Layer 1"
      className="sparkle"
    >
      <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>


    <span className="text">Click here</span>
  </button>
</div>




      </section>
      <hr/>
      <section id="premium">
      
      <h1>Our Pricing Plan</h1>
      <div>
      <PricingCards />
      </div>
     
        <p></p>
        {/* ... */}
      </section>
<div><Stars /></div>
      
   <section id="Contactus">
  
   <div className="main12">

<div className="planet"></div>
<div className="moon"></div>


</div>
       <div>  <Contact/></div>


   </section>
 
  
   <section id="foot">
   
   <div>  
     <Footer/></div>

 
   </section>
 
      {/* Other sections */}
    
    </div>
   
  );
}

export default ParallaxWebsite;
