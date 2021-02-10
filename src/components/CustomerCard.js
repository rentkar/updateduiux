import React from 'react';
import { Card, Icon, Feed, Image, Button } from 'semantic-ui-react';
import './body.css';

function CustomerCard({ image, name, review }) {
	return (
		<div>
			<Card className='descr'>
				<div className='straight'>
					<div>
						<img src={image} />
					</div>
					<div className='name_rating'>
						<div>
							<h4>{name}</h4>
						</div>
						<div>
							<i class='fas fa-star'></i>
							<i class='fas fa-star'></i>
							<i class='fas fa-star'></i>
							<i class='fas fa-star'></i>
							<i class='fas fa-star'></i>
						</div>
					</div>
				</div>
				<div>
					<p>{review}</p>
				</div>
			</Card>
		</div>
	);
}

export default CustomerCard;
