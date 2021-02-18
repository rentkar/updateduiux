import React from 'react'
import './ShippingPolicy.css'

export default function ShippingPolicy() {
	return (
		<div className='sp'>
			<div className='sp__top'>
				<img src='../images/end2inv.png' alt='end' />
			</div>
			<h1>SHIPPING POLICY</h1>
			<div className='sp__body'>
				<p>On confirmation of the order by the Customer, Rentkar shall deliver the Products to the location specified by the Customer. The cost of the delivery shall be borne by Customer. The Customer shall be present at the location at the time of delivery agreed between Rentkar and the Customer.   
				</p>
				<p>In case the Customer is unavailable at the time of delivery the he shall appoint a representative (given an authorization letter) for taking delivery of the Products and the same shall be communicated to Rentkar prior to the delivery. The representative shall provide a copy of his/her ID proof and authorization letter from the Customer to the delivery personnel assigned by Rentkar.  </p>
				<p>In case the Customer is not present or has not assigned a representative for taking delivery, at the location and a second delivery attempt is required, Rentkar shall charge an extra delivery cost to the Customer.</p>
				<p>Once accepted by the Customer or his/her representative at the time of delivery, items will not be replaced before completion of the tenure. Items on website might sometimes differ from the actual product delivered. Unless there is a major deviation which renders the product completely useless, no such requests of refund shall be entertained.  </p>
				<p>Please note that the Customer should ensure the entry of delivery vehicle inside the premises. Additionally, Customer has to arrange for the permission to use the elevator.  </p>
				<p>It’s the Customers responsibility to ensure your belongings are taken care of during the delivery and installation of items. This is to safeguard the interests of you and the delivery team, so as to no miscommunication occurring at a later point.     </p>
			</div>
			<p>
				To download a copy of the terms of use please{' '}
				<a href='doc/shippingpolicy.pdf' download>
						CLICK HERE
				</a>
			</p>
			<div>
				<div className='sp__end'>
					<img src='../images/end2.png' alt='end' />
				</div>
			</div>
		</div>
			)
		}
