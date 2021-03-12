import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css'
import { Button, Card, Image } from "semantic-ui-react";

import rental_s from "../images/icons/rental_s.png";
import bag_s from "../images/bagb.png";
import bag_g from "../images/bag.png";
import listing_s from "../images/icons/listing_s.png";
import shareCredit_s from "../images/icons/shareCredit_s.png";
import verification_s from "../images/icons/verification_s.png";
import support_s from "../images/icons/support_s.png";
import settings_s from "../images/icons/settings_s.png";
import support_person from "../images/supportPerson.png";
import down_arrow from "../images/down_arrow.png";
import ques from "../images/ques.png";
import whatsAppSupport from "../images/whatsAppSupport.png";
import phone from "../images/phone.png";
import { DotsMobileStepper } from "./ListItem";
import dummyprofile from "../images/dummyprofile.jpg";
import rental_g from "../images/icons/rental_g.png";
import listing_g from "../images/icons/listing_g.png";
import shareCredit_g from "../images/icons/shareCredit_g.png";
import verification_g from "../images/icons/verification_g.png";
import support_g from "../images/icons/support_g.png";
import settings_g from "../images/icons/settings_g.png";

import pencil from "../images/icons/pencil_white.png";
import pencil_b from "../images/icons/pencil.png";
import guitar from "../images/guitar2.png";
import person from "../images/person.png";
import add from "../images/add.png";
import upload from "../images/upload.png";
import edit from "../images/edit.png";
import selectedPage from "../images/selectedPage.png";
import unSelectedPage from "../images/unselectedPage.png";
import camera from "../images/camera.png";
import uploadSelfie from "../images/uploadSelfie.png";
import radio_button from "../images/radio_button.png";



import LoginModal from './Login/LoginModal'
import AddressModal from './Address/AddressModal'

export default function Checkout ()
{
	const [ addModalshow, setaddModalshow ] = useState( false );
	const [addAddressModalshow, setaddAddressModalshow] = useState(false);


		 const [duration, setDuration] = React.useState("3 Day");

  const handleDuration = (event, newDuration) => {
    setDuration(newDuration);
	};
		let addModalclose = () => {
		setaddModalshow(false);
	};
				

	return (
		<div className='checkout row'>
			<div className='left col-9'>
  <div className="verificationList">
          <div className="listItem" onClick={() => setaddModalshow(true)}>
            <Image className="verified" src={verification_s} />
            <Image className="verifyImage" src={person} />
			<p className='verifyheader'>Account Login</p>
            {/* <div className="changeButton">
              <Image src={edit} />
              <p>Change</p>
      </div> */}
		</div>
		<LoginModal show={addModalshow} onHide={addModalclose} />

          <div className="listItem"   onClick={() => setaddAddressModalshow(true)}>
          <Image className="verified" src={verification_s} />
            <Image className="verifyImage" src={add} />
			<p className='verifyheader'>Select Delivery Address</p>
          </div>
				<AddressModal show={addAddressModalshow}  onHide={() => setaddAddressModalshow(false)}  />

          <div className="listItem">
          <Image className="verified" src={verification_g} />
            <Image className="verifyImage" src={verification_s} />
				<p className='verifyheader'>Verification</p>

          </div>
				</div>
			</div>
			<div className='right col-3'>
						


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
	)
}
