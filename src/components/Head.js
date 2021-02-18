import React, { useState, useEffect, useContext } from 'react';
import Popup from 'reactjs-popup';
import { Grid } from 'semantic-ui-react';
import Login from './Login';
import { BrowserRouter as Link } from 'react-router-dom';
import guitar from '../images/guitar2.png';

import './head.css';
// import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import logo from '../images/logo.png';
import map from '../images/map.png';
import bag from '../images/bag.png';
import mumbai_c from '../images/mumbai.png';
import pune_c from '../images/PuneC.png';
import mumbaig from '../images/mumbaig.png';
import puneg from '../images/PuneCG.png';
import bar from '../images/icons/new icin-16.png';

import { ProductContext } from '../components/ProductContext';

export const Head = (props) => {
	const [product, setproduct] = useContext(ProductContext);
	const [count, setcount] = useState();
	useEffect(() => {
		setcount(product.length);
	}, [product]);

	const delete_product = (name) => {
		// console.log(document.getElementById(id));
		let new_product = product.filter((p) => {
			return p.name !== name;
		});
		setproduct(new_product);
	};

	const [addModalshow, setaddModalshow] = useState(false);
	const [mumbai, setmumbai] = useState(true);
	const [pune, setpune] = useState(false);
	const [drop, setdrop] = useState(true);
	const [mumbai_image, setmumbai_image] = useState(mumbai_c);
	const [pune_image, setpune_image] = useState(puneg);

	const onfocus = (e) => {
		setdrop(!drop);
	};
	const onChangeMumbai = (e) => {
		setmumbai(true);
		setpune(false);
		setpune_image(puneg);

		setmumbai_image(mumbai_c);

		document.getElementById('city').click();
	};
	const onChangePune = (e) => {
		// this.setState({ m: this.state.mumbai, m: false });
		setmumbai(false);
		setpune(true);
		setpune_image(pune_c);

		setmumbai_image(mumbaig);

		document.getElementById('city').click();
		// e.target.close();

		// document.getElementsByClassName('pop').style.display = 'none';
	};
	const add_to_cart = (e) => {
		console.log('fe');
		document.getElementById('samsun').click();
	};

	const Cart_list = (props) => (
		<div className='cart__main'>
			<div class='cart__info'>
				<div class='cart__image'>
					<img src={guitar}></img>
				</div>
				<div class='cart__detail'>
					<div id={props.id} class='cart__productname'>
						<h4>{props.name}</h4>
						<a>
							<i
								style={{ color: 'red' }}
								onClick={() => delete_product(props.name)}
								class='fas fa-trash-alt'></i>
						</a>
					</div>
					<div class='cart__productinfo'>
						<div class='cart__tenure'>
							<h6>Tenure</h6>
							<h6>{props.duration} Day</h6>
						</div>
						<div class='cart__rent'>
							<h6>Rent</h6>
							<h6>
								<i class='fas fa-rupee-sign    '></i>&nbsp;&nbsp;{props.price}
								/day
							</h6>
						</div>
						<div class='cart__deposit'>
							<h6>Deposit</h6>
							<h6>0</h6>
						</div>
					</div>
				</div>
			</div>

			<div class='cart__button'>
				<div class='cart__edit'>
					<button>EDIT DETAILS</button>
				</div>
				<div class='cart__checkout'>
					<button>PROCEED TO CHECKOUT</button>
				</div>
			</div>
		</div>
	);

	let addModalclose = () => {
		setaddModalshow(false);
	};
	return (
		<div class='container fixed-top'>
			<div className='main'>
				<div className='image'>
					<a href='/'>
						<img src={logo} alt='Rentkar' />
					</a>
				</div>
				<div className='but' id='navmap'>
					<Popup
						className='pop'
						trigger={
							<button id='city'>
								<img src={map} alt='City' /> {mumbai ? 'Mumbai' : 'Pune'}{' '}
							</button>
						}
						flowing
						hoverable>
						<Grid className='popup_of_place' stretched divided rows={2}>
							<Grid.Row
								className='popup_of_place1'
								onClick={onChangeMumbai}
								textAlign='left'>
								<img className='imgage' src={mumbai_image} alt='hey' />
								<div className='header'>Mumbai</div>
								{mumbai === true ? <i class='fas fa-check' /> : null}
							</Grid.Row>
							<Grid.Row
								className='popup_of_place1'
								onClick={onChangePune}
								textAlign='left'>
								<img className='imgage' src={pune_image} alt='hey' />
								<div className='header'>Pune</div>

								{pune === true ? <i class='fas fa-check' /> : null}
							</Grid.Row>
						</Grid>
					</Popup>
				</div>
				<div className='searc'>
					<input
						name='search'
						placeholder='Search for instruments,gaming gears,camera as...'></input>
					<a>
						<i class='fas fa-search'></i>
					</a>
					{/* <i class="fas fa-search"></i> */}
				</div>
				<div className='but' id='bag'>
					<Popup
						trigger={
							<button id='samsun'>
								<img src={bag} alt='bag' />
								Bag
								<span
									style={{
										position: 'relative',
										top: '-10px',
										right: '-8px',
										padding: '5px 10px',
										borderRadius: '100%',
										background: 'red',
										color: 'white',
										marginRight: '-25px',
									}}>
									{count}
								</span>
							</button>
						}>
						<a href='/about'>
							<div className='take_me_to_cart_but'>
								<button className='cart_but' onClick={add_to_cart}>
									Take me to Cart
								</button>
							</div>
						</a>

						{product.map((p, index) => (
							<div>
								<Cart_list
									id={index}
									name={p.name}
									price={p.price}
									duration={p.duration}
								/>
								<hr />
							</div>
						))}
					</Popup>
					{/* <Link to="/category"><button><img src={bag}></img>Bag<span style={{ position: 'relative', top: '-10px', right: '-8px', padding: '5px 10px', borderRadius: '100%', background: 'red', color: 'white', marginRight: '-25px' }}>{count}</span></button></Link> */}
				</div>
				
				<div className='but' id='sign'>
					<button onClick={() => setaddModalshow(true)}>Login/Sign Up</button>
					<Login show={addModalshow} onHide={addModalclose} />
				</div>
				<div className="notification__bell">
					<button> <img src='images/notificationbell.png' /><span className="notifications">9</span></button>
				</div>
				<div className='bar'>
					{/* <i class="fas fa-bars"></i> */}
					<img src={bar} alt='bag' />
				</div>
			</div>
		</div>
	);
};

export default Head;
