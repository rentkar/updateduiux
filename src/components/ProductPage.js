import React, {useState, useEffect} from 'react';
import hygienic from '../images/covid sefty web-04.png';
import sanitise from '../images/covid sefty web-03.png';
import imgcovid from '../images/covid.png';
import './ProductPage.css';
import battlefield from '../images/battlefield.png';
import { Card, Image } from 'semantic-ui-react';
import controller from '../images/controller.png';
import console from '../images/Console.png';
import fifa from '../images/FIFA.png';
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import 'react-google-flight-datepicker/dist/main.css';
import { RangeDatePicker } from 'react-google-flight-datepicker'
import { Link } from 'react-router-dom';
import ProductCard3 from './ProductCard3'
import ProductCarousel2 from "./ProductCarousel2";
import './body.css'
import add from "../images/add.png";


export default function ProductPage ()
{


	 const [duration, setDuration] = React.useState("3 Day");

  const handleDuration = (event, newDuration) => {
    setDuration(newDuration);
  };
				

	function changePreview(id) {
		var source = document.getElementById(id).getAttribute('src');
		document.getElementById('previewImage1').setAttribute('src', source);
	}
	
		return (
			<div className='productPage row'>
				
				
				
				<div className='left col-9'>
					<div className='product__card__section'>
						<div className='product__front__card'>
								<ProductCard3 />
						</div>
						<div className='product__back__card'>
									<div className="product__card">
										<div className="card" >
									<div className='flipside'>
										<p><b>Book the most powerful console!</b></p>
									</div>
								</div>
						</div>
						</div>
					</div>
				 	<div className='box'>
						 <div className='description'>
						<h2>DESCRIPTION</h2>
						<p>Sony Playstation 4 with controller(s). 500 GB console, Dual Shock Controller</p>
					</div>

					<div className='specifications'>
						<h2>SPECIFICATIONS</h2>
						<p>Sony Playstation 4 with controller(s). 500 GB console, Dual Shock Controller</p>
					</div>
					</div>
					<div className='recommendations'>
						<h2>Recommended Products</h2>
						<ProductCarousel2 />
					</div>
				</div>






					<div className='right col-3'>
						<div className='product__name'>
							<h2>Sony Play Station 4</h2>
							
							<p style={{ marginTop: '25px', marginRight: '50px' }}><i
								className='fas fa-star-half-alt'
								style={{
									color: '#FFC502',
									
								}}/>4.5</p>
						</div>
						<h3 style={{ textAlign: 'left' }}>Select your package</h3>
					                                                                                                                                                                        
						<ToggleButtonGroup className='durationPrice' value={duration} exclusive onChange={handleDuration}>
								<ToggleButton
									className="durationButton col-5"
									value="1 Day"
								>
								<div>
								<p className='duration'>1 Day</p>
								<p className='price'>Rs XXX/Day</p>
								</div>
								</ToggleButton>
								<ToggleButton
									className="durationButton col-5"
									value="1 Week"
							>
								<div>
								<p className='duration'>1 Week</p>
								<p className='price'>Rs XXX/Day</p>
								</div>
								</ToggleButton>
								<ToggleButton
									className="durationButton col-5"
									value="2 Weeks"
								>
								<div>
								<p className='duration'>2 Weeks</p>
								<p className='price'>Rs XXX/Day</p>
								</div>
								</ToggleButton>
								<ToggleButton
									className="durationButton col-5"
									value="1 Month"
								>
								<div>
								<p className='duration'>1 Month</p>
								<p className='price'>Rs XXX/Day</p>
								</div>
								</ToggleButton>
							<ToggleButton
									className="durationButton col-5"
									value="3 Months"
								>
								<div>
								<p className='duration'>3 Months</p>
								<p className='price'>Rs XXX/Day</p>
								</div>
								</ToggleButton>
							<ToggleButton
									className="durationButton col-5"
									value="6 Months"
								>
								<div>
								<p className='duration col-12'>6 Months</p>
								<p className='price'>Rs XXX/Day</p>
								</div>
								</ToggleButton>
								</ToggleButtonGroup>		
						


						<div className='select__games'>
						<h3 style={ { textAlign: 'left', margin: '20px' } }>Select your 2 free games</h3>
						<div className='select__free__games'>
							<div className='btn btn-outline-dark games' ><img src={add} /></div>
							<div className='btn btn-outline-dark games'><img src={add} /></div>
						</div>

						
						</div>
						<div className='select__package'>
						<h3 style={ { textAlign: 'left', margin: '20px' } }>Select your package</h3>
						<div className='select__your__package'>
							<div className='btn btn-outline-dark col-3 packages'></div>
							<div className='btn btn-outline-dark col-3 packages'></div>
							<div className='btn btn-outline-dark col-3 packages'></div>
						</div>			
						</div>

						<div className='dateSlot' style={ { marginTop: '50px' } }>
							<h3 style={{ textAlign: 'left' }}>
							Enter delivery and pickup dates
						</h3>
							<RangeDatePicker
							minDate={new Date(1900, 0, 1)}
							maxDate={new Date(2220, 0, 1)}
							dateFormat="D-MM-YYYY"
							startDatePlaceholder="Delivery Date"
							endDatePlaceholder="PickUp Date"
							disabled={false}
							className="datepicker col-3"
							startWeekDay="monday"
							/>
						</div>


						<div className='summary' style={ { marginTop: '50px' } } >
							<h3 style={{textAlign: 'left'}}>Product Summary</h3>
							<div className='product'>
							<p>PS4 + Controller</p>
								<div className='btn btn-outline-dark'>+ Rs XXX</div>
							</div>
							<div className='product'>
							<p >Games</p>
								<div className='btn btn-outline-dark'>2X</div>
								<div className='btn btn-outline-dark'>+ Rs XXX</div>
							</div>
							<div className='product'>
								<p>Controller</p>
								<div className='btn btn-outline-dark'>3X</div>
								<div className='btn btn-outline-dark'>+ Rs XXX</div>
							</div>
							<div className='product'>
								<p>Coupon</p>
								<div className='btn btn-outline-dark'>+ Rs XXX</div>
						</div>
						<div className='sgst'>
							<p
							style={{
									textAlign: 'left',
									margin: '5px 20px',
									fontSize: '12px',
								} }>
								SGST (9%)
								</p>
								<b>
								<p
								style={{
									textAlign: 'right',
									margin: '5px 20px',
									fontSize: '12px',
									} }>
										Rs 300
									</p>
								</b>
							</div>
							<div className='cgst'>
							<p
							style={{
									textAlign: 'left',
									margin: '5px 20px',
									fontSize: '12px',
								} }>
								CGST (9%)
								</p>
								<b>
								<p
								style={{
									textAlign: 'right',
									margin: '5px 20px',
									fontSize: '12px',
									} }>
									Rs 300
								</p>
								</b>
							</div>
							<h2
								style={{
									color: '#28A5E5',
									textAlign: 'left',
									fontWeight: '600',
									marginBottom: '0px',
								}}>
								Total : Rs XXX
							</h2>
							
							<p
								style={{
									textAlign: 'left',
									margin: '5px 20px',
									fontSize: '12px',
								}}>
								Inclusive of all taxes | Tax breakdown
							</p>
							
							<div className='placeOrder'>
								<div className='couponStatus col-5'>
									<p>Coupon Applied</p>
								</div>
								<button className='col-5'><Link to='/checkout'>Place Order</Link></button>
						</div>
						
						</div>
					</div>
				</div>
		);
	}