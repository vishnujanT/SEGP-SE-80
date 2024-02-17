import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";
import logoImage from "./images/logo.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    const nav = navRef.current;
    nav.classList.toggle("responsive_nav");

    // Check if the navigation bar is open
    const isNavbarOpen = nav.classList.contains("responsive_nav");

    // Disable scrolling when the navigation bar is open
    document.body.style.overflow = isNavbarOpen ? "hidden" : "auto";
  };

  return (
    <header>
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#uppdf">Translate</a>
        <a href="/#Summarize">Summarize</a>
        <a href="/#">Premium</a>
        <a href="#">Contact Us</a>
        <a href="#">About Us</a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
