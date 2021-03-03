import React from "react";
import "./ProductCard3.css";
import bg from "../images/card.png";
function ProductCard3() {
  return (
      <div className="product__card">
        <div className="card" style={{ backgroundImage: `url(${bg})` }}>
          <div className="title">
            <p className="product__name">GoPro 9</p>
            <p className="startsAt">Starts At</p>
            <p className="price"> 300 INR</p>
          </div>
          <div className="sub__div">
            <button className="btn">Book Now</button>
          </div>
        </div>
      </div>
  );
}

export default ProductCard3;
