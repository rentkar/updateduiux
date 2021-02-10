import React, { Component } from 'react';
import ProductCard from './ProductCard';
import guitar from '../images/guitar2.png';
import search_boy from '../images/search_boy.png';

// import './category.css';
import { Card, Image } from 'semantic-ui-react';

import gam_con_sel from '../images/icons2/icons/GAMING/console gradient.png';
import gam_con from '../images/icons2/icons/GAMING/console grey.png';
import ps4_sel from '../images/icons2/icons/GAMING/games gradient.png';
import ps4 from '../images/icons2/icons/GAMING/games grey.png';
import packag_sel from '../images/icons2/icons/GAMING/packages colour.png';
import packag from '../images/icons2/icons/GAMING/packages grey.png';
import pc_sel from '../images/icons2/icons/GAMING/pc gradient.png';
import pc from '../images/icons2/icons/GAMING/pc grey.png';
import access_sel from '../images/icons2/icons/GAMING/accesories colour.png';
import access from '../images/icons2/icons/GAMING/accesories grey.png';

import guitar_sel from '../images/icons2/icons/MUSIC/GUITAR GRADIENT.png';
import key_sel from '../images/icons2/icons/MUSIC/keyboard volour.png';
import per_sel from '../images/icons2/icons/MUSIC/percussion colour.png';
import rec_sel from '../images/icons2/icons/MUSIC/recording colour.png';
import amp_sel from '../images/icons2/icons/MUSIC/amplifier colour.png';
import groove_sel from '../images/icons2/icons/MUSIC/groove colour.png';
import wind_sel from '../images/icons2/icons/MUSIC/wind color.png';

import guitar_grey from '../images/icons2/icons/MUSIC/GUITAR GREY.png';
import key from '../images/icons2/icons/MUSIC/keyboard grey.png';
import per from '../images/icons2/icons/MUSIC/percussion grey.png';
import rec from '../images/icons2/icons/MUSIC/recording grey.png';
// "../images/icons2/icons/MUSIC/GUITAR GREY.png",
import amp from '../images/icons2/icons/MUSIC/amplifier grey.png';
import groove from '../images/icons2/icons/MUSIC/groove.png';
import wind from '../images/icons2/icons/MUSIC/wind grey.png';

// game
import l1s from '../images/icons2/icons/laptop/gaming colour.png';
import l2s from '../images/icons2/icons/laptop/i3colour.png';
import l3s from '../images/icons2/icons/laptop/i5 colour.png';
import l4s from '../images/icons2/icons/laptop/i7 colour.png';
import l5s from '../images/icons2/icons/laptop/macbook colour.png';
import l6s from '../images/icons2/icons/laptop/pc colour.png';
import l7s from '../images/icons2/icons/laptop/tablet color.png';

import l1 from '../images/icons2/icons/laptop/gaming grey.png';
import l2 from '../images/icons2/icons/laptop/i3 grey.png';
import l3 from '../images/icons2/icons/laptop/i5 grey.png';
import l4 from '../images/icons2/icons/laptop/i7 grey.png';
import l5 from '../images/icons2/icons/laptop/macbook grey.png';
import l6 from '../images/icons2/icons/laptop/pc grey.png';
import l7 from '../images/icons2/icons/laptop/tablet grey.png';

import c1s from '../images/icons2/icons/photography/camera colour.png';
import c2s from '../images/icons2/icons/photography/filters.png';
import c3s from '../images/icons2/icons/photography/lense color.png';
import c4s from '../images/icons2/icons/photography/lights colour.png';
import c5s from '../images/icons2/icons/photography/recording colour.png';
import c6s from '../images/icons2/icons/photography/rigs color.png';

import c1 from '../images/icons2/icons/photography/camera grey.png';
import c2 from '../images/icons2/icons/photography/filters grey.png';
import c3 from '../images/icons2/icons/photography/lens grey.png';
import c4 from '../images/icons2/icons/photography/lights grey.png';
import c5 from '../images/icons2/icons/photography/recording.png';
import c6 from '../images/icons2/icons/photography/rigs grey.png';

import selectedcamera from '../images/icons/catogories-40.png';

import selectedgaming from '../images/icons/catogories-49.png';

import arrow from '../images/arrow.jpeg';

import './category.css';

const categories = ['Music', 'Gaming', 'Laptop', 'Photography'];
const sub = [
	[
		'Guitar',
		'Keyboard',
		'Percussion',
		'Recording',
		'Amplifier',
		'Groove',
		'Wind',
	],
	['Packages', 'PC Gaming', 'Console', 'Accessories'],
	['Gaming', 'i3', 'i5', 'i7', 'Macbook', 'PC', 'Tablet'],
	['Camera', 'Filters', 'Lens', 'Lights', 'Recording', 'Rigs'],
];
const img = [
	[guitar_grey, key, per, rec, amp, groove, wind],
	[packag, pc, gam_con, access],
	[l1, l2, l3, l4, l5, l6, l7],

	[c1, c2, c3, c4, c5, c6],
];
const selectedImg = [
	[guitar_sel, key_sel, per_sel, rec_sel, amp_sel, groove_sel, wind_sel],

	[packag_sel, pc_sel, gam_con_sel, access_sel],
	[l1s, l2s, l3s, l4s, l5s, l6s, l7s],
	[c1s, c2s, c3s, c4s, c5s, c6s],
];

export class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			whats_hot: [
				<ProductCard imgname={guitar} />,
				<ProductCard imgname={guitar} />,
				<ProductCard imgname={guitar} />,
				<ProductCard imgname={guitar} />,
				<ProductCard imgname={guitar} />,
				<ProductCard imgname={guitar} />,
				<ProductCard imgname={guitar} />,
				<ProductCard imgname={guitar} />,
				<ProductCard imgname={guitar} />,
				<ProductCard imgname={guitar} />,
				<ProductCard imgname={guitar} />,
				<ProductCard imgname={guitar} />,
			],
			category: 0,
			sub: 0,
		};
		this.categorySelect = this.categorySelect.bind(this);
	}

	componentDidMount() {
		document.getElementById('sub0').style.opacity = '1';
	}

	subSelect(index) {
		for (var i = 0; i < sub[this.state.category].length; i++) {
			if (i === index)
				document.getElementById('sub' + index.toString()).style.opacity = '1';
			else document.getElementById('sub' + i.toString()).style.opacity = '0';
		}
		this.setState({
			sub: index,
		});
		console.log(index);
		console.log(this.state.sub);
	}

	categorySelect(index) {
		this.subSelect(0);
		this.setState((prevState) => {
			return {
				category: index,
				sub: 0,
			};
		});
	}

	render() {
		const SubCard = ({ index }) => (
			<Card
				className='subCard'
				onClick={() => {
					this.subSelect(index);
				}}>
				<Card.Content>
					<Image
						src={
							this.state.sub === index
								? selectedImg[this.state.category][index]
								: img[this.state.category][index]
						}
						wrapped
						ui={false}
					/>
					<p>{sub[this.state.category][index]}</p>
				</Card.Content>
			</Card>
		);

		return (
			<div className='category_overview'>
				<div className='staticContent fixed-top'>
					<div className='categorizeHead'>
						<div className='pagePath'>
							<p style={{ marginTop: '5px' }}>Home</p>
							<h3 style={{ paddingLeft: '10px', paddingRight: '10px' }}>
								{'>'}
							</h3>
							<p style={{ marginTop: '5px' }}>
								{categories[this.state.category]}
							</p>
							<h3 style={{ paddingLeft: '10px', paddingRight: '10px' }}>
								{'>'}
							</h3>
							<p style={{ marginTop: '5px' }}>
								{sub[this.state.category][this.state.sub]}
							</p>
						</div>
						<div className='categoriesBackground'>
							<div className='categories'>
								<button
									id='musicButton'
									className={
										this.state.category === 0
											? 'selectedButton'
											: 'categoryButton'
									}
									onClick={() => {
										this.categorySelect(0);
									}}>
									{categories[0].toUpperCase()}
								</button>
								<button
									id='gamingButton'
									className={
										this.state.category === 1
											? 'selectedButton'
											: 'categoryButton'
									}
									onClick={() => {
										this.categorySelect(1);
									}}>
									{categories[1].toUpperCase()}
								</button>
								<button
									id='laptopButton'
									className={
										this.state.category === 2
											? 'selectedButton'
											: 'categoryButton'
									}
									onClick={() => {
										this.categorySelect(2);
									}}>
									{categories[2].toUpperCase()}
								</button>
								<button
									id='photographyButton'
									className={
										this.state.category === 3
											? 'selectedButton'
											: 'categoryButton'
									}
									onClick={() => {
										this.categorySelect(3);
									}}>
									{categories[3].toUpperCase()}
								</button>
							</div>
						</div>
						<div className='subCategoriesBackground'>
							<div className='subCategories'>
								{sub[this.state.category].map((item, index) => {
									return (
										<div>
											<SubCard index={index} />
											<hr className='subLine' id={'sub' + index.toString()} />
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
				<div className='scrollContent'>
					<div className='product_overview'>
						<div className='category'>
							{this.state.whats_hot.map((item, index) => {
								return <div key={index}>{item}</div>;
							})}
						</div>
					</div>
					<div className='search_boy_with_input'>
						<div className='search_boy_header'>
							<h1>DIDN'T FIND WHAT YOU ARE LOOKING FOR ?</h1>
						</div>
						<div className='search_boy'>
							<img src={search_boy}></img>
						</div>
						<div className='search_boy_input'>
							<input placeholder='Drop your queries here'></input>
							<button id='category_last_but' className='selectedButton'>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Category;

// head.js
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { Grid, Header } from 'semantic-ui-react';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './head.css';
// import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import logo from '../images/logo.png';
import map from '../images/map.png';
import bag from '../images/bag.png';
import mumbai from '../images/Mumbai.png';
import pune from '../images/PuneC.png';
import mumbaig from '../images/Mumbaig.png';
import puneg from '../images/PuneCG.png';
import bar from '../images/icons/new icin-16.png';

import { ProductContext } from '../components/ProductContext';

export class Head extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addModalshow: false,
			mumbai: true,
			pune: false,
			drop: true,
			mumbai_image: mumbai,
			pune_image: puneg,
		};
		this.myRef = React.createRef();
	}
	onfocus = (e) => {
		this.setState({ drop: !this.state.drop });
	};
	onChangeMumbai = (e) => {
		this.setState({ mumbai: true });
		this.setState({ pune: false });
		this.setState({ pune_image: puneg });
		this.setState({ mumbai_image: mumbai });
		document.getElementById('city').click();

		console.log(this.state.mumbai);
	};
	onChangePune = (e) => {
		// this.setState({ m: this.state.mumbai, m: false });
		this.setState({ pune: true });
		this.setState({ mumbai: false });
		this.setState({ mumbai_image: mumbaig });
		this.setState({ pune_image: pune });
		document.getElementById('city').click();
		// e.target.close();

		// document.getElementsByClassName('pop').style.display = 'none';
	};
	render() {
		let addModalclose = () => {
			this.setState({ addModalshow: false });
		};
		return (
			<div class='container fixed-top'>
				<div className='main'>
					<div className='image'>
						<img src={logo}></img>
					</div>
					<div className='but' id='navmap'>
						<Popup
							className='pop'
							trigger={
								<button id='city'>
									<img src={map}></img> {this.state.mumbai ? 'Mumbai' : 'Pune'}{' '}
								</button>
							}
							flowing
							hoverable>
							<Grid className='popup_of_place' stretched divided rows={2}>
								<Grid.Row
									className='popup_of_place1'
									onClick={this.onChangeMumbai}
									textAlign='left'>
									<img
										className='imgage'
										src={this.state.mumbai_image}
										alt='hey'
									/>
									<div className='header'>Mumbai</div>
									{this.state.mumbai === true ? (
										<i class='fas fa-check' />
									) : null}
								</Grid.Row>
								<Grid.Row
									className='popup_of_place1'
									onClick={this.onChangePune}
									textAlign='left'>
									<img
										className='imgage'
										src={this.state.pune_image}
										alt='hey'
									/>
									<div className='header'>Pune</div>

									{this.state.pune === true ? <i class='fas fa-check' /> : null}
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
						<Link to='/category'>
							<button>
								<img src={bag}></img>Bag<span></span>
							</button>
						</Link>
					</div>
					<div className='but' id='sign'>
						<button onClick={() => this.setState({ addModalshow: true })}>
							Login/Sign Up
						</button>
						<Login show={this.state.addModalshow} onHide={addModalclose} />
					</div>
					<div className='bar'>
						{/* <i class="fas fa-bars"></i> */}
						<img src={bar} />
					</div>
				</div>
			</div>
		);
	}
}

export default Head;
