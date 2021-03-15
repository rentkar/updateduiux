import React, { Component, useState } from 'react';
import CustomerCard from './CustomerCard';
import cust1 from '../images/cust1.png';
import cust2 from '../images/cust2.png';

function CustomerCarousel() {
	const [x, setX] = useState(0);
	let customers = [
		<CustomerCard
			image={cust1}
			name={'Siddhant'}
			review={
				'Ordered Yamaha acoustic guitar through rentkar, they offer great gadgets at a very cheap price 🤘🏽. Highly recommended.'
			}
		/>,
		<CustomerCard
			image={cust1}
			name={'Siddhant'}
			review={
				'Rentkar is really good!! The quality of the product is brilliant. The service is also spot on. They make sure that the product is delivered as well as picked up on time. Highly recommended..'
			}
		/>,
		<CustomerCard
			image={cust2}
			name={'Siddhant'}
			review={
				'Ordered Yamaha acoustic guitar through rentkar, they offer great gadgets at a very cheap price 🤘🏽. Highly recommended.'
			}
		/>,
		<CustomerCard
			image={cust1}
			name={'Siddhant'}
			review={
				'Ordered Yamaha acoustic guitar through rentkar, they offer great gadgets at a very cheap price 🤘🏽. Highly recommended.'
			}
		/>,
		<CustomerCard
			image={cust2}
			name={'Siddhant'}
			review={
				'Ordered Yamaha acoustic guitar through rentkar, they offer great gadgets at a very cheap price 🤘🏽. Highly recommended.'
			}
		/>,
		<CustomerCard
			image={cust1}
			name={'Siddhant'}
			review={
				'Ordered Yamaha acoustic guitar through rentkar, they offer great gadgets at a very cheap price 🤘🏽. Highly recommended.'
			}
		/>,
	];
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
			<div 
				style={{ display: `flex`, flexDirection: `row` }}>
				{customers.map((item, index) => {
					return (
						<div
							key={index}
							className='sliide'
							style={{ transform: `translateX(${x}%)`, transition: `0.5s` }}>
							{item}
						</div>
					);
				})}
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

export default CustomerCarousel;
