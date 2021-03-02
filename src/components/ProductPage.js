import React, {useState, useEffect} from 'react';
import hygienic from '../images/covid sefty web-04.png';
import sanitise from '../images/covid sefty web-03.png';
import imgcovid from '../images/covid.png';
import './ProductPage.css';
import battlefield from '../images/battlefield.png';
import { Card, Image } from 'semantic-ui-react';
import controller from '../images/controller.png';
import ProductCarousel from './ProductCarousel';
import console from '../images/Console.png';
import fifa from '../images/FIFA.png';
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import 'react-google-flight-datepicker/dist/main.css';
import { RangeDatePicker } from 'react-google-flight-datepicker'
import { Link } from 'react-router-dom';

export default function ProductPage ()
{
	/* constructor(props) {
		super(props);
		this.state = {
			condition: false
		};
		
	this.handleClick = this.handleClick.bind(this)
	}

	


	handleClick() {
		this.setState({
			condition: !this.state.condition
		})
	}

*/
	function changePreview(id) {
		var source = document.getElementById(id).getAttribute('src');
		document.getElementById('previewImage1').setAttribute('src', source);
	}
	

		const [duration, setDuration] = useState("1 Day");

  		const handleDuration = (event, newDuration) => {
    	setDuration(newDuration);
  };
		const durations = ['1 Day', '1 Week', '2 Weeks', '1 Month', '3 Months', '6 Months']
		//const [duration, setduration] = useState(props.index ? props.index : 0)
	/*	let durationBtn = this.state.durationB
			? 'durationButton'
			: 'selectedDuration'; */
		return (
			<div className='productPage'>
				<div className='productDesc'>
					<div className='left'>
						<div className='productImages'>
							<div className='ImageList'>
								<button
									className='productImage'
									onClick={() => {
										this.changePreview('image1');
									}}>
									<img id='image1' src={console} />
								</button>
								<button
									className='productImage'
									onClick={() => {
										this.changePreview('image2');
									}}>
									<img id='image2' src={console} />
								</button>
								<button className='productImage'>
									<div
										style={{
											backgroundColor: '#000',
											position: 'relative',
											textAlign: 'center',
											color: 'white',
										}}>
										<img src={console} style={{ opacity: '0.4' }} />
										<div
											style={{
												position: 'absolute',
												top: '50%',
												left: '50%',
												transform: 'translate(-50%, -50%)',
												fontSize: '20px',
												fontWeight: 'bold',
											}}>
											+2 more
										</div>
									</div>
								</button>
							</div>
							<div
								className='previews'
								style={{ display: 'flex', flexDirection: 'row' }}>
								<img
									id='previewImage1'
									className='previewImage'
									src={console}
								/>
								<img id='previewImage2' className='previewImage' src={fifa} />
							</div>
						</div>
						<h2>Sony Play Station 4</h2>
						<h3>(FIFA 20 and 1 Controller included)</h3>
						<div className='covid'>
							<div>
								<img src={imgcovid} />
							</div>
							<div className='covid_text'>
								<h4>Safety precaution during COVID-19</h4>
								<button id='button_knowmore'>Know more</button>
							</div>
							<div className='card'>
								<div className='card1'>
									<img src={sanitise} />
									<div>
										<h5>Sanitised Products</h5>
										<h7 id='alag'>
											Know more <i class='fas fa-chevron-circle-right'></i>
										</h7>
									</div>
								</div>
								<div className='card2'>
									<img src={hygienic} />
									<div>
										<h5>Hygienic deliveries</h5>
										<h7 id='alag'>
											Know more <i class='fas fa-chevron-circle-right'></i>
										</h7>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='right'>
						<div style={{ display: 'flex', flexDirection: 'row' }}>
							<h2>Sony Play Station 4</h2>
							<i
								className='fas fa-star-half-alt'
								style={{
									color: '#FFC502',
									marginTop: '30px',
									marginRight: '20px',
								}}></i>
							<p style={{ marginTop: '25px', marginRight: '20px' }}>4.5</p>
						</div>
						<h3 style={{ textAlign: 'left' }}>Select your package</h3>
					                                                                                                                                                                        
						<ToggleButtonGroup className='durationPrice' value={duration} exclusive onChange={handleDuration}>
								<ToggleButton
									className="durationButton"
									value="1 Day"
								>
									<div>
								<p className='duration'>1 Day</p>
								<p className='price'>Rs XXX/Day</p>
								</div>
								</ToggleButton>
								<ToggleButton
									className="durationButton"
									value="1 Week"
							>
								<div>
								<p className='duration'>1 Week</p>
								<p className='price'>Rs XXX/Day</p>
								</div>
								</ToggleButton>
								<ToggleButton
									className="durationButton"
									value="2 Weeks"
								>
								<div>
								<p className='duration'>2 Weeks</p>
								<p className='price'>Rs XXX/Day</p>
								</div>
								</ToggleButton>
								<ToggleButton
									className="durationButton"
									value="1 Month"
								>
								<div>
								<p className='duration'>1 Month</p>
								<p className='price'>Rs XXX/Day</p>
								</div>
								</ToggleButton>
							<ToggleButton
									className="durationButton"
									value="3 Months"
								>
								<div>
								<p className='duration'>3 Months</p>
								<p className='price'>Rs XXX/Day</p>
								</div>
								</ToggleButton>
							<ToggleButton
									className="durationButton"
									value="6 Months"
								>
								<div>
								<p className='duration'>6 Months</p>
								<p className='price'>Rs XXX/Day</p>
								</div>
								</ToggleButton>
								</ToggleButtonGroup>
						
						
						
						    
							
						


						<div className='select__package'>
							<h3 style={ { textAlign: 'left', margin: '20px' } }>Select your package</h3>
							<div className='btn btn-outline-dark col-10 free__game'><p>Select Free GAME 1</p></div>
							<div className='btn btn-outline-dark col-10  free__game' style={{ marginTop: '20px' }}><p>Select Free GAME 2</p></div>

					
							<h3 style={ { textAlign: 'left', margin: '20px' } }>Select your package</h3>
							<div className='btn btn-outline-dark col-3 packages'></div>
							<div className='btn btn-outline-dark col-3 packages'></div>
							<div className='btn btn-outline-dark col-3  packages'></div>

						</div>

						<div className='dateSlot col-12' style={ { marginTop: '50px' } }>
							<h3 style={{ textAlign: 'left' }}>
							Enter delivery and pickup dates
						</h3>
							<RangeDatePicker
							startDate={new Date()}
							endDate={new Date()}
							//onChange={(startDate, endDate) => onDateChange(startDate, endDate)}
							minDate={new Date(1900, 0, 1)}
							maxDate={new Date(2220, 0, 1)}
							//dateFormat="D"
							monthFormat="MMM YYYY"
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
								<button>+ Rs XXX</button>
							</div>
							<div className='product'>
								<p>Games</p>
								<button
									style={{
										marginLeft: 'auto',
										marginRight: '0px',
									}}>
									2 X
								</button>
								<button>+ Rs XXX</button>
							</div>
							<div className='product'>
								<p>Controller</p>
								<button style={{ marginLeft: 'auto', marginRight: '0px' }}>
									3 X
								</button>
								<button>+ Rs XXX</button>
							</div>
							<div className='product'>
								<p>Coupon</p>
								<button>+ Rs XXX</button>
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
							<div className='sgst'>
							<p
							style={{
									textAlign: 'left',
									margin: '5px 20px',
									fontSize: '12px',
								} }>
									** SGST (9%)
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
									** CGST (9%)
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
							<div className='placeOrder'>
								<div className='couponStatus'>
									<p>Coupon Applied</p>
								</div>
								<button><Link to='/checkout'>Place Order</Link></button>
							</div>
						</div>
					</div>
				</div>

				<div className='Products'>
					<h2>Add more games</h2>
					<div className='productList'>
						<Card className='subCard' onClick={() => {}}>
							<Card.Content>
								<Image src={battlefield} wrapped ui={false} />
								<p>{'Battle field V'}</p>
							</Card.Content>
						</Card>
						<Card className='subCard' onClick={() => {}}>
							<Card.Content>
								<Image src={battlefield} wrapped ui={false} />
								<p>{'Battle field V'}</p>
							</Card.Content>
						</Card>
						<Card className='subCard' onClick={() => {}}>
							<Card.Content>
								<Image src={battlefield} wrapped ui={false} />
								<p>{'Battle field V'}</p>
							</Card.Content>
						</Card>
						<Card className='subCard' onClick={() => {}}>
							<Card.Content>
								<Image src={battlefield} wrapped ui={false} />
								<p>{'Battle field V'}</p>
							</Card.Content>
						</Card>
						<Card className='subCard' onClick={() => {}}>
							<Card.Content>
								<Image src={battlefield} wrapped ui={false} />
								<p>{'Battle field V'}</p>
							</Card.Content>
						</Card>
					</div>
					<div className='search'>
						<input
							className='searchInput'
							placeholder='Search for more games'></input>
						<a>
							<i class='fas fa-search'></i>
						</a>
						{/* <i class="fas fa-search"></i> */}
					</div>
				</div>
				<div className='Products'>
					<h2>Add controllers</h2>
					<div className='productList'>
						<Card className='subCard' onClick={() => {}}>
							<Card.Content>
								<Image
									style={{ margin: '20px 0px 20px 0px' }}
									src={controller}
									wrapped
									ui={false}
								/>
								<p>{'1 Controller'}</p>
							</Card.Content>
						</Card>
						<Card className='subCard' onClick={() => {}}>
							<Card.Content>
								<Image
									style={{ margin: '20px 0px 20px 0px' }}
									src={controller}
									wrapped
									ui={false}
								/>
								<p>{'2 controllers'}</p>
							</Card.Content>
						</Card>
						<Card className='subCard' onClick={() => {}}>
							<Card.Content>
								<Image
									style={{ margin: '20px 0px 20px 0px' }}
									src={controller}
									wrapped
									ui={false}
								/>
								<p>{'3 controllers'}</p>
							</Card.Content>
						</Card>
						<Card className='subCard' onClick={() => {}}>
							<Card.Content>
								<Image
									style={{ margin: '20px 0px 20px 0px' }}
									src={controller}
									wrapped
									ui={false}
								/>
								<p>{'4 controllers'}</p>
							</Card.Content>
						</Card>
					</div>
				</div>
				<div className='Products'>
					<h2>What's in the box</h2>
					<div
						className='productList'
						style={{ maxWidth: '800px', flexWrap: 'wrap' }}>
						<Card className='subCard' onClick={() => {}}>
							<Card.Content>
								<Image
									style={{ margin: '20px 0px 20px 0px', minWidth: '200px' }}
									src={controller}
									wrapped
									ui={false}
								/>
								<p>{'PS4 Console'}</p>
							</Card.Content>
						</Card>
						<Card className='subCard' onClick={() => {}}>
							<Card.Content>
								<Image
									style={{ margin: '20px 0px 20px 0px', minWidth: '200px' }}
									src={controller}
									wrapped
									ui={false}
								/>
								<p>{'controller * 1'}</p>
							</Card.Content>
						</Card>
						<Card className='subCard' onClick={() => {}}>
							<Card.Content>
								<Image
									style={{ margin: '20px 0px 20px 0px', minWidth: '200px' }}
									src={controller}
									wrapped
									ui={false}
								/>
								<p>{'FIFA 20'}</p>
							</Card.Content>
						</Card>
						<Card className='subCard' onClick={() => {}}>
							<Card.Content>
								<Image
									style={{ margin: '20px 0px 20px 0px', minWidth: '200px' }}
									src={controller}
									wrapped
									ui={false}
								/>
								<p>{'USB Cable'}</p>
							</Card.Content>
						</Card>
						<Card className='subCard' onClick={() => {}}>
							<Card.Content>
								<Image
									style={{ margin: '20px 0px 20px 0px', minWidth: '200px' }}
									src={controller}
									wrapped
									ui={false}
								/>
								<p>{'HDMI Cable'}</p>
							</Card.Content>
						</Card>
						<Card className='subCard' onClick={() => {}}>
							<Card.Content>
								<Image
									style={{ margin: '20px 0px 20px 0px', minWidth: '200px' }}
									src={controller}
									wrapped
									ui={false}
								/>
								<p>{'Power Cable'}</p>
							</Card.Content>
						</Card>
					</div>
				</div>
				<div
					className='DescriptionCard'
					style={{ margin: 'auto', marginLeft: '40px' }}>
					<Card className='subCard'>
						<Card.Content>
							<h2 style={{ marginBottom: '10px' }}>Description</h2>
							<p>
								Sony PlayStation 4 with controller(s). 500 GB console, Dual
								Shock controller.
							</p>
							<br></br>
							<br></br>
							<br></br>
							<h2 style={{ marginBottom: '10px' }}>Specifications</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in.
							</p>
						</Card.Content>
					</Card>
				</div>
				<div
					className='shareProgram'
					style={{ margin: 'auto', marginLeft: '40px', textAlign: 'start' }}>
					<h2 style={{ marginTop: '40px' }}>Frequent Sharing Program</h2>
					<p>Earn from the products shared securely around the city.</p>
					<br></br>
					<p>
						Also get 100 INR Share Credit on listing each item and 250 INR Share
						Credit on getting your friend on board to list their items.
					</p>
					<button className='earningButton'>Start Earning</button>
				</div>
				<hr></hr>
				<div className='Reviews' style={{ alignSelf: 'left' }}>
					<h2>Customer Reviews</h2>
					<div
						className='reviewStars'
						style={{
							alignSelf: 'left',
							display: 'flex',
							flexDirection: 'row',
						}}>
						<i className='fas fa-star' style={{ color: '#FFC502' }}></i>
						<i className='fas fa-star' style={{ color: '#FFC502' }}></i>
						<i className='fas fa-star' style={{ color: '#FFC502' }}></i>
						<i className='fas fa-star' style={{ color: '#FFC502' }}></i>
						<i
							className='fas fa-star-half-alt'
							style={{ color: '#FFC502' }}></i>
						<p style={{ marginLeft: '20px' }}>{'4.5 out of 5'}</p>
					</div>
					<div className='CustomerReviews'>
						<Card className='ReviewCard'>
							<Card.Content></Card.Content>
						</Card>
						<Card className='ReviewCard'>
							<Card.Content></Card.Content>
						</Card>
						<Card className='ReviewCard'>
							<Card.Content></Card.Content>
						</Card>
						<Card className='ReviewCard'>
							<Card.Content></Card.Content>
						</Card>
					</div>
				</div>
				<div className='Recommendations'>
					<h2>Recommended Products</h2>
					<div className='productCarousel' style={{ overflow: 'hidden' }}>
						<ProductCarousel />
					</div>
				</div>
			</div>
		);
	}
/*

class ButtonChild extends React.Component {
	render() {
	  return (
		<div
		  className={ this.props.className }
		  onClick={ this.props.toggleClassName }
		>
		  { this.props.children }
		</div>
	  )    
	}
  }


  	<ButtonChild
									className={this.state.condition ? 'selectedDuration' : 'durationButton'}
								toggleClassName={ this.handleClick} >
								<div style={{ textAlign: 'left' }}>
									<p style={{ color: '#585858' }}>{durations[0]}</p>
									<p style={{ fontWeight: 'bold' }}>Rs XXX/ day</p>
								</div>
							</ButtonChild>
							<ButtonChild
								className={this.state.condition ? 'selectedDuration' : 'durationButton'}
				
								toggleClassName={ this.handleClick} >
								<div style={{ textAlign: 'left' }}>
									<p style={{ color: '#585858' }}>{durations[1]}</p>
									<p style={{ fontWeight: 'bold' }}>Rs XXX/ day</p>
								</div>
							</ButtonChild>
							<ButtonChild
							className={this.state.condition ? 'selectedDuration' : 'durationButton'}
						
							toggleClassName={ this.handleClick} >
								<div style={{ textAlign: 'left' }}>
									<p style={{ color: '#585858' }}>{durations[2]}</p>
									<p style={{ fontWeight: 'bold' }}>Rs XXX/ day</p>
								</div>
							</ButtonChild>
							<ButtonChild
							className={this.state.condition ? 'selectedDuration' : 'durationButton'}
							toggleClassName={ this.handleClick} >
								<div style={{ textAlign: 'left' }}>
									<p style={{ color: '#585858' }}>{durations[3]}</p>
									<p style={{ fontWeight: 'bold' }}>Rs XXX/ day</p>
								</div>
							</ButtonChild> 
  */