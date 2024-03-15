import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import NavBar from "./Navbar.jsx";
import DragDropFiles from "./dropfilecomp/DropFileInput.jsx";

import { useNavigate } from "react-router-dom";

function ParallaxWebsite() {
  const navigate = useNavigate();

  const mainRef = useRef(null); // Reference to the main container element
  const [hand1Position, setHand1Position] = useState(0);
  const [hand2Position, setHand2Position] = useState(0);

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
      const maxHand2Position = -100;

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

      <button onClick={() => navigate("/app-old")}>Go to New Page</button>
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
        <h1>Upload PDF</h1>
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

        <div className="dropfiles">
          <div className="box">
            <DragDropFiles onFileChange={(files) => onFileChange(files)} />
          </div>
        </div>

        <p></p>

        {/* ... */}
      </section>

      <section id="Summarize">
        <h1>Summarize</h1>
        

        <p></p>
        {/* ... */}
      </section>

      {/* Other sections */}
    </div>
  );
}

export default ParallaxWebsite;
