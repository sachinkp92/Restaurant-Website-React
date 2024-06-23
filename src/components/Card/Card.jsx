import React from "react";
import "./style.css";

const Card = ({ cardDetails }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = cardDetails;
  return (
    <div className="card">
      <img src={strCategoryThumb} alt="img" />
      <div>
        <div className="card-wrap hr-line">
          <p>{strCategory}</p>
          <p>$ 8.45</p>
        </div>
        <div className="desc-wrap">
          <p>{strCategoryDescription.slice(0, 50)}</p>
          <button className="show">
            SHOW NOW <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
