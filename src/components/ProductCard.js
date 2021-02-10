import React, { Component, useState, useContext } from 'react';
import './body.css';
import { Card, Image, Button } from 'semantic-ui-react';
import { ProductContext } from '../components/ProductContext';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function ProductCard({ imgname }) {
	const [product, setproduct] = useContext(ProductContext);
	const addcart = (name, price) => {
		setproduct((prevproduct) => [
			...prevproduct,
			{ name: 'Fender Bullet Strat', price: 100, duration: 5 },
		]);
	};
	return (
		<div className='catcard'>
			<Card className='ccard'>
				<Image src={imgname} wrapped ui={false} />
				<Card.Content className='cathead'>
					<Link to='/product' style={{ color: 'black' }}>
						<Card.Header>Fender Bullet Strat</Card.Header>
					</Link>
					<Card.Meta>
						<span className='date'>Starting at</span>
					</Card.Meta>
					<Card.Description>
						<i class='fas fa-rupee-sign'></i>****/day
						<Button className='addtocart' onClick={addcart}>
							ADD TO BAG
						</Button>
					</Card.Description>
				</Card.Content>
			</Card>
		</div>
	);
}

export default ProductCard;
