import React from "react";
import "./ProductCard3.css";
import { Link } from 'react-router-dom'
function ProductCard3({name, startingprice, bg, link}) {
  
  return (
    <div className="product__card">
        <Link to={link}>
      <div className="card" style={ { backgroundImage: `url(${ bg })` } }>
          <div className="title">
            <p className="product__name">{name}</p>
            <p className="startsAt">Starts At</p>
            <p className="price">{ startingprice }/Day</p>
          </div>
          <div className="sub__div">
            <button className="btn">Book Now</button>
          </div>
        </div> 
        </Link>   
      </div>
  );
}

export default ProductCard3;
