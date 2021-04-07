import React, {Component, useState, useEffect } from 'react'
import { fetchProducts, fetchUsers, fetchProductDetail} from '../config'
import {Link} from 'react-router-dom'
import ProductCard3 from './ProductCard3';

function ProductCarousel2 ()
{
	const [ p, setP ] = useState( [] )
    useEffect(() => {
    const fetchAPI = async () => {
        setP( await fetchProducts() );
    };
	fetchAPI();
	},
		[] );
	
	const [x, setX] = useState(0);

	const left_but = {
		backgroundColor: `#e4e4e4`,
		padding: '5px 10px',
		borderRadius: '20px',
		margin: '2vw',
	};
	const goleft = () => {
		if (x < 0) {
			setX(x + 100);
		}
	};
	const goright = () => {
		if (x >= -100) {
			setX(x - 100);
		}
	};
	return (
		<div>
			{/*
			<div
				style={{ display: `flex`, flexDirection: `row` }}>
				{whats_hot.map((item, index) => {
					return (
						<div
							key={index}
							className='sliide'
							style={{ transform: `translateX(${x}%)`, transition: `0.5s` }}>
							{item}
						</div>
					);
				} ) }
			</div>
			*/}
			<div style={{ display: `flex`, flexDirection: `row` }}>
			{p.map( ( item, index ) =>
			{
				return (
					<div key={index}
							className='sliide'
							style={{ transform: `translateX(${x}%)`, transition: `0.5s` }}>
					<ProductCard3
						link={ `/product/${ item._id }` }
						name={ item.productName } startingprice={ item.pricing[ 0 ].price } bg={ `https://backendrentkar.herokuapp.com${ item.img }` } />
						</div>
				)
			} )
				}
				</div>
			<div
				className='slide_button'
				style={{
					position: `absolute`,
					marginLeft: `60vw`,
					PaddingBottom: `20vh`,
				}}>
				<a style={left_but} onClick={goleft}>
					<i class='fas fa-chevron-left'></i>
				</a>
				<a style={left_but} onClick={goright}>
					<i class='fas fa-chevron-right'></i>
				</a>
			</div>
		</div>
	);
}

export default ProductCarousel2;
