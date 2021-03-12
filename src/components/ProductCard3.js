import React from "react";
import "./ProductCard3.css";
import bg from "../images/card.png";
import { Link } from 'react-router-dom'
function ProductCard3() {
  return (
      <div className="product__card">
      <div className="card" style={ { backgroundImage: `url(${ bg })` } }>
        <Link to ='/product'>
          <div className="title">
            <p className="product__name">GoPro 9</p>
            <p className="startsAt">Starts At</p>
            <p className="price"> 300 INR</p>
          </div>
          <div className="sub__div">
            <button className="btn">Book Now</button>
          </div>
          </Link>
        </div>    
      </div>
  );
}

export default ProductCard3;
