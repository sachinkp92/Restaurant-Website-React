import React from "react";
import "./style.css";

const Banner = () => {
  return (
    <div className="hero-section">
      <div className="content">
        <h4>Discount upto 20%</h4>
        <h2>Buy Fresh And Organic Grocery Food</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Condimentum sed sed blandit
          purus nec nibh tortor ipsum. Placerat consequat lorem.
        </p>
        <div className="btn-wrap">
          <button>SHOP NOW</button>
          <div className="count-wrap">
            <div className="user-count">
              <span>35k</span>
              <span>+</span>
              <h5>Users</h5>
            </div>
            <hr id="line" />
            <div className="user-count">
              <span>18k</span>
              <span>+</span>
              <h5>Users</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="img-section">
        <div className="img-circle">
          <img src="./Images/bg.svg" alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
