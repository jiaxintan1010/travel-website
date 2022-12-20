import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeOverlayNav = () => setClick(false);
  const windowResize = () => {
    if (window.innerWidth > 900) {
      setClick(false);
    }
  };

  window.addEventListener("resize", windowResize);

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="top-nav-container">
          <div className="nav-title">
            <Link to="/" className="nav-logo">
              TRVL
              <i class="fa-brands fa-typo3"></i>
            </Link>
          </div>

          <div className="nav-menu">
            <div className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/sign-up">
                <Button buttonStyle="btn--outline">Sign Up</Button>
              </Link>
            </div>
          </div>

          <div className="nav-menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
        </div>

        <div
          className={
            click ? "overlay-nav-container" : "overlay-nav-container-hidden"
          }
        >
          <div className="overlay-nav-item">
            <Link to="/" className="overlay-nav-link" onClick={closeOverlayNav}>
              Home
            </Link>
          </div>
          <div className="overlay-nav-item">
            <Link
              to="/services"
              className="overlay-nav-link"
              onClick={closeOverlayNav}
            >
              Services
            </Link>
          </div>
          <div className="overlay-nav-item">
            <Link
              to="/products"
              className="overlay-nav-link"
              onClick={closeOverlayNav}
            >
              Products
            </Link>
          </div>
          <div className="overlay-nav-item">
            <Link
              to="/sign-up"
              className="overlay-nav-link-mobile"
              onClick={closeOverlayNav}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
