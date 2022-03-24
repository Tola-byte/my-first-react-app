import { faBars,faHeart, faTimes, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import "./Navbar.css"

function Navbar() {
  const [click, setclick] = useState(false);
  const [Buttonn , setButton] = useState(true);

  const handleClick = () => setclick(!click);
  const closeMobileMenu = () => setclick(click);
  const showButton = () => {
    if (window.innerWidth <= 960){
      setButton(false);
    } else setButton(true);
  }
  useEffect(()=> {
    showButton();
  },[])
   window.addEventListener('resize' , showButton)
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className = "navbar-logo" onClick={closeMobileMenu}>
            TRVL <FontAwesomeIcon icon={faHeart} />
          </Link>
          <div className="menu-icon">
            <FontAwesomeIcon icon={click ? faTimes  : faBars} onClick={handleClick} />
          </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-items">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
                </Link>
              </li>
              <li className="nav-items">
                <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
                </Link>
              </li>
              <li className="nav-items">
                <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li className="nav-items">
                <Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
                  Sign-Up
                </Link>
              </li>
            </ul>
          </div>
        {Buttonn && <Buttons className = "btn-underline" buttonStyle='btn--outline'>SIGN UP</Buttons> }
       </nav>
    </>
  );
}

export default Navbar;
