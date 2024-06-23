import React, { useState } from "react";
import "./style.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const activeMenu = isActive ? "active" : null;

  return (
    <nav>
      <p>
        GO <span>FOOD</span>
      </p>
      <ul className={`menu ${activeMenu}`}>
        <li>
          <a href="#">
            Home<i className="ri-arrow-down-s-line"></i>
          </a>
        </li>
        <li>
          <a href="#">
            Grocries <i className="ri-arrow-down-s-line"></i>
          </a>
        </li>
        <li>
          <a href="#">
            Pages <i className="ri-arrow-down-s-line"></i>
          </a>
        </li>
      </ul>
      <h6>
        Connect with us <i className="ri-arrow-right-line"></i>
      </h6>
      <div className="icon-wrap">
        <div className="hamburger" onClick={() => setIsActive(!isActive)}>
          <i className="ri-menu-fill"></i>
        </div>
        <div className="icon-container">
          <i className="ri-search-line"></i>
        </div>
        <div className="icon-container">
          <i className="ri-user-line"></i>
        </div>
        <div className="icon-container">
          <i className="ri-heart-line"></i>
          <div className="count">
            <span>2</span>
          </div>
        </div>
        <div className="icon-container">
          <i className="ri-shopping-cart-line"></i>
          <div className="count">
            <span>0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
