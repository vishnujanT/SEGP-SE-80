import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";
import logoImage from "./images/logo.png";
import { Link } from 'react-scroll';


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
      <Link to="home" smooth={true} duration={500}><a style={{ fontSize: '17px' }}>Home</a></Link>
      <Link to="uppdf" smooth={true} duration={500}><a style={{ fontSize: '17px' }}>Translate</a></Link>
      <Link to="uppdf" smooth={true} duration={500}><a style={{ fontSize: '17px' }}>Summarize</a></Link>
      <Link to="premium" smooth={true} duration={500}><a style={{ fontSize: '17px' }}>Premium</a></Link>
      <Link to="Contactus" smooth={true} duration={500}><a style={{ fontSize: '17px' }}>Contact Us</a></Link>



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
