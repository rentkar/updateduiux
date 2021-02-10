import React from 'react'
import './ProductCard2.css'
function ProductCard2() {
    return (
      <div className='product__card'>
        <div className='card'>
        <div className='title'>
          <p className='product__name'>GoPro 9</p>
          <button className='btn'>
          Book Now</button>
          </div>
          <div className='sub__div'>
            <p className='startsAt'>Starts At</p>
            <p className='price'> 333 INR</p>
          </div>
      </div>
      </div>
    )
}

export default ProductCard2
