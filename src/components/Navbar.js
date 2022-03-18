import { faBars, faCoffee, faHeart } from "@fontawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setclick] = useState(false);

  const handleClick = () => setclick(!click);
  const closeMobileMenu = () => setclick(click);

  return (
    <div>
      TRVL <FontAwesomeIcon icon={faHeart} />
      <br></br>
      <FontAwesomeIcon icon={click ? faCoffee : faBars} onClick={handleClick} />
      <ul>
        <li className="nav-items">
          <a href="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </a>
        </li>
        <li className="nav-items">
          <a href="/services" className="nav-links" onClick={closeMobileMenu}>
            Services
          </a>
        </li>
        <li className="nav-items">
          <a href="/products" className="nav-links" onClick={closeMobileMenu}>
            Products
          </a>
        </li>
        <li className="nav-items">
          <a href="/sign-up" className="nav-links" onClick={closeMobileMenu}>
            Sign-Up
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
