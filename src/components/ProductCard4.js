import React from 'react'
import './ProductCard4.css'
import {Link} from 'react-router-dom'
function ProductCard4({name, startingprice, bg, link}) {
	return (
		<div className='productcard'>
			<Link to = {link}>
				<img src={bg} />
				<p className='productname'>{ name }</p>
				<div className='sub'>
				<p className='price'>INR { startingprice }/Day</p>
					<p className='hot'>HOT</p>
				</div>
			</Link>
		</div>
	)
}

export default ProductCard4
