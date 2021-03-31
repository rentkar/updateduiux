import React, {Component, useState, useEffect } from 'react'
import {fetchProductDetail,  fetchProductBoxDetail, fetchProductPricingDetail, fetchProductImagesDetail, fetchProductSpecsDetail} from '../config'
import { useParams } from "react-router";
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
import {Carousel, Modal, Button} from 'react-bootstrap'
import ps5 from  '../images/ps5.jpg'
import l4 from "../images/icons2/icons/laptop/i7 grey.png";
import g1 from '../images/games/game1.jpg'
import g2 from '../images/games/game2.jpg'
import g3 from '../images/games/game3.jpg'
import g4 from '../images/games/game4.jpg'
import g5 from '../images/games/game5.jpg'
import g6 from '../images/games/game6.jpg'
import g7 from '../images/games/game7.jpg'

function AddGamesModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
		  centered
		  className='game__modal'
    >
      <Modal.Header closeButton>
        <Modal.Title className='title' id="contained-modal-title-vcenter">
				  <input className='game__inpt' placeholder='Search Your Free Game' type ='text'/>
        </Modal.Title>
      </Modal.Header>
		  <Modal.Body>
			  <div className='games row'>
			  <div className='game'>
					  <img src={ g1 } />
					  <p>Game</p>

			  </div>
			  <div className='game'>
					  <img src={ g2 } />
					  <p>Game</p>
			  </div>
			  <div className='game'>
					  <img src={ g3 } />
					  <p>Game</p>
			  </div>
			  <div className='game'>
					  <img src={ g4 } />
					  <p>Game</p>
			  </div>
			  <div className='game'>
					  <img src={ g5 } />
					  <p>Game</p>
			  </div>
			  <div className='game'>
					  <img src={ g6 } />
					  <p>Game</p>
			  </div>
			  <div className='game'>
					  <img src={ g7 } />
					  <p>Game</p>
				  </div>
				   <div className='game'>
					  <img src={ g1 } />
					  <p>Game</p>
				  </div>
				   <div className='game'>
					  <img src={ g2 } />
					  <p>Game</p>
				  </div>
				   <div className='game'>
					  <img src={ g7 } />
					  <p>Game</p>
				  </div>
				   <div className='game'>
					  <img src={ g1 } />
					  <p>Game</p>
			  </div>
			  <div className='game'>
				  <img src ={g2} />
				  <p>Game</p>
			  </div>
			  <div className='game'>
				  <img src ={g3} />
				  <p>Game</p>
			  </div>
			  <div className='game'>
					  <img src={ g4 } />
					  <p>Game</p>
			  </div>
			  <div className='game'>
				  <img src={ g5 } />
				  <p>Game</p>
			  </div>
			  <div className='game'>
					  <img src={ g6 } />
					  <p>Game</p>
			  </div>
			  <div className='game'>
					  <img src={ g7 } />
					  <p>Game</p>
				</div>
			  </div>
      </Modal.Body>
		  <Modal.Footer>
			  <div className='btn btn-outline-success submit'>Submit</div>
			</Modal.Footer>
    </Modal>
  );
}

export default function ProductPage (props)
{

	const [up, setup] =useState(true)
	const [ duration, setDuration ] = useState(0);
	const [ gameModalShow, setGameModalShow ] = useState( false );
	const [price, setPrice]  = useState(0);
	

 let {_id} = useParams()
	const [ pd, setpd ] = useState( [] )
	const [ pdb, setpdb ] = useState( [] )
	const [ pdp, setpdp ] = useState( [] )
	const [ pds, setpds ] = useState( [] )
	const [ pdi, setpdi ] = useState( [] )
	var [ startdate, setstartdate ] = useState(new Date())
	var[ enddate, setenddate] = useState(new Date())
	
	var sgst = ( ( price * 9 ) / 100 )
	var cgst = ( ( price * 9 ) / 100 )
	var total = price + sgst + cgst

	var i

	var val = 0
	var i
	var m, j, a, b, c
	var [ e, setE ] = useState()
	

	//calculator
	const list1 = []

	for ( i = 1; i < 367; i++ )
	{
		if ( i >= 180 )
		{
			val = Math.ceil( pd.price * 0.000031 * i ) * 100
		}
		else if ( i >= 90 )
		{
			val = Math.ceil( pd.price * 0.0000365 * i ) * 100
		}
		else if ( i >= 60 )
		{
			val = Math.ceil( pd.price * 0.000043 * i ) * 100
		}
		else if	( i >= 30 )
		{
			val = Math.ceil( pd.price * 0.000046 * i ) * 100
			
		}
		else if ( i > 15 )
		{
			j = i - 14
			for ( a = 1; a <= j; a++ )
			{
				val = c + (pd.price * a * 0.003)
			//	val = m
			}
		
		}
		else if ( i === 14 )
		{
			val = Math.ceil( pd.price * 0.000065 * i ) * 100
			c = val
			}
		else if ( i > 7 )
		{
			j = i - 7
			for ( a = 1; a <= j; a++ )
			{
				val = b + (pd.price * a * 0.004)
			//	val = m
			}
		}
		else if ( i === 7 )
		{
			val = Math.ceil( pd.price * 0.00009 * i ) * 100
			b = val
			
		}
		 else if ( i > 3 )
		{

			j = i - 3
			for ( a = 1; a <= j; a++ )
			{
				val = m + (pd.price * a * 0.0090)
			//	val = m
			}

		}
		else if ( i === 3 )
		{
			val = Math.ceil( pd.price * 0.000167 * ( 2 ) + ( 0.00002 * pd.price ) ) * 100
			m =val
		}
		else if ( i === 2 )
		{
			val = ( pd.price * 0.0167 * i )
		}
		else if ( i === 1 )
		{
			val = (pd.price * 0.02 * i )
		}
	
		
		list1.push( <span>{ val }</span> )
	}
	//

   useEffect(() => {
    const fetchAPI = async () => {
      setpd( await fetchProductDetail( _id ) )
      setpdb( await fetchProductBoxDetail( _id ) )
      setpdp( await fetchProductPricingDetail( _id ) )
      setpds( await fetchProductSpecsDetail( _id ) )
      setpdi(await fetchProductImagesDetail(_id))
    };
     fetchAPI();
   }, [ _id ] );


  const handlePrice = (event, newPrice) => {
	  setPrice( newPrice )
  };
	

	const toggle=() => {
	setup(!up)
	}

	const onDateChange = ( event, startDate, endDate ) =>
	{
		setstartdate(startDate)
		setenddate(endDate)

	}

	function changePreview(id) {
		var source = document.getElementById(id).getAttribute('src');
		document.getElementById('previewImage1').setAttribute('src', source);
	}
	
		return (
			<div className='productPage row'>		
				<div className='left col-lg-9 col--12 order-md-1'>

					<div className='product__page__carousel'>
						<Carousel>
						{pdi.slice(1,5).map( ( item ) => {
								return(
									<Carousel.Item>
							<img
							className="d-block w-100"
							src={`http://localhost:5000${item.image}`} alt={`image${item}`}
							alt="First slide"
							/>
										</Carousel.Item>
								)
							})}
						</Carousel>
					</div>
					<div className='whats__included'>
						<h2>What's Included</h2>
						
						<div className='cards'>
							{
							pdb.map( ( item, i ) =>
						{
							return(
							<Card className="includedCard">
								<Card.Content
									>
										<img src={`http://localhost:5000${item.image}`} alt={`image${i}`} />
										<p>{ item.content }</p>
									</Card.Content>
								</Card>
							
							)
						} )
						}
							</div>
					</div>
					<div className='whats__included'>
						<h2>Specifications</h2>
						<div className='cards'>
						{
							pds.map( ( item, i ) =>
						{
							return(
							<Card className="includedCard">
								<Card.Content
									>
												<img src={`http://localhost:5000${item.stype}`} alt={`image${i}`} />
												<p>{ item.spec }</p>
									</Card.Content>
								</Card>
							
							)
						} )
						}
							</div>
					</div>
					 <div className='description'>
						<h2>Description</h2>
						<p>{pd.description}</p>
					</div>
					{/*	<div className='product__card__section'>
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
					*/}
					<div className='recommendations'>
						<h2>Recommended Products</h2>
						<div className='product__carousel'>
							<ProductCarousel2 />
							</div>
					</div>
				</div>

				<div className={ up ? 'right col-lg-3 col-md-12 order-md-2' : 'right col-lg-3 col-md-12 order-md-2 right_up'}>
					<div className='btn  up'  onClick={toggle} 
					><i className={ up ? 'fas fa-chevron-up' : 'fas fa-chevron-down'} /></div>
						<div className='product__name'>
						<h2>{ pd.productname }</h2>
						<h2>{ pd.price }</h2>
							
							<p style={{ marginTop: '25px', marginRight: '50px' }}><i
								className='fas fa-star-half-alt'
								style={{
									color: '#FFC502',
									
								}}/>4.5</p>
						</div>
						<h3 style={{ textAlign: 'left' }}>Select Your Package</h3>
					                                                                                                                                                                        
					<ToggleButtonGroup className='durationPrice' value={ price } exclusive onChange={ handlePrice }>
						{/*	{ pdp.map( ( item, i ) =>
							{
							return (
								<ToggleButton
									className="durationButton col-5"
									value={ item.price }
								>
								<div>
								<p className='duration'>{item.duration}</p>
								<p className='price'>Rs {item.price}/Day</p>
								</div>
								</ToggleButton>
								)
						} ) } */}
						<ToggleButton
									className="durationButton col-5"
									value={ list1[ 0 ] }
								>
								<div><p className='duration'>1 Day</p>
								<p className='price'>Rs { list1[ 0 ] }/Day</p>
								
								</div>
						</ToggleButton>
						<ToggleButton
									className="durationButton col-5"
									value={ list1[ 2 ] }
								>
								<div><p className='duration'>3 Days</p>
								<p className='price'>Rs { list1[ 2 ] }/Day</p>
								</div>
						</ToggleButton>
						<ToggleButton
									className="durationButton col-5"
									value={ list1[ 6 ] }
								>
								<div><p className='duration'>1 Week</p>
								 <p className='price'>Rs { list1[ 6 ] }/Day</p>
								</div>
								</ToggleButton> 
								<ToggleButton
									className="durationButton col-5"
									value={ list1[ 29 ] }
								>
								<div><p className='duration'>1 Month</p>
							 <p className='price'>Rs { list1[ 29 ] }/Day</p>
								</div>
						</ToggleButton>
						<ToggleButton
									className="durationButton col-5"
									value={ list1[ 79 ] }
								>
								<div><p className='duration'>3 Months</p>
							<p className='price'>Rs { list1[ 79 ] }/Day</p>
								</div>
						</ToggleButton>
						<ToggleButton
									className="durationButton col-5"
									value={ list1[ 179 ] }
								>
								<div><p className='duration'>6 Months</p>
								<p className='price'>Rs { list1[ 179 ] }/Day</p>
								</div>
						</ToggleButton>				
						</ToggleButtonGroup>		
						


						<div className='select__games'>
						<h3 style={ { textAlign: 'left', margin: '20px' } }>Select your 2 free games</h3>
						<div className='select__free__games'>
							<div className='btn btn-outline-dark games'  onClick={() => setGameModalShow(true)} ><img src={add} /></div>
							<div className='btn btn-outline-dark games' onClick={() => setGameModalShow(true)} ><img src={ add } /></div>
							 <AddGamesModal
								show={gameModalShow}
								onHide={() => setGameModalShow(false)}
      />
						</div>

						
						</div>
						<div className='select__package'>
						<h3 style={ { textAlign: 'left', margin: '20px' } }>Add Ons</h3>
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
							startDate={ new Date() }
							endDate={ new Date() }
							minDate={new Date(2020, 1 , 1)}
							maxDate={ new Date( 2220, 1, 1 ) }
							//onChange={ ( startDate) => { setstartdate( startDate ) } }
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
							<p>{pd.productname}</p>
							<div className='btn btn-outline-dark'>+ Rs {price}</div>
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
										Rs {sgst}
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
									Rs {cgst}
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
								Total : Rs {total}
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